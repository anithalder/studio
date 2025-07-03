import { Card, CardContent } from "@/components/ui/card"
import { Lightbulb } from "lucide-react"

export function Exploring() {
  return (
    <section id="exploring" className="py-20 bg-card">
        <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary font-headline">What I’m Exploring</h2>
            </div>
            <div className="max-w-3xl mx-auto">
                <Card className="bg-background shadow-lg">
                    <CardContent className="p-8 text-center flex flex-col items-center">
                        <Lightbulb className="h-12 w-12 text-primary mb-4" />
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Currently focusing on mastering scalable system design and full-stack application architecture. Open to internships, collaborations, and real-world project contributions.
                        </p>
                    </CardContent>
                </Card>
            </div>
        </div>
    </section>
  )
}
