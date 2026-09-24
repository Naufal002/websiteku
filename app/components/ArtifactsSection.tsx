"use client";

import ScrollReveal from "./ScrollReveal";

export default function ArtifactsSection() {
  const artifacts = [
    {
      id: "PROJECT // 01",
      tags: ["Internet of Things (IoT)", "Arduino Uno", "C++ for Arduino"],
      title: "SmartGarden",
      description:
        "An automated IoT smart gardening system built with Arduino Uno and C++, monitoring environmental conditions and automating irrigation to maintain optimal plant health.",
    },
    {
      id: "PROJECT // 02",
      tags: ["Mobile Apps", "Flutter", "Dart", "Firebase", "GroqAI API"],
      title: "CuanTrack",
      description:
        "A mobile app designed to help you monitor your finances and manage your savings, and which can also be used to keep track of your cash.",
    },
    {
      id: "PROJECT // 03",
      tags: ["Mobile Apps", "Flutter", "Dart", "Supabase"],
      title: "Pantau",
      description:
        "A mobile app designed for school pupil attendance that can be used in real time, utilising GPS as a reference point for attendance.",
    },
    {
      id: "PROJECT // 04",
      tags: ["Website", "Next.js", "TypeScript", "POS System"],
      title: "Kasir Pulsa",
      description:
        "A web-based POS cashier system tailored for mobile credit and digital top-up sales, seamlessly integrated with barcode scanners and thermal receipt printers for fast checkout workflows.",
    },
  ];

  return (
    <section id="works" className="py-20 px-6 md:px-12 max-w-6xl mx-auto">
      {/* Section Label */}
      <ScrollReveal direction="right" delay={0.1}>
        <div className="flex items-center space-x-3 mb-12 text-xs font-mono tracking-widest text-neutral-400 dark:text-neutral-500 uppercase">
          <span>04</span>
          <span className="w-8 h-[1px] bg-neutral-300 dark:bg-neutral-800"></span>
          <span>SELECTED WORK</span>
        </div>
      </ScrollReveal>

      {/* Artifact List */}
      <div className="space-y-8">
        {artifacts.map((item, index) => (
          <ScrollReveal
            key={index}
            direction="up"
            delay={index * 0.2 + 0.2}
            duration={0.8}
          >
            <div className="p-8 sm:p-10 bg-white dark:bg-[#161618] border border-neutral-200/80 dark:border-neutral-800 shadow-xs hover:border-neutral-400 dark:hover:border-neutral-700 transition-all duration-300 space-y-4 group">
              {/* Top row: Project ID & Tech Badges */}
              <div className="flex flex-wrap items-center justify-between gap-4">
                <span className="text-xs font-mono text-neutral-400 dark:text-neutral-500 tracking-wider">
                  {item.id}
                </span>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, tIndex) => (
                    <span
                      key={tIndex}
                      className="text-[10px] font-mono text-neutral-500 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-800 px-2.5 py-1 rounded-none uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Title */}
              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-neutral-900 dark:text-white group-hover:text-black dark:group-hover:text-neutral-100 transition-colors pt-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-neutral-600 dark:text-neutral-300 font-light leading-relaxed max-w-3xl">
                {item.description}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
