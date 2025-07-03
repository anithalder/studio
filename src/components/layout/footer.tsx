import { Github, Linkedin, Mail, Phone, Facebook, Instagram } from "lucide-react"
import Link from "next/link"

const DiscordIcon = () => (
    <svg
      role="img"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
    >
      <title>Discord</title>
      <path d="M20.317 4.369a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.229a18.258 18.258 0 00-5.484 0 12.35 12.35 0 00-.617-1.229.076.076 0 00-.079-.037A19.736 19.736 0 003.679 4.37a.077.077 0 00-.053.078c.006.14.021.282.04.425a21.186 21.186 0 00-1.634 6.967.078.078 0 00.042.086c.36.177.724.341 1.09.492a.078.078 0 00.085-.05c.091-.22.18-.442.265-.66a13.526 13.526 0 00-1.62-.258.076.076 0 00-.066.022c-.133.095-.262.192-.385.29a.076.076 0 00-.023.085c.677 1.433 1.55 2.735 2.594 3.86a.076.076 0 00.094.025c.338-.155.662-.32.972-.494a.077.077 0 00.057-.075c-.011-.088-.022-.176-.032-.262a.074.074 0 00-.065-.066c-.39-.07-.774-.145-1.148-.222a.076.076 0 00-.085.048c-.097.155-.19.312-.277.474a.075.075 0 00.023.092c1.078.65 2.248 1.17 3.482 1.542a.077.077 0 00.088-.02C13.232 18.01 14.81 17.148 16.22 16.1a.076.076 0 00.049-.071c-.022-.12-.04-.24-.056-.358a.076.076 0 00-.08-.06c-.458.09-.91.184-1.352.272a.075.075 0 00-.08.065c-.092.18-.18.354-.262.525a.076.076 0 00.024.09c.96.545 1.985 1.002 3.06 1.362a.076.076 0 00.09-.025c1.13-1.158 2.04-2.523 2.65-4.062a.076.076 0 00-.011-.088c-.126-.1-.258-.192-.39-.287a.076.076 0 00-.07-.023c-.528.088-1.048.163-1.56.222a.076.076 0 00-.068.08c.084.22.17.437.258.65a.076.076 0 00.085.05c.37-.152.734-.316 1.096-.492a.075.075 0 00.042-.086c.023-.17.04-.338.052-.504a.076.076 0 00-.053-.078z"/>
    </svg>
)

export function Footer() {
  const socialLinks = [
      { href: "mailto:anit.halder.dev@gmail.com", icon: <Mail />, label: "Email" },
      { href: "tel:+911234567890", icon: <Phone />, label: "Phone" },
      { href: "https://github.com/anit-halder", icon: <Github />, label: "GitHub" },
      { href: "https://linkedin.com/in/anit-halder", icon: <Linkedin />, label: "LinkedIn" },
      { href: "https://www.facebook.com/your-profile", icon: <Facebook />, label: "Facebook" },
      { href: "https://www.instagram.com/your-profile", icon: <Instagram />, label: "Instagram" },
      { href: "https://discord.com/users/your-id", icon: <DiscordIcon />, label: "Discord" },
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
