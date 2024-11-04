"use client";
import React, { memo, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { DirectionalLight, DirectionalLightHelper } from "three";
import { Perf } from "r3f-perf";
import { Physics } from "@react-three/rapier";

//Custom Characters
import Cafe from "@/components/Scenes/cafe";
import Player from "@/components/Scenes/player";
import {
  Grid,
  GizmoHelper,
  GizmoViewport,
  AccumulativeShadows,
  RandomizedLight,
  OrbitControls,
  useHelper,
  Environment,
  KeyboardControls,
} from "@react-three/drei";
import { useControls } from "leva";

// Light component to handle the directional light and its helper
function DirectionalLightWithHelper() {
  const lightRef = useRef(new DirectionalLight());
  useHelper(lightRef, DirectionalLightHelper, 1, "cyan");
  return (
    <directionalLight
      ref={lightRef}
      castShadow
      intensity={1}
      position={[1, 2, 1]}
    />
  );
}

DirectionalLightWithHelper.displayName = "DirectionalLightWithHelper";

const Shadows = memo(() => (
  <AccumulativeShadows
    temporal
    frames={100}
    color='#9d4b4b'
    colorBlend={0.5}
    alphaTest={0.9}
    scale={20}
  >
    <RandomizedLight amount={8} radius={4} position={[5, 5, -10]} />
  </AccumulativeShadows>
));
Shadows.displayName = "Shadows";

export default function Playground() {
  const { gridSize, ...gridConfig } = useControls({
    gridSize: [10.5, 10.5],
    cellSize: { value: 0.6, min: 0, max: 10, step: 0.1 },
    cellThickness: { value: 1, min: 0, max: 5, step: 0.1 },
    cellColor: "#6f6f6f",
    sectionSize: { value: 3.3, min: 0, max: 10, step: 0.1 },
    sectionThickness: { value: 1.5, min: 0, max: 5, step: 0.1 },
    sectionColor: "#9d4b4b",
    fadeDistance: { value: 25, min: 0, max: 100, step: 1 },
    fadeStrength: { value: 1, min: 0, max: 1, step: 0.1 },
    followCamera: false,
    infiniteGrid: true,
  });

  return (
    <div className='h-[600px] bg-[#303035] max-w-[70rem] mx-auto p-6 rounded-md mt-28'>
      <KeyboardControls
        map={[
          { name: "forward", keys: ["ArrowUp", "KeyW"] },
          { name: "backward", keys: ["ArrowDown", "KeyS"] },
          { name: "leftward", keys: ["ArrowLeft", "KeyA"] },
          { name: "rightward", keys: ["ArrowRight", "KeyD"] },
          { name: "jump", keys: ["Space"] },
          { name: "fireWeapon", keys: ["KeyK"] }, // Add small jump key mapping
        ]}
      >
        <Canvas camera={{ position: [-8, 8, 0] }} shadows frameloop='always'>
          <Perf position='top-left' />
          <DirectionalLightWithHelper /> {/* Use the new component here */}
          <group>
            <Physics debug>
              <Player />
              <Cafe />
            </Physics>

            <Grid position={[0, -0.01, 0]} args={gridSize} {...gridConfig} />

            <Shadows />
          </group>
          <OrbitControls makeDefault />
          <Environment preset='city' />
          <GizmoHelper alignment='bottom-right' margin={[80, 80]}>
            <GizmoViewport
              axisColors={["#9d4b4b", "#2f7f4f", "#3b5b9d"]}
              labelColor='white'
            />
          </GizmoHelper>
        </Canvas>
      </KeyboardControls>
    </div>
  );
}
