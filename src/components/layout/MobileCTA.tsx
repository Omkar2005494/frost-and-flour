"use client";

import React, { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { InstagramIcon as Instagram } from "@/components/ui/instagram-icon";
import { siteConfig } from "@/config/site";
import { motion, AnimatePresence } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";

export function MobileCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show after scrolling down slightly to allow initial hero view without clutter
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-50 md:hidden pb-[env(safe-area-inset-bottom)] px-4"
        >
          {/* Glassmorphism wrapper */}
          <div className="mb-4 flex items-center justify-between gap-3 rounded-full bg-background/80 backdrop-blur-md border border-border p-2 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
            <a
              href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
                siteConfig.contact.whatsappMessage
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({
                size: "lg",
                className:
                  "flex-1 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full flex items-center justify-center space-x-2 min-h-[48px]",
              })}
            >
              <MessageCircle className="w-5 h-5" />
              <span className="font-medium text-[15px]">Order on WhatsApp</span>
            </a>
            
            <a
              href={siteConfig.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({
                variant: "outline",
                size: "icon",
                className: "rounded-full border-primary/20 text-primary hover:bg-primary/5 min-w-[48px] min-h-[48px]",
              })}
              aria-label="Follow us on Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
