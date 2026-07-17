import FadeIn from "@/components/animations/FadeIn";
import SkillCard from "@/components/SkillCard";
import {
  Database,
  Server,
  Cloud,
  Workflow,
  Wrench,
  Layers,
} from "lucide-react";

export default function Skills() {
  return (
    <FadeIn>
      <section
        id="skills"
        className="scroll-mt-24 py-20 bg-muted/30"
      >
        <div className="max-w-6xl mx-auto px-8">

          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold">
              Technical Expertise
            </h2>

            <p className="mt-4 text-muted-foreground">
              Technologies, frameworks and tools I use to build scalable backend systems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            <SkillCard
              title="Backend"
              icon={Server}
              skills={[
                "Go",
                "Python",
                "PHP",
                "Node.js",
              ]}
            />

            <SkillCard
              title="Databases"
              icon={Database}
              skills={[
                "PostgreSQL",
                "MySQL",
                "MongoDB",
                "Redis",
              ]}
            />

            <SkillCard
              title="Cloud & DevOps"
              icon={Cloud}
              skills={[
                "Docker",
                "Kubernetes",
                "AWS",
                "Linux",
              ]}
            />

            <SkillCard
              title="Messaging"
              icon={Workflow}
              skills={[
                "Kafka",
              ]}
            />

            <SkillCard
              title="Architecture"
              icon={Layers}
              skills={[
                "Microservices",
                "REST APIs",
                "OAuth2",
                "RBAC",
                "Clean Architecture",
              ]}
            />

            <SkillCard
              title="Tools"
              icon={Wrench}
              skills={[
                "Git",
                "Swagger",
                "Postman",
                "VS Code",
              ]}
            />

          </div>
        </div>
      </section>
    </FadeIn>
  );
}