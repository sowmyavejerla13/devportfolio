import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { experiences } from "@/data/experience";
import FadeIn from "@/components/animations/FadeIn";

export default function Experience() {
  return (
    <FadeIn>
      <section id="experience" className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-4xl font-bold text-center mb-4">
            Enterprise Projects
          </h2>

          <p className="text-center text-slate-600 mb-14">
            Enterprise platforms and business-critical applications I have
            contributed to throughout my professional career.
          </p>

          <div className="max-w-5xl mx-auto border-l-4 border-blue-600 pl-10 space-y-12">
            {experiences.map((exp) => (
              <div
                key={exp.company}
                className="relative"
              >
                {/* Year */}
                <div className="absolute -left-24 top-5 whitespace-nowrap">
                  <span className="text-lg font-bold text-blue-600">
                    {exp.startYear}
                  </span>
                </div>

                {/* Timeline Dot */}
                <div className="absolute -left-[50px] top-7 w-5 h-5 rounded-full bg-blue-600 border-4 border-white shadow-lg"></div>

                <Card className="hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start flex-wrap gap-4">
                      <div>
                        <h3 className="text-2xl font-bold">
                          {exp.role}
                        </h3>

                        <p className="text-lg text-slate-600 mt-1">
                          {exp.company}
                        </p>
                      </div>

                      <Badge>
                        {exp.duration}
                      </Badge>
                    </div>

                    <p className="mt-6 text-slate-700 leading-7">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-6">
                      {exp.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="mt-6">
                      <Badge className="bg-blue-600 text-white hover:bg-blue-700">
                        Enterprise Project
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
    </FadeIn>
  );
}