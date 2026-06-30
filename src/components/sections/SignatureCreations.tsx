"use client";

import React from "react";
import { motion } from "framer-motion";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { signatureCreations } from "@/config/data";

export function SignatureCreations() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4"
          >
            Signature Creations
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg"
          >
            Our most loved recipes, perfected over time and crafted with the finest ingredients.
          </motion.p>
        </div>

        <div className="flex flex-col space-y-16 md:space-y-24">
          {signatureCreations.map((item, index) => (
            <motion.div 
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="w-full md:w-1/2 aspect-[4/5] md:aspect-[3/4] relative overflow-hidden rounded-[16px] group">
                <PlaceholderImage 
                  src={item.image}
                  label={`${item.title} Image`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
              </div>
              <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left space-y-6">
                <span className="text-primary tracking-[0.3em] uppercase text-sm font-medium">
                  Signature 0{index + 1}
                </span>
                <h3 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground font-bold leading-tight">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-lg md:text-xl max-w-md mx-auto md:mx-0">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
