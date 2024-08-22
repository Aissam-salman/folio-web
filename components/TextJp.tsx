"use client"
import React from 'react';
import {Noto_Sans_JP} from "@next/font/google";
import {useMediaQuery} from "usehooks-ts";
import {cn} from "@/lib/utils";

const notoJp = Noto_Sans_JP({subsets: ['latin']});

interface TextJpProps {
    children?: React.ReactNode;
    className?: string;
}

const TextJap: React.FC<TextJpProps> = ({children, className = ''}) => {
    const isMobile = useMediaQuery("(max-width: 600px)");
    return (
        <div
            className={
                cn(
                    notoJp.className +
                    !isMobile ? "text-7xl" :
                        `text-xl` + `p-6 font-black text-right text-tropical_indigo-300 mb-3` + (className || '')
                )}>
            {children}
        </div>
    );
};

export default TextJap;
    