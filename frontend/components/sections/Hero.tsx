import { Button } from "@/components/ui/button";
import FadeIn from "@/components/animations/FadeIn";
import {
  ArrowDown,
  Download,
  Briefcase,
  Server,
  Cpu,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden section-padding"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-100 via-background to-blue-100 dark:from-slate-950 dark:via-background dark:to-slate-900" />

      {/* Decorative Blur */}
      <div className="absolute -top-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl" />

      <div className="container-width">

        <FadeIn>

          <span className="inline-block rounded-full border bg-background px-4 py-2 text-sm font-medium shadow-sm">
            👋 Hello, I'm
          </span>

          <h1 className="mt-6 text-5xl font-extrabold tracking-tight md:text-7xl">
            Sowmya Vejerla
          </h1>

          <h2 className="mt-5 text-2xl font-semibold text-primary md:text-3xl">
          Senior Golang Backend Engineer
        </h2>

        <p className="mt-3 text-lg font-medium text-muted-foreground">
          Building scalable backend systems with Go, Microservices, Distributed Systems & Cloud Technologies
        </p>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-muted-foreground md:text-xl">
            Passionate backend engineer with experience designing scalable
            enterprise applications across healthcare, telecommunications,
            and SaaS domains using Go, Python, PHP, Microservices,
            PostgreSQL, Kafka, Docker and Kubernetes.
          </p>

          {/* Buttons */}

          <div className="mt-10 flex flex-wrap gap-4">

            <a href="/resume.pdf" download>
              <Button size="lg">
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </a>

            <a href="#personal-projects">
              <Button
                variant="outline"
                size="lg"
              >
                View Projects
                <ArrowDown className="ml-2 h-5 w-5" />
              </Button>
            </a>

          </div>
          <div className="mt-8 flex flex-col gap-2 text-muted-foreground">

            <div className="flex items-center gap-2">
              📍
              <span>Dammam, Saudi Arabia</span>
            </div>

            <div className="flex items-center gap-2">
              🌍
              <span>Open to Remote opportunities worldwide</span>
            </div>

            <div className="flex items-center gap-2">
              🏢
              <span>Open to On-site opportunities in Dammam</span>
            </div>

          </div>

          {/* Highlights */}

          <div className="mt-16 grid gap-6 md:grid-cols-3">

            <div className="rounded-xl border bg-background/70 p-6 shadow-sm backdrop-blur">
              <Briefcase className="mb-3 h-8 w-8 text-blue-600" />

              <h3 className="font-semibold">
                11+ Years Experience
              </h3>

              <p className="mt-2 text-sm text-muted-foreground">
                Delivering enterprise-grade backend applications across
                healthcare, telecom and SaaS domains.
              </p>
            </div>

            <div className="rounded-xl border bg-background/70 p-6 shadow-sm backdrop-blur">
              <Server className="mb-3 h-8 w-8 text-blue-600" />

              <h3 className="font-semibold">
                Backend Engineering
              </h3>

              <p className="mt-2 text-sm text-muted-foreground">
                REST APIs, Microservices, Distributed Systems,
                Authentication and Performance Optimization.
              </p>
            </div>

            <div className="rounded-xl border bg-background/70 p-6 shadow-sm backdrop-blur">
              <Cpu className="mb-3 h-8 w-8 text-blue-600" />

              <h3 className="font-semibold">
                Cloud Native
              </h3>

              <p className="mt-2 text-sm text-muted-foreground">
                Docker, Kubernetes, Kafka, PostgreSQL, Redis,
                CI/CD and scalable backend architectures.
              </p>
            </div>

          </div>

        </FadeIn>

      </div>
    </section>
  );
}