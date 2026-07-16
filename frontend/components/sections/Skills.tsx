import { skills } from "@/data/skills";
import FadeIn from "@/components/animations/FadeIn";

export default function Skills() {
  return (
    <FadeIn>
      <section id="skills" className="py-20 bg-gray-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-10">
            Skills
          </h2>

          <div className="flex flex-wrap gap-4 justify-center">
            {skills.map((skill) => (
              <span
                key={skill}
                className="bg-blue-600 text-white px-5 py-3 rounded-lg shadow"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>
    </FadeIn>
  );
}