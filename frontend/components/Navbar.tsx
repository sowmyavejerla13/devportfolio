export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6 shadow-md bg-white">
      <h1 className="text-2xl font-bold text-blue-600">
        DevPortfolio
      </h1>

      <ul className="flex gap-8 text-gray-700 font-medium">
        <li className="cursor-pointer hover:text-blue-600">Home</li>
        <li className="cursor-pointer hover:text-blue-600">Projects</li>
        <li className="cursor-pointer hover:text-blue-600">Blog</li>
        <li className="cursor-pointer hover:text-blue-600">Contact</li>
      </ul>
    </nav>
  );
}