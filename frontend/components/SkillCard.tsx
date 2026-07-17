import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LucideIcon } from "lucide-react";

type Props = {
  title: string;
  icon: LucideIcon;
  skills: string[];
};

export default function SkillCard({
  title,
  icon: Icon,
  skills,
}: Props) {
  return (
    <Card className="transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-5">
          <Icon className="h-6 w-6 text-blue-600" />
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>

        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Badge key={skill} variant="secondary">
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}