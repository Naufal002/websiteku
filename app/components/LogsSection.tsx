"use client";

import ScrollReveal from "./ScrollReveal";

export default function LogsSection() {
  const logs = [
    {
      quarter: "2025 // Q3",
      title: "GEMASTIK XVIII 2025: National Finalist in Digital Forensics Division (Kemendikbudristek)",
      tags: ["[MALWARE ANALYSIS]", "[MEMORY FORENSICS]", "[NETWORK FORENSICS]", "[LINUX]"],
    },
    {
      quarter: "2025 // Q4",
      title: "BINUS National Cyber Week (NCW): In the digital forensics division, tackling memory forensics cases and malware analysis",
      tags: ["[CTF]", "[CRYPTO]", "[REVERSE ENG]"],
    },
    {
      quarter: "2026 // Q3",
      title: "POLINES Techcomfest CTF Competition: Cyber Security Challenge & Network Forensics",
      tags: ["[CYBER SECURITY]", "[FORENSICS]", "[NETWORK]"],
    },
    {
      quarter: "2026 // Q3",
      title: "ITS ARA CTF Competition: Cyber Security Challenge & Network Forensics",
      tags: ["[CYBER SECURITY]", "[FORENSICS]", "[NETWORK]"],
    },
    {
      quarter: "2026 // Q3",
      title: "UKSW FIT Competition: Cyber Security Challenge & Network Forensics",
      tags: ["[CYBER SECURITY]", "[FORENSICS]", "[NETWORK]"],
    },
  ];

  return (
    <section id="logs" className="py-16 sm:py-20 px-4 sm:px-6 md:px-12 max-w-6xl mx-auto">
      {/* Section Label */}
      <ScrollReveal direction="right" delay={0.1}>
        <div className="flex items-center space-x-3 mb-8 sm:mb-12 text-xs font-mono tracking-widest text-neutral-400 dark:text-neutral-500 uppercase">
          <span>05</span>
          <span className="w-8 h-[1px] bg-neutral-300 dark:bg-neutral-800"></span>
          <span>CTF & INVESTIGATION LOGS</span>
        </div>
      </ScrollReveal>

      {/* Logs Table / List */}
      <div className="divide-y divide-neutral-200 dark:divide-neutral-800 border-t border-b border-neutral-200 dark:border-neutral-800">
        {logs.map((log, index) => (
          <ScrollReveal
            key={index}
            direction="up"
            delay={index * 0.12 + 0.15}
            duration={0.6}
          >
            <div className="py-4 sm:py-6 flex flex-col md:flex-row md:items-center justify-between gap-2.5 sm:gap-4 hover:bg-neutral-100/50 dark:hover:bg-neutral-800/40 px-3 sm:px-4 transition-colors group cursor-default">
              {/* Date / Quarter */}
              <span className="text-xs font-mono text-neutral-400 dark:text-neutral-500 min-w-[90px] sm:min-w-[100px]">
                {log.quarter}
              </span>

              {/* Title */}
              <h4 className="flex-1 font-serif text-sm sm:text-base md:text-lg text-neutral-800 dark:text-neutral-200 font-medium group-hover:text-black dark:group-hover:text-white transition-colors">
                {log.title}
              </h4>

              {/* Tags */}
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-[9px] sm:text-[10px] font-mono text-neutral-400 dark:text-neutral-500 uppercase">
                {log.tags.map((tag, tIndex) => (
                  <span key={tIndex}>{tag}</span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
