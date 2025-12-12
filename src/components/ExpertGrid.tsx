"use client";

import React, { useRef } from "react";
import { Activity, Brain, Heart, ShieldCheck, Scale, Cpu, Fingerprint, Sparkles, Zap, Utensils } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

const experts = [
  {
    category: "ID: CARDIO-01",
    role: "Cardiólogo AI",
    id: "CARDIO",
    status: "Online",
    description: "Monitoriza tu salud cardiovascular, presión y ritmo cardíaco 24/7 en tiempo real.",
    icon: Heart,
    accent: "text-red-500",
    dotColor: "bg-red-500",
    pulseColor: "bg-red-500",
    bg: "hover:border-red-200",
  },
  {
    category: "ID: NUTRI-02",
    role: "Nutricionista AI",
    id: "NUTRI",
    status: "Procesando",
    description: "Ajusta tu dieta micro-nutricional basándose en tu metabolismo único y glucosa.",
    icon: Utensils,
    accent: "text-green-500",
    dotColor: "bg-green-500",
    pulseColor: "bg-green-500",
    bg: "hover:border-green-200",
  },
  {
    category: "ID: ENDO-03",
    role: "Endocrino AI",
    id: "ENDO",
    status: "Online",
    description: "Analiza tu equilibrio hormonal, cortisol y rendimiento metabólico profundo.",
    icon: Zap, // Symbolizing energy/metabolism
    accent: "text-yellow-500",
    dotColor: "bg-yellow-500",
    pulseColor: "bg-yellow-500",
    bg: "hover:border-yellow-200",
  },
  {
    category: "ID: PSYCH-04",
    role: "Psicólogo AI",
    id: "PSYCH",
    status: "Online",
    description: "Detecta patrones de estrés, fatiga mental y optimiza tu higiene del sueño.",
    icon: Brain,
    accent: "text-purple-500",
    dotColor: "bg-purple-500",
    pulseColor: "bg-purple-500",
    bg: "hover:border-purple-200",
  },
  {
    category: "ID: DERMA-05",
    role: "Dermatólogo AI",
    id: "DERMA",
    status: "Online",
    description: "Analiza la salud de tu piel y factores ambientales para prevenir el envejecimiento.",
    icon: Sparkles,
    accent: "text-pink-500",
    dotColor: "bg-pink-500",
    pulseColor: "bg-pink-500",
    bg: "hover:border-pink-200",
  },
];

const ExpertGrid = () => {
  const containerRef = useRef(null);

  return (
    <section id="experts" className="py-24 md:py-32 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Section Header */}
        <div className="mb-12 md:mb-16 text-center md:text-center max-w-3xl mx-auto space-y-4">
          <div className="flex items-center justify-center gap-2 text-xs font-bold text-teal-700 tracking-[0.2em] uppercase">
            <ShieldCheck className="w-4 h-4" />
            <span>Personal Médico Autenticado</span>
          </div>
          <h3 className="font-display text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">
            Especialistas dedicados.<br/>
            <span className="text-gray-400">Trabajando en paralelo.</span>
          </h3>
          <p className="text-gray-500 text-lg md:text-xl font-light">
            Desliza para conocer a tu equipo clínico personal.
          </p>
        </div>

        {/* 
           =========================================
           MOBILE LAYOUT: Horizontal Carousel (md:hidden)
           =========================================
        */}
        <div className="md:hidden flex overflow-x-auto gap-4 pb-8 -mx-4 px-4 snap-x snap-mandatory scrollbar-hide">
            {experts.map((expert, idx) => (
                <div 
                    key={idx} 
                    className={`
                        min-w-[85vw] snap-center
                        flex flex-col justify-between
                        rounded-3xl p-6 border transition-all duration-300
                        bg-white border-gray-100 shadow-sm
                        ${expert.bg}
                    `}
                >
                    {/* Header Card */}
                    <div className="flex justify-between items-start mb-6">
                        <div className="flex gap-4">
                            <div className="p-3 rounded-2xl border bg-gray-50 border-gray-100">
                                <expert.icon className={`w-6 h-6 ${expert.accent}`} />
                            </div>
                            <div>
                                <div className="text-[10px] font-mono uppercase tracking-wider mb-1 flex items-center gap-2 text-gray-400">
                                    {expert.id}
                                </div>
                                <h4 className="text-lg font-bold text-gray-900">
                                    {expert.role}
                                </h4>
                            </div>
                        </div>
                        {/* Status */}
                        <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full border border-gray-100/10 bg-gray-100/50">
                            <span className={`relative flex h-2 w-2`}>
                                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${expert.pulseColor}`}></span>
                                <span className={`relative inline-flex rounded-full h-2 w-2 ${expert.dotColor}`}></span>
                            </span>
                        </div>
                    </div>

                    {/* Description */}
                    <div>
                        <p className="text-sm leading-relaxed text-gray-600 font-medium mb-6">
                            {expert.description}
                        </p>
                        <div className="pt-4 border-t border-gray-50 flex justify-between items-center text-[10px] uppercase font-mono tracking-wider text-gray-400">
                            <div className="flex items-center gap-1">
                                <Cpu className="w-3 h-3" />
                                <span>AI Core v2.4</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <Fingerprint className="w-3 h-3" />
                                <span>Verificado</span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>


        {/* 
           =========================================
           DESKTOP LAYOUT: Flex Wrap Grid (hidden md:flex)
           Preserved EXACTLY as original
           =========================================
        */}
        <div className="hidden md:flex flex-wrap justify-center gap-6 pb-12">
          {experts.map((expert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02, translateY: -5, transition: { duration: 0.2 } }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, type: "spring", stiffness: 50, damping: 20 }}
              className={`
                w-[380px]
                group relative flex flex-col justify-between
                rounded-3xl p-8 border transition-all duration-300
                bg-white border-gray-100 hover:shadow-2xl hover:shadow-gray-200/50
                ${expert.bg}
              `}
            >
              {/* Header Card */}
              <div className="flex justify-between items-start mb-8">
                <div className="flex gap-4">
                    <div className="p-3 rounded-2xl border bg-gray-50 border-gray-100 group-hover:bg-white transition-colors">
                        <expert.icon className={`w-8 h-8 ${expert.accent}`} />
                    </div>
                    <div>
                        <div className="text-[10px] font-mono uppercase tracking-wider mb-1 flex items-center gap-2 text-gray-400">
                            {expert.id}
                        </div>
                        <h4 className="text-xl font-bold text-gray-900">
                            {expert.role}
                        </h4>
                    </div>
                </div>
                
                {/* Status Indicator */}
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-gray-100/10 bg-gray-100/50">
                    <span className={`relative flex h-2 w-2`}>
                      <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${expert.pulseColor}`}></span>
                      <span className={`relative inline-flex rounded-full h-2 w-2 ${expert.dotColor}`}></span>
                    </span>
                </div>
              </div>

              {/* Description */}
              <div className="relative">
                 {/* Tech decorative line */}
                 <div className="absolute -top-4 left-0 w-8 h-[1px] bg-gray-200"></div>
                 
                 <p className="text-sm leading-relaxed text-gray-600 font-medium">
                    {expert.description}
                 </p>

                 {/* Tech Footer */}
                 <div className="mt-8 pt-4 border-t border-gray-50 flex justify-between items-center text-[10px] uppercase font-mono tracking-wider text-gray-400">
                    <div className="flex items-center gap-1">
                        <Cpu className="w-3 h-3" />
                        <span>AI Core v2.4</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Fingerprint className="w-3 h-3" />
                        <span>Verificado</span>
                    </div>
                 </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ExpertGrid;
