const projects = [
  {
    title: "Digital Pathology Platform",
    description:
      "Developed backend services for a digital pathology platform using Golang, PostgreSQL, Docker, and Kubernetes.",
    tech: "Go • PostgreSQL • Docker • Kubernetes",
  },
  {
    title: "Microservices Authentication",
    description:
      "Built JWT authentication and authorization services for a microservices architecture.",
    tech: "Go • JWT • Redis • REST API",
  },
  {
    title: "Portfolio & Technical Blog",
    description:
      "A full-stack developer portfolio built with Next.js and Go.",
    tech: "Next.js • Go • Tailwind CSS",
  },
];

export default function Projects() {
  return (
    <section className="py-20 px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-xl shadow-lg p-6 border hover:shadow-xl transition"
            >
              <h3 className="text-2xl font-semibold mb-3">
                {project.title}
              </h3>

              <p className="text-gray-600 mb-4">
                {project.description}
              </p>

              <p className="text-blue-600 font-medium">
                {project.tech}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}