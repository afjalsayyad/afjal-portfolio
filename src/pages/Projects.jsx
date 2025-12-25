import ProjectCard from "../components/ProjectCard";

function Projects() {
  return (
    <section className="max-w-6xl mx-auto">

      <h1 className="text-4xl font-extrabold mb-12">
        My <span className="text-indigo-600">Projects</span>
      </h1>

      <div className="grid md:grid-cols-2 gap-10">

        <ProjectCard
          title="Todo App"
          description="A task management application built with React and Redux that allows users to add, delete, and update daily tasks with efficient state management."
          tech={["React", "Redux Toolkit", "React Redux", "Tailwind CSS"]}
          github="https://github.com/afjalsayyad/react-redux-todo-app?tab=readme-ov-file"
          live="https://react-todo-redux-app.netlify.app/"
        />

        <ProjectCard
          title="Tic-Tac-Toe"
          description="A simple Tic-Tac-Toe game built using HTML, CSS, and JavaScript.It has two modes: Player vs Player (PvP) 👥 and Player vs Computer (PvC) 🤖"
          tech={["JavaScript", "HTML", "CSS"]}
          github="https://github.com/afjalsayyad/Tic-Tac-Tae"
          live="https://afjalsayyad.github.io/Tic-Tac-Tae/"
        />

      </div>
    </section>
  );
}

export default Projects;
