"use client";

import { motion } from "framer-motion";

const projects = [
    {
        title: "Maullín Último Bastión",
        category: "Administración Diario Digital",
        image: "https://runwips.noweb.cl/wp-content/uploads/2026/02/Captura-de-pantalla-2026-02-16-152849.png",
        desc: "Gestión integral de plataforma de noticias regional con alto tráfico.",
        size: "large",
        partnership: false
    },
    {
        title: "Kaisen Ingeniería",
        category: "Estrategia Social Media",
        image: "https://runwips.noweb.cl/wp-content/uploads/2026/02/Captura-de-pantalla-2026-02-16-152616.png",
        desc: "Marketing de precisión y gestión de contenido dinámico para el sector industrial.",
        size: "medium",
        partnership: false
    },
    {
        title: "Licapo Ingeniería",
        category: "Gestión Redes Sociales",
        image: "https://runwips.noweb.cl/wp-content/uploads/2026/02/Captura-de-pantalla-2026-02-16-152728.png",
        desc: "Posicionamiento estratégico de marca y fidelización de audiencia.",
        size: "small",
        partnership: false
    },
    {
        title: "Servirov",
        category: "Gestión Web",
        image: "https://runwips.noweb.cl/wp-content/uploads/2026/02/Captura-de-pantalla-2026-02-16-152746.png",
        desc: "Arquitectura web de alto rendimiento y mantenimiento técnico especializado.",
        size: "medium",
        partnership: true
    },
    {
        title: "Gruta & Yack",
        category: "Ecosistemas Web",
        image: "https://runwips.noweb.cl/wp-content/uploads/2026/02/Captura-de-pantalla-2026-02-16-153129.png",
        desc: "Soluciones de ingeniería web robustas para empresas líderes en su rubro.",
        size: "small",
        partnership: true
    }
];

export default function Portfolio() {
    return (
        <section className="relative py-32 px-6 bg-black overflow-hidden">
            {/* Fondo Dinámico con Degradados Animados - Optimizado */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <motion.div
                    animate={{
                        opacity: [0.05, 0.12, 0.05],
                        x: [0, 30, 0],
                        y: [0, 15, 0],
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-[10%] left-[20%] w-[35%] h-[35%] bg-silver/10 blur-[80px] rounded-full"
                />
                <motion.div
                    animate={{
                        opacity: [0.03, 0.08, 0.03],
                        x: [0, -25, 0],
                        y: [0, -15, 0],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute bottom-[20%] right-[15%] w-[30%] h-[30%] bg-white/5 blur-[60px] rounded-full"
                />
            </div>

            <div className="container mx-auto relative z-10">
                <div className="mb-20 text-center lg:text-left">
                    <span className="text-silver/40 text-xs tracking-[0.4em] font-bold uppercase">Portafolio Elevado</span>
                    <h2 className="text-4xl md:text-6xl font-syne font-black text-white mt-4 tracking-tighter leading-none">
                        PROYECTOS QUE <br />
                        <span className="silver-gradient">DEFINEN EL ESTÁNDAR.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:auto-rows-[300px]">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className={`group relative overflow-hidden rounded-[2.5rem] bg-zinc-900 border border-white/5 transition-all duration-500 hover:border-silver/40 ${project.size === "large" ? "md:col-span-8 md:row-span-2" :
                                project.size === "medium" ? "md:col-span-4 md:row-span-2" :
                                    "md:col-span-4 md:row-span-1"
                                }`}
                        >
                            {/* Imagen de fondo */}
                            <div className="absolute inset-0 z-0">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:brightness-50"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
                            </div>

                            {/* Contenido */}
                            <div className="relative z-10 h-full p-8 md:p-10 flex flex-col justify-end">
                                <div className="space-y-3">
                                    <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-silver/60">
                                        {project.category}
                                    </span>
                                    <h3 className="text-2xl md:text-3xl font-syne font-bold text-white tracking-tight">
                                        {project.title}
                                    </h3>
                                    <p className="text-white/40 text-sm md:text-base font-light max-w-sm line-clamp-2 md:line-clamp-none">
                                        {project.desc}
                                    </p>
                                </div>

                                {project.partnership && (
                                    <div className="absolute top-8 right-8 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10">
                                        <div className="w-1.5 h-1.5 rounded-full bg-silver animate-pulse" />
                                        <span className="text-[8px] uppercase tracking-widest text-white/60 font-medium">
                                            Powered by Noweb Labs
                                        </span>
                                    </div>
                                )}

                                {/* Glow lateral sutil al hacer hover */}
                                <div className="absolute inset-0 ring-1 ring-white/0 group-hover:ring-silver/20 transition-all duration-500 rounded-[2.5rem]" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
