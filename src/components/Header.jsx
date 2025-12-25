import { Link, NavLink } from "react-router-dom";

function Header() {
  const navLinkClass = ({ isActive }) =>
    `relative px-3 py-2 text-sm font-medium transition
     ${isActive ? "text-indigo-600" : "text-gray-700 hover:text-indigo-600"}`;

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* BRAND */}
        <Link to="/" className="flex flex-col leading-tight">
          <span className="text-lg font-bold text-indigo-600">
            Afjal Sayyad
          </span>
          <span className="text-xs text-gray-500">
            Frontend Developer
          </span>
        </Link>

        {/* NAV */}
        <ul className="hidden md:flex items-center gap-6">
          <li>
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/about" className={navLinkClass}>
              About
            </NavLink>
          </li>

          <li>
            <NavLink to="/projects" className={navLinkClass}>
              Projects
            </NavLink>
          </li>

          <li>
            <NavLink to="/skills" className={navLinkClass}>
              Skills
            </NavLink>
          </li>

          <li>
            <NavLink to="/contact" className={navLinkClass}>
              Contact
            </NavLink>
          </li>
        </ul>

      </nav>
    </header>
  );
}

export default Header;
