"use client";

import ScrollReveal from "./ScrollReveal";
import { useLanguage } from "../context/LanguageContext";

export default function SpecializationSection() {
  const { lang } = useLanguage();

  const specializations = [
    {
      title: "Python",
      kanji: "蛇",
      description: lang === "id"
        ? "Menulis skrip Python berekfisiensi tinggi untuk pemrosesan data, pipeline otomatisasi, integrasi machine learning, dan alat keamanan."
        : "Writing high-efficiency Python scripts for data processing, automation pipelines, machine learning integration, and security tooling.",
    },
    {
      title: "TypeScript",
      kanji: "型語",
      description: lang === "id"
        ? "Memanfaatkan pengetikan statis yang kuat dan paradigma TypeScript modern untuk membangun aplikasi yang kokoh, tahan error, dan mudah dirawat."
        : "Leveraging strong static typing and modern TypeScript paradigms to build robust, error-resistant, and maintainable software applications.",
    },
    {
      title: "Java",
      kanji: "堅牢",
      description: lang === "id"
        ? "Mengembangkan aplikasi berorientasi objek tingkat perusahaan dengan fokus pada stabilitas platform, multithreading, dan pola desain OOP yang bersih."
        : "Developing enterprise-grade, object-oriented applications with a focus on platform stability, multithreading, and clean OOP design patterns.",
    },
    {
      title: "JavaScript",
      kanji: "動態",
      description: lang === "id"
        ? "Menciptakan aplikasi web interaktif, dinamis, dan layanan asinkron terukur menggunakan standar ECMAScript modern."
        : "Crafting interactive, dynamic web applications and scalable asynchronous services using modern ECMAScript standards.",
    },
    {
      title: lang === "id" ? "Pengembang Aplikasi Mobile" : "Mobile Apps Developer",
      kanji: "移動",
      description: lang === "id"
        ? "Menciptakan aplikasi mobile lintas platform yang intuitif menggunakan Flutter dengan manajemen state yang bersih dan desain UI responsif."
        : "Crafting intuitive, cross-platform mobile applications using Flutter with clean state management and responsive UI design.",
    },
    {
      title: lang === "id" ? "Pengembang Web Fullstack" : "Fullstack Web Developer",
      kanji: "構築",
      description: lang === "id"
        ? "Membangun aplikasi web modern dan berkinerja tinggi menggunakan Next.js, React, dan API backend yang kokoh untuk pengalaman pengguna yang mulus."
        : "Building modern, high-performance web applications leveraging Next.js, React, and robust backend APIs for seamless user experiences.",
    },
    {
      title: lang === "id" ? "Arsitektur Perangkat Lunak" : "Software Architecture",
      kanji: "創造",
      description: lang === "id"
        ? "Merancang arsitektur aplikasi yang terukur, efisien, dan modular dengan fokus pada kinerja tinggi, kode yang bersih, dan kemudahan perawatan."
        : "Designing scalable, efficient, and modular application architectures with a strong focus on high performance, clean code, and maintainability.",
    },
    {
      title: lang === "id" ? "Otomatisasi & Data" : "Automation & Data",
      kanji: "自動",
      description: lang === "id"
        ? "Mengembangkan alat otomatisasi untuk menyederhanakan alur kerja yang kompleks, memproses volume data berskala besar, dan mengintegrasikan layanan AI."
        : "Developing automated tools to streamline complex workflows, process large-scale data volumes, and seamlessly integrate AI services.",
    },
    {
      title: lang === "id" ? "Forensik Digital" : "Digital Forensics",
      kanji: "究明",
      description: lang === "id"
        ? "Melakukan analisis malware mendalam, respons insiden siber, dan ekstraksi artefak digital untuk mengidentifikasi anomali keamanan yang kritis."
        : "Conducting in-depth malware analysis, cyber incident response, and digital artifact extraction to identify critical security anomalies.",
    },
    {
      title: "Linux",
      kanji: "基盤",
      description: lang === "id"
        ? "Mengonfigurasi, memperkuat, dan mengelola lingkungan Linux dengan skrip shell untuk administrasi sistem otomatis dan alur kerja keamanan."
        : "Configuring, hardening, and managing Linux environments with shell scripting for automated system administration and security workflows.",
    },
    {
      title: lang === "id" ? "Integrasi Firebase" : "Firebase Integration",
      kanji: "雲端",
      description: lang === "id"
        ? "Mengintegrasikan database real-time, mekanisme otentikasi, cloud functions, dan cloud storage ke dalam aplikasi siap pakai."
        : "Integrating real-time databases, authentication mechanisms, cloud functions, and cloud storage into production-ready applications.",
    },
    {
      title: "Internet of Things (IoT)",
      kanji: "物連",
      description: lang === "id"
        ? "Merancang sistem IoT cerdas, mengintegrasikan mikrokontroler dengan sensor, konektivitas cloud, komputasi edge, dan pipeline telemetri real-time."
        : "Designing smart embedded IoT systems, integrating microcontrollers with sensors, cloud connectivity, edge computing, and real-time telemetry pipelines.",
    },
  ];

  return (
    <section id="specialization" className="py-16 sm:py-20 px-4 sm:px-6 md:px-12 max-w-6xl mx-auto">
      {/* Section Label */}
      <ScrollReveal direction="right" delay={0.1}>
        <div className="flex items-center space-x-3 mb-8 sm:mb-12 text-xs font-mono tracking-widest text-neutral-400 dark:text-neutral-500 uppercase">
          <span>02</span>
          <span className="w-8 h-[1px] bg-neutral-300 dark:bg-neutral-800"></span>
          <span>{lang === "id" ? "SPESIALISASI" : "SPECIALIZATION"}</span>
        </div>
      </ScrollReveal>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        {specializations.map((spec, index) => {
          const isLastSingle =
            index === specializations.length - 1 && specializations.length % 3 === 1;

          return (
            <ScrollReveal
              key={index}
              direction="up"
              delay={index * 0.05 + 0.1}
              duration={0.5}
              className={isLastSingle ? "md:col-span-3 md:max-w-md md:mx-auto w-full" : "h-full"}
            >
              <div className="h-full p-5 sm:p-8 bg-white dark:bg-[#161618] border border-neutral-200/80 dark:border-neutral-800 shadow-xs hover:border-neutral-400 dark:hover:border-neutral-700 transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <h3 className="font-serif text-lg sm:text-xl font-semibold text-neutral-900 dark:text-white group-hover:text-black dark:group-hover:text-white transition-colors">
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
          );
        })}
      </div>
    </section>
  );
}
