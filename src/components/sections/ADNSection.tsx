"use client";

import { motion } from "framer-motion";

export default function ADNSection() {
    return (
        <section className="py-32 px-6 bg-black relative overflow-hidden">
            <div className="container mx-auto max-w-6xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="space-y-8"
                    >
                        <span className="text-silver/40 text-xs tracking-[0.4em] font-bold uppercase">
                            Nuestra Identidad
                        </span>
                        <h2 className="text-4xl md:text-6xl font-syne font-bold leading-tight text-white">
                            ADN <br />
                            <span className="silver-gradient">TECNOLÓGICO.</span>
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="space-y-6"
                    >
                        <p className="text-white/60 text-lg md:text-xl font-light leading-relaxed">
                            Somos la agencia líder en <span className="text-white font-medium">Puerto Montt</span> que fusiona el marketing digital con
                            <span className="text-white font-medium"> Inteligencia Artificial</span> de última generación.
                        </p>
                        <p className="text-white/40 text-base md:text-lg font-light leading-relaxed">
                            En VEXO DIGITAL eliminamos los resultados mediocres mediante estrategias de precisión
                            quirúrgica y contenido dinámico que genera un impacto real en tu cuenta de resultados.
                            No solo gestionamos redes; dominamos el entorno digital.
                        </p>

                        <div className="pt-4 flex gap-8">
                            <div>
                                <h4 className="text-2xl font-syne font-bold text-white">100%</h4>
                                <p className="text-white/30 text-xs uppercase tracking-widest mt-1">IA Nativa</p>
                            </div>
                            <div>
                                <h4 className="text-2xl font-syne font-bold text-white">Puerto Montt</h4>
                                <p className="text-white/30 text-xs uppercase tracking-widest mt-1">Sede Central</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Decoración lateral sutil */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-64 bg-gradient-to-b from-transparent via-silver/20 to-transparent" />
        </section>
    );
}
