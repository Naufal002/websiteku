"use client";

import ScrollReveal from "./ScrollReveal";

export default function LogsSection() {
  const logs = [
    {
      quarter: "2025 // Q1",
      title: "Finalist: GEMASTIK XVIII 2025",
      tags: ["[MALWARE ANALYST]", "[MEMORY FORENSIC]", "[NETWORK FORENSIC]", "[LINUX]"],
    },
    {
      quarter: "2024 // Q4",
      title: "Tantangan CTF: Penyelesaian Pembongkaran Enkripsi Custom Binary Cryptography",
      tags: ["[CTF]", "[CRYPTO]"],
    },
    {
      quarter: "2024 // Q3",
      title: "Investigasi Jaringan: Membongkar Jejak Intrusi PCAP File dengan Wireshark",
      tags: ["[FORENSICS]", "[NETWORK]"],
    },
  ];

  return (
    <section id="logs" className="py-20 px-6 md:px-12 max-w-6xl mx-auto">
      {/* Section Label */}
      <ScrollReveal direction="right" delay={0.1}>
        <div className="flex items-center space-x-3 mb-12 text-xs font-mono tracking-widest text-neutral-400 dark:text-neutral-500 uppercase">
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
            <div className="py-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-neutral-100/50 dark:hover:bg-neutral-800/40 px-4 transition-colors group cursor-default">
              {/* Date / Quarter */}
              <span className="text-xs font-mono text-neutral-400 dark:text-neutral-500 min-w-[100px]">
                {log.quarter}
              </span>

              {/* Title */}
              <h4 className="flex-1 font-serif text-base sm:text-lg text-neutral-800 dark:text-neutral-200 font-medium group-hover:text-black dark:group-hover:text-white transition-colors">
                {log.title}
              </h4>

              {/* Tags */}
              <div className="flex items-center space-x-2 text-[10px] font-mono text-neutral-400 dark:text-neutral-500 uppercase">
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
