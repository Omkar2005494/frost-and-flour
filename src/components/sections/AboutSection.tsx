"use client";

import React from "react";
import { motion } from "framer-motion";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { aboutData } from "@/config/data";

export function AboutSection() {
  return (
    <section id="story" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Decorative background circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -z-10" />
      
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2"
          >
            <div className="relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden group">
              <PlaceholderImage src={aboutData.image} label="Baker / Baking Process Image" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="w-full lg:w-1/2 flex flex-col space-y-6"
          >
            <span className="text-primary font-medium tracking-widest uppercase text-sm">
              Our Story
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Every cake tells a story.
            </h2>
            <div className="text-muted-foreground text-lg space-y-4">
              <p>
                At Frost & Flour, we believe a cake is never just a dessert—it is the centerpiece of your most cherished memories. Every creation that leaves our kitchen is a labor of love, handcrafted to make your celebrations truly extraordinary.
              </p>
              <p>
                Born from a deep passion for baking right here in Gadag, our boutique bakery is dedicated to the art of premium cake design. We obsess over every detail, from the delicate piping to the perfect balance of flavors.
              </p>
              <p>
                We never compromise on quality. By sourcing the finest ingredients and baking everything fresh to order, we ensure that every slice tastes just as breathtaking as it looks. Your special moments deserve nothing less.
              </p>
            </div>
            
            <div className="pt-6 border-t border-border mt-8 flex items-center space-x-6">
              <div>
                <span className="block font-heading text-2xl font-bold text-foreground">100%</span>
                <span className="text-sm text-muted-foreground uppercase tracking-widest">Handcrafted</span>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div>
                <span className="block font-heading text-2xl font-bold text-foreground">Fresh</span>
                <span className="text-sm text-muted-foreground uppercase tracking-widest">Ingredients</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
