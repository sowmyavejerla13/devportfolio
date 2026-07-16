import { Button } from "@/components/ui/button";
import FadeIn from "@/components/animations/FadeIn";
export default function Contact() {
  return (
    <FadeIn>
        <section
        id="contact"
        className="py-20 bg-slate-900 text-white"
        >
        <div className="max-w-4xl mx-auto text-center px-8">
            <h2 className="text-4xl font-bold mb-6">
            Let's Connect
            </h2>

            <p className="text-slate-300 mb-10">
            I'm always interested in discussing backend engineering,
            Golang, distributed systems, and exciting opportunities.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
            {/* Email */}
            <a href="mailto:sowmya.vejerla@gmail.com">
                <Button>
                Email
                </Button>
            </a>

            {/* GitHub */}
            <a
                href="https://github.com/sowmyavejerla13"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-slate-900"
                >
                GitHub
                </Button>
            </a>

            {/* LinkedIn */}
            <a
                href="https://www.linkedin.com/in/sowmya-vejerla"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-slate-900"
                >
                LinkedIn
                </Button>
            </a>

            {/* Resume */}
            <a href="/resume.pdf" download>
                <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-slate-900"
                >
                Resume
                </Button>
            </a>
            </div>
        </div>
        </section>
    </FadeIn>
  );
}