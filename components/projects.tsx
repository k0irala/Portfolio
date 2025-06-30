import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink } from "lucide-react"

export function Projects() {
  const projects = [
  {
    title: "UMS",
    description:
      "A .NET Core user management system with JWT authentication, AES encryption, and role-based access for employees and managers.",
    technologies: ["C#", ".NET Core", "Entity Framework", "JWT", "AES Encryption", "SQL Server"],
    github: "https://github.com/k0irala/UMS",
    demo: "#"
  },
  {
    title: "UMS.NET",
    description:
      "A refined .NET Core application for user and manager handling with modern MVC patterns, secure token-based authentication, and EF migrations.",
    technologies: ["C#", ".NET Core", "ASP.NET MVC", "Entity Framework", "JWT"],
    github: "https://github.com/k0irala/UMS.NET",
    demo: "#"
  },
  {
    title: "MovieAppAPI",
    description:
      "RESTful API backend for a movie application supporting CRUD operations, user registration, and role-based authentication in .NET Core.",
    technologies: ["C#", ".NET Core", "REST API", "Entity Framework", "JWT"],
    github: "https://github.com/k0irala/MovieAppAPI",
    demo: "#"
  },
  {
    title: "MovieAppMVC",
    description:
      "A simple yet functional movie app using .NET MVC architecture with user-friendly UI for managing and viewing movies.",
    technologies: ["C#", ".NET MVC", "Entity Framework"],
    github: "https://github.com/k0irala/MovieAppMVC",
    demo: "#"
  },
  {
    title: "UMS-Servlet-",
    description:
      "A Java servlet-based user management system demonstrating classic web patterns, authentication, and user CRUD operations.",
    technologies: ["Java", "Servlets", "JSP", "JDBC"],
    github: "https://github.com/k0irala/UMS-Servlet-",
    demo: "#"
  },
  {
    title: "TODO",
    description:
      "A simple MERN stack TODO application with user authentication, allowing users to create, read, update, and delete tasks.",
    technologies: ["JavaScript", "Node.js", "Express", "MongoDB", "React"],
    github: "https://github.com/k0irala/TODO",
    demo: "#"
  }
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
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full border-sage-300 text-sage-700 hover:bg-sage-50 bg-transparent"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                  </a>

                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
