"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({
        nombre: "",
        email: "",
        proyecto: ""
    });

    const handleWhatsAppRedirect = (e: React.FormEvent) => {
        e.preventDefault();
        const message = `Hola VEXO DIGITAL, mi nombre es ${formData.nombre}. Mi correo es ${formData.email}. Sobre mi proyecto: ${formData.proyecto}`;
        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/56948991909?text=${encodedMessage}`, "_blank");
    };

    return (
        <section className="py-32 px-6 bg-black">
            <div className="container mx-auto max-w-6xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h2 className="text-5xl md:text-7xl font-syne font-black tracking-tighter leading-none text-white">
                            DEJA DE COMPETIR, <br />
                            <span className="silver-gradient">EMPIEZA A DOMINAR.</span>
                        </h2>
                        <p className="max-w-md text-white/40 text-lg font-light leading-relaxed">
                            Lleva tu presencia digital al ápice. Cuéntanos tu visión y nosotros diseñaremos la estrategia de conquista.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass-premium rounded-[2.5rem] p-10 md:p-12"
                    >
                        <form onSubmit={handleWhatsAppRedirect} className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-widest text-white/30 font-bold ml-2">Nombre</label>
                                <input
                                    type="text"
                                    required
                                    placeholder="Tu nombre completo"
                                    value={formData.nombre}
                                    onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-silver/40 transition-all font-light"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-widest text-white/30 font-bold ml-2">Email</label>
                                <input
                                    type="email"
                                    required
                                    placeholder="tu@email.com"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-silver/40 transition-all font-light"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-widest text-white/30 font-bold ml-2">Proyecto</label>
                                <textarea
                                    required
                                    placeholder="Cuéntanos sobre tu marca..."
                                    rows={4}
                                    value={formData.proyecto}
                                    onChange={(e) => setFormData({ ...formData, proyecto: e.target.value })}
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-silver/40 transition-all font-light resize-none"
                                />
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                className="w-full py-5 bg-silver text-black text-xs font-black uppercase tracking-[0.3em] rounded-2xl hover:bg-white transition-all duration-300 mt-4 shadow-[0_10px_30px_rgba(168,169,173,0.15)]"
                            >
                                Enviar a WhatsApp
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
