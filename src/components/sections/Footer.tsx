"use client";

import { motion } from "framer-motion";

export default function Footer() {
    return (
        <footer className="py-20 px-4 border-t border-white/5 bg-obsidian">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-syne font-black tracking-tighter silver-gradient">VEXO DIGITAL</h2>
                        <p className="max-w-xs text-white/40 text-sm leading-relaxed">
                            Basados en Chile. Operando globalmente. El ápice de la transformación digital para marcas modernas.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-12 md:gap-24 uppercase text-[10px] tracking-[0.3em] font-bold text-silver">
                        <div className="flex flex-col gap-4">
                            <span className="text-white/20">Contacto</span>
                            <a href="https://wa.me/56948991909?text=Quiero%20cotizar%20sus%20servicios" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">WhatsApp Directo</a>
                            <a href="https://wa.me/56948991909?text=Quiero%20cotizar%20sus%20servicios" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">+56 9 4899 1909</a>
                        </div>
                        <div className="flex flex-col gap-4">
                            <span className="text-white/20">Social</span>
                            <a href="#" className="hover:text-white transition-colors">Instagram</a>
                            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                            <a href="#" className="hover:text-white transition-colors">TikTok</a>
                        </div>
                    </div>
                </div>

                <div className="mt-20 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-white/5 pt-8 text-[10px] uppercase tracking-widest text-white/20">
                    <span>© 2024 VEXO DIGITAL. TODOS LOS DERECHOS RESERVADOS.</span>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
                        <a href="#" className="hover:text-white transition-colors">Términos de Servicio</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
