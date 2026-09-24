"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

export default function FooterSection() {
  return (
    <footer id="contact" className="relative pt-16 sm:pt-24 pb-10 sm:pb-12 px-4 sm:px-6 md:px-12 max-w-6xl mx-auto border-t border-neutral-200/80 dark:border-neutral-800 mt-12 sm:mt-20 transition-colors duration-300">
      {/* Right Kanji Accent (終焉の円 - Enlarged) */}
      <ScrollReveal direction="left" delay={0.3}>
        <div className="absolute right-4 sm:right-6 md:right-12 top-20 sm:top-28 opacity-40 sm:opacity-80 hover:opacity-100 transition-all dark-invert-asset z-10 pointer-events-none">
          <Image
            src="/asset/tile-14-kanji-accent-footer.png"
            alt="Kanji Accent Footer - 終焉の円"
            width={42}
            height={220}
            className="object-contain w-8 sm:w-11 h-auto"
          />
        </div>
      </ScrollReveal>

      {/* Top Divider Art */}
      <ScrollReveal direction="down" delay={0.1}>
        <div className="flex items-center justify-center space-x-4 sm:space-x-6 text-neutral-300 dark:text-neutral-700 mb-10 sm:mb-16">
          <span className="w-8 sm:w-24 h-[1px] bg-neutral-200 dark:bg-neutral-800"></span>
          <div className="flex items-center space-x-3">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 dark:bg-neutral-600"></span>
            <Image
              src="/asset/tile-13-zen-garden-art.png"
              alt="Zen Garden Art Divider"
              width={40}
              height={20}
              className="object-contain opacity-70 dark-invert-asset w-8 sm:w-10 h-auto"
            />
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 dark:bg-neutral-600"></span>
          </div>
          <span className="w-8 sm:w-24 h-[1px] bg-neutral-200 dark:bg-neutral-800"></span>
        </div>
      </ScrollReveal>

      {/* Contact Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-12 items-center mb-12 sm:mb-20">
        {/* Left Call to Action & Email */}
        <div className="md:col-span-8 space-y-6 sm:space-y-8">
          <ScrollReveal direction="up" delay={0.25} duration={0.8}>
            <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-light text-neutral-900 dark:text-white leading-tight">
              Let’s start a new conversation or collaborate.
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.35}>
            <div className="space-y-2">
              <span className="block text-xs font-mono text-neutral-400 dark:text-neutral-500 uppercase tracking-widest">
                DIRECT MAIL
              </span>
              <a
                href="mailto:naufalrizqiilhamgibran002@gmail.com"
                className="inline-block font-serif text-base sm:text-2xl md:text-3xl text-neutral-900 dark:text-white hover:text-neutral-600 dark:hover:text-neutral-300 underline underline-offset-4 sm:underline-offset-8 decoration-neutral-300 dark:decoration-neutral-700 hover:decoration-neutral-800 dark:hover:decoration-neutral-300 transition-all break-all sm:break-normal"
              >
                naufalrizqiilhamgibran002@gmail.com
              </a>
            </div>
          </ScrollReveal>
        </div>

        {/* Right Large Enso Art */}
        <div className="md:col-span-4 flex justify-center md:justify-end">
          <ScrollReveal direction="left" delay={0.4}>
            <div className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 opacity-80 hover:opacity-100 transition-opacity dark-invert-asset">
              <Image
                src="/asset/tile-15-enso-large.png"
                alt="Ensō Large Art"
                fill
                className="object-contain"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Bottom Legal & Social Icon Logos */}
      <ScrollReveal direction="up" delay={0.5}>
        <div className="pt-6 sm:pt-8 border-t border-neutral-200/60 dark:border-neutral-800 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 dark:text-neutral-400 font-mono gap-4 sm:gap-6 text-center sm:text-left">
          <div>
            © 2025 Naufal Rizqi Ilham Gibran. All rights reserved.
          </div>

          {/* Social Icon Logos (Enlarged) */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* LinkedIn */}
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              aria-label="LinkedIn Profile"
              className="p-2.5 text-neutral-600 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white hover:bg-neutral-200/60 dark:hover:bg-neutral-800/80 rounded-full transition-all duration-200 hover:scale-110"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
            </Link>

            {/* GitHub */}
            <Link
              href="https://github.com/Naufal002"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
              aria-label="GitHub Profile"
              className="p-2.5 text-neutral-600 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white hover:bg-neutral-200/60 dark:hover:bg-neutral-800/80 rounded-full transition-all duration-200 hover:scale-110"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </Link>
            {/* CTF Writeups / Flag */}
            <Link
              href="#"
              title="CTF Writeups"
              aria-label="CTF Writeups"
              className="p-2.5 text-neutral-600 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white hover:bg-neutral-200/60 dark:hover:bg-neutral-800/80 rounded-full transition-all duration-200 hover:scale-110"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm0 0h18" />
              </svg>
            </Link>
          </div>
        </div>
      </ScrollReveal>
    </footer>
  );
}
