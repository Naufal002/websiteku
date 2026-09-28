"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import { useLanguage } from "../context/LanguageContext";

export default function AboutSection() {
  const { lang } = useLanguage();

  return (
    <section id="about" className="relative py-16 sm:py-20 px-4 sm:px-6 md:px-12 max-w-6xl mx-auto">
      {/* Right Kanji Accent (自己紹介 - Enlarged) */}
      <ScrollReveal direction="left" delay={0.3}>
        <div className="absolute right-4 sm:right-6 md:right-12 top-16 sm:top-24 opacity-40 sm:opacity-80 hover:opacity-100 transition-all dark-invert-asset z-10 pointer-events-none">
          <Image
            src="/asset/tile-04-kanji-accent-about.png"
            alt="Kanji Accent About - 自己紹介"
            width={42}
            height={220}
            className="object-contain w-8 sm:w-11 h-auto"
          />
        </div>
      </ScrollReveal>

      {/* Section Header Label */}
      <ScrollReveal direction="right" delay={0.1}>
        <div className="flex items-center space-x-3 mb-8 sm:mb-12 text-xs font-mono tracking-widest text-neutral-400 dark:text-neutral-500 uppercase">
          <span>01</span>
          <span className="w-8 h-[1px] bg-neutral-300 dark:bg-neutral-800"></span>
          <span>{lang === "id" ? "TENTANG SAYA" : "ABOUT ME"}</span>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-12 items-start">
        {/* Left Visual & Subquote */}
        <div className="md:col-span-4 space-y-6">
          <ScrollReveal direction="up" delay={0.25}>
            <div className="relative p-5 sm:p-8 bg-neutral-100/60 dark:bg-[#161618] border border-neutral-200/80 dark:border-neutral-800 rounded-none overflow-hidden transition-colors">
              {/* Visual background artwork / kanji */}
              <div className="mb-6 opacity-30 dark-invert-asset">
                <Image
                  src="/asset/tile-05-about-visual.png"
                  alt="Seijaku Visual"
                  width={120}
                  height={60}
                  className="object-contain"
                />
              </div>
              <p className="font-serif text-sm font-semibold text-neutral-800 dark:text-neutral-200 leading-relaxed">
                {lang === "id" 
                  ? "Menyeimbangkan presisi logika dengan intuisi kreatif dalam memecahkan misteri teknologi."
                  : "Balancing logical precision with creative intuition in unravelling the mysteries of technology."}
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Right Bio Paragraph */}
        <div className="md:col-span-7 space-y-6 text-neutral-600 dark:text-neutral-300 font-sans leading-relaxed text-sm md:text-base font-light">
          <ScrollReveal direction="up" delay={0.35}>
            <p>
              {lang === "id"
                ? "Berbasis di Kudus, Indonesia, saya adalah seorang mahasiswa Teknik Informatika dan pengembang perangkat lunak yang berfokus pada pembuatan aplikasi web dan mobile dengan Next.js, Astro, Node.js, Flutter, dan Python."
                : "Based in Kudus, Indonesia, I’m an Informatics Engineering student and software developer focused on building web and mobile applications with Next.js, Astro, Node.js, Flutter, and Python."}
            </p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.45}>
            <p>
              {lang === "id"
                ? "Saya senang bekerja di seluruh proses pengembangan — mulai dari merancang basis data dan mengembangkan API hingga membangun antarmuka pengguna yang fungsional dan bersih. Saya juga tertarik pada keamanan siber, khususnya forensik digital dan keamanan blue-team."
                : "I enjoy working across the entire development process — from designing databases and developing APIs to building clean, functional user interfaces. I’m also interested in cybersecurity, particularly digital forensics and blue-team security."}
            </p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.55}>
            <p>
              {lang === "id"
                ? "Pengalaman saya mencakup pengembangan proyek perangkat lunak, eksplorasi pengembangan backend dan mobile, serta berpartisipasi dalam kompetisi keamanan siber seperti GEMASTIK di divisi Keamanan Siber. Saya terus meningkatkan kemampuan dengan membangun proyek dunia nyata, memecahkan tantangan teknis, dan mengeksplorasi teknologi baru."
                : "My experience includes developing software projects, exploring backend and mobile development, and participating in cybersecurity competitions such as GEMASTIK in the Cyber Security division. I’m continuously improving my skills by building real-world projects, solving technical challenges, and exploring new technologies."}
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
