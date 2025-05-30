import { Link } from "react-router-dom";
import { Menu } from "lucide-react";

export function NavBar() {
  return (
    <nav className="sticky top-0 z-20 bg-cyan-600/80 backdrop-blur-md shadow-md">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link to="/" className="text-3xl font-extrabold tracking-tight text-white">
          Nova
        </Link>

        <ul className="hidden md:flex gap-8 text-lg font-medium text-white">
          <li>
            <Link
              to="/"
              className="transition hover:scale-105 hover:text-cyan-100 duration-200"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="transition hover:scale-105 hover:text-cyan-100 duration-200"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="transition hover:scale-105 hover:text-cyan-100 duration-200"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              className="bg-gradient-to-r from-white to-cyan-100 text-cyan-800 px-5 py-1.5 rounded-full shadow-sm hover:shadow-md transition duration-300 font-semibold"
            >
              Login
            </Link>
          </li>
        </ul>

        {/* زر القائمة للموبايل */}
        <button className="md:hidden text-white hover:text-cyan-100 transition">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </nav>
  );
}
