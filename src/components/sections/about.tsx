import { Card } from "@/components/ui/card"
import { Server, Database, KeyRound, Workflow, Flower2, Component } from "lucide-react"

const ReactSVG = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 -10.23174 23 20.46348" className="h-10 w-10 text-primary fill-current"><title>React Logo</title><circle cx="0" cy="0" r="2.05" /><g stroke="currentColor" strokeWidth="1" fill="none"><ellipse rx="11" ry="4.2"/><ellipse rx="11" ry="4.2" transform="rotate(60)"/><ellipse rx="11" ry="4.2" transform="rotate(120)"/></g></svg>
)

const TailwindSVG = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 154" className="h-10 w-10"><path fill="currentColor" d="M128 0C93.867 0 72.533 17.067 64 51.2 76.8 34.133 91.733 27.733 108.8 32c17.067 4.267 29.867 17.067 42.667 29.867C162.667 74.667 176.533 85.333 192 85.333c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-17.067-4.267-29.867-17.067-42.667-29.867C157.333 10.667 143.467 0 128 0zM64 64C29.867 64 8.533 81.067 0 115.2c12.8-17.067 27.733-23.467 44.8-19.2 17.067 4.267 29.867 17.067 42.667 29.867C98.667 138.667 112.533 149.333 128 149.333c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-17.067-4.267-29.867-17.067-42.667-29.867C93.333 74.667 79.467 64 64 64z" className="text-accent" /></svg>
)

const NodeSVG = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 272" className="h-10 w-10"><g><path fill="#8CC84B" d="M128 0l110.5 63.75v127.5L128 255l-110.5-63.75v-127.5z"/><path fill="#FFF" d="M128 20.5l-93 53.75v107.5l93 53.75 93-53.75v-107.5z"/><path fill="#333" d="M128 40.5l-76 44v87.5l76 44 76-44v-87.5z"/><path fill="#8CC84B" d="M128 60.5l-59 34v67.5l59 34 59-34v-67.5z"/><path fill="#FFF" d="M128 80.5l-42 24v47.5l42 24 42-24v-47.5z"/><path fill="#333" d="M128 100.5l-25 14v27.5l25 14 25-14v-27.5z"/></g><text x="50%" y="85%" textAnchor="middle" fill="#8CC84B" fontSize="48" fontFamily="Arial, Helvetica, sans-serif" dy=".3em">Node</text></svg>
)

const skills = [
  { icon: <ReactSVG />, name: "React.js" },
  { icon: <TailwindSVG />, name: "Tailwind CSS" },
  { icon: <Component className="h-10 w-10 text-primary" />, name: "ShadCN" },
  { icon: <Flower2 className="h-10 w-10 text-primary" />, name: "DaisyUI" },
  { icon: <NodeSVG />, name: "Node.js" },
  { icon: <Server className="h-10 w-10 text-primary" />, name: "Express.js" },
  { icon: <Database className="h-10 w-10 text-primary" />, name: "MongoDB" },
  { icon: <Database className="h-10 w-10 text-primary" />, name: "PostgreSQL" },
  { icon: <Database className="h-10 w-10 text-primary" />, name: "MySQL" },
  { icon: <KeyRound className="h-10 w-10 text-primary" />, name: "JWT Auth" },
  { icon: <Workflow className="h-10 w-10 text-primary" />, name: "REST APIs" },
]

export function About() {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary font-headline">About Me</h2>
            <p className="text-muted-foreground leading-relaxed">
              I'm a B.Tech 3rd year student at Calcutta University, with a B.Sc. in Computer Science. I have working knowledge of full-stack development, system design, and modern web technologies. I recently built a fully scalable dynamic eCommerce website using the MERN stack and JWT authentication.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold tracking-tighter text-primary/90 font-headline">My Skills</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {skills.map((skill) => (
                <Card key={skill.name} className="flex flex-col items-center justify-center p-4 text-center transition-transform duration-300 hover:scale-105 hover:shadow-lg bg-background">
                  {skill.icon}
                  <p className="mt-2 text-sm font-medium">{skill.name}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
