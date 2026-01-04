import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import "./ImageTrail.css";

/* -------------------------------- Utilities -------------------------------- */

function lerp(a: number, b: number, n: number): number {
  return (1 - n) * a + n * b;
}

function getLocalPointerPos(
  e: MouseEvent | TouchEvent,
  rect: DOMRect
): { x: number; y: number } {
  let clientX = 0;
  let clientY = 0;

  if ("touches" in e && e.touches.length > 0) {
    clientX = e.touches[0].clientX;
    clientY = e.touches[0].clientY;
  } else if ("clientX" in e) {
    clientX = e.clientX;
    clientY = e.clientY;
  }

  return {
    x: clientX - rect.left,
    y: clientY - rect.top,
  };
}

function isInsideRect(e: MouseEvent | TouchEvent, rect: DOMRect): boolean {
  let x = 0;
  let y = 0;

  if ("touches" in e && e.touches.length > 0) {
    x = e.touches[0].clientX;
    y = e.touches[0].clientY;
  } else if ("clientX" in e) {
    x = e.clientX;
    y = e.clientY;
  }

  return x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom;
}

function getMouseDistance(
  p1: { x: number; y: number },
  p2: { x: number; y: number }
): number {
  return Math.hypot(p1.x - p2.x, p1.y - p2.y);
}

/* -------------------------------- Image Item -------------------------------- */

interface ImageItemDOM {
  el: HTMLElement | null;
  inner: HTMLElement | null;
}

class ImageItem {
  DOM: ImageItemDOM = { el: null, inner: null };
  rect: DOMRect | null = null;
  resizeHandler: (() => void) | null = null;

  constructor(el: HTMLElement) {
    this.DOM.el = el;
    this.DOM.inner = el.querySelector(".content__img-inner");
    this.getRect();
    this.initEvents();
  }

  getRect(): void {
    if (this.DOM.el) {
      this.rect = this.DOM.el.getBoundingClientRect();
    }
  }

  initEvents(): void {
    this.resizeHandler = () => this.getRect();
    window.addEventListener("resize", this.resizeHandler);
  }

  destroy(): void {
    if (this.resizeHandler) {
      window.removeEventListener("resize", this.resizeHandler);
    }
  }
}

/* ----------------------------- Image Trail Variant ---------------------------- */

interface ImageTrailVariant {
  destroy(): void;
}

class ImageTrailVariant1 implements ImageTrailVariant {
  container: HTMLElement;
  images: ImageItem[];
  imagesTotal: number;

  imgPosition = 0;
  zIndexVal = 1;
  activeImagesCount = 0;
  threshold = 80;

  mousePos = { x: 0, y: 0 };
  lastMousePos = { x: 0, y: 0 };
  cacheMousePos = { x: 0, y: 0 };

  isIdle = true;
  isDestroyed = false;
  animationFrameId: number | null = null;

  handlePointerMove!: (ev: MouseEvent | TouchEvent) => void;
  initRender!: (ev: MouseEvent | TouchEvent) => void;

  constructor(container: HTMLElement) {
    this.container = container;

    this.images = Array.from(
      container.querySelectorAll<HTMLElement>(".content__img")
    ).map((el) => new ImageItem(el));

    this.imagesTotal = this.images.length;

    this.bindEvents();
  }

  bindEvents(): void {
    this.handlePointerMove = (ev) => {
      if (this.isDestroyed) return;

      const rect = this.container.getBoundingClientRect();
      if (!isInsideRect(ev, rect)) return;

      this.mousePos = getLocalPointerPos(ev, rect);
    };

    this.initRender = (ev) => {
      if (this.isDestroyed) return;

      const rect = this.container.getBoundingClientRect();
      if (!isInsideRect(ev, rect)) return;

      this.mousePos = getLocalPointerPos(ev, rect);
      this.cacheMousePos = { ...this.mousePos };

      this.animationFrameId = requestAnimationFrame(() => this.render());

      window.removeEventListener("mousemove", this.initRender);
      window.removeEventListener("touchmove", this.initRender);
    };

    window.addEventListener("mousemove", this.handlePointerMove);
    window.addEventListener("touchmove", this.handlePointerMove);
    window.addEventListener("mousemove", this.initRender);
    window.addEventListener("touchmove", this.initRender);
  }

  render(): void {
    if (this.isDestroyed) return;

    const distance = getMouseDistance(this.mousePos, this.lastMousePos);

    this.cacheMousePos.x = lerp(this.cacheMousePos.x, this.mousePos.x, 0.1);
    this.cacheMousePos.y = lerp(this.cacheMousePos.y, this.mousePos.y, 0.1);

    if (distance > this.threshold) {
      this.showNextImage();
      this.lastMousePos = { ...this.mousePos };
    }

    this.animationFrameId = requestAnimationFrame(() => this.render());
  }

  showNextImage(): void {
    this.zIndexVal++;
    this.imgPosition =
      this.imgPosition < this.imagesTotal - 1 ? this.imgPosition + 1 : 0;

    const img = this.images[this.imgPosition];
    if (!img.DOM.el || !img.rect) return;

    gsap.killTweensOf(img.DOM.el);

    gsap
      .timeline()
      .fromTo(
        img.DOM.el,
        {
          opacity: 1,
          scale: 1,
          zIndex: this.zIndexVal,
          x: this.cacheMousePos.x - img.rect.width / 2,
          y: this.cacheMousePos.y - img.rect.height / 2,
        },
        {
          duration: 0.4,
          ease: "power1",
          x: this.mousePos.x - img.rect.width / 2,
          y: this.mousePos.y - img.rect.height / 2,
        }
      )
      .to(img.DOM.el, {
        duration: 0.4,
        ease: "power3",
        opacity: 0,
        scale: 0.2,
      });
  }

  destroy(): void {
    this.isDestroyed = true;

    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }

    window.removeEventListener("mousemove", this.handlePointerMove);
    window.removeEventListener("touchmove", this.handlePointerMove);
    window.removeEventListener("mousemove", this.initRender);
    window.removeEventListener("touchmove", this.initRender);

    this.images.forEach((img) => {
      img.destroy();
      if (img.DOM.el) gsap.killTweensOf(img.DOM.el);
    });
  }
}

/* -------------------------------- React Wrapper ------------------------------- */

const variantMap: Record<number, new (el: HTMLElement) => ImageTrailVariant> = {
  1: ImageTrailVariant1,
};

interface ImageTrailProps {
  items: string[];
  variant?: number;
}

export default function ImageTrail({ items, variant = 1 }: ImageTrailProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const instanceRef = useRef<ImageTrailVariant | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const Variant = variantMap[variant] ?? variantMap[1];
    instanceRef.current = new Variant(containerRef.current);

    return () => {
      instanceRef.current?.destroy();
      instanceRef.current = null;
    };
  }, [variant, items]);

  return (
    <div className='content' ref={containerRef}>
      {items.map((url, i) => (
        <div className='content__img' key={i}>
          <div
            className='content__img-inner'
            style={{ backgroundImage: `url(${url})` }}
          />
        </div>
      ))}
    </div>
  );
}
