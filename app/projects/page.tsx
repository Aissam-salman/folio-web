import React from 'react';
import Page1 from "@/components/page1";
import Page2 from "@/components/page2";
import Page3 from "@/components/page3";

const Page = () => {
    return (
        <div className="snap-y snap-mandatory overflow-y-scroll h-screen ">
            <div className="snap-always snap-center">
                <Page1/>
            </div>
            <div className="snap-always snap-center">
                <Page2/>
            </div>
            <div className="snap-always snap-center">
                <Page3/>
            </div>
        </div>
    );
};

export default Page;