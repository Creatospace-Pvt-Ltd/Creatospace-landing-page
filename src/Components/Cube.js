import { useFrame, useThree } from "@react-three/fiber";
import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { Color, Vector3 } from "three";

const Cube = ({ scroll }) => {
  const cubeRef = useRef();
  const { camera } = useThree();
  const targetColor = new Color(0x002747);

  useFrame(({ clock }) => {
    if (cubeRef.current && scroll) {
      camera.position.lerp(
        new Vector3(cubeRef.current.position.x, cubeRef.current.position.y, 2),
        0.06
      );
      camera.lookAt(new Vector3());

      const elapsedTime = clock.getElapsedTime();
      const lerpAmount = Math.sin(elapsedTime) * 0.5 + 0.5; // Smoothly interpolate between 0 and 1
      const currentColor = cubeRef.current.material.color;
      cubeRef.current.material.color.lerp(targetColor, 0.06); // Interpolate the color
    }
  });

  return (
    <mesh rotation={[0, 0, 0]} position={[0, 0, 0]} ref={cubeRef}>
      <boxGeometry args={[3, 3, 3]} />
      <meshStandardMaterial color={"#01a7eb"} />
    </mesh>
  );
};

export default Cube;
