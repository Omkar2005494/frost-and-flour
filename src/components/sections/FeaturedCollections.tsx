"use client";

import React, { useState, useEffect } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { featuredCollections } from "@/config/data";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";

const AnimatedCollectionCard = ({ col, idx, variants }: { col: any, idx: number, variants: Variants }) => {
  const [currentImageIdx, setCurrentImageIdx] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!col.images || col.images.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentImageIdx((prev) => (prev + 1) % col.images.length);
    }, 3500); // Crossfade every 3.5s
    
    return () => clearInterval(interval);
  }, [col.images]);

  return (
    <>
      <motion.div
        variants={variants}
        onClick={() => setIsOpen(true)}
        className={`relative overflow-hidden rounded-[16px] group cursor-pointer aspect-square ${
          idx === 2 || idx === 3 ? "lg:col-span-2 lg:aspect-[2/1]" : ""
        }`}
      >
        {/* Background images with crossfade */}
        <AnimatePresence initial={false}>
          <motion.div
            key={currentImageIdx}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0 w-full h-full"
          >
            <PlaceholderImage 
              src={col.images ? col.images[currentImageIdx] : col.image} 
              label={col.title} 
              className="w-full h-full object-cover transition-all duration-[4000ms] ease-out group-hover:scale-110 group-hover:brightness-110 scale-105" 
            />
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-opacity duration-500 group-hover:opacity-90 z-10" />
        <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full flex flex-col justify-end z-20">
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

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-4xl p-6 bg-background rounded-3xl overflow-hidden border-border">
          <DialogHeader className="mb-4 text-left">
            <DialogTitle className="text-3xl font-heading">{col.title}</DialogTitle>
            <DialogDescription className="text-base text-muted-foreground">{col.description}</DialogDescription>
          </DialogHeader>
          <div className="relative px-8">
            {col.images && col.images.length > 0 ? (
              <Carousel className="w-full" opts={{ loop: true }}>
                <CarouselContent>
                  {col.images.map((img: any, i: number) => (
                    <CarouselItem key={i}>
                      <div className="relative w-full aspect-square md:aspect-[16/10] rounded-2xl overflow-hidden">
                        <PlaceholderImage src={img} label={`${col.title} ${i + 1}`} className="object-cover" />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="-left-4 bg-background shadow-md border-border text-foreground hover:bg-muted" />
                <CarouselNext className="-right-4 bg-background shadow-md border-border text-foreground hover:bg-muted" />
              </Carousel>
            ) : (
              <div className="relative w-full aspect-square md:aspect-[16/10] rounded-2xl overflow-hidden">
                <PlaceholderImage src={col.image} label={col.title} className="object-cover" />
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

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
            <AnimatedCollectionCard key={col.id} col={col} idx={idx} variants={item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
