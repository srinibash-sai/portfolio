import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ExperienceItem {
  title: string
  company: string
  duration: string
  responsibilities: string[]
}

interface ExperienceProps {
  experiences: ExperienceItem[]
}

export default function Experience({ experiences }: ExperienceProps) {
  return (
    <section id="experience" className="space-y-6">
      <h2 className="text-3xl font-bold text-center">Experience</h2>
      <div className="space-y-6 flex flex-col items-center">
        {experiences.map((exp, index) => (
          <Card key={index} className="w-full max-w-2xl">
            <CardHeader>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                <div>
                  <CardTitle>{exp.title}</CardTitle>
                  <CardDescription className="text-base">{exp.company}</CardDescription>
                </div>
                <Badge variant="secondary">{exp.duration}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                {exp.responsibilities.map((responsibility, idx) => (
                  <li key={idx}>• {responsibility}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
