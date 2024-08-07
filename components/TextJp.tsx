import React from 'react';
import {Noto_Sans_JP} from "@next/font/google";

const notoJp = Noto_Sans_JP({subsets: ['latin']});

interface TextJpProps {
    children?: React.ReactNode;
    className?: string;
}

const TextJap: React.FC<TextJpProps> = ({children, className = ''}) => {
    return (
        <div
            className={notoJp.className + `p-6 text-7xl font-black text-right text-tropical_indigo-300 mb-3` + (className || '')}>
            {children}
        </div>
    );
};

export default TextJap;
