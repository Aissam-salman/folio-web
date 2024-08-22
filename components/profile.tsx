"use client"
import React from 'react';
import Image from "next/image";
import {useMediaQuery} from "usehooks-ts";
import {cn} from "@/lib/utils";

const Profile = () => {
    const isMobile = useMediaQuery("(max-width: 650px)");
    return (
        <>
            <div
                className="scroll-auto flex-col flex align-middle justify-center sm:h-[100vh] p-10 md:px-[250px] ">
                <div className="flex gap-10 flex-col sm:flex-row opacity ">
                    <div className="flex items-start justify-center">
                        <Image src="/img/profil-aissam.svg" alt="Profile Image"
                               className={`w-25`}
                               width={200}
                               height={200}
                        />
                    </div>
                    <div className="text-dun-900 gap-5 flex flex-col items-start">
                        <div className={"flex sm:flex-col justify-items-center gap-10"}>
                            <Image
                                src="/img/rocket.webp"
                                alt="rocket"
                                width={30}
                                height={30}
                                className={
                                    cn(isMobile && "hidden",
                                        `-translate-y-3 w-10 h-10 sm:w-15 sm:h-15`)
                                }
                            />
                            <div className={cn(
                                isMobile && "text-center",
                                `font-black text-lg sm:text-3xl`)}>
                                Hi, I&apos;m Developer Java & JS.
                            </div>
                        </div>
                        <div className={`text-white text-left text-3xl font-light w-[50vw]`}>
                            With over 2 years of experience in development,
                            specializing in crafting and delivering rock-solid IT solutions.
                            Passionate about code, I’m on the hunt for a new adventure to
                            contribute to exciting and ambitious projects.
                            If my code could cook, it would be a Michelin-starred chef.
                            Ready to whip up some innovative software !
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;