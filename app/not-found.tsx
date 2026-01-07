import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-center">
      <div className="mb-8">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
          Page not found
        </p>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Sorry, the page you're looking for doesn't exist.
        </p>
      </div>

      <Link href="/" className="inline-block px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors">
        Go Home
      </Link>
    </div>
  );
}
