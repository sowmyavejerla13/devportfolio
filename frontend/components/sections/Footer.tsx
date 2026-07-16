export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-8">
      <div className="max-w-6xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>
          © {new Date().getFullYear()} Sowmya Vejerla. All rights reserved.
        </p>

        <div className="flex gap-6">
          <a
            href="https://github.com/sowmyavejerla13"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/sowmya-vejerla"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>

          <a
            href="mailto:sowmya.vejerla@gmail.com"
            className="hover:text-white transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}