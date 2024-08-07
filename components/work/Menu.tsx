import React from "react";
import MenuItem from "@/components/work/MenuItem";

const Menu: React.FC = () => {
    const menuItems = [
        {
            text: 'DevFix',
            subText: 'Symfony & JS',
            imgSrc: '/img/1.png',
            linkWork: 'https://github.com/Aissam-salman/cp-devfix'
        },
        {text: 'Clone notion', subText: 'Nextjs & Tailwindcss', imgSrc: '/img/2.png', linkWork: '#'},
        //TODO: add link to site or github
    ];

    return (
        <div className={`p-52   `}>
            <nav className="flex flex-col space-y-4">
                {menuItems.map((item, index) => (
                    <MenuItem key={index} {...item} />
                ))}
            </nav>

        </div>
    );
};


export default Menu;
