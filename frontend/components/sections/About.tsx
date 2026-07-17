import FadeIn from "@/components/animations/FadeIn";
import {
  MapPin,
  Briefcase,
  Server,
  Cloud,
  CheckCircle2,
} from "lucide-react";

export default function About() {
  return (
    <FadeIn>
      <section
        id="about"
        className="scroll-mt-24 py-20 bg-background"
      >
        <div className="max-w-6xl mx-auto px-8">

          {/* Heading */}

          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold">
              About Me
            </h2>

            <p className="mt-4 text-muted-foreground">
              Passionate backend engineer focused on building scalable,
              reliable and cloud-native enterprise applications.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">

            {/* Left Card */}

            <div className="rounded-2xl border bg-muted/30 p-8 shadow-sm">

              <div className="w-28 h-28 rounded-full bg-primary/10 flex items-center justify-center text-5xl mx-auto">
                👩‍💻
              </div>

              <h3 className="text-2xl font-bold text-center mt-6">
                Sowmya Vejerla
              </h3>

              <p className="text-center text-primary font-medium mt-2">
                Senior Backend Engineer | Go • Microservices
              </p>

              <div className="space-y-5 mt-8">

                <div className="flex items-center gap-4">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  <span>Dammam, Saudi Arabia</span>
                </div>

                <div className="flex items-center gap-4">
                  <Briefcase className="h-5 w-5 text-blue-600" />
                  <span>11+ Years Experience</span>
                </div>

                <div className="flex items-center gap-4">
                  <Server className="h-5 w-5 text-blue-600" />
                  <span>Backend Engineering</span>
                </div>

                <div className="flex items-center gap-4">
                  <Cloud className="h-5 w-5 text-blue-600" />
                  <span>Cloud Native Applications</span>
                </div>

              </div>

            </div>

            {/* Right */}

            <div>

              <h3 className="text-3xl font-bold">
                Engineering Journey
              </h3>

              <p className="mt-6 leading-8 text-muted-foreground">
                I'm a Senior Backend Engineer currently based in Dammam,
                Saudi Arabia, with experience building enterprise applications
                across healthcare, telecommunications and SaaS platforms.
                I specialize in designing scalable REST APIs, microservices
                and distributed systems using Go, Python and PHP.
              </p>

              <p className="mt-6 leading-8 text-muted-foreground">
                My focus is on building secure, scalable and maintainable backend
                systems, optimizing database performance, integrating third-party
                services and designing cloud-native applications using Docker,
                Kubernetes, Kafka and PostgreSQL. I enjoy solving complex backend
                challenges and continuously learning modern engineering practices.
              </p>

              <div className="grid sm:grid-cols-2 gap-5 mt-10">

                <div className="flex gap-3">
                  <CheckCircle2 className="text-green-600 mt-1 h-5 w-5" />
                  <span>REST API Development</span>
                </div>

                <div className="flex gap-3">
                  <CheckCircle2 className="text-green-600 mt-1 h-5 w-5" />
                  <span>Microservices Architecture</span>
                </div>

                <div className="flex gap-3">
                  <CheckCircle2 className="text-green-600 mt-1 h-5 w-5" />
                  <span>Distributed Systems</span>
                </div>

                <div className="flex gap-3">
                  <CheckCircle2 className="text-green-600 mt-1 h-5 w-5" />
                  <span>Cloud Native Development</span>
                </div>

                <div className="flex gap-3">
                  <CheckCircle2 className="text-green-600 mt-1 h-5 w-5" />
                  <span>Database Optimization</span>
                </div>

                <div className="flex gap-3">
                  <CheckCircle2 className="text-green-600 mt-1 h-5 w-5" />
                  <span>System Integration</span>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>
    </FadeIn>
  );
}