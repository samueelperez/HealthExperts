"use client";

import React, { useState } from "react";
import { Apple, Play, Menu, X } from "lucide-react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import PhoneMockup from "./PhoneMockup";
import { LogoFull } from "./Logo";
import WaitlistModal from "./WaitlistModal";

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Animation Variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.1, // Faster stagger for "pro" feel
        delayChildren: 0.2
      } 
    },
  };

  const itemVariants: Variants = {
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

  const navLinks: string[] = []; // Empty as requested

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
             <LogoFull className="h-8 md:h-10" />
          </motion.div>
          
          {/* Desktop Links (Removed) */}
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
             {/* Links removed as per request */}
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

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-gray-600"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 z-[60] bg-white/90 md:hidden"
          >
            <div className="p-6 h-full flex flex-col">
              <div className="flex justify-between items-center mb-8">
                <LogoFull className="h-8" />
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-gray-600 bg-gray-50 rounded-lg"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex flex-col gap-8 items-center justify-center flex-1">
                {navLinks.map((item, i) => (
                  <motion.a
                    key={item}
                    href={`#${item === "Expertos" ? "experts" : ""}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.1 }}
                    className="text-3xl font-display font-medium text-gray-900"
                  >
                    {item}
                  </motion.a>
                ))}
                
                <motion.button 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsModalOpen(true);
                  }}
                  className="mt-8 px-8 py-4 bg-gray-900 text-white text-lg font-semibold rounded-2xl w-full max-w-xs shadow-xl"
                >
                  Únete a la Lista
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 lg:pt-48 lg:pb-32">
        
        {/* =========================================
            MOBILE LAYOUT (md:hidden)
            Reordered: Badge -> Title -> Phone -> Desc -> CTAs
           ========================================= */}
        <div className="md:hidden flex flex-col items-center text-center space-y-8">
            {/* 1. Badge */}
            <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-100"
            >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
                </span>
                <span className="text-[10px] font-bold text-teal-800 tracking-wide uppercase">
                    Disponible en iOS y Android
                </span>
            </motion.div>

            {/* 2. Headline */}
            <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="font-display text-4xl font-semibold tracking-tight text-gray-900 leading-[1.1]"
            >
                Tu Junta Médica, <br/>
                <span className="text-teal-600">Privada.</span>
            </motion.h1>

            {/* 3. Phone Mockup (The Visual Hook) */}
            <div className="w-full relative py-6">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-gradient-to-tr from-teal-50 via-blue-50 to-purple-50 rounded-full blur-3xl -z-10 opacity-60" />
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 0.9 }}
                    transition={{ delay: 0.2 }}
                    className="flex justify-center"
                >
                    <div className="scale-90 origin-top">
                        <PhoneMockup />
                    </div>
                </motion.div>
            </div>

            {/* 4. Description */}
            <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-base text-gray-500 leading-relaxed font-light px-2"
            >
                ¿Por qué conformarte con una sola opinión? Un debate entre agentes de
                <span className="font-medium text-gray-900"> Clínica</span>, 
                <span className="font-medium text-gray-900"> Nutrición</span> y 
                <span className="font-medium text-gray-900"> Psicología </span> 
                para tu salud.
            </motion.p>

            {/* 5. CTAs */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col w-full gap-3 px-4"
            >
                <button className="flex items-center justify-center gap-3 bg-gray-900 text-white px-6 py-3.5 rounded-xl shadow-lg">
                    <Apple className="w-5 h-5" fill="currentColor" />
                    <div className="text-left leading-none">
                        <div className="text-[10px] uppercase font-medium text-gray-400 mb-1">Consíguelo en</div>
                        <div className="text-sm font-bold">App Store</div>
                    </div>
                </button>
                <button className="flex items-center justify-center gap-3 bg-white text-gray-900 px-6 py-3.5 rounded-xl shadow-md border border-gray-100">
                    <Play className="w-4 h-4 ml-1" fill="currentColor" />
                    <div className="text-left leading-none">
                        <div className="text-[10px] uppercase font-medium text-gray-500 mb-1">Disponible en</div>
                        <div className="text-sm font-bold">Google Play</div>
                    </div>
                </button>
            </motion.div>
        </div>


        {/* =========================================
            DESKTOP LAYOUT (hidden md:flex)
            Preserved EXACTLY as original
           ========================================= */}
        <div className="hidden md:flex flex-row items-center gap-16 lg:gap-24">
            
            {/* Left Col: Copy & CTAs */}
            <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="flex-1 text-left space-y-8"
            >
                
                {/* Status Badge */}
                <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-100 self-start">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
                    </span>
                    <span className="text-xs font-semibold text-teal-800 tracking-wide uppercase">
                        Disponible en iOS y Android
                    </span>
                </motion.div>

                <motion.h1 variants={itemVariants} className="font-display text-6xl lg:text-7xl font-semibold tracking-tight text-gray-900 leading-[1.1]">
                    Tu Junta Médica, <br/>
                    <span className="text-teal-600">Privada.</span>
                </motion.h1>
                
                <motion.p variants={itemVariants} className="text-lg text-gray-500 leading-relaxed max-w-xl font-light">
                    ¿Por qué conformarte con una sola opinión? Nuestro motor de consenso orquesta un debate entre agentes de
                    <span className="font-medium text-gray-900"> Clínica</span>, 
                    <span className="font-medium text-gray-900"> Nutrición</span> y 
                    <span className="font-medium text-gray-900"> Psicología </span> 
                    para darte el plan de salud más preciso para *ti*.
                </motion.p>

                {/* Store Buttons */}
                <motion.div variants={itemVariants} className="flex flex-row gap-4 justify-start pt-4">
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
                <motion.div variants={itemVariants} className="pt-8 flex items-center justify-start gap-4 text-sm text-gray-400">
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
                    className="relative z-10 scale-[1.05]"
                >
                    <PhoneMockup />
                </motion.div>
            </div>
        </div>

      </main>
    </div>
  );
};

export default HeroSection;
