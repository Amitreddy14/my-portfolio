import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

function GlowingSphere({ position, color, size = 1 }) {
  const meshRef = useRef()

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.15
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2
    }
  })

  return (
    <Float speed={1.8} rotationIntensity={0.5} floatIntensity={2}>
      <mesh ref={meshRef} position={position} scale={size}>
        <icosahedronGeometry args={[1, 8]} />
        <MeshDistortMaterial
          color={color}
          roughness={0.15}
          metalness={1}
          distort={0.3}
          speed={2}
          transparent
          opacity={0.85}
          emissive={color}
          emissiveIntensity={0.15}
        />
      </mesh>
    </Float>
  )
}

function WireframeRing({ position, color, size = 1, speed = 1 }) {
  const meshRef = useRef()

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1 * speed
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.25 * speed
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.05 * speed
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0.6} floatIntensity={1.8}>
      <mesh ref={meshRef} position={position} scale={size}>
        <torusGeometry args={[1.2, 0.04, 16, 100]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.5}
          transparent
          opacity={0.6}
        />
      </mesh>
    </Float>
  )
}

function FloatingOctahedron({ position, size = 0.6 }) {
  const meshRef = useRef()

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.15
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.8} floatIntensity={2.2}>
      <mesh ref={meshRef} position={position} scale={size}>
        <octahedronGeometry args={[1, 0]} />
        <meshStandardMaterial
          color="#a78bfa"
          emissive="#7c3aed"
          emissiveIntensity={0.3}
          roughness={0.1}
          metalness={0.9}
          transparent
          opacity={0.75}
        />
      </mesh>
    </Float>
  )
}

function Particles({ count = 300 }) {
  const points = useRef()

  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 25
      positions[i * 3 + 1] = (Math.random() - 0.5) * 25
      positions[i * 3 + 2] = (Math.random() - 0.5) * 15
    }
    return positions
  }, [count])

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.y = state.clock.elapsedTime * 0.015
      points.current.rotation.x = state.clock.elapsedTime * 0.008
    }
  })

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesPosition.length / 3}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        color="#818cf8"
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  )
}

function GlowOrb({ position, color, intensity = 2 }) {
  return (
    <pointLight position={position} color={color} intensity={intensity} distance={8} />
  )
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 45 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      style={{ background: 'transparent' }}
    >
      {/* Lighting - much brighter */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} color="#e0e7ff" />
      <directionalLight position={[-3, -3, 3]} intensity={0.5} color="#818cf8" />
      
      {/* Colored point lights for glow effect */}
      <GlowOrb position={[4, 2, 0]} color="#6366f1" intensity={3} />
      <GlowOrb position={[-4, -2, 0]} color="#8b5cf6" intensity={2} />
      <GlowOrb position={[0, 3, 2]} color="#a78bfa" intensity={1.5} />

      {/* Main distorted sphere - top right */}
      <GlowingSphere position={[3.5, 1.5, -1]} color="#6366f1" size={1.1} />
      
      {/* Secondary sphere - bottom left */}
      <GlowingSphere position={[-3.5, -1.5, -2]} color="#8b5cf6" size={0.8} />

      {/* Wireframe rings */}
      <WireframeRing position={[2.5, -2, 0]} color="#818cf8" size={1.2} speed={0.8} />
      <WireframeRing position={[-2, 2.5, -1]} color="#6366f1" size={0.9} speed={1.2} />
      <WireframeRing position={[0, 0, -3]} color="#a78bfa" size={2} speed={0.5} />

      {/* Floating octahedron */}
      <FloatingOctahedron position={[-1, -2.5, 1]} size={0.5} />
      <FloatingOctahedron position={[4, -1, -2]} size={0.35} />

      {/* Particles */}
      <Particles count={250} />
    </Canvas>
  )
}
