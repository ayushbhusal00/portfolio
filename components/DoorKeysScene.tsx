"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import DoorKeys from "./DoorKeys";

export default function DoorKeysScene() {
  return (
    <Canvas
      camera={{ position: [1, 0.2, 0.5], fov: 45 }}
      className='h-[100%]'
      shadows
    >
      {/* Lighting */}
      <ambientLight intensity={0.7} />
      <directionalLight position={[2, 2, 2]} intensity={1} castShadow />

      {/* Model */}
      <DoorKeys />

      {/* Controls */}
      <OrbitControls />
    </Canvas>
  );
}
