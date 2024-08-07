import React from 'react';

const Footer = () => {
    return (
        <footer className="w-full fixed bottom-0 left-0 right-0 flex p-4">
            <div className="space-x-4">
                <a href="mailto:salman.59560@gmail.com" target={`_blank`}
                   className="text-dun-700 hover:text-dun-900 hover:font-medium texto-r">CONTACT</a>
            </div>
        </footer>
    );
};

export default Footer;