"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const technologies = [
  "Go",
  "PostgreSQL",
  "Kafka",
  "Docker",
  "Kubernetes",
  "Microservices",
];

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById("personal-projects")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="min-h-[90vh] flex items-center bg-gradient-to-br from-slate-50 to-blue-100">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center px-8">
        {/* Left Side */}
        <div>
          <p className="text-blue-600 font-semibold text-lg">
            👋 Hello, I'm
          </p>

          <h1 className="text-6xl font-extrabold mt-3">
            Sowmya Vejerla
          </h1>

          <h2 className="text-3xl text-slate-600 mt-4">
            Senior Backend Engineer
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-700">
            Building scalable backend systems using Golang,
            Microservices, PostgreSQL, Kafka, Docker and Kubernetes.
          </p>

          <div className="flex gap-4 mt-10">
            <Button size="lg" onClick={scrollToProjects}>
              View Projects
            </Button>

            <a href="/resume.pdf" download>
              <Button variant="outline" size="lg">
                Download Resume
              </Button>
            </a>
          </div>

          <div className="flex flex-wrap gap-3 mt-10">
            {technologies.map((tech) => (
              <Badge key={tech}>
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Right Side */}
        <div className="flex justify-center">
          <Image
            src="/images/profile.jpg"
            alt="Sowmya Vejerla"
            width={350}
            height={350}
            className="rounded-full shadow-2xl border-8 border-white object-cover"
          />
        </div>
      </div>
    </section>
  );
}