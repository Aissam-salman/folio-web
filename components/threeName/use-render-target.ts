import { useMemo, useRef } from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'

interface RenderTargetSettings {
  format?: THREE.PixelFormat
  generateMipmaps?: boolean
  [key: string]: any
}

function useRenderTarget(settings: RenderTargetSettings = {}) {
  const renderTarget = useMemo(() => {
    const renderTargetSettings: RenderTargetSettings = {
      format: THREE.RGBAFormat,
      generateMipmaps: true
    }

    return new THREE.WebGLCubeRenderTarget(1024, {
      ...renderTargetSettings,
      ...settings
    })
  }, [settings])

  const cubeCamera = useRef<THREE.CubeCamera | null>(null)

  useFrame(({ gl, scene }) => {
    if (!cubeCamera.current) return
    cubeCamera.current.update(gl, scene)
  })

  return [cubeCamera, renderTarget] as const
}

export default useRenderTarget

