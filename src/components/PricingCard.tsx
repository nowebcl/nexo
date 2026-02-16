"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface PlanProps {
    name: string;
    price: string;
    features: string[];
    highlighted?: boolean;
    className?: string;
}

export default function PricingCard({ name, price, features, highlighted = false, className }: PlanProps) {
    return (
        <motion.div
            whileHover={{
                y: -10,
                boxShadow: "0 0 30px rgba(168, 169, 173, 0.2)",
                borderColor: "rgba(168, 169, 173, 0.4)"
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className={cn(
                "relative rounded-[2rem] p-8 min-h-[500px] flex flex-col transition-all duration-500 border",
                highlighted
                    ? "glass-premium border-silver/30 shadow-[0_0_40px_rgba(168,169,173,0.1)]"
                    : "glass border-white/5",
                className
            )}
        >
            {highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-silver text-obsidian text-[10px] font-bold uppercase tracking-widest rounded-full">
                    Más Popular
                </div>
            )}

            <div className="mb-8">
                <h3 className={cn(
                    "text-sm uppercase tracking-[0.2em] mb-4 font-semibold",
                    highlighted ? "text-silver" : "text-white/40"
                )}>
                    {name}
                </h3>
                <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-syne font-bold">{price}</span>
                    <span className="text-white/30 text-sm">/mes</span>
                </div>
            </div>

            <div className="flex-grow space-y-4">
                {features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3 group">
                        <div className={cn(
                            "mt-1 p-0.5 rounded-full transition-colors duration-300",
                            highlighted ? "bg-silver/20 text-silver" : "bg-white/5 text-white/30 group-hover:text-silver"
                        )}>
                            <Check size={14} />
                        </div>
                        <p className="text-sm text-white/60 leading-relaxed group-hover:text-white transition-colors duration-300 font-light">
                            {feature}
                        </p>
                    </div>
                ))}
            </div>

            <a
                href="https://wa.me/56948991909?text=Quiero%20cotizar%20sus%20servicios"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                    "w-full mt-8 py-4 rounded-xl text-sm font-semibold tracking-widest uppercase transition-all duration-300 text-center",
                    highlighted
                        ? "bg-silver text-obsidian hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                        : "bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-silver/40"
                )}
            >
                Seleccionar Plan
            </a>
        </motion.div>
    );
}
