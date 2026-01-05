'use client';

import { useState, useEffect } from 'react';

export default function Portfolio() {
  const [time, setTime] = useState(() => {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    return `IN ${hours}:${minutes}`;
  });
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      setTime(`IN ${hours}:${minutes}`);
    };

    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-950 text-white' : 'bg-white text-black'} transition-colors font-mono`}>
      <div className="max-w-4xl mx-auto px-6 py-8">
        <header className="flex items-center justify-between mb-16">
          <div className="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-full text-sm">
            {time}
          </div>

          <nav className="flex items-center gap-2 px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-full">
            <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors text-lg">
              ⌂
            </button>
            <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors text-lg">
              ✕
            </button>
            <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors text-lg">
              ◉
            </button>
            <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors text-lg">
              ✉
            </button>
            <button className="px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-full text-sm hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors">
              My Blog
            </button>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors text-lg"
            >
              {darkMode ? '☀' : '◑'}
            </button>
          </nav>
        </header>

        <main>
          <div className="flex items-start gap-6 mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-3xl font-bold flex-shrink-0">
              D
            </div>
            <div>
              <h1 className="text-4xl font-bold mb-1">DANIEL</h1>
              <p className="text-gray-600 dark:text-gray-400">@daniel</p>
            </div>
          </div>

          <div className="space-y-4 mb-8 text-base leading-relaxed">
            <p>
              I'm <strong>Daniel</strong>, a developer living in India. I love to code and sometimes break things just to see how they work — then (hopefully) fix them better. I'm the rare mix who enjoys both <strong>development and design</strong>, which means I can make things not just function but actually look good too. Crazy, right?
            </p>
            <p>
              Whether it's building full-stack apps, tweaking UI details, or debugging something at 2 AM with a cup of chai, I'm all in. I'm obsessed with learning — always chasing new technologies, solving weird bugs, or just experimenting with something random that popped into my head.
            </p>
            <p>
              When I'm not deep in code, you'll probably catch me watching movies, playing chess, cycling through the city, lifting weights at the gym, or catching up on some much-needed sleep (which I never get enough of).
            </p>
            <p>
              Let's be honest — I'm still trying to explain my job to my parents in a way that doesn't end with "beta, computer mein hi kuch karta hai na?" But hey, maybe one day it'll click.
            </p>
          </div>

          <div className="flex items-center gap-4 mb-12">
            <div className="flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full text-sm border border-green-300 dark:border-green-700">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Available for new opportunities
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 rounded-full text-sm transition-colors">
              <span>↓</span>
              Download CV
            </button>
          </div>

          <div className="mb-16">
            <p className="mb-4 text-base">
              Where to find me <strong>(digitally)</strong> if you wish to
            </p>
            <div className="flex gap-3">
              <button className="flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 rounded-full text-sm transition-colors">
                <span>✉</span>
                Email Me
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 rounded-full text-sm transition-colors">
                <span>◉</span>
                GitHub
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 rounded-full text-sm transition-colors">
                <span>◉</span>
                Discord
              </button>
            </div>
          </div>

          <section className="space-y-12">
            <div>
              <h2 className="text-2xl font-bold mb-4">Skills</h2>
              <p className="text-gray-700 dark:text-gray-300 text-base">
                These are the technologies I've learned and worked with. This list is constantly evolving as I continue to learn and grow as a developer.
              </p>
            </div>

            <div className="space-y-8">
              <div>
                <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3">{'< LANGUAGES />'}</p>
                <div className="flex flex-wrap gap-2">
                  <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm border border-gray-300 dark:border-gray-700">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                    JavaScript
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm border border-gray-300 dark:border-gray-700">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    TypeScript
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm border border-gray-300 dark:border-gray-700">
                    <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                    HTML
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm border border-gray-300 dark:border-gray-700">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    CSS
                  </div>
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3">{'< FRAMEWORKS / LIBRARIES />'}</p>
                <div className="flex flex-wrap gap-2">
                  <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm border border-gray-300 dark:border-gray-700">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                    React
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm border border-gray-300 dark:border-gray-700">
                    <span className="w-2 h-2 bg-gray-900 dark:bg-white rounded-full"></span>
                    Next.js
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm border border-gray-300 dark:border-gray-700">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Express.js
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm border border-gray-300 dark:border-gray-700">
                    <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
                    Tailwind CSS
                  </div>
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3">{'< BACKEND & RUNTIME />'}</p>
                <div className="flex flex-wrap gap-2">
                  <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm border border-gray-300 dark:border-gray-700">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Node.js
                  </div>
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3">{'< DATABASE />'}</p>
                <div className="flex flex-wrap gap-2">
                  <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm border border-gray-300 dark:border-gray-700">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    MongoDB
                  </div>
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3">{'< DEVELOPER TOOLS />'}</p>
                <div className="flex flex-wrap gap-2">
                  <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm border border-gray-300 dark:border-gray-700">
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                    Git
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm border border-gray-300 dark:border-gray-700">
                    <span className="w-2 h-2 bg-gray-900 dark:bg-white rounded-full"></span>
                    GitHub
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm border border-gray-300 dark:border-gray-700">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    Docker
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
