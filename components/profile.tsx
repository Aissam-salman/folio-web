import React from 'react';
import Image from "next/image";

const Profile = () => {
    return (
        <div className="flex flex-col items-center py-20 p-4 md:p-10 lg:px-16">
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-10">
                <div className="relative flex justify-center">
                    <Image
                        src="/img/profil-aissam.svg"
                        alt="Profile Image"
                        width={200}
                        height={200}
                        className={"w-24 h-24  sm:w-full sm:h-full "}
                    />
                </div>
                <div className="text-dun-900 flex flex-col justify-center gap-3 sm:gap-6 items-center sm:items-start">
                    <div className="flex items-center gap-4 sm:gap-8">
                        <Image
                            src="/img/rocket.webp"
                            alt="rocket"
                            width={30}
                            height={30}
                            className="hidden sm:block w-10 h-10"
                        />
                        <div className="sm:text-left text-center font-black text-lg sm:text-2xl lg:text-3xl">
                            Hi, I&apos;m Developer Java & JS.
                        </div>
                    </div>
                    <div
                        className="text-white text-wrap text-left sm:text-left text-xl sm:text-2xl lg:text-3xl font-light max-w-3xl px-2">
                        With over 2 years of experience in development,
                        specializing in crafting and delivering rock-solid IT solutions.
                        Passionate about code, I’m on the hunt for a new adventure to
                        contribute to exciting and ambitious projects.
                        If my code could cook, it would be a Michelin-starred chef.
                        Ready to whip up some innovative software!
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
