export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-5xl font-bold text-blue-600">
        Hi, I'm Sowmya 👋
      </h1>

      <p className="text-xl mt-4 text-gray-700">
        Senior Golang Backend Engineer
      </p>

      <p className="mt-6 max-w-xl text-center text-gray-600">
        I build scalable backend systems using Golang, Microservices,
        PostgreSQL, Kafka, Docker, and Kubernetes.
      </p>

      <div className="mt-8 flex gap-4">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
          View Projects
        </button>

        <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50">
          Read Blog
        </button>
      </div>
    </section>
  );
}