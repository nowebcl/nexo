"use client";

import { motion } from "framer-motion";
import { Check, Plus, Info, Globe, Smartphone, Megaphone } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

const cmPlans = [
    {
        name: "Básico (Presencia)",
        price: "$55.990",
        quarterlyPrice: "$145.990",
        features: [
            "Creación de redes (Instagram, Facebook, TikTok)",
            "3 posts al mes (1 por semana)",
            "3 stories al mes (1 por semana)",
            "1.000 seguidores en Instagram",
        ],
        highlighted: false,
    },
    {
        name: "Estándar (Esencial)",
        price: "$75.990",
        quarterlyPrice: "$190.990",
        features: [
            "Creación de redes (IG, FB, TikTok)",
            "6 posts y 6 stories al mes",
            "Gestión de campañas pagadas (Ads)",
            "Optimización básica del perfil",
            "1.000 seguidores en IG y TikTok",
        ],
        highlighted: true,
    },
    {
        name: "Pro (Crecimiento)",
        price: "$150.990",
        quarterlyPrice: "$310.990",
        features: [
            "Creación de redes (IG, FB, TikTok)",
            "10 posts, 5 stories y 2 reels al mes",
            "Gestión de campañas pagadas",
            "Optimización básica del perfil",
            "1.000 seguidores en IG y TikTok",
        ],
        highlighted: false,
    },
];

const webServices = [
    {
        title: "Página Web Básica",
        price: "$30.000",
        icon: Globe,
        features: [
            "Diseño único impulsado por IA",
            "Conexión directa a WhatsApp",
            "Sin dominio personalizado",
        ],
    },
    {
        title: "Web + Dominio",
        price: "$50.000",
        icon: Smartphone,
        features: [
            "Diseño único con IA",
            "Conexión a WhatsApp",
            "Dominio pagado por adelantado",
        ],
    },
    {
        title: "Pack Web + Redes",
        price: "$65.000",
        icon: Megaphone,
        features: [
            "Diseño web IA + WhatsApp",
            "Plan 1 CM (Básico) incluido",
            "Requiere 30% adelantado ($19.500)",
        ],
    },
];

const extras = [
    { name: "Reel extra", price: "$20.000" },
    { name: "Pack 8 stories extra", price: "$20.000" },
    { name: "Logos básicos", price: "$15.000" },
    { name: "Soporte web", price: "$30.000/mes" },
];

