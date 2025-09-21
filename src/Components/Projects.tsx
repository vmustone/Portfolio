import React from "react";

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: "ft_transcendence",
      type: "Web Application",
      technologies: ["JavaScript", "Python", "PostgreSQL", "WebSocket", "Docker"],
      githubUrl: "https://github.com/vmustone/Hive-Helsinki/tree/main/ft_transcendence"
    },
    {
      id: 2,
      title: "Snowboarding Tricktip App",
      type: "Mobile App",
      technologies: ["React Native", "Expo", "TypeScript"],
      githubUrl: "https://github.com/vmustone/Snowboarding-Tricktip-App"
    },
    {
      id: 3,
      title: "Hive Helsinki",
      type: "School Projects",
      technologies: ["C", "C++", "Unix", "Linux","Docker", "System Calls", "Algorithms", "Git", "Makefile", "virtual machines"],
      githubUrl: "https://github.com/vmustone/Hive-Helsinki"
    },
  ];

  return (
    <div className="flex flex-col gap-4 p-4 max-w-sm">
      {projects.map((project) => (
        <div
          key={project.id}
          className="relative bg-white/10 backdrop-blur-sm  rounded-lg p-4 h-fit"
        >
          <h3 className="text-lg font-bold text-white mb-1">
            {project.title}
          </h3>
          <p className="text-gray-100 mb-1 leading-relaxed text-sm">
            {project.type}
          </p>
          <div className="flex flex-wrap gap-1 mb-1">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-blue-500/20 text-blue-100 text-xs px-2 py-1 rounded backdrop-blur-sm border border-blue-400/30"
              >
                {tech}
              </span>
            ))}
          </div>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-white hover:text-blue-200 transition-colors group/link text-sm"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
            </svg>
            <span className="group-hover/link:underline">GitHub</span>
            <svg className="w-3 h-3 transform group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Projects;