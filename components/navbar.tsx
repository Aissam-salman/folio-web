import React from 'react';

const Navbar = () => {
    return (
        <nav className="p-3 fixed flex justify-between top-0 left-0 right-0 z-10">
            <div className="text-dun-700 hover:text-dun-900 hover:font-medium text-xl font-bold">Aissam Salman</div>
            <div className="space-x-4">
                <a href="#" className=" text-dun-700 hover:text-dun-900 hover:font-medium
             hover:text-white texto">WORK</a>
            </div>
        </nav>
    );
};

export default Navbar;