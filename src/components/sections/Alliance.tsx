"use client";

import { motion } from "framer-motion";

export default function Alliance() {
    return (
        <section className="py-32 px-6 bg-black relative border-y border-white/5">
            <div className="container mx-auto max-w-5xl text-center space-y-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-4"
                >
                    <span className="text-silver/40 text-[10px] tracking-[0.5em] font-bold uppercase">
                        Partnership
                    </span>
                    <h2 className="text-3xl md:text-5xl font-syne font-bold text-white tracking-tight">
                        ALIANZA <span className="silver-gradient">ESTRATÉGICA.</span>
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="glass-premium rounded-[3rem] p-12 md:p-20 relative overflow-hidden"
                >
                    <div className="relative z-10 space-y-8">
                        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 opacity-60">
                            <span className="text-3xl font-syne font-black tracking-tighter text-white">VEXO DIGITAL</span>
                            <div className="w-8 h-[1px] bg-silver/20 hidden md:block" />
                            <span className="text-3xl font-syne font-black tracking-tighter text-silver">NOWEB LABS</span>
                        </div>

                        <p className="max-w-2xl mx-auto text-white/50 text-lg md:text-xl font-light leading-relaxed">
                            Nuestra alianza con <span className="text-white font-medium">Noweb Labs</span> nos posiciona como una potencia técnica y creativa en <span className="text-white font-medium">Puerto Montt</span>. Combinamos visión estratégica con ejecución de élite para dominar el mercado.
                        </p>
                    </div>

                    {/* Background glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-silver/5 blur-[120px] rounded-full" />
                </motion.div>
            </div>
        </section>
    );
}
