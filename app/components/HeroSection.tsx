"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-between pt-28 sm:pt-32 pb-10 sm:pb-12 px-4 sm:px-6 md:px-12 max-w-6xl mx-auto">
      {/* Top Main Area: Title + Right Vertical Kanji Accent */}
      <div className="relative mt-4 sm:mt-8 md:mt-16 flex justify-between items-start gap-4 sm:gap-8">
        {/* Main Content Area */}
        <div className="max-w-3xl space-y-6 sm:space-y-10">
          {/* Name Title */}
          <ScrollReveal direction="up" delay={0.1} duration={0.8}>
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-neutral-900 dark:text-white leading-[1.12]">
              Naufal Rizqi Ilham
              <br />
              Gibran
            </h1>
          </ScrollReveal>

          {/* Sub-quote with vertical line */}
          <ScrollReveal direction="up" delay={0.3} duration={0.8}>
            <div className="border-l-2 border-neutral-300 dark:border-neutral-700 pl-4 sm:pl-6 py-1">
              <p className="font-serif text-base sm:text-lg md:text-xl text-neutral-600 dark:text-neutral-300 italic font-light max-w-xl leading-relaxed">
                &quot;Full-stack web developer and mobile apps developer with an interest in cyber security&quot;
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Right Vertical Kanji Accent Image (kanji-accent.png: 技術と美 - Animated) */}
        <ScrollReveal direction="left" delay={0.4} duration={0.8}>
          <div className="pt-2 opacity-80 hover:opacity-100 transition-all dark-invert-asset shrink-0">
            <Image
              src="/asset/kanji-accent.png"
              alt="Kanji Accent Hero - 技術と美"
              width={42}
              height={220}
              className="object-contain w-7 sm:w-9 md:w-11 h-auto"
              priority
            />
          </div>
        </ScrollReveal>
      </div>

      {/* Bottom Row Info */}
      <ScrollReveal direction="up" delay={0.5} duration={0.8}>
        <div className="pt-12 sm:pt-20 flex items-end justify-between text-xs text-neutral-500 dark:text-neutral-400 uppercase tracking-wider font-mono gap-2">
          <div>
            <span className="block text-[10px] text-neutral-400 dark:text-neutral-500 mb-0.5 sm:mb-1">BASED IN</span>
            <span className="font-semibold text-neutral-800 dark:text-neutral-200 text-xs sm:text-sm normal-case font-sans">
              Kudus, Indonesia
            </span>
          </div>

          <Link
            href="#about"
            className="flex items-center space-x-1.5 sm:space-x-2 text-neutral-500 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white transition-colors cursor-pointer group shrink-0"
          >
            <span className="tracking-widest text-[10px] sm:text-[11px]">Scroll to observe</span>
            <Image
              src="/asset/tile-02-arrow-down.png"
              alt="Scroll down"
              width={14}
              height={14}
              className="group-hover:translate-y-1 transition-transform dark-invert-asset w-3 sm:w-3.5 h-3 sm:h-3.5"
            />
          </Link>
        </div>
      </ScrollReveal>
    </section>
  );
}
