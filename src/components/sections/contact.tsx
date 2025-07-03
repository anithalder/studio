import { ContactForm } from "@/components/contact-form"
import { Github, Linkedin, Mail, Phone } from "lucide-react"
import Link from "next/link"
import { Button } from "../ui/button"

export function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary font-headline">Get In Touch</h2>
          <p className="text-muted-foreground mt-2">I'm currently open to new opportunities. Feel free to reach out!</p>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
                <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                <div className="space-y-4 text-muted-foreground">
                  <div className="flex items-center gap-4">
                    <Mail className="h-6 w-6 text-primary"/>
                    <a href="mailto:anit.halder.dev@gmail.com" className="hover:text-primary transition-colors">anit.halder.dev@gmail.com</a>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="h-6 w-6 text-primary"/>
                    <a href="tel:+911234567890" className="hover:text-primary transition-colors">+91 12345 67890</a>
                  </div>
                </div>
            </div>
            <div>
                <h3 className="text-xl font-bold mb-4">Find me on</h3>
                <div className="flex space-x-4">
                    <a href="https://github.com/anit-halder" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <Button variant="outline" size="icon" className="h-12 w-12">
                            <Github className="h-6 w-6"/>
                        </Button>
                    </a>
                    <a href="https://linkedin.com/in/anit-halder" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <Button variant="outline" size="icon" className="h-12 w-12">
                            <Linkedin className="h-6 w-6"/>
                        </Button>
                    </a>
                </div>
            </div>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
