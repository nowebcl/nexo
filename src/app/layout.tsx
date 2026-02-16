import type { Metadata } from "next";
import { Outfit, Syne, Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "VEXO DIGITAL | EL ÁPICE DIGITAL",
  description: "Agencia de gestión de comunidades y estrategia digital de alta gama.",
  icons: {
    icon: "https://runwips.noweb.cl/wp-content/uploads/2026/02/freepik__imagen-de-perfil-solo-con-el-isotipo__89962-scaled.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${outfit.variable} ${syne.variable} ${inter.variable} font-outfit antialiased bg-obsidian text-white`}>
        <div className="noise-overlay" />
        <FloatingWhatsApp />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
