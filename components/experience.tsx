import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Experience() {
  const experiences = [
    {
      title: "Backend Developer",
      company: "Global Square IT Company",
      period: "2025 June - Present",
      description:
        "Intern in backend development for high-traffic applications, focusing on performance optimization and system architecture. Implemented microservices using C and managed database systems.",
      achievements: [
        "Assisted in developing and testing microservice modules under senior developer supervision",
        "Helped design scalable API endpoints, following best practices for maintainability",
        "Gained practical experience in optimizing SQL queries and monitoring database performance"
      ],
      technologies: ["C#", "SSMS", "Linux", "Redis"],
    },
    {
      title: "Backend Developer",
      company: "Giga InfoSoft",
      period: "2024 December - 2025 January",
      description:
        "Developed and maintained backend services for data processing applications. Worked extensively with C# for performance-critical components and database optimization.",
      achievements: [
        "Learned to build and test basic backend APIs using modern frameworks",
        "Assisted with writing and debugging server-side code",
        "Collaborated with senior developers to fix bugs and improve features",
        "Gained hands-on experience working with databases and simple data models"
      ],
      technologies: ["C#", "SSMS", "Git"],
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-sage-800 mb-4">Work Experience</h2>
          <p className="text-xl text-sage-700 max-w-3xl mx-auto">
            My professional journey in backend development and system programming
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <CardTitle className="text-xl">{exp.title}</CardTitle>
                    <CardDescription className="text-lg font-medium text-sage-600">{exp.company}</CardDescription>
                  </div>
                  <Badge variant="outline" className="w-fit border-sage-300 text-sage-700">
                    {exp.period}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>

                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Key Achievements:</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex}>{achievement}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="bg-sage-100 text-sage-800">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
