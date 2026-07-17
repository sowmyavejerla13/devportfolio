import {
  Mail,
  ArrowUp,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

export default function Footer() {
  return (
   <footer className="border-t py-8">
    <div className="max-w-6xl mx-auto px-8 text-center">

      <h3 className="font-bold text-xl">
        Sowmya Vejerla
      </h3>

      <p className="mt-2 text-muted-foreground">
        Senior Backend Engineer
      </p>

      <p className="mt-6 text-sm text-muted-foreground">
        © {new Date().getFullYear()} Sowmya Vejerla. All rights reserved.
      </p>

    </div>
  </footer>
  );
}