import React from 'react';
import GravityButton from "@/components/gravity-button";
import JavaSvg from "@/components/JavaSvg";
import JSSvg from "@/components/JSSvg";
import ReactSvg from "@/components/ReactSvg";

const Tech = () => {

    return (
        <div className={``}>
            <div className={`flex justify-center gap-5`}>
                <GravityButton className={`hover:text-red-500 transition duration-200 ease-in-out`}>
                    <JavaSvg width={50} height={50}/>
                </GravityButton>
                <GravityButton className={`hover:text-yellow-300 transition duration-200 ease-in-out`}>
                    <JSSvg width={50} height={50}/>
                </GravityButton>
                <GravityButton className={`hover:text-blue-500 transition duration-200 ease-in-out`}>
                    <ReactSvg width={50} height={50}/>
                </GravityButton>
            </div>
        </div>
    );
};

export default Tech;