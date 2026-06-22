"use client"

import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { useRef } from "react"
import * as THREE from "three"

type CardProps = {
  position: [number, number, number]
  rotation: [number, number, number]
  color: string
  phase: number
  scale: [number, number, number]
}

function FloatingCard({ position, rotation, color, phase, scale }: CardProps) {
  const ref = useRef<THREE.Mesh>(null)
  const { pointer } = useThree()

  useFrame(({ clock }) => {
    const card = ref.current
    if (!card) return
    const time = clock.getElapsedTime()
    card.position.y = position[1] + Math.sin(time * 0.72 + phase) * 0.12
    card.rotation.x = rotation[0] + pointer.y * 0.06
    card.rotation.y = rotation[1] + pointer.x * 0.1
  })

  return (
    <mesh ref={ref} position={position} rotation={rotation} scale={scale} castShadow>
      <boxGeometry args={[1.7, 1, 0.055]} />
      <meshPhysicalMaterial color={color} transparent opacity={0.2} roughness={0.22} metalness={0.05} transmission={0.6} thickness={0.7} />
    </mesh>
  )
}

function Scene() {
  const orb = useRef<THREE.Mesh>(null)
  useFrame(({ clock, pointer }) => {
    if (!orb.current) return
    orb.current.rotation.x = clock.getElapsedTime() * 0.08 + pointer.y * 0.12
    orb.current.rotation.y = clock.getElapsedTime() * 0.12 + pointer.x * 0.12
  })

  return (
    <>
      <ambientLight intensity={1.8} />
      <directionalLight position={[4, 5, 5]} intensity={2.2} color="#ffffff" castShadow />
      <pointLight position={[-3, -2, 4]} intensity={4} color="#7c3aed" />
      <mesh ref={orb} position={[0.2, 0, -1.2]}>
        <icosahedronGeometry args={[1.65, 3]} />
        <meshPhysicalMaterial color="#c7d2fe" wireframe transparent opacity={0.18} roughness={0.2} />
      </mesh>
      <FloatingCard position={[-0.55, 0.48, 0]} rotation={[-0.08, 0.24, -0.08]} color="#ffffff" phase={0} scale={[1.32, 1.08, 1]} />
      <FloatingCard position={[0.78, 0.15, 0.45]} rotation={[0.04, -0.25, 0.08]} color="#e0e7ff" phase={1.3} scale={[0.76, 0.76, 1]} />
      <FloatingCard position={[-0.05, -0.72, 0.72]} rotation={[0.14, 0.08, -0.04]} color="#ede9fe" phase={2.4} scale={[0.96, 0.78, 1]} />
    </>
  )
}

export default function HeroScene() {
  return (
    <Canvas camera={{ position: [0, 0, 5.4], fov: 42 }} dpr={[1, 1.5]} gl={{ alpha: true, antialias: true }}>
      <Scene />
    </Canvas>
  )
}
