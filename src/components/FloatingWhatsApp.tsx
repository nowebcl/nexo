"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
    const whatsappUrl = "https://wa.me/56948991909?text=Quiero%20cotizar%20sus%20servicios";

    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="fixed left-6 bottom-6 z-50 flex items-center gap-3 group"
        >
            <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center justify-center"
            >
                {/* Glow efecto premium */}
                <div className="absolute inset-0 bg-white/10 blur-xl rounded-full scale-150 group-hover:bg-white/20 transition-all duration-500" />

                {/* El Botón */}
                <div className="relative w-12 h-12 bg-black border border-white/10 rounded-full flex items-center justify-center backdrop-blur-md group-hover:border-white/40 group-hover:scale-110 transition-all duration-500 shadow-2xl">
                    <MessageCircle size={20} className="text-white group-hover:text-silver transition-colors" />
                </div>

                {/* Tag sutil */}
                <div className="absolute left-16 px-4 py-2 bg-black/40 backdrop-blur-lg border border-white/5 rounded-full opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 pointer-events-none">
                    <span className="text-[10px] text-white/60 uppercase tracking-[0.2em] whitespace-nowrap font-bold">
                        Conversar ahora
                    </span>
                </div>
            </a>
        </motion.div>
    );
}
