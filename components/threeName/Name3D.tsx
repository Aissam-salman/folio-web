'use client'
import React from 'react';
import {Canvas} from "@react-three/fiber";
import Scene from "@/components/threeName/Scene";

const Name3D = () => {

    return (
        <div className={"canvas scroll-auto"}>
            <Canvas camera={{position: [0, 0, 5], fov: 70}}>
                <color attach="background" args={['rgba(12,5,17,0.68)']}/>
                <Scene/>
                <ambientLight intensity={0.6}/>
            </Canvas>
        </div>
    );
};

export default Name3D;