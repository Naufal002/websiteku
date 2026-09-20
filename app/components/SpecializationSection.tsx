"use client";

import ScrollReveal from "./ScrollReveal";

export default function SpecializationSection() {
  const specializations = [
    {
      title: "Python",
      kanji: "蛇",
      description:
        "Writing high-efficiency Python scripts for data processing, automation pipelines, machine learning integration, and security tooling.",
    },
    {
      title: "TypeScript",
      kanji: "型語",
      description:
        "Leveraging strong static typing and modern TypeScript paradigms to build robust, error-resistant, and maintainable software applications.",
    },
    {
      title: "Java",
      kanji: "堅牢",
      description:
        "Developing enterprise-grade, object-oriented applications with a focus on platform stability, multithreading, and clean OOP design patterns.",
    },
    {
      title: "JavaScript",
      kanji: "動態",
      description:
        "Crafting interactive, dynamic web applications and scalable asynchronous services using modern ECMAScript standards.",
    },
    {
      title: "Mobile Apps Developer",
      kanji: "移動",
      description:
        "Crafting intuitive, cross-platform mobile applications using Flutter with clean state management and responsive UI design.",
    },
    {
      title: "Fullstack Web Developer",
      kanji: "構築",
      description:
        "Building modern, high-performance web applications leveraging Next.js, React, and robust backend APIs for seamless user experiences.",
    },
    {
      title: "Software Architecture",
      kanji: "創造",
      description:
        "Designing scalable, efficient, and modular application architectures with a strong focus on high performance, clean code, and maintainability.",
    },
    {
      title: "Automation & Data",
      kanji: "自動",
      description:
        "Developing automated tools to streamline complex workflows, process large-scale data volumes, and seamlessly integrate AI services.",
    },
    {
      title: "Digital Forensics",
      kanji: "究明",
      description:
        "Conducting in-depth malware analysis, cyber incident response, and digital artifact extraction to identify critical security anomalies.",
    },
    {
      title: "Linux",
      kanji: "基盤",
      description:
        "Configuring, hardening, and managing Linux environments with shell scripting for automated system administration and security workflows.",
    },
    {
      title: "Firebase Integration",
      kanji: "雲端",
      description:
        "Integrating real-time databases, authentication mechanisms, cloud functions, and cloud storage into production-ready applications.",
    },
    {
      title: "Internet of Things (IoT)",
      kanji: "物連",
      description:
        "Designing smart embedded IoT systems, integrating microcontrollers with sensors, cloud connectivity, edge computing, and real-time telemetry pipelines.",
    },
  ];

  return (
    <section id="specialization" className="py-20 px-6 md:px-12 max-w-6xl mx-auto">
      {/* Section Label */}
      <ScrollReveal direction="right" delay={0.1}>
        <div className="flex items-center space-x-3 mb-12 text-xs font-mono tracking-widest text-neutral-400 dark:text-neutral-500 uppercase">
          <span>02</span>
          <span className="w-8 h-[1px] bg-neutral-300 dark:bg-neutral-800"></span>
          <span>SPECIALIZATION</span>
        </div>
      </ScrollReveal>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {specializations.map((spec, index) => (
          <ScrollReveal
            key={index}
            direction="up"
            delay={index * 0.05 + 0.1}
            duration={0.5}
          >
            <div className="h-full p-8 bg-white dark:bg-[#161618] border border-neutral-200/80 dark:border-neutral-800 shadow-xs hover:border-neutral-400 dark:hover:border-neutral-700 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-serif text-xl font-semibold text-neutral-900 dark:text-white group-hover:text-black dark:group-hover:text-white transition-colors">
                    {spec.title}
                  </h3>
                  {spec.kanji && (
                    <span className="text-xs font-mono text-neutral-400 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-800 px-2 py-0.5 rounded-xs bg-neutral-50 dark:bg-neutral-800/40 shrink-0 ml-2">
                      {spec.kanji}
                    </span>
                  )}
                </div>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 font-light leading-relaxed">
                  {spec.description}
                </p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
