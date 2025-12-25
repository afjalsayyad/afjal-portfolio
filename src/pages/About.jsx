
function About() {
  
  return (
    <section className="max-w-4xl mx-auto">

      {/* PAGE TITLE */}
      <h1 className="text-4xl font-extrabold mb-8">
        About <span className="text-indigo-600">Me</span>
      </h1>

      {/* INTRO */}
      <div className="mb-8 p-6 rounded-xl bg-indigo-50 border border-indigo-100">
        <p className="text-lg text-gray-700 leading-relaxed">
          I am a motivated <b>Frontend Developer</b> who enjoys building
          clean, responsive, and user-friendly web interfaces. I focus on
          creating experiences that are simple to use and easy to maintain.
        </p>
      </div>

      {/* JOURNEY */}
      <div className="mb-8 p-6 rounded-xl bg-white border">
        <p className="text-gray-700 leading-relaxed">
          I started my journey in web development by learning the fundamentals
          of HTML and CSS, and gradually moved into JavaScript and modern
          frontend development. Over time, I developed a strong interest in
          building component-based applications using <b className="text-indigo-600">React</b>.
        </p>
      </div>

      {/* HOW YOU WORK */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4 text-indigo-700">
          How I Work
        </h2>

        <ul className="list-disc list-inside text-gray-700 space-y-2 border-l-4 border-indigo-200 pl-4">
          <li>I focus on writing clean, readable, and maintainable code.</li>
          <li>I prefer breaking complex UI into small reusable components.</li>
          <li>I pay attention to layout, spacing, and responsiveness.</li>
          <li>I continuously improve by practicing and building real projects.</li>
        </ul>
      </div>

      {/* TECH CONTEXT */}
      <div className="mt-10 p-6 rounded-xl bg-slate-50 border">
        <h2 className="text-2xl font-semibold mb-3 text-indigo-700">
          Technologies I Use
        </h2>

        <p className="text-gray-700 leading-relaxed">
          In my frontend work, I primarily use <b>HTML</b>, <b>CSS</b>,
          <b> JavaScript</b>, and <b className="text-indigo-600">React</b> along with
          <b> Tailwind CSS</b> to create modern and responsive user interfaces.
          I focus on applying these technologies in a practical, real-world
          manner rather than just learning them theoretically.
        </p>
      </div>

      {/* GOAL */}
      <div className="mt-12 p-6 rounded-xl bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-100">
        <h2 className="text-2xl font-semibold mb-3 text-indigo-700">
          My Goal
        </h2>
        <p className="text-gray-700 leading-relaxed">
          My goal is to work as a <b>Frontend Developer</b> where I can
          contribute to real-world projects, learn from experienced
          developers, and continuously grow my skills while building
          meaningful web applications.
        </p>
      </div>

    </section>
  );
}

export default About;
