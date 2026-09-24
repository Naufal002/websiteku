"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

export default function SkillsSection() {
  const skills = [
    { kanji: "蛇", name: "Python", icon: "/asset/tile-09-arrow-up-right-3.png" },
    { kanji: "型", name: "TypeScript", icon: "/asset/tile-09-arrow-up-right-3.png" },
    { kanji: "字", name: "JavaScript", icon: "/asset/tile-09-arrow-up-right-3.png" },
    { kanji: "珈", name: "Java", icon: "/asset/tile-09-arrow-up-right-3.png" },
    { kanji: "矢", name: "Dart", icon: "/asset/tile-09-arrow-up-right-3.png" },
    { kanji: "甲", name: "Shell Scripting", icon: "/asset/tile-11-arrow-up-right-5.png" },
    { kanji: "流", name: "Flutter", icon: "/asset/tile-07-arrow-up-right-1.png" },
    { kanji: "網", name: "Next.js", icon: "/asset/tile-12-arrow-up-right-6.png" },
    { kanji: "雲", name: "Firebase", icon: "/asset/tile-12-arrow-up-right-6.png" },
    { kanji: "基", name: "Supabase", icon: "/asset/tile-09-arrow-up-right-3.png" },
    { kanji: "照", name: "SQL", icon: "/asset/tile-09-arrow-up-right-3.png" },
    { kanji: "象", name: "PostgreSQL", icon: "/asset/tile-09-arrow-up-right-3.png" },
  ];

  return (
    <section id="skills" className="relative py-16 sm:py-20 px-4 sm:px-6 md:px-12 max-w-6xl mx-auto">
      {/* Right Kanji Accent (技能一覧 - Enlarged) */}
      <ScrollReveal direction="left" delay={0.3}>
        <div className="absolute right-4 sm:right-6 md:right-12 top-16 sm:top-24 opacity-40 sm:opacity-80 hover:opacity-100 transition-all dark-invert-asset z-10 pointer-events-none">
          <Image
            src="/asset/tile-06-kanji-accent-skills.png"
            alt="Kanji Accent Skills - 技能一覧"
            width={42}
            height={220}
            className="object-contain w-8 sm:w-11 h-auto"
          />
        </div>
      </ScrollReveal>

      {/* Section Label */}
      <ScrollReveal direction="right" delay={0.1}>
        <div className="flex items-center space-x-3 mb-8 sm:mb-12 text-xs font-mono tracking-widest text-neutral-400 dark:text-neutral-500 uppercase">
          <span>03</span>
          <span className="w-8 h-[1px] bg-neutral-300 dark:bg-neutral-800"></span>
          <span className="break-words">PROGRAMMING LANGUAGES, FRAMEWORKS AND DATABASE</span>
        </div>
      </ScrollReveal>

      {/* Grid of Skills */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
        {skills.map((skill, index) => {
          const isLastOdd =
            index === skills.length - 1 && skills.length % 2 !== 0;

          return (
            <ScrollReveal
              key={index}
              direction="up"
              delay={index * 0.04 + 0.1}
              duration={0.5}
              className={isLastOdd ? "md:col-span-2 md:max-w-md md:mx-auto w-full" : "h-full"}
            >
            <div className="flex items-center justify-between p-3.5 sm:p-5 bg-white dark:bg-[#161618] border border-neutral-200/80 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-700 transition-all duration-300 group cursor-default">
              <div className="flex items-center space-x-3 sm:space-x-4">
                <span className="text-xs font-mono text-neutral-400 dark:text-neutral-500 w-6 text-center shrink-0">
                  {skill.kanji}
                </span>
                <span className="text-xs sm:text-sm font-medium text-neutral-800 dark:text-neutral-200 group-hover:text-neutral-950 dark:group-hover:text-white transition-colors">
                  {skill.name}
                </span>
              </div>

              <div className="opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all dark-invert-asset">
                <Image
                  src={skill.icon}
                  alt="Arrow up right"
                  width={14}
                  height={14}
                />
              </div>
            </div>
          </ScrollReveal>
        );
      })}
      </div>
    </section>
  );
}
