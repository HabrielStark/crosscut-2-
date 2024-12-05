import { useEffect, useState, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export function Mascot() {
  const [texture, setTexture] = useState<THREE.Texture | null>(null)
  const meshRef = useRef<THREE.Mesh>(null!)

  useEffect(() => {
    const loader = new THREE.TextureLoader()
    loader.load('/luizapixel.png', (loadedTexture) => {
      loadedTexture.minFilter = THREE.LinearFilter
      loadedTexture.magFilter = THREE.LinearFilter
      setTexture(loadedTexture)
    })
  }, [])

  if (!texture) return null

  return (
    <mesh
      ref={meshRef}
      scale={[2, 2, 2]}
      position={[0, 0, 0]}
    >
      <planeGeometry args={[1, 1]} />
      <meshBasicMaterial 
        map={texture} 
        transparent 
        side={THREE.DoubleSide}
        alphaTest={0.1}
        depthWrite={false}
        depthTest={true}
      >
        <primitive attach="map" object={texture} />
      </meshBasicMaterial>
    </mesh>
  )
} 