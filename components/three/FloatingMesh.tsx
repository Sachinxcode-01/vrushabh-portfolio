'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, MeshWobbleMaterial, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

const particleCount = 300;

// Deterministic pseudo-random float generator to eliminate SSR vs Client hydration mismatches
function pseudoRandom(seed: number) {
  const x = Math.sin(seed * 9999 + 1) * 10000;
  return x - Math.floor(x);
}

export function FloatingMesh() {
  const meshRef = useRef<THREE.Mesh>(null!);
  const innerMeshRef = useRef<THREE.Mesh>(null!);
  const particlesRef = useRef<THREE.Points>(null!);

  const particlePositions = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i++) {
      pos[i] = (pseudoRandom(i) - 0.5) * 12;
    }
    return pos;
  }, []);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
    }
    if (innerMeshRef.current) {
      innerMeshRef.current.rotation.x -= delta * 0.4;
      innerMeshRef.current.rotation.y += delta * 0.2;
    }
    if (particlesRef.current) {
      particlesRef.current.rotation.y += delta * 0.05;
    }
  });

  return (
    <group>
      {/* Background Particle Cloud */}
      <Points ref={particlesRef} positions={particlePositions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#06b6d4"
          size={0.035}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.6}
        />
      </Points>

      {/* Floating Main 3D Shape */}
      <Float speed={2} rotationIntensity={0.8} floatIntensity={1.2}>
        {/* Outer Wireframe Icosahedron */}
        <mesh ref={meshRef} position={[0, 0, 0]} scale={1.8}>
          <icosahedronGeometry args={[1, 1]} />
          <meshBasicMaterial
            wireframe
            color="#06b6d4"
            transparent
            opacity={0.35}
          />
        </mesh>

        {/* Inner Wobbling Octahedron */}
        <mesh ref={innerMeshRef} position={[0, 0, 0]} scale={1.0}>
          <octahedronGeometry args={[1, 0]} />
          <MeshWobbleMaterial
            color="#8b5cf6"
            factor={0.4}
            speed={1.5}
            roughness={0.2}
            metalness={0.8}
            wireframe
          />
        </mesh>
      </Float>
    </group>
  );
}
