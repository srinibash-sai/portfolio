"use client"
import Image from "next/image"

const techStack = [
  { name: "React", src: "/react-logo.png" },
  { name: "Next.js", src: "/nextjs-logo.png" },
  { name: "Tailwind", src: "/tailwind-css-logo.png" },
  { name: "TypeScript", src: "/typescript-logo.png" },
  { name: "Node.js", src: "/nodejs-logo.png" },
  { name: "JavaScript", src: "/javascript-logo.png" },
  { name: "Python", src: "/python-logo.png" },
  { name: "MongoDB", src: "/mongodb-logo.png" },
  { name: "PostgreSQL", src: "/postgresql-logo.png" },
]

const StackLoop = () => {
  return (
    <div className="rounded-xs overflow-hidden py-4 md:max-w-[400px] max-w-[320px] mx-auto">
      <div className="flex animate-marquee">
        <div className="flex items-center gap-6 whitespace-nowrap">
          {techStack.map((tech, index) => (
            <div key={index} className="flex-shrink-0">
              <Image
                src={tech.src || "/placeholder.svg"}
                alt={tech.name}
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
          ))}
        </div>
        <div className="flex items-center gap-6 whitespace-nowrap">
          {techStack.map((tech, index) => (
            <div key={`duplicate-${index}`} className="flex-shrink-0">
              <Image
                src={tech.src || "/placeholder.svg"}
                alt={tech.name}
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default StackLoop
