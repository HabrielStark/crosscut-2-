import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useSpring, animated } from '@react-spring/three'
import * as THREE from 'three'

interface GradientSphereProps {
  radius?: number
  colorA?: string
  colorB?: string
  position?: [number, number, number]
}

export function GradientSphere({
  radius = 1,
  colorA = "#8B5CF6",
  colorB = "#EC4899",
  position = [0, 0, 0]
}: GradientSphereProps) {
  const meshRef = useRef<THREE.Mesh>(null!)
  const materialRef = useRef<THREE.ShaderMaterial>(null!)

  const [springs, api] = useSpring(() => ({
    rotation: [0, 0, 0],
    position: position,
    scale: 1,
    config: { mass: 1, tension: 170, friction: 26 }
  }))

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    meshRef.current.rotation.y += 0.005
    meshRef.current.position.y = Math.sin(time * 0.5) * 0.1
    if (materialRef.current) {
      materialRef.current.uniforms.time.value = time
    }
  })

  return (
    <animated.mesh
      ref={meshRef}
      position={springs.position}
      scale={springs.scale}
      onPointerOver={() => api.start({ scale: 1.2 })}
      onPointerOut={() => api.start({ scale: 1 })}
    >
      <sphereGeometry args={[radius, 64, 64]} />
      <meshPhysicalMaterial
        color={colorA}
        emissive={colorB}
        emissiveIntensity={0.5}
        roughness={0.2}
        metalness={0.8}
        clearcoat={1}
        clearcoatRoughness={0.2}
      />
    </animated.mesh>
  )
} 