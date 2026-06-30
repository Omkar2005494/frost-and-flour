"use client";

import React from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { buttonVariants } from "@/components/ui/button";
import { MapPin, Clock, MessageCircle } from "lucide-react";
import { InstagramIcon as Instagram } from "@/components/ui/instagram-icon";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FaqContact() {
  const faqs = [
    {
      question: "How many days before should I order?",
      answer: "We recommend placing your order at least 3-5 days in advance for standard cakes, and 2 weeks in advance for wedding or custom tiered cakes to ensure availability.",
    },
    {
      question: "Are your cakes vegetarian?",
      answer: "Yes, all our cakes are made 100% vegetarian, maintaining the same rich taste and premium quality.",
    },
    {
      question: "Where is pickup?",
      answer: `Pickup is located at our home studio in ${siteConfig.location}. The exact address will be shared upon order confirmation.`,
    },
    {
      question: "How do I place an order?",
      answer: "The easiest way is to message us on WhatsApp with your date, desired cake size, and any design inspiration. We will guide you from there!",
    },
    {
      question: "Can I request custom designs?",
      answer: "Absolutely! We love bringing your unique visions to life. Feel free to share sketches or reference images when you contact us.",
    },
  ];

  return (
    <section id="faq" className="py-24 bg-muted/20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-heading text-4xl font-bold text-foreground mb-8">
              Frequently Asked Questions
            </h2>
            <Accordion className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-border">
                  <AccordionTrigger className="text-left font-heading text-lg hover:text-primary transition-colors py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-background rounded-2xl p-8 md:p-12 border border-border shadow-sm flex flex-col h-full justify-center"
          >
            <span className="text-primary font-medium tracking-widest uppercase text-sm mb-4 block">
              Get in Touch
            </span>
            <h2 className="font-heading text-4xl font-bold text-foreground mb-8">
              Let's create something beautiful together.
            </h2>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-primary mt-1 shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Location</h4>
                  <p className="text-muted-foreground">{siteConfig.location}</p>
                  <p className="text-xs text-primary mt-1 font-medium tracking-wide uppercase">Pickup Only</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Clock className="w-6 h-6 text-primary mt-1 shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Business Hours</h4>
                  <p className="text-muted-foreground">{siteConfig.businessHours}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-auto">
              <a
                href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
                  siteConfig.contact.whatsappMessage
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonVariants({ size: "lg", className: "bg-primary hover:bg-primary/90 text-primary-foreground rounded-full flex-1 flex items-center justify-center space-x-2" })}
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp Us</span>
              </a>
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonVariants({ variant: "outline", size: "lg", className: "border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full" })}
              >
                <Instagram className="w-5 h-5" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
