import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import FadeIn from "@/components/animations/FadeIn";

const learning = [
  {
    title: "Kubernetes",
    description:
      "Learning container orchestration, deployments, services, ingress, and production Kubernetes workflows.",
    progress: "In Progress",
  },
  {
    title: "Artificial Intelligence",
    description:
      "Exploring AI-assisted development, LLM APIs, prompt engineering, and practical AI integration.",
    progress: "Learning",
  },
  {
    title: "Advanced Golang",
    description:
      "Deepening knowledge of concurrency, design patterns, testing, and performance optimization.",
    progress: "In Progress",
  },
  {
    title: "System Design",
    description:
      "Studying scalable architectures, distributed systems, caching strategies, messaging, and cloud-native design.",
    progress: "Ongoing",
  },
];

export default function Learning() {
  return (
    <FadeIn>
        <section id="learning" className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-8">
            <h2 className="text-4xl font-bold text-center mb-4">
            Currently Learning
            </h2>

            <p className="text-center text-muted-foreground mb-12">
            Continuous learning is a core part of my engineering journey.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
            {learning.map((item) => (
                <Card key={item.title}>
                <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-4">
                    <h3 className="text-2xl font-semibold">
                        {item.title}
                    </h3>

                    <Badge>
                        {item.progress}
                    </Badge>
                    </div>

                    <p className="text-muted-foreground">
                    {item.description}
                    </p>
                </CardContent>
                </Card>
            ))}
            </div>
        </div>
        </section>
    </FadeIn>
  );
}