import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { Particles } from './Particles'

interface BlogParticlesProps {
  count?: number
  size?: number
  spread?: number
  color?: string
  opacity?: number
}

export function BlogParticles({ 
  count = 700,
  size = 0.02,
  spread = 20,
  color = "#8B5CF6",
  opacity = 0.6 
}: BlogParticlesProps) {
  const particlesRef = useRef<THREE.Group>(null!)

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    particlesRef.current.rotation.y = Math.sin(time * 0.1) * 0.2
    particlesRef.current.position.y = Math.sin(time * 0.2) * 0.1
  })

  return (
    <group ref={particlesRef}>
      <Particles
        count={count}
        size={size}
        spread={spread}
        color={color}
        opacity={opacity}
      />
    </group>
  )
} 