"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import { useLanguage } from "../context/LanguageContext";

interface Artifact {
  id: string;
  tags: string[];
  title: string;
  description: string;
  preview?: string;
  type?: "mobile" | "web" | "iot";
}

export default function ArtifactsSection() {
  const { lang } = useLanguage();
  const [selectedArtifact, setSelectedArtifact] = useState<Artifact | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedArtifact(null);
      }
    };
    if (selectedArtifact) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedArtifact]);

  const artifacts: Artifact[] = [
    {
      id: "PROJECT // 01",
      tags: ["Internet of Things (IoT)", "Arduino Uno", "C++ for Arduino"],
      title: "SmartGarden",
      type: "iot",
      description: lang === "id"
        ? "Sistem berkebun pintar IoT otomatis yang dibangun dengan Arduino Uno dan C++, untuk memantau kondisi lingkungan dan mengotomatiskan irigasi guna menjaga kesehatan tanaman yang optimal."
        : "An automated IoT smart gardening system built with Arduino Uno and C++, monitoring environmental conditions and automating irrigation to maintain optimal plant health.",
    },
    {
      id: "PROJECT // 02",
      tags: ["Mobile Apps", "Flutter", "Dart", "Firebase", "GroqAI API"],
      title: "CuanTrack",
      type: "mobile",
      preview: "/projects/cuantrack.jpeg",
      description: lang === "id"
        ? "Aplikasi mobile yang dirancang untuk membantu Anda memantau keuangan dan mengelola tabungan, serta dapat digunakan untuk melacak pengeluaran kas Anda."
        : "A mobile app designed to help you monitor your finances and manage your savings, and which can also be used to keep track of your cash.",
    },
    {
      id: "PROJECT // 03",
      tags: ["Mobile Apps", "Flutter", "Dart", "Supabase"],
      title: "Pantau",
      type: "mobile",
      preview: "/projects/pantau.jpeg",
      description: lang === "id"
        ? "Aplikasi mobile yang dirancang untuk presensi siswa sekolah yang dapat digunakan secara real-time, memanfaatkan GPS sebagai titik acuan untuk kehadiran."
        : "A mobile app designed for school pupil attendance that can be used in real time, utilising GPS as a reference point for attendance.",
    },
    {
      id: "PROJECT // 04",
      tags: ["Website", "Next.js", "TypeScript", "POS System", "Supabase"],
      title: "Kasentra",
      type: "web",
      preview: "/projects/kasentra.png",
      description: lang === "id"
        ? "Sistem kasir POS berbasis web yang disesuaikan untuk penjualan pulsa seluler dan top-up digital, terintegrasi mulus dengan pemindai barcode dan printer struk termal untuk alur kerja checkout yang cepat."
        : "A web-based POS cashier system tailored for mobile credit and digital top-up sales, seamlessly integrated with barcode scanners and thermal receipt printers for fast checkout workflows.",
    },
  ];

  return (
    <section id="works" className="py-16 sm:py-20 px-4 sm:px-6 md:px-12 max-w-6xl mx-auto">
      {/* Section Label */}
      <ScrollReveal direction="right" delay={0.1}>
        <div className="flex items-center space-x-3 mb-8 sm:mb-12 text-xs font-mono tracking-widest text-neutral-400 dark:text-neutral-500 uppercase">
          <span>04</span>
          <span className="w-8 h-[1px] bg-neutral-300 dark:bg-neutral-800"></span>
          <span>{lang === "id" ? "KARYA TERPILIH" : "SELECTED WORK"}</span>
        </div>
      </ScrollReveal>

      {/* Artifact List */}
      <div className="space-y-6 sm:space-y-8">
        {artifacts.map((item, index) => (
          <ScrollReveal
            key={index}
            direction="up"
            delay={index * 0.2 + 0.2}
            duration={0.8}
          >
            <div className="p-5 sm:p-8 md:p-10 bg-white dark:bg-[#161618] border border-neutral-200/80 dark:border-neutral-800 shadow-xs hover:border-neutral-400 dark:hover:border-neutral-700 transition-all duration-300 space-y-5 sm:space-y-6 group">
              {/* Top row: Project ID & Tech Badges */}
              <div className="flex flex-wrap items-center justify-between gap-3 sm:gap-4 pb-2 border-b border-neutral-100 dark:border-neutral-800/60">
                <span className="text-xs font-mono text-neutral-400 dark:text-neutral-500 tracking-wider">
                  {item.id}
                </span>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {item.tags.map((tag, tIndex) => (
                    <span
                      key={tIndex}
                      className="text-[9px] sm:text-[10px] font-mono text-neutral-500 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-800 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-none uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Main Content: Info & Preview */}
              {item.preview ? (
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center">
                  {/* Left: Info */}
                  <div className="md:col-span-7 space-y-3 sm:space-y-4">
                    <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-normal text-neutral-900 dark:text-white group-hover:text-black dark:group-hover:text-neutral-100 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-300 font-light leading-relaxed">
                      {item.description}
                    </p>
                    <div className="pt-1">
                      <button
                        onClick={() => setSelectedArtifact(item)}
                        type="button"
                        className="inline-flex items-center space-x-1.5 text-xs font-mono text-neutral-500 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white transition-colors cursor-pointer uppercase tracking-wider group/btn"
                      >
                        <span>{lang === "id" ? "Lihat Preview" : "View Preview"}</span>
                        <span className="transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform">↗</span>
                      </button>
                    </div>
                  </div>

                  {/* Right: Preview Container */}
                  <div className="md:col-span-5">
                    {item.type === "mobile" ? (
                      /* Mobile App Preview Frame */
                      <div
                        onClick={() => setSelectedArtifact(item)}
                        className="relative w-full py-4 sm:py-6 px-3 flex items-center justify-center bg-neutral-50 dark:bg-[#121214] border border-neutral-200/80 dark:border-neutral-800 group/preview cursor-pointer shadow-xs hover:border-neutral-400 dark:hover:border-neutral-700 transition-all duration-300"
                      >
                        {/* Minimalist Phone Mockup Frame */}
                        <div className="relative h-48 sm:h-56 aspect-[588/1280] rounded-[16px] p-1 bg-neutral-200 dark:bg-neutral-800 border border-neutral-300/80 dark:border-neutral-700/80 shadow-md group-hover/preview:scale-[1.03] transition-transform duration-500">
                          <div className="relative w-full h-full rounded-[12px] overflow-hidden bg-neutral-900">
                            <Image
                              src={item.preview}
                              alt={item.title}
                              fill
                              className="object-cover object-top"
                              sizes="240px"
                            />
                          </div>
                        </div>

                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover/preview:opacity-100 transition-opacity flex items-center justify-center">
                          <span className="text-[11px] sm:text-xs font-mono text-white bg-black/80 px-2.5 sm:px-3 py-1 sm:py-1.5 uppercase tracking-wider backdrop-blur-xs">
                            {lang === "id" ? "Lihat Preview 🔍" : "View Preview 🔍"}
                          </span>
                        </div>
                      </div>
                    ) : (
                      /* Web App Browser Frame */
                      <div
                        onClick={() => setSelectedArtifact(item)}
                        className="relative w-full overflow-hidden bg-neutral-50 dark:bg-[#121214] border border-neutral-200/80 dark:border-neutral-800 group/preview cursor-pointer shadow-xs hover:border-neutral-400 dark:hover:border-neutral-700 transition-all duration-300"
                      >
                        {/* Mock Browser Header */}
                        <div className="flex items-center justify-between px-3 py-2 border-b border-neutral-200/80 dark:border-neutral-800 bg-neutral-100/90 dark:bg-[#1A1A1C]">
                          <div className="flex items-center space-x-1.5">
                            <span className="w-2 h-2 rounded-full bg-neutral-300 dark:bg-neutral-700"></span>
                            <span className="w-2 h-2 rounded-full bg-neutral-300 dark:bg-neutral-700"></span>
                            <span className="w-2 h-2 rounded-full bg-neutral-300 dark:bg-neutral-700"></span>
                          </div>
                          <span className="text-[10px] font-mono text-neutral-400 dark:text-neutral-500 tracking-wider">
                            kasentra.pos
                          </span>
                          <span className="w-6"></span>
                        </div>

                        {/* Image Canvas */}
                        <div className="relative w-full aspect-[16/9] overflow-hidden bg-neutral-200/40 dark:bg-neutral-950">
                          <Image
                            src={item.preview}
                            alt={item.title}
                            fill
                            className="object-cover object-top group-hover/preview:scale-[1.03] transition-transform duration-500"
                            sizes="(max-width: 768px) 100vw, 500px"
                          />
                        </div>

                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover/preview:opacity-100 transition-opacity flex items-center justify-center">
                          <span className="text-[11px] sm:text-xs font-mono text-white bg-black/80 px-2.5 sm:px-3 py-1 sm:py-1.5 uppercase tracking-wider backdrop-blur-xs">
                            {lang === "id" ? "Lihat Preview 🔍" : "View Preview 🔍"}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                /* Fallback layout for project without preview (e.g. SmartGarden) */
                <div className="space-y-3 sm:space-y-4 max-w-3xl">
                  <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-normal text-neutral-900 dark:text-white group-hover:text-black dark:group-hover:text-neutral-100 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              )}
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedArtifact && selectedArtifact.preview && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
          onClick={() => setSelectedArtifact(null)}
        >
          <div
            className="relative bg-white dark:bg-[#161618] border border-neutral-200 dark:border-neutral-800 max-w-4xl w-full max-h-[92vh] overflow-y-auto p-4 sm:p-8 space-y-4 sm:space-y-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedArtifact(null)}
              className="absolute top-3 sm:top-4 right-3 sm:right-4 p-2 text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors text-lg sm:text-xl font-mono cursor-pointer"
              aria-label="Close modal"
            >
              ✕
            </button>

            {/* Header */}
            <div className="pr-8">
              <div className="flex items-center space-x-2 sm:space-x-3 text-xs font-mono text-neutral-400 dark:text-neutral-500 uppercase tracking-wider mb-1.5 sm:mb-2">
                <span>{selectedArtifact.id}</span>
                <span>•</span>
                <span>{selectedArtifact.type === "mobile" ? "Mobile Application" : "Web Application"}</span>
              </div>
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl text-neutral-900 dark:text-white">
                {selectedArtifact.title}
              </h2>
            </div>

            {/* Full Preview Image */}
            <div className="relative w-full h-[40vh] sm:h-[55vh] md:h-[60vh] min-h-[220px] max-h-[70vh] bg-neutral-100 dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 overflow-hidden flex items-center justify-center p-2 sm:p-4">
              <div className={`relative ${selectedArtifact.type === "mobile" ? "h-full aspect-[588/1280]" : "w-full h-full"}`}>
                <Image
                  src={selectedArtifact.preview}
                  alt={selectedArtifact.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  priority
                />
              </div>
            </div>

            {/* Description & Tags */}
            <div className="space-y-3 sm:space-y-4">
              <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 font-light leading-relaxed">
                {selectedArtifact.description}
              </p>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {selectedArtifact.tags.map((tag, tIndex) => (
                  <span
                    key={tIndex}
                    className="text-[9px] sm:text-[10px] font-mono text-neutral-500 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-800 px-2 py-0.5 sm:px-2.5 sm:py-1 uppercase"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
