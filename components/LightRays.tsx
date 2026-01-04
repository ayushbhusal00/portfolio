"use client";

import { useRef, useEffect, useState } from "react";
import { Renderer, Program, Triangle, Mesh, Transform } from "ogl";
import "./LightRays.css";

/* -------------------------------------------------------------------------- */
/*                                   Types                                    */
/* -------------------------------------------------------------------------- */

type RaysOrigin =
  | "top-left"
  | "top-center"
  | "top-right"
  | "left"
  | "right"
  | "bottom-left"
  | "bottom-center"
  | "bottom-right";

interface LightRaysProps {
  raysOrigin?: RaysOrigin;
  raysColor?: string;
  raysSpeed?: number;
  lightSpread?: number;
  rayLength?: number;
  pulsating?: boolean;
  fadeDistance?: number;
  saturation?: number;
  followMouse?: boolean;
  mouseInfluence?: number;
  noiseAmount?: number;
  distortion?: number;
  className?: string;
}

interface Uniform<T> {
  value: T;
}

interface LightRaysUniforms {
  iTime: Uniform<number>;
  iResolution: Uniform<[number, number]>;
  rayPos: Uniform<[number, number]>;
  rayDir: Uniform<[number, number]>;
  raysColor: Uniform<[number, number, number]>;
  raysSpeed: Uniform<number>;
  lightSpread: Uniform<number>;
  rayLength: Uniform<number>;
  pulsating: Uniform<number>;
  fadeDistance: Uniform<number>;
  saturation: Uniform<number>;
  mousePos: Uniform<[number, number]>;
  mouseInfluence: Uniform<number>;
  noiseAmount: Uniform<number>;
  distortion: Uniform<number>;
}

/* -------------------------------------------------------------------------- */
/*                                  Helpers                                   */
/* -------------------------------------------------------------------------- */

const DEFAULT_COLOR = "#ffffff";

const hexToRgb = (hex: string): [number, number, number] => {
  const m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return m
    ? [
        parseInt(m[1], 16) / 255,
        parseInt(m[2], 16) / 255,
        parseInt(m[3], 16) / 255,
      ]
    : [1, 1, 1];
};

const getAnchorAndDir = (
  origin: RaysOrigin,
  w: number,
  h: number
): { anchor: [number, number]; dir: [number, number] } => {
  const outside = 0.2;

  switch (origin) {
    case "top-left":
      return { anchor: [0, -outside * h], dir: [0, 1] };
    case "top-right":
      return { anchor: [w, -outside * h], dir: [0, 1] };
    case "left":
      return { anchor: [-outside * w, 0.5 * h], dir: [1, 0] };
    case "right":
      return { anchor: [(1 + outside) * w, 0.5 * h], dir: [-1, 0] };
    case "bottom-left":
      return { anchor: [0, (1 + outside) * h], dir: [0, -1] };
    case "bottom-center":
      return { anchor: [0.5 * w, (1 + outside) * h], dir: [0, -1] };
    case "bottom-right":
      return { anchor: [w, (1 + outside) * h], dir: [0, -1] };
    default:
      return { anchor: [0.5 * w, -outside * h], dir: [0, 1] };
  }
};

/* -------------------------------------------------------------------------- */
/*                                Component                                   */
/* -------------------------------------------------------------------------- */

