import { personalProjects } from "@/data/personalProjects";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/animations/FadeIn";

export default function PersonalProjects() {
  return (
    <FadeIn>
        <section id="personal-projects" className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-8">

            <h2 className="text-4xl font-bold text-center mb-4">
            Personal Engineering Projects
            </h2>

            <p className="text-center text-slate-600 mb-12">
            Projects I build to learn, experiment and demonstrate production-grade backend engineering skills.
            </p>

            <div className="grid md:grid-cols-2 gap-8">

            {personalProjects.map((project) => (
                <Card key={project.title}>

                <CardContent className="p-6">

                    <div className="flex justify-between items-center">

                    <h3 className="text-2xl font-bold">
                        {project.title}
                    </h3>

                    <Badge>
                        {project.status}
                    </Badge>

                    </div>

                    <p className="mt-4 text-slate-600">
                    {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-5">

                    {project.technologies.map((tech) => (
                        <Badge key={tech}>
                        {tech}
                        </Badge>
                    ))}

                    </div>

                    <div className="mt-6">

                    {project.github ? (
                        <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        <Button>
                            View GitHub
                        </Button>
                        </a>
                    ) : (
                        <Button disabled>
                        Coming Soon
                        </Button>
                    )}

                    </div>

                </CardContent>

                </Card>
            ))}

            </div>

        </div>
        </section>
    </FadeIn>
  );
}