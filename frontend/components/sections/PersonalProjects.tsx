import FadeIn from "@/components/animations/FadeIn";
import PersonalProjectCard from "@/components/PersonalProjectCard";
import { personalProjects } from "@/data/personalProjects";

export default function PersonalProjects() {
  return (
    <FadeIn>
      <section
        id="personal-projects"
        className="scroll-mt-24 py-20 bg-muted/30"
      >
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="mb-4 text-center text-4xl font-bold">
            Personal Engineering Projects
          </h2>

          <p className="mb-12 text-center text-muted-foreground">
            Projects I build to learn, experiment, and demonstrate
            production-grade backend engineering skills.
          </p>

          <div className="grid gap-8 md:grid-cols-2">
            {personalProjects.map((project) => (
                <PersonalProjectCard
                    key={project.title}
                    title={project.title}
                    status={project.status}
                    description={project.description}
                    technologies={project.technologies}
                    github={project.github}
                    demo={project.demo}
                />
                ))}
          </div>
        </div>
      </section>
    </FadeIn>
  );
}