export default function LightRays({
  raysOrigin = "top-center",
  raysColor = DEFAULT_COLOR,
  raysSpeed = 1,
  lightSpread = 1,
  rayLength = 2,
  pulsating = false,
  fadeDistance = 1,
  saturation = 1,
  followMouse = true,
  mouseInfluence = 0.1,
  noiseAmount = 0,
  distortion = 0,
  className = "",
}: LightRaysProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const rendererRef = useRef<Renderer | null>(null);
  const sceneRef = useRef<Transform | null>(null);
  const uniformsRef = useRef<LightRaysUniforms | null>(null);
  const animationIdRef = useRef<number | null>(null);

  const mouseRef = useRef({ x: 0.5, y: 0.5 });
  const smoothMouseRef = useRef({ x: 0.5, y: 0.5 });

  const observerRef = useRef<IntersectionObserver | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  /* --------------------------- Visibility Observer -------------------------- */

  useEffect(() => {
    if (!containerRef.current) return;

    observerRef.current = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    observerRef.current.observe(containerRef.current);
    return () => observerRef.current?.disconnect();
  }, []);

  /* ----------------------------- WebGL Setup -------------------------------- */

  useEffect(() => {
    if (!isVisible || !containerRef.current) return;

    const renderer = new Renderer({
      dpr: Math.min(window.devicePixelRatio, 2),
      alpha: true,
    });

    rendererRef.current = renderer;

    const gl = renderer.gl;
    gl.canvas.style.width = "100%";
    gl.canvas.style.height = "100%";

    containerRef.current.innerHTML = "";
    containerRef.current.appendChild(gl.canvas);

    const uniforms: LightRaysUniforms = {
      iTime: { value: 0 },
      iResolution: { value: [1, 1] },
      rayPos: { value: [0, 0] },
      rayDir: { value: [0, 1] },
      raysColor: { value: hexToRgb(raysColor) },
      raysSpeed: { value: raysSpeed },
      lightSpread: { value: lightSpread },
      rayLength: { value: rayLength },
      pulsating: { value: pulsating ? 1 : 0 },
      fadeDistance: { value: fadeDistance },
      saturation: { value: saturation },
      mousePos: { value: [0.5, 0.5] },
      mouseInfluence: { value: mouseInfluence },
      noiseAmount: { value: noiseAmount },
      distortion: { value: distortion },
    };

    uniformsRef.current = uniforms;

    const program = new Program(gl, {
      vertex: `
        attribute vec2 position;
        varying vec2 vUv;
        void main() {
          vUv = position * 0.5 + 0.5;
          gl_Position = vec4(position, 0.0, 1.0);
        }
      `,
      fragment: document.getElementById("light-rays-frag")?.textContent ?? "",
      uniforms,
    });

    const scene = new Transform();
    sceneRef.current = scene;

    const mesh = new Mesh(gl, {
      geometry: new Triangle(gl),
      program,
    });

    mesh.setParent(scene);

    const resize = () => {
      if (!containerRef.current) return;

      const { clientWidth, clientHeight } = containerRef.current;
      renderer.setSize(clientWidth, clientHeight);

      const dpr = renderer.dpr;
      const w = clientWidth * dpr;
      const h = clientHeight * dpr;

      uniforms.iResolution.value = [w, h];
      const { anchor, dir } = getAnchorAndDir(raysOrigin, w, h);
      uniforms.rayPos.value = anchor;
      uniforms.rayDir.value = dir;
    };

    const loop = (t: number) => {
      if (!rendererRef.current || !sceneRef.current) return;

      uniforms.iTime.value = t * 0.001;

      if (followMouse) {
        smoothMouseRef.current.x =
          smoothMouseRef.current.x * 0.92 + mouseRef.current.x * 0.08;
        smoothMouseRef.current.y =
          smoothMouseRef.current.y * 0.92 + mouseRef.current.y * 0.08;

        uniforms.mousePos.value = [
          smoothMouseRef.current.x,
          smoothMouseRef.current.y,
        ];
      }

      renderer.render({ scene: sceneRef.current });
      animationIdRef.current = requestAnimationFrame(loop);
    };

    resize();
    window.addEventListener("resize", resize);
    animationIdRef.current = requestAnimationFrame(loop);

    return () => {
      if (animationIdRef.current) cancelAnimationFrame(animationIdRef.current);
      window.removeEventListener("resize", resize);
      gl.getExtension("WEBGL_lose_context")?.loseContext();
    };
  }, [
    followMouse,
    distortion,
    fadeDistance,
    lightSpread,
    mouseInfluence,
    noiseAmount,
    pulsating,
    rayLength,
    raysSpeed,
    saturation,
    isVisible,

    raysOrigin,
    raysColor,
  ]);

  /* ------------------------------ Mouse Track -------------------------------- */

  useEffect(() => {
    if (!followMouse) return;

    const onMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      mouseRef.current = {
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      };
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [
    followMouse,
    distortion,
    fadeDistance,
    lightSpread,
    mouseInfluence,
    noiseAmount,
    pulsating,
    rayLength,
    raysSpeed,
    saturation,
  ]);

  return (
    <div
      ref={containerRef}
      className={`light-rays-container ${className}`.trim()}
    />
  );
}