export default function PricingSection() {
    return (
        <section className="py-24 px-6 bg-obsidian relative overflow-hidden" id="planes">
            <div className="container mx-auto relative z-10">
                {/* Header Section */}
                <div className="text-center mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-silver/40 text-xs tracking-[0.4em] font-bold uppercase"
                    >
                        Inversión Inteligente
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-syne font-bold text-white mt-4"
                    >
                        PLANES Y <span className="silver-gradient">SERVICIOS.</span>
                    </motion.h2>
                </div>

                {/* 1. Community Manager Section */}
                <div className="mb-32">
                    <div className="flex items-center gap-4 mb-12">
                        <div className="h-[1px] flex-grow bg-white/10"></div>
                        <h3 className="text-xl font-syne font-bold text-silver uppercase tracking-widest whitespace-nowrap">
                            Community Manager <span className="text-white/40 font-light">(VEXO DIGITAL)</span>
                        </h3>
                        <div className="h-[1px] flex-grow bg-white/10"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {cmPlans.map((plan, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ y: -10 }}
                                className={cn(
                                    "relative rounded-[2.5rem] p-8 flex flex-col border transition-all duration-500",
                                    plan.highlighted
                                        ? "glass-premium border-silver/30 shadow-[0_0_40px_rgba(168,169,173,0.1)]"
                                        : "glass border-white/5"
                                )}
                            >
                                {plan.highlighted && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-silver text-obsidian text-[10px] font-bold uppercase tracking-widest rounded-full">
                                        Recomendado
                                    </div>
                                )}

                                <div className="mb-8">
                                    <h4 className={cn(
                                        "text-sm uppercase tracking-[0.2em] mb-4 font-semibold",
                                        plan.highlighted ? "text-silver" : "text-white/40"
                                    )}>
                                        {plan.name}
                                    </h4>
                                    <div className="flex items-baseline gap-1 mb-2">
                                        <span className="text-4xl font-syne font-bold text-white">{plan.price}</span>
                                        <span className="text-white/30 text-sm">/mes</span>
                                    </div>
                                    <div className="inline-block px-3 py-1 rounded-lg bg-silver/10 border border-silver/20">
                                        <p className="text-[10px] text-silver font-medium uppercase tracking-wider">
                                            Oferta Trimestral: <span className="text-white">{plan.quarterlyPrice}</span>
                                        </p>
                                    </div>
                                </div>

                                <div className="flex-grow space-y-4 mb-8">
                                    {plan.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-start gap-3 group">
                                            <div className={cn(
                                                "mt-1 p-0.5 rounded-full",
                                                plan.highlighted ? "bg-silver/20 text-silver" : "bg-white/5 text-white/30"
                                            )}>
                                                <Check size={14} />
                                            </div>
                                            <p className="text-sm text-white/60 leading-relaxed font-light">{feature}</p>
                                        </div>
                                    ))}
                                </div>

                                <a
                                    href={`https://wa.me/56948991909?text=Hola!%20Me%20interesa%20el%20Plan%20CM%20${plan.name}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={cn(
                                        "w-full py-4 rounded-2xl text-xs font-bold tracking-widest uppercase transition-all duration-300 text-center",
                                        plan.highlighted
                                            ? "bg-silver text-obsidian hover:bg-white"
                                            : "bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-silver/40"
                                    )}
                                >
                                    Contratar Plan
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* 2. Web Services Section */}
                <div className="mb-32">
                    <div className="flex items-center gap-4 mb-12">
                        <div className="h-[1px] flex-grow bg-white/10"></div>
                        <h3 className="text-xl font-syne font-bold text-silver uppercase tracking-widest whitespace-nowrap">
                            Servicios Web Básicos
                        </h3>
                        <div className="h-[1px] flex-grow bg-white/10"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {webServices.map((service, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="glass rounded-[2rem] p-8 border-white/5 hover:border-silver/30 transition-all duration-500 group"
                            >
                                <div className="w-12 h-12 rounded-2xl bg-silver/10 flex items-center justify-center text-silver mb-6 group-hover:scale-110 transition-transform">
                                    <service.icon size={24} />
                                </div>
                                <h4 className="text-xl font-bold text-white mb-2">{service.title}</h4>
                                <div className="text-3xl font-syne font-bold text-silver mb-6">{service.price}</div>
                                <div className="space-y-3 mb-8">
                                    {service.features.map((f, idx) => (
                                        <div key={idx} className="flex items-center gap-2 text-white/40 text-sm">
                                            <Check size={14} className="text-silver/40" />
                                            <span>{f}</span>
                                        </div>
                                    ))}
                                </div>
                                <a
                                    href={`https://wa.me/56948991909?text=Hola!%20Me%20interesa%20el%20servicio%3A%20${service.title}`}
                                    className="text-xs font-bold text-silver uppercase tracking-widest hover:text-white transition-colors"
                                >
                                    Solicitar ahora →
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* 3. Extras and Requirements */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Complementos */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass-premium rounded-[2.5rem] p-10 border-silver/10"
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <Plus className="text-silver" size={24} />
                            <h3 className="text-2xl font-syne font-bold text-white uppercase tracking-tight">Complementos</h3>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {extras.map((extra, i) => (
                                <div key={i} className="flex justify-between items-center p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-silver/20 transition-all">
                                    <span className="text-white/60 text-sm">{extra.name}</span>
                                    <span className="text-silver font-bold text-sm tracking-tighter">{extra.price}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Requirements */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass rounded-[2.5rem] p-10 border-white/5 flex flex-col justify-between"
                    >
                        <div>
                            <div className="flex items-center gap-3 mb-8">
                                <Info className="text-silver" size={24} />
                                <h3 className="text-2xl font-syne font-bold text-white uppercase tracking-tight">Requisitos</h3>
                            </div>
                            <p className="text-white/40 text-sm leading-relaxed mb-6">
                                Para garantizar un lanzamiento exitoso y profesional de tu marca, el cliente deberá proporcionar:
                            </p>
                            <ul className="grid grid-cols-2 gap-4">
                                {[
                                    "Logo de la marca",
                                    "Colores corporativos",
                                    "10-20 fotos de calidad",
                                    "Información del rubro",
                                    "Acceso a cuentas",
                                    "Puntualidad en pagos"
                                ].map((req, i) => (
                                    <li key={i} className="flex items-center gap-2 text-xs text-white/60">
                                        <div className="w-1 h-1 rounded-full bg-silver"></div>
                                        {req}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="mt-10 p-4 rounded-xl bg-silver/5 border border-silver/10 text-center">
                            <p className="text-[10px] text-white/30 uppercase tracking-[0.2em] font-medium">
                                Los precios indicados no incluyen IVA si corresponde.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-silver/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-silver/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
        </section>
    );
}
