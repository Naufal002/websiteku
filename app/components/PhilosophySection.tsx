"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

export default function PhilosophySection() {
  return (
    <section className="w-full bg-[#F4F4F6]/70 dark:bg-[#161618] border-y border-neutral-200/80 dark:border-neutral-800 py-14 sm:py-20 px-4 sm:px-6 my-8 sm:my-12 transition-colors duration-300">
      <div className="max-w-3xl mx-auto text-center space-y-4 sm:space-y-6">
        {/* Enso Small Art */}
        <ScrollReveal direction="down" delay={0.1}>
          <div className="flex justify-center">
            <Image
              src="/asset/tile-03-enso-small.png"
              alt="Ensō Circle"
              width={48}
              height={48}
              className="opacity-75 dark-invert-asset w-10 sm:w-12 h-10 sm:h-12"
            />
          </div>
        </ScrollReveal>

        {/* Philosophy Quote */}
        <ScrollReveal direction="up" delay={0.25} duration={0.8}>
          <blockquote className="font-serif text-lg sm:text-2xl md:text-3xl text-neutral-800 dark:text-neutral-100 font-light leading-relaxed max-w-2xl mx-auto">
            &quot;Sumi-e (ink painting) teaches that every brushstroke must be decisive and honest. The same applies to cybersecurity and cyber investigations.&quot;
          </blockquote>
        </ScrollReveal>

        {/* Author / Tag */}
        <ScrollReveal direction="up" delay={0.4}>
          <p className="text-xs font-mono tracking-[0.25em] text-neutral-400 dark:text-neutral-500 uppercase">
            — WORK PHILOSOPHY
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
