import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Github } from "lucide-react"
import projectsData from "@/components/projects.json"

export function Portfolio() {
  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary font-headline">My Portfolio</h2>
            <p className="text-muted-foreground mt-2">A selection of my work. Add your own projects below.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {projectsData.projects.map((project, index) => (
            <Card key={index} className="overflow-hidden shadow-lg hover:shadow-primary/20 transition-all duration-300 flex flex-col">
              <CardContent className="p-0">
                <Image 
                    src={project.image.src}
                    alt={project.image.alt}
                    width={project.image.width}
                    height={project.image.height}
                    className="object-cover w-full h-auto aspect-video"
                    data-ai-hint={project.image.hint}
                />
              </CardContent>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex-grow">
                  <CardHeader className="p-0 pb-4">
                      <CardTitle className="text-2xl font-bold">{project.title}</CardTitle>
                      <CardDescription className="pt-2 leading-relaxed">
                          {project.description}
                      </CardDescription>
                  </CardHeader>
                  <CardContent className="p-0 py-4">
                       <div className="flex flex-wrap gap-2">
                          {project.tags.map(tag => (
                            <Badge key={tag}>{tag}</Badge>
                          ))}
                      </div>
                  </CardContent>
                </div>
                <CardFooter className="p-0 pt-4 flex gap-4">
                    <Button disabled={project.liveDisabled}>
                        <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                    </Button>
                    <Button variant="secondary" disabled={project.codeDisabled}>
                        <Github className="mr-2 h-4 w-4" /> View Code
                    </Button>
                </CardFooter>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
