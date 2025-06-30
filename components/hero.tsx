import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 gradient-sage">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="mb-8">
          <h1 className="text-4xl sm:text-6xl font-bold text-sage-800 mb-6">
            Backend Developer
            <span className="block text-3xl sm:text-5xl text-sage-600 mt-2">Specializing in C#</span>
          </h1>
          <p className="text-xl text-sage-700 max-w-2xl mx-auto leading-relaxed">
            Building robust, high-performance systems and applications with expertise in C#, system
            architecture, and backend development.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button size="lg" className="w-full sm:w-auto bg-sage-600 hover:bg-sage-700 text-white">
            View My Work
          </Button>
          <a
            href="/Resume.pdf"
            download
            className="w-full sm:w-auto"
          >
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-sage-300 text-sage-700 hover:bg-sage-50 bg-transparent"
            >
              Download Resume
            </Button>
          </a>
        </div>

        <div className="flex justify-center space-x-6">
          <Button variant="ghost" size="icon" className="h-12 w-12 text-sage-600 hover:text-sage-800 hover:bg-sage-100">
            <a
              href="https://github.com/k0irala"
              target="_blank">
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </a>
          </Button>
          <Button variant="ghost" size="icon" className="h-12 w-12 text-sage-600 hover:text-sage-800 hover:bg-sage-100">
            <a
              href="https://www.linkedin.com/in/gaurav-koirala-b4b8422a6/"
              target="_blank">
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </Button>
          <Button variant="ghost" size="icon" className="h-12 w-12 text-sage-600 hover:text-sage-800 hover:bg-sage-100">
            <a
              href="mailto:k0iral.gaurav21@gmail.com"
              target="_blank">
              <Mail className="h-6 w-6" />
              <span className="sr-only">Email</span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
