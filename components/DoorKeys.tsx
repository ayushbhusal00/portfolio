"use client";

import { useGLTF } from "@react-three/drei";
import { ThreeElements } from "@react-three/fiber";
import * as THREE from "three";

export default function DoorKeys(props: ThreeElements["group"]) {
  const gltf = useGLTF("/door_keys.glb");

  // Traverse model and apply standard material
  gltf.scene.traverse((child) => {
    if ((child as THREE.Mesh).isMesh) {
      const mesh = child as THREE.Mesh;

      mesh.material = new THREE.MeshStandardMaterial({
        color: "#cccccc",
        metalness: 0.8,
        roughness: 0.3,
      });

      mesh.castShadow = true;
      mesh.receiveShadow = true;
    }
  });

  return <primitive object={gltf.scene} {...props} />;
}

useGLTF.preload("/door_keys.glb");
