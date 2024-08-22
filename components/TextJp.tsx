"use client"
import React, {useEffect, useState} from 'react';
import {Noto_Sans_JP} from "@next/font/google";
import {useMediaQuery} from "usehooks-ts";
import {cn} from "@/lib/utils";

const notoJp = Noto_Sans_JP({subsets: ['latin']});

interface TextJpProps {
    children?: React.ReactNode;
    className?: string;
}

const TextJap: React.FC<TextJpProps> = ({children, className = ''}) => {
    const isMobile = useMediaQuery("(max-width: 700px)");
    const isTablet = useMediaQuery("(max-width: 900px)");
    const [size, setSize] = useState<string>("");

    useEffect(() => {
        let newSize: string = "";
        if (isMobile) {
            newSize = "text-xl";
        } else if (isTablet) {
            newSize = "text-4xl"
        } else {
            newSize = "text-7xl"
        }


        setSize(newSize);

    }, [isMobile, isTablet]);

    return (
        <div
            className={
                cn(
                    notoJp.className,
                    size,
                    `p-6 font-black text-right text-tropical_indigo-300 mb-3`,
                    (className || '')
                )}>
            {children}
        </div>
    );
};

export default TextJap;
    