import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "High-Performance Web Server",
      description:
        "A lightweight, multi-threaded HTTP server written in C with support for concurrent connections, static file serving, and CGI.",
      technologies: ["C", "Socket Programming", "Multithreading", "HTTP Protocol"],
      github: "#",
      demo: "#",
    },
    {
      title: "Memory Pool Allocator",
      description:
        "Custom memory management system implementing pool allocation for improved performance in memory-intensive applications.",
      technologies: ["C", "Memory Management", "Data Structures", "Performance Optimization"],
      github: "#",
      demo: "#",
    },
    {
      title: "Database Engine",
      description:
        "A simple relational database engine with B-tree indexing, transaction support, and SQL-like query processing.",
      technologies: ["C", "B-Trees", "File Systems", "Query Processing"],
      github: "#",
      demo: "#",
    },
    {
      title: "Network Protocol Implementation",
      description:
        "Implementation of a custom network protocol for real-time data transmission with error correction and flow control.",
      technologies: ["C", "Network Programming", "Protocol Design", "Error Handling"],
      github: "#",
      demo: "#",
    },
    {
      title: "Embedded System Controller",
      description:
        "Firmware for an embedded system controller managing sensor data collection and real-time processing.",
      technologies: ["C", "Embedded Systems", "Real-time Programming", "Hardware Interfaces"],
      github: "#",
      demo: "#",
    },
    {
      title: "Compiler Frontend",
      description:
        "Lexical analyzer and parser for a subset of C language, implementing tokenization and syntax tree generation.",
      technologies: ["C", "Compiler Design", "Parsing", "Abstract Syntax Trees"],
      github: "#",
      demo: "#",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 gradient-accent">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-sage-800 mb-4">Featured Projects</h2>
          <p className="text-xl text-sage-700 max-w-3xl mx-auto">
            A showcase of my backend development projects and system programming work
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="bg-sage-100 text-sage-800 hover:bg-sage-200">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2 mt-auto">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-sage-300 text-sage-700 hover:bg-sage-50 bg-transparent"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                  <Button size="sm" className="flex-1 bg-sage-600 hover:bg-sage-700 text-white">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
