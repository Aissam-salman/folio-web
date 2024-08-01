import { useEffect, useRef, RefObject } from 'react'
import * as THREE from 'three'

function useLayers<T extends THREE.Object3D>(layers: number[] = [0]): RefObject<T> {
  const ref = useRef<T>(null!)

  useEffect(() => {
    if (ref.current) {
      ref.current.layers.disableAll()

      layers.sort().forEach((layer) => {
        ref.current.layers.enable(layer)
      })
    }
  }, [layers])

  return ref
}

export default useLayers
