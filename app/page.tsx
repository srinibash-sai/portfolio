import Navigation from "@/components/Navigation"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Experience from "@/components/Experience"
import Projects from "@/components/Projects"
import Skills from "@/components/Skills"
import Contact from "@/components/Contact"
import portfolioData from "@/data/portfolio-data.json"

export default function Portfolio() {
  const { personal, experience, projects, skills } = portfolioData

  return (
    <div className="min-h-screen bg-background">
      <Navigation githubUrl={personal.github} resumeUrl={personal.resumeUrl} />

      <Hero />

      <div className="max-w-4xl mx-auto px-4 py-8 space-y-16">
        <About name={personal.name} title={personal.title} about={personal.about} />
        <Experience experiences={experience} />
        <Projects projects={projects} />
        <Skills skills={skills} />
        <Contact
          github={personal.github}
          linkedin={personal.linkedin}
          email={personal.email}
          resumeUrl={personal.resumeUrl}
        />
      </div>

      {/* Footer */}
      <footer className="border-t mt-16 py-8">
        <div className="max-w-4xl mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2025 {personal.name}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
