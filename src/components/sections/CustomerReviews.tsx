"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { testimonials } from "@/config/data";

export function CustomerReviews() {
  return (
    <section id="reviews" className="py-24 bg-[#F8F5F2] overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Trust Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center mb-8"
        >
          <div className="flex gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-[#D4AF37] text-[#D4AF37]" />
            ))}
          </div>
          <p className="text-[#4E342E] font-medium tracking-wide uppercase text-sm mb-2">
            Rated by Happy Customers
          </p>
          <p className="text-[#4E342E]/70 text-xs tracking-widest text-center">
            Made Fresh Daily • Handmade with Love • Pickup in Gadag
          </p>
        </motion.div>

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl font-bold text-[#4E342E] mb-6"
          >
            Customer Love ❤️
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#4E342E]/80 text-lg"
          >
            Nothing speaks louder than the smiles and words of our happy customers.
          </motion.p>
        </div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto px-4 md:px-12 relative"
        >
          {/* Glassmorphism subtle background blob for extra effect */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-white/40 blur-[100px] rounded-full pointer-events-none" />

          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full relative z-10"
          >
            <CarouselContent className="-ml-4 py-8">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-4 basis-[80%] md:basis-1/2 lg:basis-1/3">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-2 h-full flex justify-center"
                  >
                    {/* Glassmorphism Background behind phone */}
                    <div className="relative p-6 rounded-[50px] bg-white/30 backdrop-blur-md border border-white/40 shadow-xl transition-transform duration-500 md:hover:scale-105">
                      {/* Phone Mockup Frame */}
                      <div className="relative w-[260px] md:w-[280px] aspect-[9/16] rounded-[40px] border-[12px] border-[#333] bg-black shadow-2xl overflow-hidden ring-1 ring-white/20">
                        {/* Notch */}
                        <div className="absolute top-0 inset-x-0 h-6 bg-[#333] rounded-b-3xl w-32 mx-auto z-20" />
                        
                        {/* Image inside phone */}
                        <div className="relative w-full h-full bg-[#111]">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.alt}
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 260px, 280px"
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-4 lg:-left-12 border-[#D4AF37]/50 text-[#4E342E] hover:bg-[#D4AF37] hover:text-white hover:border-[#D4AF37] bg-white/80 backdrop-blur-sm shadow-sm" />
            <CarouselNext className="hidden md:flex -right-4 lg:-right-12 border-[#D4AF37]/50 text-[#4E342E] hover:bg-[#D4AF37] hover:text-white hover:border-[#D4AF37] bg-white/80 backdrop-blur-sm shadow-sm" />
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}
