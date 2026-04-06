"use client";
import React from "react";
import { motion } from "framer-motion";

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: {
    text: string;
    image: string;
    name: string;
    role: string;
  }[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <div 
                  className="p-8 rounded-[2rem] liquid-glass border border-white/10 shadow-xl max-w-xs w-full group transition-all duration-500 hover:border-[#78C3AA]/40 hover:shadow-[0_0_30px_rgba(120,195,170,0.1)]" 
                  key={i}
                >
                  <p className="text-white/80 text-sm leading-relaxed mb-6 italic font-display">"{text}"</p>
                  <div className="flex items-center gap-3 mt-5">
                    <div className="relative">
                      <div className="absolute inset-0 bg-[#78C3AA]/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                      <img
                        width={44}
                        height={44}
                        src={image}
                        alt={name}
                        className="h-11 w-11 rounded-full border border-white/10 relative z-10 grayscale-[0.3] group-hover:grayscale-0 transition-all"
                      />
                    </div>
                    <div className="flex flex-col">
                      <div className="font-medium tracking-tight leading-5 text-white">{name}</div>
                      <div className="text-xs leading-5 text-white/40 tracking-tight">{role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};
