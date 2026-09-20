"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-between pt-32 pb-12 px-6 md:px-12 max-w-6xl mx-auto">
      {/* Top Main Area: Title + Right Vertical Kanji Accent */}
      <div className="relative mt-8 md:mt-16 flex justify-between items-start gap-8">
        {/* Main Content Area */}
        <div className="max-w-3xl space-y-10">
          {/* Name Title */}
          <ScrollReveal direction="up" delay={0.1} duration={0.8}>
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-light tracking-tight text-neutral-900 dark:text-white leading-[1.1]">
              Naufal Rizqi Ilham
              <br />
              Gibran
            </h1>
          </ScrollReveal>

          {/* Sub-quote with vertical line */}
          <ScrollReveal direction="up" delay={0.3} duration={0.8}>
            <div className="border-l-2 border-neutral-300 dark:border-neutral-700 pl-6 py-1">
              <p className="font-serif text-lg sm:text-xl text-neutral-600 dark:text-neutral-300 italic font-light max-w-xl leading-relaxed">
                &quot;Mencari keteraturan dalam kekacauan kode, menyingkap kebenaran dari balik jejak digital.&quot;
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
              className="object-contain w-9 sm:w-11 h-auto"
              priority
            />
          </div>
        </ScrollReveal>
      </div>

      {/* Bottom Row Info */}
      <ScrollReveal direction="up" delay={0.5} duration={0.8}>
        <div className="pt-20 flex items-end justify-between text-xs text-neutral-500 dark:text-neutral-400 uppercase tracking-wider font-mono">
          <div>
            <span className="block text-[10px] text-neutral-400 dark:text-neutral-500 mb-1">BASED IN</span>
            <span className="font-semibold text-neutral-800 dark:text-neutral-200 text-sm normal-case font-sans">
              Bandung, Indonesia
            </span>
          </div>

          <Link
            href="#about"
            className="flex items-center space-x-2 text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors cursor-pointer group"
          >
            <span className="tracking-widest text-[11px]">Scroll to observe</span>
            <Image
              src="/asset/tile-02-arrow-down.png"
              alt="Scroll down"
              width={14}
              height={14}
              className="group-hover:translate-y-1 transition-transform dark-invert-asset"
            />
          </Link>
        </div>
      </ScrollReveal>
    </section>
  );
}
