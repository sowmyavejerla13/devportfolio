import FadeIn from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import {
  Mail,
  FileDown,
  MapPin,
  Globe,
  Briefcase,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
export default function Contact() {
  return (
    <FadeIn>
      <section
        id="contact"
        className="scroll-mt-24 py-20 bg-muted/30"
      >
        <div className="max-w-4xl mx-auto px-8">

          {/* Heading */}

          <div className="text-center mb-12">

            <h2 className="text-4xl font-bold">
              Get In Touch
            </h2>

            <p className="mt-4 text-muted-foreground">
              Interested in working together or discussing backend engineering
              opportunities? I'd love to hear from you.
            </p>

          </div>

          {/* Contact Card */}

          <Card className="border shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

            <CardContent className="p-8 text-center">

              <h3 className="text-2xl font-bold">
                Senior Backend Engineer
              </h3>

              <p className="mt-3 text-muted-foreground">
                Go • Microservices • Distributed Systems • Cloud-Native Backend Development
              </p>

              <p className="mt-6 leading-7 text-muted-foreground">
                Based in <strong>Dammam, Saudi Arabia</strong> and open to
                <strong> Remote</strong> opportunities worldwide as well as
                <strong> On-site</strong> backend engineering roles in Dammam.
              </p>

              {/* Buttons */}

              <div className="mt-10 flex flex-wrap justify-center gap-4">

                <a href="mailto:sowmya.vejerla@gmail.com">

                  <Button
                    size="lg"
                    className="transition-transform hover:scale-105"
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    Email
                  </Button>

                </a>

                <a
                    href="https://github.com/sowmyavejerla13"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    <Button
                        variant="outline"
                        size="lg"
                        className="transition-transform hover:scale-105"
                    >
                        <FaGithub className="mr-2 h-4 w-4" />
                        GitHub
                    </Button>
                </a>

                <a
  href="https://www.linkedin.com/in/sowmya-vejerla"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button
    variant="outline"
    size="lg"
    className="transition-transform hover:scale-105"
  >
    <FaLinkedin className="mr-2 h-4 w-4" />
    LinkedIn
  </Button>
</a>

                <a href="/resume.pdf" download>

                  <Button
                    variant="outline"
                    size="lg"
                    className="transition-transform hover:scale-105"
                  >
                    <FileDown className="mr-2 h-4 w-4" />
                    Resume
                  </Button>

                </a>

              </div>

              {/* Availability */}

              <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">

                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Dammam, Saudi Arabia
                </div>

                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4" />
                  Remote Worldwide
                </div>

                <div className="flex items-center gap-2">
                  <Briefcase className="h-4 w-4" />
                  On-site in Dammam
                </div>

              </div>

            </CardContent>

          </Card>

        </div>
      </section>
    </FadeIn>
  );
}