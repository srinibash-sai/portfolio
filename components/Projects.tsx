"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink } from "lucide-react"

interface ProjectItem {
  title: string
  description: string
  image: string
  technologies: string[]
  githubUrl: string
}

interface ProjectsProps {
  projects: ProjectItem[]
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <section id="projects" className="space-y-6">
      <h2 className="text-3xl font-bold text-center">Projects</h2>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
        {projects.map((project, index) => (
          <Card key={index} className="flex flex-col w-full max-w-sm md:max-w-none">
            <CardHeader>
              <div className="aspect-video bg-muted rounded-md mb-4 flex items-center justify-center">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={`${project.title} Project`}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col justify-between">
              <div className="flex flex-wrap gap-1 mb-4">
                {project.technologies.map((tech, idx) => (
                  <Badge key={idx} variant="outline" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
              <Button
                variant="outline"
                size="sm"
                className="w-full bg-transparent"
                onClick={() => window.open(project.githubUrl, "_blank")}
              >
                <Github className="w-4 h-4 mr-2" />
                View on GitHub
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
