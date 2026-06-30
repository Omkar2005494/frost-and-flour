"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { Menu, X } from "lucide-react";
import { InstagramIcon as Instagram } from "@/components/ui/instagram-icon";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Collections", href: "#collections" },
    { name: "Gallery", href: "#gallery" },
    { name: "Story", href: "#story" },
    { name: "Reviews", href: "#reviews" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm py-4"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col items-center group relative z-50">
          <div className="relative w-24 h-24 md:w-32 md:h-32 mb-1 group-hover:scale-105 transition-transform duration-300">
            <Image src="/logo.png" alt="Frost & Flour Logo" fill className="object-contain" priority />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors uppercase tracking-widest min-h-[48px] flex items-center"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href={siteConfig.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/80 hover:text-primary transition-colors min-h-[48px] flex items-center justify-center min-w-[48px]"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
              href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
                siteConfig.contact.whatsappMessage
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({ variant: "default", className: "bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6 min-h-[48px]" })}
            >
              Order Now
            </a>
        </div>

        {/* Mobile Menu Toggle via Sheet */}
        <div className="md:hidden">
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger
              render={
                <button
                  className="text-foreground min-h-[48px] min-w-[48px] flex items-center justify-center -mr-2"
                  aria-label="Toggle menu"
                />
              }
            >
              <Menu className="w-6 h-6" />
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-[400px] border-l border-border bg-background p-0 flex flex-col">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex flex-col items-center justify-center flex-1 space-y-8 p-8">
                {/* Mobile Logo inside Menu */}
                <Link href="/" className="flex flex-col items-center mb-8" onClick={() => setMobileMenuOpen(false)}>
                  <div className="relative w-28 h-28">
                    <Image src="/logo.png" alt="Frost & Flour Logo" fill className="object-contain" priority />
                  </div>
                </Link>

                {/* Mobile Links */}
                <nav className="flex flex-col items-center space-y-6 w-full">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-2xl font-heading text-foreground hover:text-primary transition-colors min-h-[48px] flex items-center justify-center w-full"
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>
              </div>

              {/* Mobile Actions Area */}
              <div className="p-8 border-t border-border/50 bg-muted/20 space-y-6">
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
                    siteConfig.contact.whatsappMessage
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonVariants({ size: "lg", className: "w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full min-h-[56px] text-lg" })}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Order on WhatsApp
                </a>
                <div className="flex justify-center">
                  <a
                    href={siteConfig.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 text-foreground/80 hover:text-primary transition-colors min-h-[48px] px-4"
                  >
                    <Instagram className="w-6 h-6" />
                    <span className="font-medium">Follow on Instagram</span>
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
