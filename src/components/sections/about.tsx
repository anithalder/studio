import { Card } from "@/components/ui/card"
import { Server, Database, KeyRound, Workflow, Flower2, Component } from "lucide-react"

const ReactSVG = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 -10.23174 23 20.46348" className="h-10 w-10 text-primary fill-current"><title>React Logo</title><circle cx="0" cy="0" r="2.05" /><g stroke="currentColor" strokeWidth="1" fill="none"><ellipse rx="11" ry="4.2"/><ellipse rx="11" ry="4.2" transform="rotate(60)"/><ellipse rx="11" ry="4.2" transform="rotate(120)"/></g></svg>
)

const TailwindSVG = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 154" className="h-10 w-10"><path fill="currentColor" d="M128 0C93.867 0 72.533 17.067 64 51.2 76.8 34.133 91.733 27.733 108.8 32c17.067 4.267 29.867 17.067 42.667 29.867C162.667 74.667 176.533 85.333 192 85.333c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-17.067-4.267-29.867-17.067-42.667-29.867C157.333 10.667 143.467 0 128 0zM64 64C29.867 64 8.533 81.067 0 115.2c12.8-17.067 27.733-23.467 44.8-19.2 17.067 4.267 29.867 17.067 42.667 29.867C98.667 138.667 112.533 149.333 128 149.333c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-17.067-4.267-29.867-17.067-42.667-29.867C93.333 74.667 79.467 64 64 64z" className="text-accent" /></svg>
)

const NodeSVG = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="h-10 w-10"><path fill="currentColor" className="text-primary" d="M128 0C57.308 0 0 57.308 0 128s57.308 128 128 128 128-57.308 128-128S198.692 0 128 0zm1.25 231.782c-55.577 0-101.442-42.23-101.442-95.897 0-7.385 1.026-14.897 2.692-22.154l50.538 29.205v62.436c0 5.256 4.23 9.487 9.487 9.487h77.052c4.871 0 8.846-3.718 8.846-8.59l-.001-63.333 21.923 12.667c-1.923 48.718-38.077 85.897-78.846 85.897zM60.103 89.282c-1.539-7.257-2.436-14.769-2.436-22.41 0-41.538 28.59-77.436 67.82-85.385v51.154c0 5.256-4.23 9.487-9.487 9.487H70.487c-5.257 0-9.487-4.23-9.487-9.487l.001-13.846-12.82 7.41c-7.436 12.564-11.795 27.18-11.795 43.077 0 7.82 1.025 15.641 3.205 23.077l19.999-11.564z"/><path fill="currentColor" className="text-primary" d="m142.13 140.41-31.514-18.103 14.898-25.795 31.514 18.103-14.898 25.795z"/><path fill="currentColor" className="text-primary" d="m142.848 139.128 14.897-25.795 31.256-18.102-14.897 25.795-31.256 18.102z"/><path fill="currentColor" className="text-primary" d="m111.488 96.615-14.898-25.795-31.514-18.102 14.898 25.795 31.514 18.102z"/></svg>
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
