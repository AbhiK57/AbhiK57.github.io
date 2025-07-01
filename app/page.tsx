'use client'

import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex flex-grow flex-col items-center justify-center px-4">
      <div className="flex flex-col items-center text-center">
        {/* Placeholder Photo */}
        <div className="w-48 h-48 relative mb-4">
          <Image
            src="https://avatars.githubusercontent.com/u/112722073?v=4"
            alt="Placeholder"
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </div>

        <div>
          <h2 className="text-3xl font-bold">Hello, I'm a Software Engineer 👋</h2>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
            I specialize in building exceptional digital experiences.
          </p>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Currently focused on building accessible, human-centered products.
          </p>
        </div>
      </div>
    </main>
  );
}