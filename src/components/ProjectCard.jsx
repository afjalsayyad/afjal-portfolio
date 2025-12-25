
function ProjectCard({ title, description, tech, github, live }) {
  
  return (
    <div className="rounded-xl bg-white border hover:shadow-xl transition overflow-hidden">

      {/* TOP COLOR BAR */}
      <div className="h-1 bg-gradient-to-r from-indigo-500 to-purple-500"></div>

      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-2">{title}</h2>

        <p className="text-gray-600 mb-4">{description}</p>

        {/* TECH */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tech.map((item, index) => (
            <span
              key={index}
              className="px-3 py-1 text-sm rounded-full bg-indigo-100 text-indigo-700"
            >
              {item}
            </span>
          ))}
        </div>

        {/* LINKS */}
        <div className="flex gap-4">
          <a
            href={github}
            target="_blank"
            className="text-indigo-600 font-medium hover:underline"
          >
            GitHub Code
          </a>
          <a
            href={live}
            target="_blank"
            className="text-indigo-600 font-medium hover:underline"
          >
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
