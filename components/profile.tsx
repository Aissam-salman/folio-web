import React from 'react';
import Image from "next/image";

const Profile = () => {
    return (
        <>
            <div
                className="scroll-auto flex align-middle justify-center h-[100vh] p-10 md:px-[250px] ">
                <div className="flex gap-10 flex-row opacity on">
                    <div className="flex items-start justify-center">
                        <Image src="/img/profil-aissam.svg" alt="Profile Image"
                               className={``}
                               width={300}
                               height={300}/>
                    </div>
                    <div className="text-dun-900 gap-5 flex flex-col items-start">
                        <div className={`flex justify-items-center gap-10`}>
                            <Image
                                src="/img/rocket.webp"
                                alt="rocket"
                                width={50}
                                height={50}
                                className={`-translate-y-3 w-10 h-10 sm:w-15 sm:h-15 `}
                            />
                            <div className={`font-black text-3xl`}>
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