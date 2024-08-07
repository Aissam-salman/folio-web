'use client'
import React, {useCallback, useEffect, useRef, useState} from 'react';
import gsap from "gsap";
import ScrambleText from "@/lib/ScrambleText";

interface MenuItemProps {
    text: string;
    subText: string;
    imgSrc: string;
    linkWork: string;
}


const MenuItem: React.FC<MenuItemProps> = ({text, subText, imgSrc, linkWork}) => {
    const itemRef = useRef<HTMLAnchorElement>(null);
    const revealRef = useRef<HTMLDivElement>(null);
    const revealInnerRef = useRef<HTMLDivElement>(null);
    const revealImageRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLSpanElement>(null);
    const subTextRef = useRef<HTMLSpanElement>(null);
    const [scramble, setScramble] = useState<ScrambleText | null>();

    const [isScrambling, setIsScrambling] = useState(false);

    const handleMouseEnter = useCallback(() => {
        if (isScrambling) return;

        const text = textRef.current;

        if (text) {
            const options = {
                timeOffset: 100,
                chars: [
                    '安', '以', '宇', '衣', '於',
                    '加', '幾', '久', '計', '己',
                    '左', '之', '寸', '世', '曽',
                    '太', '知', '川', '天', '止',
                    '奈', '仁', '奴', '称', '乃',
                    '波', '比', '不', '部', '保',
                    '末', '美', '武', '女', '毛',
                    '也', '為', '由', '恵', '与',
                    '良', '利', '留', '礼', '呂',
                    '和', '遠', '无'
                ],
                callback: function () {
                    setScramble(null);
                    setIsScrambling(false);
                }
            }

            const scrambleText = new ScrambleText(text, options).play().start();
            scrambleText.start();
            setScramble(scrambleText);
            setIsScrambling(true);
        }
    }, [isScrambling]);

    const handleMouseLeave = useCallback(() => {
        if (scramble) {
            scramble.stop();
            setIsScrambling(false);
        }
    }, [scramble]);

    useEffect(() => {
        const item = itemRef.current;
        const reveal = revealRef.current;
        const revealInner = revealInnerRef.current;
        const revealImage = revealImageRef.current;
        const text = textRef.current;
        const subText = subTextRef.current;


        const showImage = () => {
            // Stop any ongoing animations
            gsap.killTweensOf([revealInner, revealImage]);

            gsap.timeline({
                onStart: () => {
                    // Ensure the reveal element and image are visible at the start
                    gsap.set(reveal, {opacity: 1});
                    gsap.set(item, {zIndex: 10});
                    gsap.set(revealImage, {opacity: 0, y: '300%', scale: 1});
                    gsap.set(text, {scale: 1, color: '#7C88C3'});
                    gsap.set(subText, {scale: 1, color: '#C3B27C'});

                }
            })
                .to(revealImage, 0.6, {
                    ease: 'expo.out',
                    opacity: 1,
                    y: '0%',
                    scale: 1,
                })
                .to(revealInner, 0.6, {
                    ease: 'expo.out',
                    scale: 1.3
                }, 0)
                .to(subText, 0.1, {
                    color: '#C3B27C',
                })
                .to(text, 0.1, {
                    scale: 2,
                    color: '#7C88C3',
                })
        };

        const hideImage = () => {
            // Stop any ongoing animations
            gsap.killTweensOf([revealInner, revealImage]);

            gsap.timeline({
                onComplete: () => {
                    // Reset the zIndex and opacity after the animation completes
                    gsap.set(item, {zIndex: 1});
                    gsap.set(reveal, {opacity: 0});
                    gsap.set(revealImage, {opacity: 0, y: '100%', scale: 1.4});
                }
            })
                .to(revealInner, 0.4, {
                    ease: 'expo.out',
                    scale: 0.6
                })
                .to(revealImage, 0.4, {
                    ease: 'expo.out',
                    scale: 1.4,
                    opacity: 0,
                    y: '100%'
                }, 0)
                .to(text, 0.3, {
                    scale: 1.3,
                    color: 'white',
                })
                .to(subText, 0.1, {
                    color: 'transparent',
                })
        };


        item?.addEventListener('mouseenter', showImage);
        item?.addEventListener('mouseleave', hideImage);

        return () => {
            item?.removeEventListener('mouseenter', showImage);
            item?.removeEventListener('mouseleave', hideImage);
        };
    }, [])


    return (
        <a href={linkWork} target={`_blank`} ref={itemRef} className="relative block p-4 group hover:cursor-pointer"
           data-img={imgSrc}
           onMouseMove={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <span className="block text-7xl text-dun-900 font-semibold">
                <span ref={textRef}>{text}</span>
            </span>
            <span className="block text-xl text-transparent" ref={subTextRef}>{subText}</span>

            <div ref={revealRef}
                 className={`absolute top-0 sm:left-[40%] left-[25%] w-56 h-80 opacity-0 pointer-events-none`}>
                <div ref={revealInnerRef} className="w-full h-full overflow-hidden">
                    <div ref={revealImageRef} className="w-full h-full bg-center bg-cover"
                         style={{backgroundImage: `url(${imgSrc})`}}></div>
                </div>
            </div>
        </a>
    );
};

export default MenuItem;