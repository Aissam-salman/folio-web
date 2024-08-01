import React, { useEffect, useMemo, useRef, useState } from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import { Text, Box, useMatcapTexture, Octahedron } from '@react-three/drei'

import useRenderTarget from '@/components/threeName/use-render-target'
import { ThinFilmFresnelMap } from './ThinFilmFresnelMap'
import { mirrorsData } from './data'
import useLayers from "@/components/threeName/user-layers";
import useSlerp from "@/components/threeName/user-slerp";

const TEXT_PROPS = {
  fontSize: 1.5,
  font: 'https://fonts.gstatic.com/s/syncopate/v12/pe0pMIuPIYBCpEV5eFdKvtKqBP5p.woff'
}

interface TitleProps {
  layers?: number[]
  position?: [number, number, number]
  name?: string
}

function Title({ layers, ...props }: TitleProps) {
  const group = useRef<THREE.Group>(null!)
  useEffect(() => {
    if (group.current) {
      group.current.lookAt(0, 0, 0)
    }
  }, [])

  const textRef = useLayers<THREE.Mesh>(layers)

  return (
    <group {...props} ref={group}>
      <Text ref={textRef} name="text-panna" material-toneMapped={false} material-color="#FFFFFF" {...TEXT_PROPS}>
        Salman Dev
      </Text>
    </group>
  )
}

interface T {
}

interface MirrorProps {
  name?: string;
  sideMaterial: THREE.Material;
  reflectionMaterial: THREE.Material;
  args: [number, number, number]; // Tuple with exactly three numbers
  position?: [number, number, number];
  rotation: [number, number, number]; // Tuple with exactly three numbers
  key: string;
  layers?: number[];
}

function Mirror({ sideMaterial, reflectionMaterial, args, layers, rotation, ...props }: MirrorProps) {
  const ref = useLayers<THREE.Mesh>(layers);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.001;
      ref.current.rotation.z += 0.01;
    }
  });

  return (
    <Box
      {...props}
      ref={ref}
      args={args}
      rotation={rotation} // Pass rotation as a tuple
      material={[sideMaterial, sideMaterial, sideMaterial, sideMaterial, reflectionMaterial, reflectionMaterial]}
    />
  );
}

interface MirrorsProps {
  envMap: THREE.Texture;
  layers?: number[];
}

function Mirrors({ envMap, layers, ...props }: MirrorsProps) {
  const [thinFilmFresnelMap] = useState(new ThinFilmFresnelMap());
  const sideMaterial = useRef(
    new THREE.MeshLambertMaterial({
      map: thinFilmFresnelMap,
      color: '#AAAAAA',
    })
  );
  const reflectionMaterial = useRef(
    new THREE.MeshLambertMaterial({
      map: thinFilmFresnelMap,
      envMap,
      color: '#FFFFFF',
    })
  );

  return (
  <group name="mirrors" {...props}>
    <meshLambertMaterial ref={sideMaterial} map={thinFilmFresnelMap} color="#B4A7D6"/>
    <meshLambertMaterial ref={reflectionMaterial} map={thinFilmFresnelMap} envMap={envMap} color="#8E7CC3"/>
    {mirrorsData.mirrors.map((mirror, index) => (
  // @ts-ignore
        <Mirror
            key={`mirror-${index}`}
            layers={layers}
            {...mirror}
            name={`mirror-${index}`}
            sideMaterial={sideMaterial.current}
            reflectionMaterial={reflectionMaterial.current}
        />
    ))}
  </group>
  );
}
interface TitleCopiesProps {
  layers?: number[]
}

function TitleCopies({ layers }: TitleCopiesProps) {
  const vertices = useMemo(() => {
    const geometry = new THREE.IcosahedronGeometry(10);
    const positionAttribute = geometry.attributes.position as THREE.BufferAttribute;

    const vertexArray: [number, number, number][] = [];
    for (let i = 0; i < positionAttribute.count; i++) {
      vertexArray.push([
        positionAttribute.getX(i),
        positionAttribute.getY(i),
        positionAttribute.getZ(i),
      ]);
    }
    return vertexArray;
  }, []);

  return (
    <group name="titleCopies">
      {vertices.map((vertex, i) => (
        <Title
          key={`titleCopy-${i}`}
          name={`titleCopy-${i}`}
          position={vertex as [number, number, number]}
          layers={layers}
        />
        ))}
    </group>
  );
}


function Scene() {
  const [cubeCamera, renderTarget] = useRenderTarget();
  const group = useSlerp();

  const [matcapTexture] = useMatcapTexture('C8D1DC_575B62_818892_6E747B');

  return (
    <>
      <group name="sceneContainer" ref={group}>
        <Octahedron layers={11} name="background" args={[20, 4 ]} position={[0, 0, -2]}>
          <meshMatcapMaterial matcap={matcapTexture} side={THREE.BackSide} transparent opacity={0.5} color="#FFFFFF" />
        </Octahedron>
        <cubeCamera
          layers={11}
          name="cubeCamera"
          ref={cubeCamera}
          args={[0.1, 100, renderTarget]}
          position={[0, 0, 5]}
        />
        <Title name="title" position={[0, 0, -10]} />
        <TitleCopies layers={[11]} />
        <Mirrors layers={[0, 11]} envMap={renderTarget.texture} />
      </group>
    </>
  );
}

export default Scene
