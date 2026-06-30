"use client";

import React from "react";
import { motion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { MessageCircle, FileText, CheckCircle, Package } from "lucide-react";

export function HowToOrder() {
  const steps = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Choose Your Cake",
      desc: "Browse our collections or share your custom design ideas.",
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Share Details",
      desc: "Message us on WhatsApp with the date, flavor, and design requirements.",
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Confirm Order",
      desc: "We will review your request, provide a quote, and confirm the order.",
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: "Pick Up Your Cake",
      desc: "Collect your freshly baked cake from our Gadag location on the selected date.",
    },
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4"
          >
            How to Order
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg"
          >
            A simple, seamless process to bring your dream cake to life.
          </motion.p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-border -z-10" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="flex flex-col items-center text-center space-y-4"
              >
                <div className="w-20 h-20 rounded-full bg-background border-4 border-muted flex items-center justify-center text-primary shadow-sm mb-2">
                  {step.icon}
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm max-w-[200px]">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <a
            href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
              siteConfig.contact.whatsappMessage
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ size: "lg", className: "bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8" })}
          >
            Start Your Order Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}
