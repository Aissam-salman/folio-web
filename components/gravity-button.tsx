'use client'
import React, {useEffect, useRef} from 'react';


interface GravityButtonProps {
    children: React.ReactNode;
    className?: string;
}

const GravityButton: React.FC<GravityButtonProps> = ({children, className = ''}) => {
    const buttonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const button = buttonRef.current;

        if (!button) return;

        const handleMouseMove = (e: MouseEvent) => {
            if (!button) return;

            const rect = button.getBoundingClientRect();
            const h = rect.width / 2;

            const x = e.clientX - rect.left - h;
            const y = e.clientY - rect.top - h;

            const r1 = Math.sqrt(x * x + y * y);
            const attractionForce = 0.8; // Ajustez cette valeur pour augmenter ou diminuer la force d'attraction
            const r2 = r1 * attractionForce;

            const angle = Math.atan2(y, x);
            const tx = Math.round(Math.cos(angle) * r2 * 100) / 100;
            const ty = Math.round(Math.sin(angle) * r2 * 100) / 100;

            const op = Math.min(1, r2 / r1 + 0.25); // Assurez-vous que l'opacité ne dépasse pas 1

            button.style.setProperty("--tx", `${tx}px`);
            button.style.setProperty("--ty", `${ty}px`);
            button.style.setProperty("--opacity", `${op}`);
        };

        const handleMouseLeave = () => {
            if (!button) return;

            button.style.setProperty("--tx", "0px");
            button.style.setProperty("--ty", "0px");
            button.style.setProperty("--opacity", "0.65");
        };

        button.addEventListener("mousemove", handleMouseMove);
        button.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            if (button) {
                button.removeEventListener("mousemove", handleMouseMove);
                button.removeEventListener("mouseleave", handleMouseLeave);
            }
        };
    }, []);

    return (
        <button
            ref={buttonRef}
            className={`gravityButton 
            ${className} 
            relative 
            rounded-xl
            text-white 
            py-2 
            px-4 
            cursor-pointer 
            transition-transform 
            duration-300
            `}
            style={{'--tx': '0px', '--ty': '0px', '--opacity': '0.65'} as React.CSSProperties}
        >
            {children}
        </button>
    );
};

export default GravityButton;