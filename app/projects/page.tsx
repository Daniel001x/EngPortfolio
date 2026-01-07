import { ProjectCard } from '@/components/ProjectCard';

export const metadata = {
  title: 'Projects - Daniel',
  description: 'View my latest projects and work.',
};

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'Full-featured e-commerce platform with payment integration, inventory management, and admin dashboard.',
    tags: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'Tailwind'],
    link: 'https://example.com',
    github: 'https://github.com',
  },
  {
    title: 'Real-time Chat Application',
    description: 'WebSocket-based chat app with room management, user authentication, and message history.',
    tags: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Redis'],
    link: 'https://example.com',
    github: 'https://github.com',
  },
  {
    title: 'Task Management System',
    description: 'Collaborative task management tool with real-time updates, team workspaces, and notifications.',
    tags: ['Next.js', 'React Query', 'Supabase', 'Tailwind'],
    link: 'https://example.com',
    github: 'https://github.com',
  },
  {
    title: 'Analytics Dashboard',
    description: 'Data visualization dashboard with interactive charts, custom reports, and data export functionality.',
    tags: ['React', 'D3.js', 'Node.js', 'PostgreSQL', 'REST API'],
    link: 'https://example.com',
    github: 'https://github.com',
  },
];

export default function Projects() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Projects</h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          A collection of projects I've built, showcasing my skills in full-stack development, design, and problem-solving.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
}
