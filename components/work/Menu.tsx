'use client'
import React, {useEffect, useRef, useState} from 'react';
import gsap from "gsap";
import {getMousePos} from "@/lib/utils";

interface MenuItemProps {
    text: string;
    subText: string;
    imgSrc: string;
}


const MenuItem: React.FC<MenuItemProps> = ({text, subText, imgSrc}) => {
    const itemRef = useRef<HTMLAnchorElement>(null);
    const revealRef = useRef<HTMLDivElement>(null);
    const revealInnerRef = useRef<HTMLDivElement>(null);
    const revealImageRef = useRef<HTMLDivElement>(null);

    const [mousePos, setMousePos] = useState({x: 0, y: 0});
    const [mousePosCache, setMousePosCache] = useState({x: 0, y: 0});
    const [direction, setDirection] = useState({x: 0, y: 0});

    useEffect(() => {
        // Update mouse position
        const handleMouseMove = (ev: MouseEvent) => {
            const newMousePos = getMousePos(ev);
            setDirection({
                x: mousePosCache.x - newMousePos.x,
                y: mousePosCache.y - newMousePos.y
            });
            setMousePosCache(mousePos);
            setMousePos(newMousePos);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mousePos, mousePosCache]);


    useEffect(() => {
        const item = itemRef.current;
        const reveal = revealRef.current;
        const revealInner = revealInnerRef.current;
        const revealImage = revealImageRef.current;

        const calcBounds = () => {
            return {
                el: item?.getBoundingClientRect(),
                reveal: reveal?.getBoundingClientRect()
            };
        };

        const getMouseArea = (bounds: { el: any; reveal?: DOMRect; }) => {
            return bounds.el.top + bounds.el.height / 2 <= window.innerHeight / 2 ? 'up' : 'down';
        };

        const showImage = () => {
            gsap.killTweensOf([revealInner, revealImage]);

            const bounds = calcBounds();
            const mouseArea = getMouseArea(bounds);

            gsap.timeline({
                onStart: () => {
                    gsap.set(reveal, {opacity: 1});
                    gsap.set(item, {zIndex: 10});
                    gsap.set(revealImage, {opacity: 1, y: '100%', x: '100%'});
                }
            })
                .to(revealInner, 0.6, {
                    ease: 'expo.out',
                    startAt: {scale: 0.6},
                    scale: 1
                })
                .to(revealImage, 0.6, {
                    ease: 'expo.out',
                    startAt: {scale: 1.4, opacity: 0},
                    scale: 1,
                    opacity: 1,
                    y: '0%',
                    x: '0%'
                }, 0);
        };

        const hideImage = () => {
            gsap.killTweensOf([revealInner, revealImage]);

            gsap.timeline({
                onComplete: () => {
                    gsap.set(item, {zIndex: 1});
                    gsap.set(reveal, {opacity: 0});
                    gsap.set(revealImage, {opacity: 0, y: '100%', x: '100%'});
                }
            })
                .to(revealInner, 0.6, {
                    ease: 'expo.out',
                    scale: 0.6,
                    opacity: 0
                })
                .to(revealImage, 0.6, {
                    ease: 'expo.out',
                    scale: 1.4
                }, 0);
        };

        item?.addEventListener('mouseenter', showImage);
        item?.addEventListener('mouseleave', hideImage);

        return () => {
            item?.removeEventListener('mouseenter', showImage);
            item?.removeEventListener('mouseleave', hideImage);
        };
    }, [])


    return (
        <a ref={itemRef} className="relative block p-4 group hover:cursor-pointer" data-img={imgSrc}>
            <span className="block text-lg font-semibold">
                <span>{text}</span>
            </span>
            <span className="block text-sm">{subText}</span>

            <div ref={revealRef} className="absolute top-0 right-[50%] w-56 h-80 opacity-0 pointer-events-none">
                <div ref={revealInnerRef} className="w-full h-full overflow-hidden">
                    <div ref={revealImageRef} className="w-full h-full bg-center bg-cover"
                         style={{backgroundImage: `url(${imgSrc})`}}></div>
                </div>
            </div>
        </a>
    );
};

const Menu: React.FC = () => {
    const menuItems = [
        {text: 'Maria Costa', subText: 'Style Reset 66 Berlin', imgSrc: '/img/1.png'},
        {text: 'Franklin Roth', subText: 'Amber Convention London', imgSrc: '/img/2.png'},
        // Add more items as needed
    ];

    return (
        <nav className="flex flex-col space-y-4">
            {menuItems.map((item, index) => (
                <MenuItem key={index} {...item} />
            ))}
        </nav>
    );
};


export default Menu;
