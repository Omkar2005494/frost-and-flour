"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { featuredCollections } from "@/config/data";

export function FeaturedCollections() {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section id="collections" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16">
          <div className="max-w-2xl">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Collections
            </h2>
            <p className="text-muted-foreground text-lg">
              Explore our range of premium handcrafted cakes designed for every special occasion.
            </p>
          </div>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {featuredCollections.map((col, idx) => (
            <motion.div
              key={col.id}
              variants={item}
              className={`relative overflow-hidden rounded-[16px] group cursor-pointer aspect-square ${
                idx === 2 || idx === 3 ? "lg:col-span-2 lg:aspect-[2/1]" : ""
              }`}
            >
              <PlaceholderImage src={col.image} label={col.title} className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 group-hover:brightness-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-opacity duration-500 group-hover:opacity-90" />
              <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full flex flex-col justify-end">
                <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                  <h3 className="text-white font-heading text-2xl md:text-3xl font-bold mb-2">
                    {col.title}
                  </h3>
                  <p className="text-white/80 text-sm md:text-base opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
                    {col.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
