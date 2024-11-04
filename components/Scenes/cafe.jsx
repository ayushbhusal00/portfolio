"use client";
import React from "react";
import { RigidBody } from "@react-three/rapier";
import * as THREE from "three";

const boxGeometry = new THREE.BoxGeometry(1, 1, 1);

const BlockStart = ({ position = [0, 0, 0] }) => {
  return (
    <group position={position}>
      <RigidBody type='fixed'>
        <mesh
          geometry={boxGeometry}
          position-y={0.1}
          scale={[4, 0.2, 4]}
          receiveShadow
        >
          <meshStandardMaterial color={"limegreen"} />
        </mesh>
      </RigidBody>
      <RigidBody type='fixed'>
        <mesh
          geometry={boxGeometry}
          position-x={4}
          position-y={1}
          scale={[4, 2, 4]}
          receiveShadow
        >
          <meshStandardMaterial color={"limegreen"} />
        </mesh>
      </RigidBody>
      <RigidBody type='fixed'>
        <mesh
          geometry={boxGeometry}
          position-z={4}
          position-y={2}
          position-x={2}
          scale={[8, 4, 4]}
          receiveShadow
        >
          <meshStandardMaterial color={"limegreen"} />
        </mesh>
      </RigidBody>
      <RigidBody type='fixed'>
        <mesh
          geometry={boxGeometry}
          position-y={0.1}
          scale={[16, 0.2, 16]}
          receiveShadow
        >
          <meshStandardMaterial color={"limegreen"} />
        </mesh>
      </RigidBody>
    </group>
  );
};

export default function Cafe() {
  return <BlockStart position={[0, 0, 0]} />;
}
