import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="min-h-[70vh] flex items-center bg-gradient-to-b from-gray-50 to-white">
        <div className="grid md:grid-cols-2 gap-12 items-center w-full">

          {/* LEFT */}
          <div>
            <p className="text-sm uppercase tracking-widest text-gray-500">
              Frontend Developer
            </p>

            <h1 className="text-5xl font-extrabold mt-3 leading-tight">
              Hi, I’m <span className="text-indigo-600">Afjal</span> 👋
            </h1>

            <p className="mt-4 text-lg text-gray-600 max-w-xl">
              I build clean, responsive and user-friendly web applications
              using <b> React</b> and <b>JavaScript</b>.
            </p>

            {/* TECH HIGHLIGHT */}
            <div className="mt-4 flex flex-wrap gap-3">
              <span className="px-3 py-1 text-sm rounded-full bg-indigo-100 text-indigo-700">
                React
              </span>
              <span className="px-3 py-1 text-sm rounded-full bg-yellow-100 text-yellow-700">
                JavaScript
              </span>
              <span className="px-3 py-1 text-sm rounded-full bg-sky-100 text-sky-700">
                Tailwind CSS
              </span>
            </div>

            {/* CTA */}
            <div className="mt-8 flex gap-4">
              <Link
                to="/projects"
                className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
              >
                View Projects
              </Link>

              <Link
                to="/contact"
                className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
              >
                Contact Me
              </Link>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex justify-center">
            <div className="w-64 h-64 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 p-1 shadow-xl hover:scale-105 transition">
              <img
                src="/profile-photo.png"
                alt="Afzal Sayyad"
                className="w-full h-full rounded-full object-cover bg-white"
              />
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

export default Home;
