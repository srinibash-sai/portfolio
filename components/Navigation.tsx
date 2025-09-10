"use client";

import { Button } from "@/components/ui/button";
import { Github, Home as HomeIcon, Mail, FileText } from "lucide-react";

interface NavigationProps {
  githubUrl: string;
  resumeUrl: string;
}

export default function Navigation({ githubUrl, resumeUrl }: NavigationProps) {
  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Srinivas_Sai_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleGithubClick = () => {
    window.open(githubUrl, "_blank");
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="max-w-4xl mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Desktop navigation */}
          <div className="hidden md:flex justify-center space-x-8 flex-1">
            <a
              href="#home"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Home
            </a>
            <a
              href="#experience"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Experience
            </a>
            <a
              href="#projects"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Skills
            </a>
            <a
              href="#contact"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Mobile navigation - icons only */}
          <div className="flex md:hidden items-center justify-center space-x-4 flex-1">
            {/* Home Icon */}
            <a href="#home">
              <Button variant="ghost" size="icon" className="p-2">
                <HomeIcon className="w-5 h-5" />
              </Button>
            </a>

            {/* GitHub Icon */}
            <Button
              variant="ghost"
              size="icon"
              onClick={handleGithubClick}
              className="p-2"
            >
              <Github className="w-5 h-5" />
            </Button>

            {/* Resume Download Icon */}
            <Button
              variant="ghost"
              size="icon"
              onClick={handleResumeDownload}
              className="p-2"
            >
              <FileText className="w-5 h-5" />
            </Button>

            {/* Contact Icon */}
            <a href="#contact">
              <Button variant="ghost" size="icon" className="p-2">
                <Mail className="w-5 h-5" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
