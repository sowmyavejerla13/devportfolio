export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">
        <h1 className="text-2xl font-bold text-blue-600">
          DevPortfolio
        </h1>

        <ul className="flex items-center gap-8 text-gray-700 font-medium">

          <li>
            <a href="#" className="hover:text-blue-600">
              Home
            </a>
          </li>

          <li>
            <a href="#about" className="hover:text-blue-600">
              About
            </a>
          </li>

          <li>
            <a href="#skills" className="hover:text-blue-600">
              Skills
            </a>
          </li>

          <li>
            <a href="#personal-projects" className="hover:text-blue-600">
              Projects
            </a>
          </li>

        </ul>
      </div>
    </nav>
  );
}