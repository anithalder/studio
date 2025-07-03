import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Github } from "lucide-react"

export function Portfolio() {
  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary font-headline">My Portfolio</h2>
            <p className="text-muted-foreground mt-2">A selection of my work.</p>
        </div>
        <Card className="overflow-hidden shadow-lg hover:shadow-primary/20 transition-shadow duration-300">
            <div className="grid md:grid-cols-2">
                <CardContent className="p-0">
                    <Image 
                        src="https://placehold.co/800x600.png"
                        alt="E-Commerce Garment Website"
                        width={800}
                        height={600}
                        className="object-cover w-full h-full"
                        data-ai-hint="ecommerce website"
                    />
                </CardContent>
                <div className="p-6 flex flex-col justify-center">
                    <CardHeader className="pb-4">
                        <CardTitle className="text-2xl font-bold">E-Commerce Garment Website</CardTitle>
                        <CardDescription className="pt-2 leading-relaxed">
                            A full-stack eCommerce platform with dynamic product listing, JWT-based user authentication, and admin panel functionality. Built using React (frontend), Express.js (backend), MongoDB, and Node.js. Designed with TailwindCSS and responsive UI components.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="py-4">
                         <div className="flex flex-wrap gap-2">
                            <Badge>MERN</Badge>
                            <Badge>JWT</Badge>
                            <Badge>Tailwind</Badge>
                            <Badge variant="secondary">Admin Panel</Badge>
                            <Badge variant="secondary">REST API</Badge>
                        </div>
                    </CardContent>
                    <CardFooter className="flex gap-4">
                        <Button disabled>
                            <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                        </Button>
                        <Button variant="secondary" disabled>
                            <Github className="mr-2 h-4 w-4" /> View Code
                        </Button>
                    </CardFooter>
                </div>
            </div>
        </Card>
      </div>
    </section>
  )
}
