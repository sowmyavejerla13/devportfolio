import FadeIn from "@/components/animations/FadeIn";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <FadeIn>
      <section
        id="experience"
        className="scroll-mt-24 py-20 bg-muted/30"
      >
        <div className="mx-auto max-w-5xl px-8">

          <div className="mb-14 text-center">
            <h2 className="text-4xl font-bold">
              Professional Experience
            </h2>

            <p className="mt-4 text-muted-foreground">
              My professional journey building enterprise backend systems
              across healthcare and financial domains.
            </p>
          </div>

          <div className="relative border-l-2 border-primary/20 ml-4">

            {experiences.map((exp) => (

              <div
                key={exp.company}
                className="relative mb-10 ml-8"
              >

                <div className="absolute -left-[42px] top-8 h-4 w-4 rounded-full bg-primary" />

                <Card className="hover:shadow-lg transition-shadow">

                  <CardContent className="p-6">

                    <div className="flex flex-wrap items-center justify-between gap-3">

                      <div>

                        <h3 className="text-2xl font-bold">
                          {exp.role}
                        </h3>

                        <p className="text-lg text-primary">
                          {exp.company}
                        </p>

                      </div>

                      <Badge variant="outline">
                        {exp.duration}
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