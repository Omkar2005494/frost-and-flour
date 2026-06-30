import React from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { MapPin, Clock } from "lucide-react";
import { InstagramIcon as Instagram } from "@/components/ui/instagram-icon";
import { buttonVariants } from "@/components/ui/button";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 text-center md:text-left">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <Link href="/" className="flex flex-col items-center md:items-start group">
              <div className="relative w-32 h-32 mb-2 group-hover:scale-105 transition-transform duration-300">
                <Image src="/logo.png" alt="Frost & Flour Logo" fill className="object-contain" />
              </div>
            </Link>
            <p className="text-muted-foreground text-sm max-w-sm mt-4">
              Premium handcrafted homemade cakes designed with love for your special moments.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <h4 className="font-heading font-semibold text-lg tracking-wider uppercase text-foreground">
              Explore
            </h4>
            <nav className="flex flex-col space-y-3">
              <Link href="#collections" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Collections
              </Link>
              <Link href="#gallery" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Signature Gallery
              </Link>
              <Link href="#reviews" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Customer Love
              </Link>
              <Link href="#faq" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                FAQ
              </Link>
            </nav>
          </div>

          {/* Contact & Info */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <h4 className="font-heading font-semibold text-lg tracking-wider uppercase text-foreground">
              Visit Us
            </h4>
            <div className="flex items-center space-x-2 text-muted-foreground text-sm">
              <MapPin className="w-4 h-4 text-primary" />
              <span>{siteConfig.location} (Pickup Only)</span>
            </div>
            <div className="flex items-center space-x-2 text-muted-foreground text-sm">
              <Clock className="w-4 h-4 text-primary" />
              <span>{siteConfig.businessHours}</span>
            </div>
            
            <div className="pt-4 flex items-center space-x-4">
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground hover:text-primary hover:border-primary transition-all"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                  href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
                    siteConfig.contact.whatsappMessage
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonVariants({ variant: "outline", className: "rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all" })}
                >
                  Order on WhatsApp
                </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-muted-foreground">
          <p>&copy; {currentYear} {siteConfig.name}. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-4">
            <Link href="#" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
