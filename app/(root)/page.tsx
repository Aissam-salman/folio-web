import React from "react";

export default function Home() {
    return (
            <main className="min-h-screen bg-black text-white font-sans overflow-hidden">
                {/* Navigation fixe */}
                <nav className="fixed w-full top-0 z-50 bg-black/80 backdrop-blur-sm border-b border-shonen-red/20">
                    <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                        <span className="text-2xl font-bold text-shonen-red">By Salman</span>
                        <div className="flex gap-8">
                            <a href="#projects" className="hover:text-shonen-red transition-colors">Projets</a>
                            <a href="#skills" className="hover:text-shonen-red transition-colors">Expertises</a>
                            <a href="#contact" className="hover:text-shonen-red transition-colors">Contact</a>
                        </div>
                    </div>
                </nav>

                {/* Section Hero avec effet parallax */}
                <section className="h-screen flex items-center justify-center relative">
                    <div className="absolute inset-0 bg-gradient-to-b from-shonen-red/10 to-black z-0"></div>
                    <div className="container mx-auto px-6 relative z-10">
                        <div className="max-w-4xl">
                            <h1 className="text-6xl font-bold mb-6 leading-tight">
                                <span className="text-shonen-red">Développeur</span> Full Stack<br/>
                                <span className="text-gray-400">Spécialisé PHP & React</span>
                            </h1>
                            <div className={ "text-gray-400 mb-12"}>
                                J’aide les entrepreneurs à transformer leurs idées en applications web sur mesure,
                                en combinant un back-end robuste (PHP/Java) et un front-end fluide
                                (React/TypeScript ou Flutter), avec une vraie attention à l’UX et aux besoins du terrain.
                            </div>
                            <div className="flex gap-4">
                                <a href="#contact" className="px-8 py-3 bg-shonen-red rounded-full hover:bg-shonen-red/80 transition-colors">
                                    Contactez-moi
                                </a>
                                <a href="#projects" className="px-8 py-3 border border-shonen-red rounded-full hover:bg-shonen-red/10 transition-colors">
                                    Voir mes projets
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section Projets - Layout asymétrique */}
                <section id="projects" className="py-32 container mx-auto px-6">
                    <h2 className="text-4xl font-bold mb-16 text-shonen-red">Projets récents</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
                        {/* Projet 1 - Application Flutter */}
                        <div className="group relative">
                            <div className="absolute -inset-4 bg-gradient-to-r from-shonen-red/20 to-transparent rounded-xl transform group-hover:scale-[1.02] transition-all"></div>
                            <div className="relative p-8 bg-black rounded-xl border border-shonen-red/20">
                                <div className="mb-6">
                                    <span className="text-shonen-red">2024 - Present</span>
                                    <h3 className="text-3xl font-bold mt-2">Application Mobile</h3>
                                </div>
                                <p className="text-gray-400 mb-8">Développement d'une application cross-platform communautaire</p>
                                <div className="flex flex-wrap gap-3 mb-8">
                                    <span className="px-3 py-1 bg-shonen-red/10 text-shonen-red rounded-full">Flutterflow</span>
                                    <span className="px-3 py-1 bg-shonen-red/10 text-shonen-red rounded-full">Firebase</span>
                                    <span className="px-3 py-1 bg-shonen-red/10 text-shonen-red rounded-full">API</span>
                                </div>
                                <a href="/app-mobile" className="inline-flex items-center gap-2 hover:text-shonen-red transition-colors">
                                    Découvrir le projet →
                                </a>
                            </div>
                        </div>
                        {/* Projet 1 - Minkey */}
                        <div className="group relative">
                            <div className="absolute -inset-4 bg-gradient-to-r from-shonen-red/20 to-transparent rounded-xl transform group-hover:scale-[1.02] transition-all"></div>
                            <div className="relative p-8 bg-black rounded-xl border border-shonen-red/20">
                                <div className="mb-6">
                                    <span className="text-shonen-red">2024</span>
                                    <h3 className="text-3xl font-bold mt-2">Refonte Minkey.fr</h3>
                                </div>
                                <p className="text-gray-400 mb-8">Redesign du site web avec optimisation des performances</p>
                                <div className="flex flex-wrap gap-3 mb-8">
                                    <span className="px-3 py-1 bg-shonen-red/10 text-shonen-red rounded-full">Wordpress</span>
                                    <span className="px-3 py-1 bg-shonen-red/10 text-shonen-red rounded-full">Elementor</span>
                                    <span className="px-3 py-1 bg-shonen-red/10 text-shonen-red rounded-full">Figma</span>
                                </div>
                                <a href="/minkey" className="inline-flex items-center gap-2 hover:text-shonen-red transition-colors">
                                    Découvrir le projet →
                                </a>
                            </div>
                        </div>


                    </div>
                </section>

                {/* Section Compétences - Timeline moderne */}
                <section id="skills" className="py-32 bg-gradient-to-b from-shonen-red/10 to-black">
                    <div className="container mx-auto px-6">
                        <h2 className="text-4xl font-bold mb-16 text-shonen-red">Expertises clés</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="p-6 border border-shonen-red/20 rounded-xl">
                                <h3 className="text-2xl font-bold mb-4">Frontend</h3>
                                <ul className="space-y-2 text-gray-400">
                                    <li>React/Next.js</li>
                                    <li>State Management</li>
                                    <li>Design Systems</li>
                                    <li>Flutter</li>
                                </ul>
                            </div>
                            <div className="p-6 border border-shonen-red/20 rounded-xl">
                                <h3 className="text-2xl font-bold mb-4">Backend</h3>
                                <ul className="space-y-2 text-gray-400">
                                    <li>API Design</li>
                                    <li>Bases de données</li>
                                    <li>Authentification</li>
                                    <li>Securite</li>
                                </ul>
                            </div>
                            <div className="p-6 border border-shonen-red/20 rounded-xl">
                                <h3 className="text-2xl font-bold mb-4">DevOps</h3>
                                <ul className="space-y-2 text-gray-400">
                                    <li>CI/CD Pipelines</li>
                                    <li>Docker/Kubernetes</li>
                                    <li>Monitoring</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section Contact - Minimaliste */}
                <section id="contact" className="py-32 container mx-auto px-6">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-4xl font-bold mb-8 text-shonen-red">Collaborons ensemble</h2>
                        <p className="text-gray-400 mb-12">Disponible pour des missions freelance ou des opportunités de collaboration</p>
                        <div className="flex justify-center gap-6">
                            <a href="mailto:aissam.lamjadab@getmail.com" className="px-8 py-3 bg-shonen-red rounded-full hover:bg-shonen-red/80 transition-colors">
                                Envoyer un email
                            </a>
                            <a href="https://cal.com/aissam-n8jhuz/30min" target="_blank" className="px-8 py-3 border border-shonen-red rounded-full hover:bg-shonen-red/10 transition-colors">
                                Planifier un call
                            </a>
                        </div>
                    </div>
                </section>
            </main>
        )
}