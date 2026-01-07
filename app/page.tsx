import Link from 'next/link';
import { ProjectCard } from '@/components/ProjectCard';

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="mb-12">
        <div className="flex items-start gap-6 mb-8">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-3xl font-bold flex-shrink-0">
            D
          </div>
          <div>
            <h1 className="text-5xl font-bold mb-2">Daniel</h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg">@daniel_dev</p>
          </div>
        </div>

        <div className="space-y-4 text-base leading-relaxed text-gray-700 dark:text-gray-300 mb-8">
          <p>
            Full-stack developer from India with a passion for building scalable web applications. I craft elegant solutions using modern technologies and love the intersection of design and functionality.
          </p>
          <p>
            Whether it's building robust APIs, creating intuitive interfaces, or solving complex architectural problems, I'm driven by the challenge of making technology work seamlessly.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full text-sm border border-green-300 dark:border-green-700">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            Available for opportunities
          </div>
          <a href="#" className="flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 rounded-full text-sm transition-colors">
            <span>↓</span>
            Resume
          </a>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
          <ProjectCard
            title="Project One"
            description="A modern web application built with Next.js and React. Demonstrates full-stack development capabilities."
            tags={["Next.js", "React", "TypeScript", "Tailwind"]}
            link="https://example.com"
            github="https://github.com"
          />
          <ProjectCard
            title="Project Two"
            description="Real-time collaborative platform with WebSocket integration and database synchronization."
            tags={["Node.js", "Express", "PostgreSQL", "React"]}
            link="https://example.com"
            github="https://github.com"
          />
        </div>
        <Link href="/projects" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
          View all projects →
        </Link>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Skills</h2>
        <div className="space-y-6">
          <div>
            <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3 uppercase">Frontend</p>
            <div className="flex flex-wrap gap-2">
              {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'JavaScript'].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-full border border-gray-300 dark:border-gray-700">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3 uppercase">Backend</p>
            <div className="flex flex-wrap gap-2">
              {['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'Supabase'].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-full border border-gray-300 dark:border-gray-700">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3 uppercase">Tools</p>
            <div className="flex flex-wrap gap-2">
              {['Git', 'Docker', 'GitHub', 'VS Code', 'Figma'].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-full border border-gray-300 dark:border-gray-700">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 dark:border-gray-800 pt-12">
        <h2 className="text-2xl font-bold mb-6">Connect</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Let's collaborate or just chat about tech, design, or anything else. Find me on social platforms or drop me an email.
        </p>
        <div className="flex gap-3">
          <a href="mailto:contact@example.com" className="flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 rounded-lg text-sm font-medium transition-colors">
            <span>✉</span>
            Email
          </a>
          <a href="#" className="flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 rounded-lg text-sm font-medium transition-colors">
            <span>◉</span>
            GitHub
          </a>
          <a href="#" className="flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 rounded-lg text-sm font-medium transition-colors">
            <span>𝕏</span>
            Twitter
          </a>
        </div>
      </div>
    </div>
  );
}
