export const metadata = {
  title: 'About - Daniel',
  description: 'Learn more about me, my background, and my journey as a developer.',
};

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">About Me</h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          Get to know me better and understand my journey in tech.
        </p>
      </div>

      <div className="space-y-8 text-gray-700 dark:text-gray-300">
        <div>
          <h2 className="text-2xl font-bold mb-4">Who I Am</h2>
          <p className="leading-relaxed">
            I'm Daniel, a full-stack developer from India with a passion for building scalable web applications. I love the entire process of creating software—from conceptualizing the architecture to crafting the user interface. My enthusiasm lies in the intersection of clean code and beautiful design.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">My Journey</h2>
          <p className="leading-relaxed mb-4">
            My journey in technology started with curiosity about how things work. What began as experimenting with code has evolved into a career dedicated to solving complex problems and building products that users love. Over the years, I've worked with various technologies and learned that the best solutions come from understanding both the technical requirements and user needs.
          </p>
          <p className="leading-relaxed">
            I'm constantly learning and experimenting with new technologies. Whether it's exploring new frameworks, diving into system design, or studying best practices, I believe that growth is continuous in this field.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">What I Do</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Full-Stack Development</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Building end-to-end applications with modern frontend frameworks and robust backend services.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">UI/UX Implementation</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Translating designs into responsive, accessible, and interactive web interfaces.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">API Design</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Creating scalable, well-documented REST APIs and real-time solutions.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Database Architecture</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Designing efficient database schemas and optimizing queries for performance.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Beyond Code</h2>
          <p className="leading-relaxed mb-4">
            When I'm not coding, you'll find me enjoying various hobbies that keep me balanced and creative:
          </p>
          <ul className="space-y-2 text-gray-600 dark:text-gray-400">
            <li>• Playing chess and analyzing games</li>
            <li>• Cycling through the city exploring new places</li>
            <li>• Watching movies and discussing cinematography</li>
            <li>• Fitness and gym workouts</li>
            <li>• Reading tech blogs and staying updated with industry trends</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Let's Connect</h2>
          <p className="leading-relaxed">
            I'm always interested in discussing new ideas, collaborating on projects, or just having a conversation about technology and life. Feel free to reach out through any of my social platforms or send me an email.
          </p>
        </div>
      </div>
    </div>
  );
}
