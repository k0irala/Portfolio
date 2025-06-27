import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, Server, Zap } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 gradient-warm">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-sage-800 mb-4">About Me</h2>
          <p className="text-xl text-sage-700 max-w-3xl mx-auto">
            Passionate backend developer with extensive experience in C# and system-level development
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-sage-700 mb-6 leading-relaxed">
             I am a motivated developer with 6 months of experience in C#, eager to grow in backend development. 
             I have a keen interest in building efficient and scalable systems, and I"m continuously expanding my skills in 
             .NET and related technologies. My current focus is on gaining hands-on experience with modern backend frameworks and best practices.
            </p>
            <p className="text-lg text-sage-700 mb-6 leading-relaxed">
              I'm passionate about writing clean, maintainable code and optimizing performance. Whether it's developing
              embedded systems, network applications, or database engines, I bring a deep understanding of computer
              systems and software architecture.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-sage-100 text-sage-800 rounded-full text-sm">C#</span>
              <span className="px-3 py-1 bg-sage-100 text-sage-800 rounded-full text-sm">Python Programming</span>
              <span className="px-3 py-1 bg-sage-100 text-sage-800 rounded-full text-sm">Java</span>
              <span className="px-3 py-1 bg-sage-100 text-sage-800 rounded-full text-sm">Linux/Ubuntu</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Card>
              <CardContent className="p-6 text-center">
                <Code className="h-12 w-12 mx-auto mb-4 text-sage-600" />
                <h3 className="font-semibold mb-2">Clean Code</h3>
                <p className="text-sm text-muted-foreground">Writing maintainable and efficient code</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Server className="h-12 w-12 mx-auto mb-4 text-sage-600" />
                <h3 className="font-semibold mb-2">Java Programming</h3>
                <p className="text-sm text-muted-foreground">UMS System in Java</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Database className="h-12 w-12 mx-auto mb-4 text-sage-600" />
                <h3 className="font-semibold mb-2">Data Management</h3>
                <p className="text-sm text-muted-foreground">Efficient data structures and algorithms</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Zap className="h-12 w-12 mx-auto mb-4 text-sage-600" />
                <h3 className="font-semibold mb-2">Performance</h3>
                <p className="text-sm text-muted-foreground">Optimizing for speed and efficiency</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
