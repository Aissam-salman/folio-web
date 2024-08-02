import React from 'react';
import GravityButton from "@/components/gravity-button";
import JavaSvg from "@/components/JavaSvg";
import JSSvg from "@/components/JSSvg";

const Tech = () => {

    return (
        <div className={``}>
            <div className={`flex justify-center gap-5`}>
                <GravityButton>
                    <JavaSvg width={50} height={50}/>
                </GravityButton>
                <GravityButton>
                    <JSSvg width={50} height={50}/>
                </GravityButton>
                <GravityButton>
                    <JSSvg width={50} height={50}/>
                </GravityButton>
            </div>
        </div>
    );
};

export default Tech;