"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Activity,
  Brain,
  Heart,
  CheckCircle2,
} from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { LogoSymbol } from "./Logo";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const PhoneMockup = () => {
  const [step, setStep] = useState(0);

  // Animation Sequence Loop
  useEffect(() => {
    let isMounted = true;
    const sequence = async () => {
      while (isMounted) {
        setStep(0); // Input appears
        await new Promise((r) => setTimeout(r, 1500));
        if (!isMounted) break;
        setStep(1); // Agents wake up
        await new Promise((r) => setTimeout(r, 1500));
        if (!isMounted) break;
        setStep(2); // Debate (Chat bubbles)
        await new Promise((r) => setTimeout(r, 3000));
        if (!isMounted) break;
        setStep(3); // Result
        await new Promise((r) => setTimeout(r, 4000));
        if (!isMounted) break;
        setStep(4); // Fade out
        await new Promise((r) => setTimeout(r, 500));
      }
    };
    sequence();
    return () => { isMounted = false; };
  }, []);

  return (
    <div className="relative mx-auto w-[320px] md:w-[350px]">
      {/* Phone Case */}
      <div className="relative rounded-[3rem] bg-gray-950 p-[10px] shadow-2xl ring-1 ring-white/10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-6 w-32 bg-black rounded-b-2xl z-20"></div>
        
        {/* Screen */}
        <div className="relative h-[680px] w-full bg-white rounded-[2.5rem] overflow-hidden flex flex-col font-sans">
          
          {/* Header */}
          <div className="h-24 bg-gradient-to-b from-gray-50 to-white pt-8 px-6 flex items-center justify-between border-b border-gray-100 z-10">
             <div className="flex items-center gap-2">
                 <LogoSymbol className="h-5 w-5" />
                 <span className="text-xs font-semibold tracking-wide uppercase text-gray-400">Consenso de Salud</span>
             </div>
          </div>

          {/* Chat Area */}
          <div className="flex-1 p-5 flex flex-col gap-4 overflow-hidden relative">
            <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.4]" />

            {/* User Message */}
            <AnimatePresence>
              {step >= 0 && step < 4 && (
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, filter: "blur(10px)" }}
                  className="self-end bg-gray-900 text-white rounded-2xl rounded-tr-sm px-5 py-3 shadow-lg max-w-[85%]"
                >
                  <p className="text-sm font-medium">
                    Me siento fatigado y tengo niebla mental por las tardes...
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* AI Agents Activation & Debate */}
            <div className="flex-1 flex flex-col justify-center gap-4">
                <AnimatePresence>
                    {step >= 1 && step < 4 && (
                        <div className="space-y-3">
                            {/* Agent 1: Nutrition */}
                            <motion.div
                                initial={{ x: -50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="flex gap-3 max-w-[90%]"
                            >
                                <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center border border-green-200 shadow-sm shrink-0">
                                    <Heart className="h-4 w-4 text-green-600" />
                                </div>
                                <div className="bg-white border border-gray-100 p-3 rounded-2xl rounded-tl-none shadow-sm text-xs text-gray-600">
                                    <span className="font-bold text-gray-900 block mb-1">Agente de Nutrición</span>
                                    Analizando niveles de glucosa vs cortisol. Posible pico insulínico.
                                </div>
                            </motion.div>

                            {/* Agent 2: Mental */}
                            <motion.div
                                initial={{ x: -50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.8 }}
                                className="flex gap-3 max-w-[90%]"
                            >
                                <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center border border-purple-200 shadow-sm shrink-0">
                                    <Brain className="h-4 w-4 text-purple-600" />
                                </div>
                                <div className="bg-white border border-gray-100 p-3 rounded-2xl rounded-tl-none shadow-sm text-xs text-gray-600">
                                    <span className="font-bold text-gray-900 block mb-1">Agente de Psicología</span>
                                    Detecto patrones de estrés laboral. Coincido con cortisol elevado.
                                </div>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>
            </div>

            {/* Final Consensus Card */}
            <AnimatePresence>
              {step >= 3 && step < 4 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 50 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  className="absolute bottom-6 left-4 right-4 bg-gradient-to-br from-teal-900 to-gray-900 rounded-xl p-5 shadow-2xl border border-teal-500/30 text-white z-20"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-teal-500/20 p-2 rounded-lg">
                        <CheckCircle2 className="h-6 w-6 text-teal-400" />
                    </div>
                    <div>
                        <h4 className="text-sm font-bold text-teal-50 uppercase tracking-wider mb-1">Consenso Logrado</h4>
                        <p className="text-sm text-gray-300 leading-snug">
                            Causa probable: <span className="text-white font-semibold">Disregulación circadiana</span>.
                        </p>
                        <div className="mt-3 flex gap-2">
                            <span className="px-2 py-0.5 rounded-full bg-white/10 text-[10px] border border-white/5">Plan Nutricional</span>
                            <span className="px-2 py-0.5 rounded-full bg-white/10 text-[10px] border border-white/5">Higiene Sueño</span>
                        </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

          {/* Scanline/Loading Effect Overlay */}
           <AnimatePresence>
                {step === 1 && (
                     <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-teal-500/5 z-0 pointer-events-none"
                     >
                        <motion.div 
                             animate={{ top: ["0%", "100%"] }}
                             transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                             className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-teal-400 to-transparent opacity-50 shadow-[0_0_15px_rgba(20,184,166,0.5)]"
                        />
                     </motion.div>
                )}
           </AnimatePresence>

        </div>
      </div>
    </div>
  );
};

export default PhoneMockup;
