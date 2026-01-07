'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export function Navbar() {
  const [time, setTime] = useState('IN 00:00');
  const [darkMode, setDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('theme');
    if (saved) {
      setDarkMode(saved === 'dark');
      document.documentElement.classList.toggle('dark', saved === 'dark');
    }
  }, []);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      setTime(`IN ${hours}:${minutes}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', newMode);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-full text-sm font-mono hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
          {time}
        </Link>

        <nav className="flex items-center gap-1 px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-full">
          <Link href="/" className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors" title="Home">
            ⌂
          </Link>
          <Link href="/projects" className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors" title="Projects">
            ◻
          </Link>
          <Link href="/about" className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors" title="About">
            ◈
          </Link>
          <a href="mailto:contact@example.com" className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors" title="Email">
            ✉
          </a>
          <button onClick={toggleDarkMode} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors" title="Toggle theme">
            {mounted && (darkMode ? '☀' : '◑')}
          </button>
        </nav>
      </div>
    </header>
  );
}
