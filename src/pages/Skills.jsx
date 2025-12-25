import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";

function Skills() {
  
  return (
    <section className="max-w-6xl mx-auto">

      {/* PAGE TITLE */}
      <h1 className="text-4xl font-extrabold mb-12">
        My <span className="text-indigo-600">Skills</span>
      </h1>

      {/* CORE SKILLS */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">

        {/* HTML */}
        <div className="p-6 rounded-xl border hover:shadow-xl transition">
          <div className="flex items-center gap-4 mb-4">
            <FaHtml5 className="text-4xl text-orange-600" />
            <h2 className="text-2xl font-semibold">HTML</h2>
          </div>

          <p className="text-gray-600 mb-4">
            Writing semantic, structured and accessible HTML.
          </p>

          {/* LEVEL BAR */}
          <div>
            <p className="text-sm mb-1">Intermediate</p>
            <div className="w-full bg-gray-200 h-2 rounded">
              <div className="bg-orange-500 h-2 rounded w-[75%]"></div>
            </div>
          </div>
        </div>

        {/* CSS */}
        <div className="p-6 rounded-xl border hover:shadow-xl transition">
          <div className="flex items-center gap-4 mb-4">
            <FaCss3Alt className="text-4xl text-sky-600" />
            <h2 className="text-2xl font-semibold">CSS & Tailwind</h2>
          </div>

          <p className="text-gray-600 mb-4">
            Responsive layouts using Flexbox, Grid and Tailwind CSS.
          </p>

          <div>
            <p className="text-sm mb-1">Intermediate</p>
            <div className="w-full bg-gray-200 h-2 rounded">
              <div className="bg-sky-500 h-2 rounded w-[70%]"></div>
            </div>
          </div>
        </div>

        {/* JavaScript */}
        <div className="p-6 rounded-xl border hover:shadow-xl transition">
          <div className="flex items-center gap-4 mb-4">
            <FaJs className="text-4xl text-yellow-500" />
            <h2 className="text-2xl font-semibold">JavaScript</h2>
          </div>

          <p className="text-gray-600 mb-4">
            Writing logic using ES6+, array methods, DOM manipulation and async/await.
          </p>

          <div>
            <p className="text-sm mb-1">Intermediate</p>
            <div className="w-full bg-gray-200 h-2 rounded">
              <div className="bg-yellow-400 h-2 rounded w-[65%]"></div>
            </div>
          </div>
        </div>

        {/* React */}
        <div className="p-6 rounded-xl border hover:shadow-xl transition">
          <div className="flex items-center gap-4 mb-4">
            <FaReact className="text-4xl text-indigo-600" />
            <h2 className="text-2xl font-semibold">React</h2>
          </div>

          <p className="text-gray-600 mb-4">
            Building SPA using components, hooks and routing.
          </p>

          <div>
            <p className="text-sm mb-1">Intermediate</p>
            <div className="w-full bg-gray-200 h-2 rounded">
              <div className="bg-indigo-500 h-2 rounded w-[60%]"></div>
            </div>
          </div>
        </div>

      </div>

      {/* REACT ECOSYSTEM */}
      <div>
        <h2 className="text-2xl font-semibold mb-6">
          React Ecosystem (Working Knowledge)
        </h2>

        <div className="flex flex-wrap gap-3">
          <span className="px-4 py-2 rounded-full bg-indigo-100 text-indigo-700">
            React Hooks
          </span>
          <span className="px-4 py-2 rounded-full bg-green-100 text-green-700">
            React Router
          </span>
          <span className="px-4 py-2 rounded-full bg-purple-100 text-purple-700">
            Context API
          </span>
          <span className="px-4 py-2 rounded-full bg-blue-100 text-blue-700">
            Redux Toolkit (RTK)
          </span>
          <span className="px-4 py-2 rounded-full bg-pink-100 text-pink-700">
            React Hook Form
          </span>
        </div>
      </div>

    </section>
  );
}

export default Skills;
