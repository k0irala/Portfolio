import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Experience() {
  const experiences = [
    {
      title: "Backend Developer",
      company: "Global Square IT Company",
      period: "2025 - Present",
      description:
        "Intern in backend development for high-traffic applications, focusing on performance optimization and system architecture. Implemented microservices using C and managed database systems.",
      achievements: [
        "Improved system performance by 40% through code optimization",
        "Led a team of 4 developers on critical infrastructure projects",
        "Designed and implemented scalable API architecture",
      ],
      technologies: ["C#", "SSMS", "Linux", "Redis"],
    },
    {
      title: "Backend Developer",
      company: "Giga InfoSoft",
      period: "2024 - 2025",
      description:
        "Developed and maintained backend services for data processing applications. Worked extensively with C for performance-critical components and database optimization.",
      achievements: [
        "Built real-time data processing pipeline handling 1M+ records/day",
        "Reduced memory usage by 30% through efficient data structures",
        "Implemented automated testing and CI/CD pipelines",
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
