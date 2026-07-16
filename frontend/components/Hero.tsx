export default function Hero() {
  return (
    <section className="min-h-[80vh] flex items-center bg-gray-100">
      <div className="max-w-7xl mx-auto px-8">
        <p className="text-blue-600 font-semibold mb-3">
          Hello, I'm
        </p>

        <h1 className="text-6xl font-extrabold text-gray-900">
          Sowmya Vejerla
        </h1>

        <h2 className="text-3xl text-gray-600 mt-4">
          Golang Backend Engineer
        </h2>

        <p className="max-w-2xl mt-6 text-lg text-gray-600 leading-8">
          Passionate about building scalable backend systems with
          Golang, Microservices, PostgreSQL, Kafka, Docker,
          Kubernetes, and cloud-native technologies.
        </p>

        <div className="flex gap-5 mt-10">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition">
            View Projects
          </button>

          <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition">
            Read Blog
          </button>
        </div>
      </div>
    </section>
  );
}