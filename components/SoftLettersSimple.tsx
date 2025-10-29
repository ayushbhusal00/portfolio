// components/SoftLettersSimple.tsx
"use client";
import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Text3D } from "@react-three/drei";
import * as THREE from "three";

type LetterState = {
  home: THREE.Vector3;
  pos: THREE.Vector3;
  vel: THREE.Vector3;
  scaleY: number;
  meshRef: React.RefObject<any>;
  radius: number; // collision radius
};

function LettersSimulation({ text = "HELLO" }: { text?: string }) {
  const letters = text.split("");
  const statesRef = useRef<LetterState[] | null>(null);

  // initialize once
  const spacing = 1.6;
  if (!statesRef.current) {
    statesRef.current = letters.map((_, i) => {
      const home = new THREE.Vector3(
        i * spacing - ((letters.length - 1) * spacing) / 2,
        0,
        0
      );
      return {
        home,
        pos: home.clone(),
        vel: new THREE.Vector3(),
        scaleY: 1,
        meshRef: React.createRef<any>(),
        radius: 0.9, // tweak for how "big" each balloon is
      };
    });
  }

  // simulation parameters (tweak to taste)
  const params = {
    dt: 1 / 60,
    springK: 6.0, // pull back to home
    damping: 0.85, // velocity damping
    repulsionK: 40.0, // repulsion strength when overlapping
    compressionScale: 0.6, // how squashed at max compression
    squashLerp: 6.0, // how quickly scale returns to normal
  };

  useFrame((_, delta) => {
    const states = statesRef.current!;
    const dt = Math.min(delta, 1 / 30);

    // pairwise repulsion + spring to home
    for (let i = 0; i < states.length; i++) {
      const a = states[i];

      // spring to home
      const toHome = new THREE.Vector3().subVectors(a.home, a.pos);
      toHome.multiplyScalar(params.springK * dt);
      a.vel.add(toHome);

      // pairwise repulsion
      for (let j = i + 1; j < states.length; j++) {
        const b = states[j];
        const diff = new THREE.Vector3().subVectors(a.pos, b.pos);
        const dist = Math.max(0.001, diff.length());
        const minDist = a.radius + b.radius;

        if (dist < minDist) {
          // how much they overlap
          const overlap = minDist - dist;
          // normalized direction
          diff.normalize();
          // apply symmetric repulsion impulses
          const force = diff.multiplyScalar(
            params.repulsionK * (overlap / minDist) * dt
          );
          a.vel.add(force);
          b.vel.sub(force);
        }
      }

      // damping
      a.vel.multiplyScalar(params.damping);

      // integrate
      a.pos.addScaledVector(a.vel, dt);
    }

    // update visuals (position + squash based on local compression)
    for (let i = 0; i < states.length; i++) {
      const s = states[i];
      // compute local compression by comparing distance to neighbors
      let compression = 0;
      for (let j = 0; j < states.length; j++) {
        if (i === j) continue;
        const d = s.pos.distanceTo(states[j].pos);
        const target = s.radius + states[j].radius;
        if (d < target) {
          compression = Math.max(compression, (target - d) / target);
        }
      }

      // squash scale: more compression -> smaller Y and compensate X/Z to look inflated
      const targetScaleY = 1 - compression * (1 - params.compressionScale);
      s.scaleY = THREE.MathUtils.lerp(
        s.scaleY,
        targetScaleY,
        params.squashLerp * dt
      );
      const scaleX = 1 + (1 - s.scaleY) * 0.2;
      const scaleZ = scaleX;

      // apply to mesh if available
      const m = s.meshRef.current;
      if (m) {
        m.position.copy(s.pos);
        m.scale.set(scaleX, s.scaleY, scaleZ);
      }
    }
  });

  return (
    <>
      {letters.map((ch, i) => {
        const st = statesRef.current![i];
        return (
          <group key={i}>
            <Text3D
              font='/fonts/helvetiker_regular.typeface.json'
              size={1.1}
              height={0.8} // thicker depth for roundness
              bevelEnabled
              bevelSegments={12} // more segments = smoother
              bevelSize={0.12} // roundness
              bevelThickness={0.2} // inflated depth
            >
              BALLOON
              <meshPhysicalMaterial
                color='#f5a2b8'
                roughness={0.3}
                metalness={0.1}
                clearcoat={1}
                clearcoatRoughness={0.1}
                transmission={0.8} // adds translucency
                thickness={1.5}
                ior={1.4}
              />
            </Text3D>
          </group>
        );
      })}
    </>
  );
}

export default function SoftLettersSimpleScene() {
  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
      <color attach='background' args={["#fef7f8"]} />
      <ambientLight intensity={0.7} />
      <directionalLight position={[4, 5, 3]} intensity={1.2} />
      <Environment preset='sunset' />
      <LettersSimulation text='BALLOON' />
    </Canvas>
  );
}
