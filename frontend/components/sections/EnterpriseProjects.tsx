import FadeIn from "@/components/animations/FadeIn";
import ProjectCard from "@/components/ProjectCard";
import { enterpriseProjects } from "@/data/enterpriseProjects";

export default function EnterpriseProjects() {
  return (
    <FadeIn>
      <section
        id="enterprise-projects"
        className="scroll-mt-24 py-20 bg-background"
      >
        <div className="mx-auto max-w-6xl px-8">
          {/* Heading */}

          <div className="mb-14 text-center">
            <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              Professional Portfolio
            </span>

            <h2 className="mt-5 text-4xl font-bold">
              Featured Enterprise Projects
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-muted-foreground">
              A selection of enterprise platforms and large-scale backend
              systems I have contributed to throughout my professional
              career across healthcare, banking and distributed systems.
            </p>
          </div>

          {/* Projects */}

          <div className="space-y-10">
            {enterpriseProjects.map((project) => (
                <ProjectCard
                    key={project.title}
                    title={project.title}
                    company={project.company}
                    domain={project.domain}
                    description={project.description}
                    highlights={project.highlights}
                    technologies={project.technologies}
                    enterprise
                />
                ))}
          </div>
        </div>
      </section>
    </FadeIn>
  );
}