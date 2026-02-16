"use client";

import { motion } from "framer-motion";

export default function Hero() {
    const whatsappUrl = "https://wa.me/56948991909?text=Quiero%20cotizar%20sus%20servicios";

    return (
        <section className="relative min-h-[100svh] w-full flex flex-col items-center overflow-hidden bg-black">
            {/* Fondo con degradado radial sutil para profundidad */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,169,173,0.08),transparent_70%)] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10 flex flex-col items-center pt-24 md:pt-32 pb-64">
                {/* Texto: Siempre arriba y centrado */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col items-center text-center gap-6 md:gap-10"
                >
                    <span className="text-white/40 text-[10px] md:text-sm tracking-[0.5em] font-bold uppercase">
                        VEXO DIGITAL
                    </span>

                    <div className="space-y-4">
                        <h1 className="text-6xl md:text-9xl lg:text-[140px] font-syne font-black tracking-[-0.05em] leading-[0.8] text-white">
                            THE DIGITAL <br />
                            APEX.
                        </h1>
                    </div>

                    <div className="space-y-8 flex flex-col items-center">
                        <p className="max-w-[280px] md:max-w-md text-white/50 text-base md:text-2xl font-light leading-snug tracking-tight">
                            Estrategia, Diseño y Tecnología que eleva tu marca.
                        </p>

                        <motion.a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,1)", color: "#000" }}
                            className="inline-block px-10 py-4 md:px-12 md:py-5 border border-white/40 text-white text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase transition-all duration-500"
                        >
                            CONVERSAR
                        </motion.a>
                    </div>
                </motion.div>
            </div>

            {/* Video: Posicionado absolutamente en el fondo para ocupar todo el canvas */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                className="absolute bottom-0 left-0 w-full h-1/2 md:h-2/3 flex items-end justify-center pointer-events-none"
            >
                <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                    {/* Resplandor central tras el objeto */}
                    <div className="absolute inset-0 bg-white/5 blur-[100px] lg:blur-[150px] rounded-full scale-110" />

                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-contain md:object-cover mix-blend-screen brightness-[1.1] contrast-[1.2] opacity-80"
                    >
                        <source src="https://runwips.noweb.cl/wp-content/uploads/2026/02/grok-video-7dba9f6a-69ee-4725-9538-cf536f72c393.mp4" type="video/mp4" />
                    </video>
                </div>
            </motion.div>

            {/* Elementos decorativos de la imagen de referencia */}
            <div className="absolute top-12 right-12 flex gap-4 opacity-20 hidden lg:flex">
                <div className="w-8 h-8 rounded-full border border-white/30" />
                <div className="w-8 h-8 rounded-full border border-white/30" />
            </div>
        </section>
    );
}
