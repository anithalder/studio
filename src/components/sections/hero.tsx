import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

export function Hero() {
  return (
    <section id="home" className="container mx-auto flex min-h-screen flex-col items-center justify-center text-center px-4 md:px-6">
      <div className="flex flex-col items-center space-y-6">
        <Image
          src="/images/profile.png"
          alt="Anit Halder"
          width={200}
          height={200}
          className="rounded-full border-4 border-primary shadow-lg"
          data-ai-hint="profile picture"
          priority
        />
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-primary font-headline">
            Anit Halder
          </h1>
          <p className="text-lg text-foreground/80 md:text-xl">
            MERN Stack Web Developer | B.Tech IT Student
          </p>
          <p className="max-w-[600px] text-muted-foreground pt-4 text-lg">
            Turning ideas into scalable web experiences.
          </p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button asChild size="lg">
            <Link href="#portfolio">View Portfolio</Link>
          </Button>
          <Button asChild variant="secondary" size="lg">
            <Link href="#contact">Contact Me</Link>
          </Button>
        </div>
      </div>
      <div className="absolute bottom-10 animate-bounce">
        <Link href="#about" aria-label="Scroll to about section">
          <ArrowDown className="h-8 w-8 text-primary transition-transform hover:scale-110" />
        </Link>
      </div>
    </section>
  )
}
