"use client";

import { motion } from "framer-motion";

export default function Hero() {
    const whatsappUrl = "https://wa.me/56948991909?text=Quiero%20cotizar%20sus%20servicios";

    return (
        <section className="relative min-h-[100svh] w-full flex items-center justify-center overflow-hidden bg-black pb-10 lg:pb-0">
            {/* Fondo con degradado radial sutil para profundidad */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,169,173,0.08),transparent_70%)] lg:bg-[radial-gradient(circle_at_70%_50%,rgba(168,169,173,0.05),transparent_60%)] pointer-events-none" />

            <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center z-10 pt-24 lg:pt-0">

                {/* Texto: Centrado en móvil, Izquierda en desktop */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col items-center lg:items-start text-center lg:text-left gap-8 lg:gap-12"
                >
                    <span className="text-white/40 text-xs md:text-sm tracking-[0.5em] font-bold uppercase">
                        VEXO DIGITAL
                    </span>

                    <div className="space-y-2">
                        <h1 className="text-6xl md:text-8xl lg:text-[110px] font-syne font-black tracking-[-0.05em] leading-[0.85] text-white">
                            THE DIGITAL <br />
                            APEX.
                        </h1>
                    </div>

                    <div className="space-y-8 flex flex-col items-center lg:items-start">
                        <p className="max-w-[280px] lg:max-w-xs text-white/50 text-lg md:text-xl font-light leading-snug tracking-tight">
                            Estrategia, Diseño y Tecnología <br className="hidden lg:block" />
                            que eleva tu marca.
                        </p>

                        <motion.a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,1)", color: "#000" }}
                            className="inline-block px-10 py-4 border border-white/40 text-white text-[10px] font-bold tracking-[0.3em] uppercase transition-all duration-500"
                        >
                            CONVERSAR
                        </motion.a>
                    </div>
                </motion.div>

                {/* Video: Centrado y más grande en móvil */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                    className="relative flex items-center justify-center lg:justify-end mt-4 lg:mt-0"
                >
                    <div className="relative w-full max-w-[380px] md:max-w-[500px] lg:max-w-[650px] aspect-square flex items-center justify-center">
                        {/* Resplandor central tras el objeto */}
                        <div className="absolute inset-0 bg-white/5 blur-[100px] lg:blur-[120px] rounded-full scale-110 pointer-events-none" />

                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-contain relative z-10 mix-blend-screen brightness-[1.1] contrast-[1.2]"
                        >
                            <source src="https://runwips.noweb.cl/wp-content/uploads/2026/02/grok-video-7dba9f6a-69ee-4725-9538-cf536f72c393.mp4" type="video/mp4" />
                        </video>
                    </div>
                </motion.div>
            </div>

            {/* Elementos decorativos de la imagen de referencia */}
            <div className="absolute top-12 right-12 flex gap-4 opacity-20 hidden lg:flex">
                <div className="w-8 h-8 rounded-full border border-white/30" />
                <div className="w-8 h-8 rounded-full border border-white/30" />
            </div>
        </section>
    );
}
