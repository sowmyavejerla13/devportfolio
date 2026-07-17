import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Briefcase,
  Building2,
} from "lucide-react";

type ProjectCardProps = {
  title: string;
  company: string;
  domain: string;
  description: string;
  highlights?: string[];
  technologies: string[];
  enterprise?: boolean;
};

export default function ProjectCard({
  title,
  company,
  domain,
  description,
  highlights = [],
  technologies,
  enterprise = false,
}: ProjectCardProps) {
  return (
    <Card className="group overflow-hidden border transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      {/* Top Gradient */}
      <div className="h-2 bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600" />

      <CardContent className="p-8">
        {/* Header */}

        <div className="flex flex-wrap items-start justify-between gap-4">

          <div>
            <h3 className="text-2xl font-bold">
              {title}
            </h3>

            <div className="mt-2 flex flex-wrap gap-2">

              <Badge variant="secondary">
                <Building2 className="mr-1 h-4 w-4" />
                {company}
              </Badge>

              <Badge variant="outline">
                {domain}
              </Badge>

            </div>

          </div>

          {enterprise && (
            <Badge className="gap-1">
              <Briefcase className="h-4 w-4" />
              Enterprise
            </Badge>
          )}

        </div>

        {/* Description */}

        <p className="mt-6 leading-7 text-muted-foreground">
          {description}
        </p>

        {/* Highlights */}

        {highlights.length > 0 && (
          <div className="mt-6">
            <h4 className="font-semibold mb-3">
              Key Contributions
            </h4>

            <ul className="space-y-2 list-disc list-inside text-muted-foreground">

              {highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}

            </ul>
          </div>
        )}

        {/* Technologies */}

        <div className="mt-8 flex flex-wrap gap-2">

          {technologies.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
            >
              {tech}
            </Badge>
          ))}

        </div>
      </CardContent>
    </Card>
  );
}