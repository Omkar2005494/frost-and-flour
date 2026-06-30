"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { InstagramIcon as Instagram } from "@/components/ui/instagram-icon";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { instagramPosts } from "@/config/data";

export function InstagramShowcase() {
  return (
    <section className="py-24 bg-background border-t border-border">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-2xl mb-6 md:mb-0">
            <h2 className="font-heading text-4xl font-bold text-foreground mb-4">
              Join Us On Instagram
            </h2>
            <p className="text-muted-foreground text-lg">
              Follow {siteConfig.socials.instagramHandle} for daily inspiration, behind-the-scenes, and our latest creations.
            </p>
          </div>
          <a
              href={siteConfig.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({ variant: "outline", className: "border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full shrink-0 flex items-center space-x-2" })}
            >
              <Instagram className="w-4 h-4" />
              <span>Follow Us</span>
            </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {instagramPosts.map((post, index) => (
            <motion.a
              key={post.id}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="relative aspect-square overflow-hidden rounded-xl group block"
            >
              <Image 
                src={post.image} 
                alt={`Instagram Post ${post.id}`} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110" 
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                <Instagram className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-50 group-hover:scale-100" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
