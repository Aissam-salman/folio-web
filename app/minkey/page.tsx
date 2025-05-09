// app/projets/minkey/page.tsx
import Image from 'next/image';
import Link from 'next/link';

export default function MinkeyCaseStudy() {
    return (
        <div className="min-h-screen bg-black text-white">
            {/* Navigation */}
            <nav className="fixed w-full top-0 z-50 bg-black/80 backdrop-blur-sm border-b border-shonen-red/20">
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <Link href="/" className="text-2xl font-bold text-shonen-red">By Salman</Link>
                    <Link href="/#projects" className="hover:text-shonen-red transition-colors">
                        ← Retour aux projets
                    </Link>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="pt-32 pb-20 container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-5xl font-bold mb-6">
                        <span className="text-shonen-red"><a href="https://minkey.fr">Minkey.fr</a></span> - Optimisation WordPress
                    </h1>
                    <p className="text-xl text-gray-400 mb-12">Refonte complète et optimisation des performances</p>

                    <div className="relative h-96 w-full rounded-3xl overflow-hidden border border-shonen-red/30">
                        <Image
                            src="/1.png"
                            alt="Comparatif avant/après Minkey"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>
            </section>

            {/* Détails du projet */}
            <section className="py-20 bg-gradient-to-b from-shonen-red/10 to-black">
                <div className="container mx-auto px-6 grid md:grid-cols-3 gap-12">
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-shonen-red">Résultats clés</h2>
                        <div className="p-6 border border-shonen-red/20 rounded-xl">
                            <p className="text-4xl font-bold mb-2">+30%</p>
                            <p className="text-gray-400">Score PageSpeed</p>
                        </div>
                        <div className="p-6 border border-shonen-red/20 rounded-xl">
                            <p className="text-4xl font-bold mb-2">-10</p>
                            <p className="text-gray-400">Plugins désactivés</p>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-shonen-red">Démarche</h2>
                        <div className="space-y-4 text-gray-400">
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Audit complet des plugins</li>
                                <li>Refonte UI/UX avec Figma</li>
                                <li>Migration vers Elementor Pro</li>
                                <li>Optimisation image, animation, code</li>
                            </ul>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-shonen-red">Outils</h2>
                        <div className="flex flex-wrap gap-3">
                            {['WordPress', 'Elementor', 'Figma'].map((tech) => (
                                <span key={tech} className="px-4 py-2 bg-shonen-red/10 text-shonen-red rounded-full">
                  {tech}
                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Processus d'optimisation */}
            <section className="py-20 container mx-auto px-6">
                <h2 className="text-4xl font-bold mb-16 text-shonen-red text-center">Feuille de route</h2>

                <div className="grid md:grid-cols-2 gap-12 mb-20">
                    <div className="relative h-96 rounded-xl overflow-hidden border border-shonen-red/30">
                        <Image
                            src="/maquette-figma.png"
                            alt="Audit des plugins"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <div className="flex flex-col justify-center">
                        <h3 className="text-2xl font-bold mb-4">Phase design</h3>
                        <ul className="space-y-3 text-shonen-red">
                            <li>• Analyse besoins client</li>
                            <li>• Iteration Maquette Figma</li>
                            <li>• Integration Elementor</li>
                        </ul>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 mb-20">
                    <div className="flex flex-col justify-center order-2 md:order-1">
                        <h3 className="text-2xl font-bold mb-4">Optimisations techniques</h3>
                        <div className="space-y-4 text-gray-400">
                            <p>Actions réalisées :</p>
                            <ul className="list-disc pl-6">
                                <li>Implémentation de Lazy Loading</li>
                                <li>Configuration de cache avancé</li>
                                <li>Minification des assets</li>
                            </ul>
                        </div>
                    </div>
                    <div className="relative h-96 rounded-xl overflow-hidden border border-shonen-red/30 order-1 md:order-2">
                        <Image
                            src="/perf.png"
                            alt="Résultats d'optimisation"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>
            </section>

            {/* Gallerie avant/après */}
            <section className="py-20 bg-shonen-red/10">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-bold mb-16 text-shonen-red text-center">Évolution du design</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="text-center">
                            <h3 className="text-2xl mb-4">Avant</h3>
                            <div className="relative aspect-video overflow-hidden rounded-xl border border-shonen-red/30">
                                <Image
                                    src="/minkey-avant.png"
                                    alt="Design avant refonte"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                        <div className="text-center">
                            <h3 className="text-2xl mb-4">Après</h3>
                            <div className="relative aspect-video overflow-hidden rounded-xl border border-shonen-red/30">
                                <Image
                                    src="/1.png"
                                    alt="Design après refonte"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Final */}
            <section className="py-32 container mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold mb-8 text-shonen-red">Besoin d'un nouveau design ?</h2>
                <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
                    Je peux redesigner & optimiser votre site
                </p>
                <Link
                    href="/#contact"
                    className="px-8 py-3 bg-shonen-red rounded-full hover:bg-shonen-red/80 transition-colors"
                >
                    Améliorer mon site
                </Link>
            </section>
        </div>
    )
}