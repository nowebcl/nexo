"use client";

import { motion } from "framer-motion";
import PricingCard from "../PricingCard";
import { BarChart3, Zap, Users2, Rocket } from "lucide-react";

const plans = [
    {
        name: "Básico",
        price: "$98.990",
        features: [
            "1 Red Social",
            "4 Posts/Stories al mes",
            "Optimización de perfil básica",
            "Soporte por Email",
        ],
        highlighted: false,
    },
    {
        name: "Esencial",
        price: "$179.990",
        features: [
            "2 Redes Sociales",
            "8 Posts/Stories (IA Copy)",
            "Gestión ligera de comunidad",
            "Gestión de anuncios básica",
        ],
        highlighted: true,
    },
    {
        name: "Pro",
        price: "$249.990",
        features: [
            "2 Redes incl. TikTok",
            "10 Posts / 15 Stories",
            "4 Reels editados con IA",
            "Reunión mensual de estrategia",
        ],
        highlighted: false,
    },
];

const bentoServices = [
    {
        title: "Meta Ads Pro",
        desc: "Optimización de campañas para maximizar el ROI real.",
        icon: BarChart3,
        size: "large",
    },
    {
        title: "Contenido Dinámico",
        desc: "Media inmersiva para redes sociales de alto impacto.",
        icon: Zap,
        size: "small",
    },
    {
        title: "Crecimiento de Audiencia",
        desc: "Estrategias para sumar seguidores reales y fieles.",
        icon: Users2,
        size: "small",
    },
    {
        title: "Digitalización PYME",
        desc: "Soluciones para negocios en Los Lagos y todo Chile.",
        icon: Rocket,
        size: "medium",
    },
];

export default function ServiceBento() {
    return (
        <section className="py-32 px-6 bg-black">
            <div className="container mx-auto">
                {/* SERVICIOS BENTO GRID */}
                <div className="mb-32">
                    <div className="mb-16 text-center lg:text-left">
                        <span className="text-silver/40 text-xs tracking-[0.4em] font-bold uppercase">Soluciones</span>
                        <h2 className="text-4xl md:text-6xl font-syne font-bold text-white mt-4">
                            NUESTROS <span className="silver-gradient">SERVICIOS.</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:auto-rows-[240px]">
                        {/* Meta Ads Pro - Large */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="md:col-span-2 md:row-span-2 glass-premium rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-between group min-h-[320px] md:min-h-0"
                        >
                            <div className="w-12 h-12 rounded-2xl bg-silver/10 flex items-center justify-center text-silver group-hover:scale-110 transition-transform mb-6 md:mb-0">
                                <BarChart3 size={24} />
                            </div>
                            <div>
                                <h3 className="text-2xl md:text-3xl font-syne font-bold text-white mb-4">Meta Ads Pro</h3>
                                <p className="text-white/40 font-light leading-relaxed text-sm md:text-base">
                                    No solo lanzamos anuncios. Diseñamos ecosistemas de conversión que maximizan cada peso de tu inversión, utilizando IA para predecir el comportamiento del consumidor.
                                </p>
                            </div>
                        </motion.div>

                        {/* Contenido Dinámico - Medium (cambiado de small para mejor balance) */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="md:col-span-1 md:row-span-1 glass rounded-[2.5rem] p-8 flex flex-col justify-between min-h-[240px] md:min-h-0"
                        >
                            <Zap className="text-silver mb-4 md:mb-0" size={24} />
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">Media Dinámica</h3>
                                <p className="text-white/30 text-xs leading-relaxed">Videos inmersivos y contenido de alto impacto generado con IA.</p>
                            </div>
                        </motion.div>

                        {/* Crecimiento - Small */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="md:col-span-1 md:row-span-1 glass rounded-[2.5rem] p-8 flex flex-col justify-between min-h-[240px] md:min-h-0"
                        >
                            <Users2 className="text-silver mb-4 md:mb-0" size={24} />
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">Comunidades</h3>
                                <p className="text-white/30 text-xs leading-relaxed">Crecimiento orgánico y lealtad de marca real.</p>
                            </div>
                        </motion.div>

                        {/* Digitalización PYME - Medium */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="md:col-span-2 md:row-span-1 glass-premium rounded-[2.5rem] p-8 md:p-10 flex flex-col md:flex-row items-center gap-6 md:gap-8 min-h-[200px] md:min-h-0 text-center md:text-left"
                        >
                            <div className="shrink-0 w-16 h-16 rounded-full border border-silver/20 flex items-center justify-center text-silver">
                                <Rocket size={28} />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-1">Digitalización PYME</h3>
                                <p className="text-white/40 text-sm font-light">Transformamos negocios tradicionales en potencias digitales en la Región de Los Lagos.</p>
                            </div>
                        </motion.div>
                    </div>
                </div>

            </div>
        </section>
    );
}
