export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">
        <h1 className="text-2xl font-bold text-blue-600">
          DevPortfolio
        </h1>

        <ul className="flex items-center gap-8 text-gray-700 font-medium">
          <li className="hover:text-blue-600 cursor-pointer transition">
            Home
          </li>

          <li className="hover:text-blue-600 cursor-pointer transition">
            About
          </li>

          <li className="hover:text-blue-600 cursor-pointer transition">
            Skills
          </li>

          <li className="hover:text-blue-600 cursor-pointer transition">
            Projects
          </li>

          <li className="hover:text-blue-600 cursor-pointer transition">
            Blog
          </li>

          <li className="hover:text-blue-600 cursor-pointer transition">
            Contact
          </li>
        </ul>
      </div>
    </nav>
  );
}