import { Github, Linkedin, Mail, Phone } from "lucide-react"
import Link from "next/link"

export function Footer() {
  const socialLinks = [
      { href: "mailto:anit.halder.dev@gmail.com", icon: <Mail />, label: "Email" },
      { href: "tel:+911234567890", icon: <Phone />, label: "Phone" },
      { href: "https://github.com/anit-halder", icon: <Github />, label: "GitHub" },
      { href: "https://linkedin.com/in/anit-halder", icon: <Linkedin />, label: "LinkedIn" },
  ]
  
  return (
    <footer className="bg-card py-8">
      <div className="container mx-auto px-4 md:px-6 text-center text-muted-foreground">
        <div className="flex justify-center space-x-6 mb-4">
            {socialLinks.map(link => (
                 <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" aria-label={link.label}>
                    {link.icon}
                 </a>
            ))}
        </div>
        <p>&copy; {new Date().getFullYear()} Anit Halder. All Rights Reserved.</p>
        <p className="text-sm mt-2">Built with Next.js & Tailwind CSS</p>
      </div>
    </footer>
  )
}
