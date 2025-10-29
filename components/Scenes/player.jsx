"use client";
import React, { useEffect, useRef, useState } from "react";
import { CapsuleCollider, RigidBody } from "@react-three/rapier";
import { useKeyboardControls, useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useControls } from "leva";

export default function Player() {
  // Keyboard controls setup
  const [subscribeKeys, getKeys] = useKeyboardControls();

  // References to different parts of the character
  const body = useRef();
  const directionIndicator = useRef();
  const directionPointer = useRef();

  // State for handling movement and animation
  const [canJump, setCanJump] = useState(true);
  const [isRunning, setIsRunning] = useState(false);

  // Import 3D model and animations for the fox
  const fox = useGLTF("../fox.gltf");
  const animation = useAnimations(fox.animations, fox.scene);

  // Set up animation name control in Leva
  const { animationName } = useControls({
    animationName: {
      options: animation.names,
    },
  });

  useEffect(() => {
    // Manage animation actions based on the selected animation name
    const action = animation.actions[animationName];
    action.reset().fadeIn(0.5).play();

    return () => {
      action.fadeOut(0.5);
    };
  }, [animationName, animation.actions]);

  // Function for jumping action
  const jumpPlayer = () => {
    if (canJump && body.current) {
      body.current.applyImpulse({ x: 0, y: 5, z: 0 }, true);
      setCanJump(false);
      const action = animation.actions["Jump"];
      if (action) action.play();
    }
  };

  // Movement handling on each frame
  useFrame((_, delta) => {
    const { forward, backward, leftward, rightward, shift, space } = getKeys();

    // // Set movement and animation based on the key state
    // const velocity = (shift ? 10 : 5) * delta; // Increase speed when shift is pressed
    // const direction = new THREE.Vector3();

    // // Set direction vector based on controls
    // if (forward) direction.z -= velocity;
    // if (backward) direction.z += velocity;
    // if (leftward) direction.x -= velocity;
    // if (rightward) direction.x += velocity;

    // // Determine the animation to play based on movement
    // if (direction.length() > 0) {
    //   setIsRunning(shift);
    //   const action = animation.actions[shift ? "Run" : "Walk"];
    //   if (action && !action.isRunning()) action.play();
    // } else {
    //   const action = animation.actions["Survey"];
    //   if (action && !action.isRunning()) action.play();
    // }

    // // Apply jump action
    // if (space) jumpPlayer();

    // // Apply movement impulse to the body
    // if (body.current && direction.length() > 0) {
    //   direction.normalize();
    //   const impulse = {
    //     x: direction.x * velocity,
    //     y: 0,
    //     z: direction.z * velocity,
    //   };
    //   body.current.applyImpulse(impulse, true);
    // }

    // // Reset jump if player is on the ground
    // if (body.current && body.current.translation().y <= 0.5) setCanJump(true);
  });

  return (
    <group>
      <RigidBody
        ref={body}
        colliders='false'
        restitution={0.2}
        friction={1}
        position={[0, 0, 0]}
        linearDamping={0.5}
        angularDamping={0.5}
        onClick={jumpPlayer}
      >
        <primitive
          object={fox.scene}
          scale={0.02}
          position={[-2.5, 0, 2.5]}
          rotation-y={0.3}
        />
        <CapsuleCollider args={[0.08, 0.15]} />
      </RigidBody>
    </group>
  );
}
