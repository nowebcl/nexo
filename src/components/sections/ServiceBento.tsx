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

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[240px]">
                        {/* Meta Ads Pro - Large */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="md:col-span-2 md:row-span-2 glass-premium rounded-[2.5rem] p-10 flex flex-col justify-between group"
                        >
                            <div className="w-12 h-12 rounded-2xl bg-silver/10 flex items-center justify-center text-silver group-hover:scale-110 transition-transform">
                                <BarChart3 size={24} />
                            </div>
                            <div>
                                <h3 className="text-3xl font-syne font-bold text-white mb-4">Meta Ads Pro</h3>
                                <p className="text-white/40 font-light leading-relaxed">
                                    No solo lanzamos anuncios. Diseñamos ecosistemas de conversión que maximizan cada peso de tu inversión, utilizando IA para predecir el comportamiento del consumidor.
                                </p>
                            </div>
                        </motion.div>

                        {/* Contenido Dinámico - Small */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="md:col-span-1 md:row-span-1 glass rounded-[2.5rem] p-8 flex flex-col justify-between"
                        >
                            <Zap className="text-silver" size={24} />
                            <h3 className="text-xl font-bold text-white">Contenido Dinámico</h3>
                        </motion.div>

                        {/* Crecimiento - Small */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="md:col-span-1 md:row-span-1 glass rounded-[2.5rem] p-8 flex flex-col justify-between"
                        >
                            <Users2 className="text-silver" size={24} />
                            <h3 className="text-xl font-bold text-white">Crecimiento real</h3>
                        </motion.div>

                        {/* Digitalización PYME - Medium */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="md:col-span-2 md:row-span-1 glass-premium rounded-[2.5rem] p-10 flex items-center gap-8"
                        >
                            <div className="shrink-0 w-16 h-16 rounded-full border border-silver/20 flex items-center justify-center text-silver">
                                <Rocket size={28} />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-1">Digitalización PYME</h3>
                                <p className="text-white/30 text-sm font-light">Especialmente diseñado para la Región de Los Lagos.</p>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* PLANES DE PRECIOS */}
                <div className="pt-20 border-t border-white/5">
                    <div className="mb-20 text-center">
                        <span className="text-silver/40 text-xs tracking-[0.4em] font-bold uppercase">Membresías</span>
                        <h2 className="text-4xl md:text-5xl font-syne font-bold text-white mt-4">
                            PLANES <span className="silver-gradient">ESTRATÉGICOS.</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                        {plans.map((plan, i) => (
                            <PricingCard key={i} {...plan} />
                        ))}
                    </div>

                    {/* Extras */}
                    <div className="glass rounded-[2rem] p-8 flex flex-col md:flex-row items-center justify-between gap-8 border-silver/10">
                        <div className="flex items-center gap-6">
                            <div className="w-12 h-12 rounded-full bg-silver flex items-center justify-center text-black font-bold">
                                +
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-white tracking-tight uppercase">Potencia tu plan</h4>
                                <p className="text-white/40 text-sm">Añade Reels adicionales y gestión de anuncios avanzada.</p>
                            </div>
                        </div>
                        <div className="text-2xl font-syne font-bold text-silver">
                            $35.000 <span className="text-xs text-white/30 uppercase tracking-widest font-normal">/ Reel Extra</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
