"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import { usePathname } from "next/navigation"

import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/layout/theme-toggle"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#portfolio", label: "Portfolio" },
  { href: "/#services", label: "Services" },
  { href: "/#contact", label: "Contact" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Helper to check if link is active
  const isActive = (href: string) => {
    // Remove hash for comparison
    const cleanHref = href.split("#")[0]
    const cleanPath = pathname.split("#")[0]

    // Home
    if (href === "/") return cleanPath === "/"

    // For hash links and other pages
    if (href.includes("#")) {
      return pathname === "/" && window.location.hash === href.replace("/", "")
    }

    // For other pages
    return cleanPath === cleanHref
  }

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? "bg-background/80 backdrop-blur-sm shadow-md" : "bg-transparent"}`}>
      <div className="container mx-auto flex h-16 items-center justify-between px-3 md:px-4">
        <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-primary transition-colors hover:text-primary/80 mr-4">
          <Image src="/images/logo.png" alt="Logo" width={50} height={50} className="ml-2" />
          {/* <span className="text-3xl">Anit</span> */}
        </Link>
        <nav className="hidden items-center gap-4 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-foreground/80 transition-colors hover:text-primary ${isActive(link.href) ? "font-semibold text-primary underline underline-offset-4" : ""}`}
            >
              {link.label}
            </Link>
          ))}
          <Button asChild>
            <a href="/resume.pdf" download="Anit-Halder-Resume.pdf">Download Resume</a>
          </Button>
          <ThemeToggle />
        </nav>
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-background/95 pb-6">
          <nav className="flex flex-col items-center gap-4 py-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-lg text-foreground/80 transition-colors hover:text-primary ${isActive(link.href) ? "font-semibold text-primary underline underline-offset-4" : ""}`}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="w-4/5">
              <a href="/resume.pdf" download="Anit-Halder-Resume.pdf" onClick={() => setIsOpen(false)}>Download Resume</a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
