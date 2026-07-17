import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GitBranch, ExternalLink } from "lucide-react";

type Props = {
  title: string;
  status: string;
  description: string;
  technologies: string[];
  github?: string;
  demo?: string;
};

export default function PersonalProjectCard({
  title,
  status,
  description,
  technologies,
  github,
  demo,
}: Props) {
  return (
    <Card className="group overflow-hidden border transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div className="h-2 bg-gradient-to-r from-indigo-600 via-blue-500 to-cyan-500" />

      <CardContent className="p-8">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-2xl font-bold">{title}</h3>

            <Badge className="mt-3">
              {status}
            </Badge>
          </div>
        </div>

        <p className="mt-6 leading-7 text-muted-foreground">
          {description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
            >
              {tech}
            </Badge>
          ))}
        </div>

        <div className="mt-8 flex gap-3">

          {github ? (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline">
                <GitBranch className="mr-2 h-4 w-4" />
                GitHub
              </Button>
            </a>
          ) : (
            <Button
              variant="outline"
              disabled
            >
              Coming Soon
            </Button>
          )}

          {demo ? (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>
                <ExternalLink className="mr-2 h-4 w-4" />
                Live Demo
              </Button>
            </a>
          ) : (
            <Button disabled>
              Live Demo
            </Button>
          )}

        </div>
      </CardContent>
    </Card>
  );
}