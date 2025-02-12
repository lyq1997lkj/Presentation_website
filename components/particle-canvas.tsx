"use client";

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';

function Particles() {
  const points = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.x += 0.001;
      points.current.rotation.y += 0.001;
    }
  });

  const particlesGeometry = new THREE.BufferGeometry();
  const count = 5000;

  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);

  for (let i = 0; i < count * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 10;
    colors[i] = Math.random();
  }

  particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

  const particlesMaterial = new THREE.PointsMaterial({
    size: 0.02,
    vertexColors: true,
    transparent: true,
    opacity: 0.8,
  });

  return (
    <points ref={points} geometry={particlesGeometry} material={particlesMaterial} />
  );
}

export function ParticleCanvas() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <Particles />
      </Canvas>
    </div>
  );
}