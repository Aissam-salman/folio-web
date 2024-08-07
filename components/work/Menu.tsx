import React, {useEffect, useRef} from 'react';
import gsap from "gsap";

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

    useEffect(() => {
        const item = itemRef.current;
        const reveal = revealRef.current;
        const revealInner = revealInnerRef.current;
        const revealImage = revealImageRef.current;

        const onMouseEnter = () => {
            gsap.killTweensOf([revealInner, revealImage]);

            gsap.timeline({
                onStart: () => {
                    gsap.set(reveal, {opacity: 1});
                    gsap.set(item, {zIndex: 10});
                }
            })
                .to(revealInner, 0.2, {x: 'O%'})
                .to(revealImage, 0.2, {x: 'O%'}, 0);
        };

        const onMouseLeave = () => {
            gsap.killTweensOf([revealInner, revealImage]);

            gsap.timeline({
                onComplete: () => {
                    gsap.set(reveal, {opacity: 0});
                    gsap.set(item, {zIndex: 1});
                }
            })
                .to(revealInner, 0.2, {x: '10O%'})
                .to(revealImage, 0.2, {x: '-10O%'}, 0);
        };

        item?.addEventListener('mouseenter', onMouseEnter);
        item?.addEventListener('mouseleave', onMouseLeave);

        return () => {
            item?.removeEventListener('mouseenter', onMouseEnter);
            item?.removeEventListener('mouseleave', onMouseLeave);
        };
    }, [])


    return (
        <a ref={itemRef} className="relative block p-4 group" data-img={imgSrc}>
      <span className="block text-lg font-semibold">
        <span>{text}</span>
      </span>
            <span className="block text-sm">{subText}</span>
            <div ref={revealRef} className="absolute top-0 left-0 w-56 h-80 opacity-0 pointer-events-none">
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
