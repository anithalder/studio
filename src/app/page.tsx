import { Header } from "@/components/layout/header"
import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { Portfolio } from "@/components/sections/portfolio"
import { Exploring } from "@/components/sections/exploring"
import { Contact } from "@/components/sections/contact"
import { Footer } from "@/components/layout/footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Portfolio />
        <Exploring />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
