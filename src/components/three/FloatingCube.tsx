import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useSpring, animated } from '@react-spring/three'
import * as THREE from 'three'

interface FloatingCubeProps {
  size?: number
  color?: string
  wireframe?: boolean
  position?: [number, number, number]
}

export function FloatingCube({
  size = 1,
  color = "#8B5CF6",
  wireframe = false,
  position = [0, 0, 0]
}: FloatingCubeProps) {
  const meshRef = useRef<THREE.Mesh>(null!)
  
  const [springs, api] = useSpring(() => ({
    rotation: [0, 0, 0],
    position: position,
    scale: 1,
    config: { mass: 1, tension: 170, friction: 26 }
  }))

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    meshRef.current.rotation.x = Math.sin(time * 0.4) * 0.2
    meshRef.current.rotation.y += 0.01
    meshRef.current.position.y = Math.sin(time * 0.5) * 0.1
  })

  return (
    <animated.mesh
      ref={meshRef}
      position={springs.position}
      scale={springs.scale}
      onPointerOver={() => api.start({ scale: 1.2 })}
      onPointerOut={() => api.start({ scale: 1 })}
    >
      <boxGeometry args={[size, size, size]} />
      <meshStandardMaterial
        color={color}
        wireframe={wireframe}
        roughness={0.2}
        metalness={0.8}
      />
    </animated.mesh>
  )
} 