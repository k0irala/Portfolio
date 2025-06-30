import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "C", level: 95 },
        { name: "C#", level: 85 },
        { name: "Python", level: 75 },
      ],
    },
    {
      title: "Systems & Tools",
      skills: [
        { name: "Linux/Unix", level: 90 },
        { name: "Git", level: 85 },
        { name: "Docker", level: 80 },
      ],
    },
    {
      title: "Databases",
      skills: [
        { name: "MySQL", level: 75 },
        { name: "SQl Server", level: 85 },
        { name: "Redis", level: 70 },
      ],
    },
    {
      title: "Concepts",
      skills: [
        { name: "Data Structures", level: 95 },
        { name: "Algorithms", level: 90 },
        { name: "Network Programming", level: 85 },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-sage-800 mb-4">Technical Skills</h2>
          <p className="text-xl text-sage-700 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2 bg-sage-100 [&>div]:bg-sage-500" />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
