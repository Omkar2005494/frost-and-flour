"use client";

import React from "react";
import { siteConfig } from "@/config/site";
import { motion } from "framer-motion";

export function TrustSection() {
  return (
    <section className="py-16 md:py-24 bg-background border-b border-border overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {siteConfig.stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
              className="flex flex-col items-center text-center space-y-2 group"
            >
              <span className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary group-hover:scale-105 transition-transform duration-500">
                {stat.value}
              </span>
              <span className="text-sm md:text-base text-muted-foreground uppercase tracking-widest font-medium">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
