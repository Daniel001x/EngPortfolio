export function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li><a href="/" className="hover:text-black dark:hover:text-white transition-colors">Home</a></li>
              <li><a href="/projects" className="hover:text-black dark:hover:text-white transition-colors">Projects</a></li>
              <li><a href="/about" className="hover:text-black dark:hover:text-white transition-colors">About</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li><a href="#" className="hover:text-black dark:hover:text-white transition-colors">GitHub</a></li>
              <li><a href="#" className="hover:text-black dark:hover:text-white transition-colors">Twitter</a></li>
              <li><a href="mailto:contact@example.com" className="hover:text-black dark:hover:text-white transition-colors">Email</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li><a href="#" className="hover:text-black dark:hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-black dark:hover:text-white transition-colors">Resume</a></li>
              <li><a href="#" className="hover:text-black dark:hover:text-white transition-colors">Uses</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 text-center text-sm text-gray-600 dark:text-gray-400">
          <p>&copy; {new Date().getFullYear()} Daniel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
