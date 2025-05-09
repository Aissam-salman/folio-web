import Image from 'next/image';
import Link from 'next/link';

export default function MobileAppCaseStudy() {
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
                        <span className="text-shonen-red">EdTech Mobile</span> - Plateforme éducative
                    </h1>
                    <p className="text-xl text-gray-400 mb-12">Application cross-platform avec gamification et système d'abonnement</p>
                    <div className={"relative"}>
                        <Image
                            src="/home_page.png"
                            alt="Interface principale de l'application"
                            width={200}
                            height={400}
                            className="rounded-xl mx-auto"
                            priority
                        />
                    </div>

                </div>
            </section>

            {/* Fonctionnalités clés */}
            <section className="py-20 bg-gradient-to-b from-shonen-red/10 to-black">
                <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
                    <div className="p-6 border border-shonen-red/20 rounded-xl">
                        <h3 className="text-xl font-bold text-shonen-red mb-4">🎮 Cours gamifiés & Chat</h3>
                        <p className="text-gray-400">
                            Système de progression avec :<br/>
                            - Badges et récompenses<br/>
                            - Achievements dynamiques
                            - Groupes de discussions
                            - Adhesions Groupes
                        </p>
                    </div>

                    <div className="p-6 border border-shonen-red/20 rounded-xl">
                        <h3 className="text-xl font-bold text-shonen-red mb-4">💳 Paiements</h3>
                        <p className="text-gray-400">
                            Intégration Stripe avec :<br/>
                            - Abonnements récurrents<br/>
                            - Portail client
                        </p>
                    </div>

                    <div className="p-6 border border-shonen-red/20 rounded-xl">
                        <h3 className="text-xl font-bold text-shonen-red mb-4">🤖 Automatisation</h3>
                        <p className="text-gray-400">
                            Workflow Make.com :<br/>
                            - Sync avec Brevo<br/>
                            - Base de données unifiée
                        </p>
                    </div>
                </div>
            </section>

            {/* Architecture technique */}
            <section className="py-20 container mx-auto px-6">
                <h2 className="text-4xl font-bold mb-16 text-shonen-red text-center">Stack technique</h2>

                <div className="grid md:grid-cols-2 gap-12 mb-20">
                    <div className="relative h-[500px] rounded-xl overflow-hidden border border-shonen-red/30">
                        <Image
                            src="/stack.png"
                            alt="Diagramme d'architecture"
                            fill
                            className="object-contain p-2"
                        />
                    </div>
                    <div className="flex flex-col justify-center space-y-6">
                        <div>
                            <h3 className="text-2xl font-bold text-shonen-red mb-4">FlutterFlow Core</h3>
                            <ul className="list-disc pl-6 text-gray-400">
                                <li>UI/UX personnalisée</li>
                                <li>Gestion des états</li>
                                <li>Routing avancé</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-shonen-red mb-4">API & Intégrations</h3>
                            <ul className="list-disc pl-6 text-gray-400">
                                <li>REST API custom</li>
                                <li>Webhooks Make.com</li>
                                <li>SDK Stripe</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Processus de déploiement */}
            <section className="py-20 bg-shonen-red/10">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-bold mb-16 text-shonen-red text-center">Déploiement</h2>

                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div className="space-y-6">
                            <div className="p-6 border border-shonen-red/20 rounded-xl">
                                <h3 className="text-xl font-bold text-shonen-red mb-4">📱 Stores d'applications</h3>
                                <div className="flex align-middle gap-4">
                                    <Image
                                        src="/testflight.webp"
                                        alt="TestFlight"
                                        width={50}
                                        height={50}
                                        className={"w-12 h-12"}
                                    />
                                    <Image
                                        src="/googleplay.webp"
                                        alt="Google Play Beta"
                                        width={50}
                                        height={50}
                                        className={"w-12 h-12"}
                                    />
                                </div>
                            </div>

                            <div className="p-6 border border-shonen-red/20 rounded-xl">
                                <h3 className="text-xl font-bold text-shonen-red mb-4">🔧 Environnement</h3>
                                <ul className="list-disc pl-6 text-gray-400">
                                    <li>Firebase Backend</li>
                                    <li>Environnement de staging</li>
                                    <li>CI/CD automatisée dans flutterflow</li>
                                </ul>
                            </div>
                        </div>

                        <div className="relative h-96 rounded-xl overflow-hidden border border-shonen-red/30">
                            <Image
                                src="/CI-CD-pipeline-visualization.webp"
                                alt="Console de déploiement"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Roadmap */}
            <section className="py-20 container mx-auto px-6">
                <h2 className="text-4xl font-bold mb-16 text-shonen-red text-center">Prochaines étapes</h2>

                <div className="max-w-3xl mx-auto space-y-8">
                    <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-shonen-red rounded-full flex items-center justify-center">1</div>
                        <div>
                            <h3 className="text-xl font-bold mb-2">Phase de beta-test</h3>
                            <p className="text-gray-400">Collecte des feedbacks utilisateurs et A/B testing</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-shonen-red rounded-full flex items-center justify-center">3</div>
                        <div>
                            <h3 className="text-xl font-bold mb-2">Publication finale</h3>
                            <p className="text-gray-400">Déploiement sur les stores officiels</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Final */}
            <section className="py-32 container mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold mb-8 text-shonen-red">Un projet mobile ?</h2>
                <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
                    De la conception au déploiement sur les stores, je gère l'ensemble du processus
                </p>
                <Link
                    href="/#contact"
                    className="px-8 py-3 bg-shonen-red rounded-full hover:bg-shonen-red/80 transition-colors"
                >
                    Planifier un appel
                </Link>
            </section>
        </div>
    )
}