import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Code, Server, DatabaseZap, Palette } from "lucide-react"

const services = [
  {
    icon: <Code className="h-10 w-10 text-primary" />,
    title: "Web Application Development",
    description: "Building responsive and scalable full-stack web applications using modern technologies like React, Next.js, and Node.js.",
  },
  {
    icon: <Server className="h-10 w-10 text-primary" />,
    title: "API Development & Integration",
    description: "Designing and building robust RESTful APIs for seamless data communication between client and server.",
  },
  {
    icon: <DatabaseZap className="h-10 w-10 text-primary" />,
    title: "Database Design & Management",
    description: "Expertise in designing and managing both SQL and NoSQL databases like MongoDB, PostgreSQL, and MySQL.",
  },
  {
    icon: <Palette className="h-10 w-10 text-primary" />,
    title: "UI/UX Design & Implementation",
    description: "Creating intuitive and visually appealing user interfaces with a focus on user experience, using tools like Tailwind CSS and ShadCN UI.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary font-headline">My Services</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">I offer a range of services to help you build your next digital product, from front-end development to back-end architecture.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="bg-background shadow-lg hover:shadow-primary/20 transition-shadow duration-300 flex flex-col items-center text-center p-6">
                <div className="mb-4">{service.icon}</div>
                <CardHeader className="p-0 mb-2">
                    <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                    <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
