import FadeIn from "@/components/animations/FadeIn";
export default function About() {
  return (
    <FadeIn>
      <section id="about" className="py-20 px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">
            About Me
          </h2>

          <p className="text-lg leading-8 text-gray-700">
            I'm a Backend Engineer specializing in Golang and distributed systems.
            I enjoy designing scalable APIs, optimizing databases, building
            microservices, and solving complex backend challenges. My experience
            includes Go, PostgreSQL, Kafka, Docker, Kubernetes, Redis, and cloud-native
            application development.
          </p>
        </div>
      </section>
    </FadeIn>
  );
}