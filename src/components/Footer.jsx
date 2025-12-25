import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 py-10">

        {/* TOP */}
        <div className="grid md:grid-cols-3 gap-8 items-start">

          {/* BRAND / NAME */}
          <div>
            <h2 className="text-xl font-bold text-indigo-600">
              Afjal Sayyad
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Frontend Developer focused on building clean and
              user-friendly web interfaces.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li><Link to="/" className="hover:text-indigo-600">Home</Link></li>
              <li><Link to="/about" className="hover:text-indigo-600">About</Link></li>
              <li><Link to="/projects" className="hover:text-indigo-600">Projects</Link></li>
              <li><Link to="/skills" className="hover:text-indigo-600">Skills</Link></li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase mb-4">
              Contact
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a
                  href="mailto:afjalsayyad17@gmail.com"
                  className="hover:text-indigo-600"
                >
                  Email
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/afjalsayyad"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-indigo-600"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/afjal-sayyad-23b5a5385/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-indigo-600"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="mt-10 border-t pt-4 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Afjal Sayyad. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
