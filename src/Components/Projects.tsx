import React from "react";

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      imageUrl: "./src/Assets/Images/Projects/Transcendence.jpg",
      githubUrl: "https://github.com/vmustone/Hive-Helsinki/tree/main/ft_transcendence",
    },
    {
      id: 2,
      imageUrl: "./src/Assets/Images/Projects/Cub3d.jpg",
      githubUrl: "https://github.com/vmustone/Hive-Helsinki/tree/main/cub3d",
    },
    {
      id: 3,
      imageUrl: "./src/Assets/Images/Projects/Minishell.jpg",
      githubUrl: "https://github.com/vmustone/Hive-Helsinki/tree/main/minishell",
    },
    {
      id: 4,
      imageUrl: "./src/Assets/Images/Projects/fractol.jpg",
      githubUrl: "https://github.com/vmustone/Hive-Helsinki/tree/main/fract-ol",
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      {projects.map((project) => (
        <a
          key={project.id}
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block transform transition-transform hover:scale-105"
        >
          <img
            src={project.imageUrl}
            alt={`Project ${project.id}`}
            className="max-w-[300px] h-auto rounded-lg shadow-md"
          />
        </a>
      ))}
    </div>
  );
};

export default Projects;