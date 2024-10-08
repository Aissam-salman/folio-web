import React from "react";
import MenuItem from "@/components/work/MenuItem";

interface MenuProps {
    id: string;
}

const Menu = ({id}: MenuProps) => {
    const menuItems = [
        {
            text: 'Clone notion',
            subText: 'Nextjs & Tailwindcss',
            imgSrc: '/img/3.png',
            linkWork: 'https://nobsi.vercel.app/'
        },
        {
            text: 'Ollama Chat',
            subText: 'Python & JS',
            imgSrc: '/img/2.png',
            linkWork: 'https://github.com/Aissam-salman/chatOllama'
        },
        {
            text: 'DevFix',
            subText: 'Symfony & JS',
            imgSrc: '/img/1.png',
            linkWork: 'https://github.com/Aissam-salman/cp-devfix'
        },
    ];

    return (
        <div id={id} className={`py-40 p-5 sm:p-52`}>
            <nav className="flex flex-col space-y-4">
                {menuItems.map((item, index) => (
                    <MenuItem key={index} {...item} />
                ))}
            </nav>

        </div>
    );
};


export default Menu;
