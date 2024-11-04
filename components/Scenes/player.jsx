"use client";
import React, { useRef, useState } from "react";
import { RigidBody } from "@react-three/rapier";
import { useKeyboardControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function Player() {
  const [subscribeKeys, getKeys] = useKeyboardControls();
  const body = useRef();
  const playerWeapon = useRef();
  const directionIndicator = useRef();
  const directionPointer = useRef(); // Ref for the triangle direction pointer
  const [canJump, setCanJump] = useState(true);
  const [weaponFired, setWeaponFired] = useState(false);
  const [weaponVelocity, setWeaponVelocity] = useState(new THREE.Vector3());
  const [explosionActive, setExplosionActive] = useState(false);
  const explosionRef = useRef();

  const GRAVITY = -9.8; // Gravity constant to apply to weapon's y velocity

  console.log("SubscribeKeys: ", subscribeKeys);
  const jumpPlayer = () => {
    if (canJump && body.current) {
      body.current.wakeUp();
      body.current.applyImpulse({ x: 0, y: 0.3, z: 0 }, true);
      setCanJump(false);
    }
  };

  const firePlayerWeapon = () => {
    console.log("Weapon has been fired");
    setWeaponFired(true);

    // Calculate the forward direction based on the player's facing direction
    const forwardDirection = new THREE.Vector3(0, 0, 1); // Default forward direction
    forwardDirection.applyQuaternion(body.current.rotation()); // Apply the player's rotation

    const launchSpeed = 5; // Adjust the launch speed multiplier
    const initialVelocity = forwardDirection.multiplyScalar(launchSpeed);
    initialVelocity.y += 2; // Give an initial upward lift to the weapon
    setWeaponVelocity(initialVelocity); // Set weapon's initial velocity

    setTimeout(() => setWeaponFired(false), 1600); // Reset after 1.6 seconds
  };

  const createWeapon = () => (
    <mesh ref={playerWeapon} position={[0, 1, 0]}>
      <sphereGeometry args={[0.2, 4, 4]} />
      <meshStandardMaterial flatShading color='mediumred' />
    </mesh>
  );

  const triggerExplosion = (position) => {
    setExplosionActive(true);
    explosionRef.current.position.copy(position);

    // Make the explosion disappear after a short time
    setTimeout(() => setExplosionActive(false), 500);
  };

  useFrame((_, delta) => {
    const { forward, backward, leftward, rightward, jump, fireWeapon } =
      getKeys();

    const impulse = { x: 0, y: 0, z: 0 };
    const impulseStrength = 0.5 * delta;

    if (forward) impulse.x += impulseStrength;
    if (backward) impulse.x -= impulseStrength;
    if (leftward) impulse.z -= impulseStrength;
    if (rightward) impulse.z += impulseStrength;

    if (jump) jumpPlayer();
    if (fireWeapon && !weaponFired) firePlayerWeapon();

    if (body.current) {
      body.current.applyImpulse(impulse, true);
      if (body.current.translation().y <= 0.5) setCanJump(true);

      // Update direction indicator and pointer position and rotation
      const playerPosition = body.current.translation();
      if (directionIndicator.current) {
        directionIndicator.current.position.set(
          playerPosition.x,
          playerPosition.y + 0.1,
          playerPosition.z
        );
        directionIndicator.current.lookAt(
          playerPosition.x + impulse.x,
          playerPosition.y,
          playerPosition.z + impulse.z
        );

        // Update direction pointer rotation
        if (directionPointer.current) {
          directionPointer.current.rotation.y =
            directionIndicator.current.rotation.y;
        }
      }
    }

    if (weaponFired && playerWeapon.current) {
      // Apply gravity to weapon's y velocity
      weaponVelocity.y += GRAVITY * delta;

      // Move the weapon in the direction of the current velocity, including gravity
      playerWeapon.current.position.x += weaponVelocity.x * delta;
      playerWeapon.current.position.y += weaponVelocity.y * delta;
      playerWeapon.current.position.z += weaponVelocity.z * delta;

      // Check for collision by checking the weapon's y position falling below a threshold
      if (playerWeapon.current.position.y <= 0) {
        triggerExplosion(playerWeapon.current.position.clone());

        // Reset weapon position and stop the projectile motion
        setWeaponFired(false);
        setWeaponVelocity(new THREE.Vector3());
      }
    } else if (playerWeapon.current) {
      // Reset weapon position to player when not fired
      const playerPosition = body.current.translation();
      playerWeapon.current.position.set(
        playerPosition.x,
        playerPosition.y + 0.5,
        playerPosition.z
      );
    }
  });

  return (
    <group>
      <RigidBody
        ref={body}
        colliders='ball'
        restitution={0.2}
        friction={1}
        position={[0, 1, 0]}
        linearDamping={0.5}
        angularDamping={0.5}
      >
        <mesh castShadow onClick={jumpPlayer}>
          <icosahedronGeometry args={[0.3, 1]} />
          <meshStandardMaterial flatShading color='mediumpurple' />
        </mesh>
      </RigidBody>
      {createWeapon()}
      {/* Add direction indicator ring */}
      <mesh
        ref={directionIndicator}
        position={[0, 1.3, 0]}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <ringGeometry args={[0.35, 0.4, 32, 1]} />
        <meshStandardMaterial color='yellow' side={THREE.DoubleSide} />
      </mesh>
      {/* Direction pointer triangle */}
      <mesh ref={directionPointer} position={[0, 1.35, 0.45]}>
        <coneGeometry args={[0.1, 0.2, 3]} />
        <meshStandardMaterial color='red' />
      </mesh>
      {/* Explosion effect */}
      {explosionActive && (
        <mesh ref={explosionRef}>
          <sphereGeometry args={[0.5, 16, 16]} />
          <meshStandardMaterial color='orange' emissive='yellow' />
        </mesh>
      )}
    </group>
  );
}
