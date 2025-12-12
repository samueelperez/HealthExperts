"use client";

import React, { useState } from "react";
import { Apple, Play } from "lucide-react";
import { motion } from "framer-motion";
import PhoneMockup from "./PhoneMockup";
import { LogoFull } from "./Logo";
import WaitlistModal from "./WaitlistModal";

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.1, // Faster stagger for "pro" feel
        delayChildren: 0.2
      } 
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        type: "spring", 
        stiffness: 50, 
        damping: 20 // Smooth, weighted easing
      } 
    },
  };

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-teal-100 overflow-hidden">
      
      <WaitlistModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* --- Navigation --- */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <motion.div 
             initial={{ opacity: 0, x: -20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.6, ease: "easeOut" }}
             className="flex items-center gap-2"
          >
             <LogoFull className="h-10" />
          </motion.div>
          
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
            {["Cómo Funciona", "Expertos", "Ciencia"].map((item, i) => (
                <motion.a 
                    key={item}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.1 }}
                    href={`#${item === "Expertos" ? "experts" : ""}`}
                    className="hover:text-gray-900 transition"
                >
                    {item}
                </motion.a>
            ))}
          </div>

          <motion.button 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, type: "spring" }}
            onClick={() => setIsModalOpen(true)}
            className="hidden md:flex items-center gap-2 text-sm font-semibold text-white bg-gray-900 hover:bg-black px-6 py-2.5 rounded-full transition-all shadow-lg shadow-gray-200"
          >
            Únete a la Lista
          </motion.button>
        </div>
      </nav>

      {/* --- Hero Content --- */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 lg:pt-48 lg:pb-32 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        
        {/* Left Col: Copy & CTAs */}
        <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex-1 text-center lg:text-left space-y-8"
        >
            
            {/* Status Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-100 self-center lg:self-start mx-auto lg:mx-0">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
                </span>
                <span className="text-xs font-semibold text-teal-800 tracking-wide uppercase">
                    Disponible en iOS y Android
                </span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-gray-900 leading-[1.1]">
                Tu Junta Médica, <br/>
                <span className="text-teal-600">Privada.</span>
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-lg text-gray-500 leading-relaxed max-w-xl mx-auto lg:mx-0 font-light">
                ¿Por qué conformarte con una sola opinión? Nuestro motor de consenso orquesta un debate entre agentes de
                <span className="font-medium text-gray-900"> Clínica</span>, 
                <span className="font-medium text-gray-900"> Nutrición</span> y 
                <span className="font-medium text-gray-900"> Psicología </span> 
                para darte el plan de salud más preciso para *ti*.
            </motion.p>

            {/* Store Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                <button className="group flex items-center gap-3 bg-gray-900 text-white px-6 py-3.5 rounded-xl hover:bg-black transition-all shadow-xl shadow-gray-200 ring-1 ring-gray-900 hover:-translate-y-0.5">
                    <Apple className="w-6 h-6 group-hover:scale-110 transition-transform" fill="currentColor" />
                    <div className="text-left leading-none">
                        <div className="text-[10px] uppercase font-medium text-gray-400 mb-1">Consíguelo en</div>
                        <div className="text-sm font-bold">App Store</div>
                    </div>
                </button>
                <button className="group flex items-center gap-3 bg-white text-gray-900 px-6 py-3.5 rounded-xl hover:bg-gray-50 transition-all shadow-lg ring-1 ring-gray-200 hover:-translate-y-0.5">
                    <Play className="w-5 h-5 ml-1 group-hover:scale-110 transition-transform" fill="currentColor" />
                    <div className="text-left leading-none">
                        <div className="text-[10px] uppercase font-medium text-gray-500 mb-1">Disponible en</div>
                        <div className="text-sm font-bold">Google Play</div>
                    </div>
                </button>
            </motion.div>

            {/* Social Proof / Trust */}
            <motion.div variants={itemVariants} className="pt-8 flex items-center justify-center lg:justify-start gap-4 text-sm text-gray-400">
                <div className="flex -space-x-2">
                    {[1,2,3,4].map((i) => (
                        <div key={i} className="h-8 w-8 rounded-full bg-gray-200 border-2 border-white" />
                    ))}
                </div>
                <p>Más de 2,000 usuarios confían en nosotros</p>
            </motion.div>
        </motion.div>

        {/* Right Col: Phone Mockup */}
        <div className="flex-1 w-full relative perspective-1000">
            {/* Background Decor */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-gradient-to-tr from-teal-50 via-blue-50 to-purple-50 rounded-full blur-3xl -z-10 opacity-60" />
            
            <motion.div 
                initial={{ opacity: 0, y: 60 }}
                animate={{ 
                    opacity: 1, 
                    y: 0,
                    // Subtly float up and down endlessly
                    translateY: [0, -10, 0]
                }}
                transition={{ 
                    y: { type: "spring", stiffness: 40, damping: 20, delay: 0.3 },
                    translateY: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }
                }}
                className="relative z-10 scale-[0.85] sm:scale-100 lg:scale-[1.05]"
            >
                <PhoneMockup />
            </motion.div>
        </div>

      </main>
    </div>
  );
};

export default HeroSection;
