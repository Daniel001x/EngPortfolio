interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
}

export function ProjectCard({ title, description, tags, link, github }: ProjectCardProps) {
  return (
    <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:shadow-lg dark:hover:shadow-gray-900/50 transition-shadow">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <span key={tag} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-full border border-gray-200 dark:border-gray-700">
            {tag}
          </span>
        ))}
      </div>

      <div className="flex gap-2">
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-lg text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors">
            View
          </a>
        )}
        {github && (
          <a href={github} target="_blank" rel="noopener noreferrer" className="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
            Code
          </a>
        )}
      </div>
    </div>
  );
}
