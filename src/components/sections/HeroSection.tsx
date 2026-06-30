"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { heroData } from "@/config/data";

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-[100svh] w-full overflow-hidden flex items-center justify-center">
      {/* Background Image Parallax */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 w-full h-full z-0">
        <PlaceholderImage 
          src={heroData.image}
          label="Hero Image: Real High-Quality Cake Photograph (Portrait Optimized)" 
          priority
          className="w-full h-full object-cover object-center" 
        />
        <div className="absolute inset-0 bg-black/40" /> {/* Dark overlay for text readability */}
      </motion.div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 text-center flex flex-col items-center justify-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        >
          <span className="text-primary font-medium tracking-widest uppercase text-xs md:text-sm mb-4 md:mb-6 block">
            {siteConfig.name}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="font-heading text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white font-bold max-w-4xl leading-[1.1] mb-4 md:mb-6"
        >
          Every Celebration Deserves Something Extraordinary.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="text-white/80 text-base md:text-xl max-w-2xl mb-8 md:mb-12 px-4 md:px-0"
        >
          {siteConfig.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 w-full sm:w-auto px-4 sm:px-0"
        >
          <a
            href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
              siteConfig.contact.whatsappMessage
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ size: "lg", className: "w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-lg min-w-[200px] min-h-[48px] shadow-lg shadow-primary/20" })}
          >
            Order on WhatsApp
          </a>
          <a
            href="#collections"
            className={buttonVariants({ variant: "outline", size: "lg", className: "w-full sm:w-auto bg-transparent border-white/50 text-white hover:bg-white hover:text-foreground rounded-full px-8 py-6 text-lg min-w-[200px] min-h-[48px] transition-all" })}
          >
            Explore Collection
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          className="mt-8 text-white/90 text-xs sm:text-sm flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-3 font-medium tracking-wide"
        >
          <span className="flex items-center">
            <span className="text-yellow-400 mr-2 tracking-widest text-base">★★★★★</span> Loved by Customers in Gadag
          </span>
          <span className="hidden sm:inline opacity-50">•</span>
          <span>Pickup Only</span>
          <span className="hidden sm:inline opacity-50">•</span>
          <span>Freshly Handmade</span>
        </motion.div>
      </div>

      {/* Decorative floating particles can be added here using Canvas/WebGL later, kept simple for now */}
    </section>
  );
}
