import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export function HeroScene() {
  const mascotRef = useRef<THREE.Mesh>(null!)
  
  // Optimize texture loading with useMemo
  const mascotTexture = useMemo(() => {
    const loader = new THREE.TextureLoader()
    const texture = loader.load('/luizapixel.png')
    texture.minFilter = THREE.LinearFilter
    texture.magFilter = THREE.LinearFilter
    return texture
  }, [])

  useFrame((state) => {
    if (mascotRef.current) {
      const time = state.clock.getElapsedTime()
      
      // Complex floating animation
      mascotRef.current.position.y = Math.sin(time * 0.8) * 0.15 + 0.3
      mascotRef.current.position.x = Math.sin(time * 0.5) * 0.05
      
      // Gentle rotation
      mascotRef.current.rotation.z = Math.sin(time * 0.3) * 0.05
      
      // Subtle scale pulsing
      const scale = 1 + Math.sin(time * 1.5) * 0.02
      mascotRef.current.scale.set(scale, scale, 1)
    }
  })

  return (
    <group>
      {/* Mascot */}
      <mesh 
        ref={mascotRef} 
        position={[0, 0.3, 0]}
        scale={[2.5, 2.5, 1]}
      >
        <planeGeometry args={[1, 1]} />
        <meshBasicMaterial 
          map={mascotTexture} 
          transparent={true}
          side={THREE.DoubleSide}
          alphaTest={0.1}
          depthWrite={false}
        />
      </mesh>

      {/* Enhanced lighting */}
      <ambientLight intensity={0.8} />
      
      {/* Key lights */}
      <directionalLight 
        position={[5, 5, 5]} 
        intensity={0.7} 
        castShadow
      />
      <directionalLight 
        position={[-5, 5, 5]} 
        intensity={0.7} 
        castShadow
      />
    </group>
  )
} 