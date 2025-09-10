"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Download } from "lucide-react"

interface ContactProps {
  github: string
  linkedin: string
  email: string
  resumeUrl: string
}

export default function Contact({ github, linkedin, email, resumeUrl }: ContactProps) {
  const handleResumeDownload = () => {
    const link = document.createElement("a")
    link.href = resumeUrl
    link.download = "Srinivas_Sai_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="contact" className="space-y-6">
      <h2 className="text-3xl font-bold text-center">Contact Me</h2>
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <Button
          variant="outline"
          size="lg"
          className="w-full sm:w-auto bg-transparent"
          onClick={() => window.open(github, "_blank")}
        >
          <Github className="w-5 h-5 mr-2" />
          GitHub
        </Button>
        <Button
          variant="outline"
          size="lg"
          className="w-full sm:w-auto bg-transparent"
          onClick={() => window.open(linkedin, "_blank")}
        >
          <Linkedin className="w-5 h-5 mr-2" />
          LinkedIn
        </Button>
        <Button
          variant="outline"
          size="lg"
          className="w-full sm:w-auto bg-transparent"
          onClick={() => window.open(`mailto:${email}`, "_blank")}
        >
          <Mail className="w-5 h-5 mr-2" />
          Email
        </Button>
      </div>

      {/* Resume Download for Recruiters */}
      <div className="text-center pt-8 border-t">
        {/* <p className="text-muted-foreground mb-4">For Recruiters</p> */}
        <Button size="lg" className="bg-primary hover:bg-primary/90" onClick={handleResumeDownload}>
          <Download className="w-5 h-5 mr-2" />
          Download Resume
        </Button>
      </div>
    </section>
  )
}
