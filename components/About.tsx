interface AboutProps {
  name: string
  title: string
  about: string[]
}

export default function About({ name, title, about }: AboutProps) {
  return (
    <section id="home" className="text-center space-y-6">
      <div className="max-w-3xl mx-auto text-left space-y-4">
        <h2 className="text-2xl font-semibold mb-4">About</h2>
        {about.map((paragraph, index) => (
          <p key={index} className="text-muted-foreground leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  )
}
