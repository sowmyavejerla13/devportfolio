"use client";

import FadeIn from "@/components/animations/FadeIn";

const stats = [
  {
    number: "11+",
    label: "Years Experience",
  },
  {
    number: "4",
    label: "Companies",
  },
  {
    number: "20+",
    label: "Technologies",
  },
  {
    number: "8+",
    label: "Projects Planned",
  },
];

export default function Stats() {
  return (
    <FadeIn>
      <section className="py-20 bg-slate-100">
        <div className="max-w-6xl mx-auto px-8">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

            {stats.map((item) => (

              <div
                key={item.label}
                className="text-center"
              >

                <h2 className="text-5xl font-bold text-blue-600">
                  {item.number}
                </h2>

                <p className="mt-3 text-slate-600">
                  {item.label}
                </p>

              </div>

            ))}

          </div>

        </div>
      </section>
    </FadeIn>
  );
}