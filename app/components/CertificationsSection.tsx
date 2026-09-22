"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  image: string;
  tags: string[];
  description: string;
}

export default function CertificationsSection() {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedCert(null);
      }
    };
    if (selectedCert) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedCert]);

  const certificates: Certificate[] = [
    {
      id: "CERT // 01",
      title: "Finalist: GEMASTIK XVIII 2025",
      issuer: "Kemendiktisaintek RI & Telkom University",
      date: "October 2025",
      image: "/certificates/1770628755057.jpg",
      tags: ["CYBER SECURITY", "NATIONAL COMPETITION", "FINALIST"],
      description:
        "Recognized as a national finalist in GEMASTIK XVIII (Pagelaran Mahasiswa Nasional Bidang TIK) 2025 in the Cyber Security / Digital Forensics division.",
    },
    {
      id: "CERT // 02",
      title: "FIT Competition 2026 - Cyber Security",
      issuer: "Satya Wacana Christian University (UKSW)",
      date: "June 2026",
      image: "/certificates/Naufal Rizki Ilham Gibran_page-0001.jpg",
      tags: ["CYBER SECURITY", "COMPETITION", "UKSW"],
      description:
        "Certificate of Appreciation as a Contestant in the Cyber Security Category at FIT Competition 2026 under the theme 'Digital Impact For Humanitarian Response and Global Well-Being'.",
    },
    {
      id: "CERT // 03",
      title: "Python (Basic) Skill Certification",
      issuer: "HackerRank",
      date: "November 2024",
      image: "/certificates/python_basic certificate_page-0001.jpg",
      tags: ["PYTHON", "ALGORITHMS", "HACKERRANK"],
      description:
        "Passed the HackerRank skill certification test verifying proficiency in core Python programming, data structures, and logic implementation (Credential ID: E256963A81CC).",
    },
    {
      id: "CERT // 04",
      title: "Java Programming Fundamentals",
      issuer: "Dicoding Indonesia",
      date: "June 2024",
      image: "/certificates/sertifikat_course_60_1823647_040624133237_page-0001.jpg",
      tags: ["JAVA", "OOP", "DICODING"],
      description:
        "Certificate of Competency for Java fundamental programming, object-oriented concepts, syntax, and application structure (Credential ID: NVP7Q46YWZR0).",
    },
    {
      id: "CERT // 05",
      title: "Python Programming Fundamentals",
      issuer: "Dicoding Indonesia",
      date: "June 2024",
      image: "/certificates/sertifikat_course_86_1823647_050624104723_page-0001.jpg",
      tags: ["PYTHON", "FOUNDATIONS", "DICODING"],
      description:
        "Certificate of Competency covering basic Python programming principles, data structures, and execution control (Credential ID: 98XWL51QWZM3).",
    },
    {
      id: "CERT // 06",
      title: "Python Course Certificate",
      issuer: "Progate",
      date: "July 2021",
      image: "/certificates/progate-sertifikat.jpg",
      tags: ["PYTHON", "SOFTWARE DEV", "PROGATE"],
      description:
        "Certificate of Completion for 5 Study modules covering foundational Python programming for software development.",
    },
    {
      id: "CERT // 07",
      title: "GDSC Seminar: Next GDSC Lead 2023",
      issuer: "Dicoding Indonesia & GDSC IT Telkom Purwokerto",
      date: "May 2023",
      image: "/certificates/Dicoding_gdg.jpg",
      tags: ["GDSC", "COMMUNITY", "DICODING", "LEADERSHIP"],
      description:
        "Certificate of Attendance for participating in the Google Developer Student Clubs (GDSC) seminar organized by GDSC IT Telkom Purwokerto and Dicoding Indonesia.",
    },
    {
      id: "CERT // 08",
      title: "ICCSET 2024 International Conference",
      issuer: "Faculty of Engineering - Universitas Muria Kudus",
      date: "November 2024",
      image: "/certificates/ICCSET_FT_UMK_.jpg",
      tags: ["CONFERENCE", "COMPUTER SCIENCE", "AI & TECH", "UMK"],
      description:
        "Certificate of Participation in the International Conference on Computer Science and Engineering Technology (ICCSET 2024) themed 'Transforming Industries: The Future of Artificial Intelligence in Manufacturing' (Credential ID: 1761/ICCSET/FT/UMK/XI/2024).",
    },
  ];

  return (
    <section id="certifications" className="py-20 px-6 md:px-12 max-w-6xl mx-auto">
      {/* Section Label */}
      <ScrollReveal direction="right" delay={0.1}>
        <div className="flex items-center space-x-3 mb-12 text-xs font-mono tracking-widest text-neutral-400 dark:text-neutral-500 uppercase">
          <span>06</span>
          <span className="w-8 h-[1px] bg-neutral-300 dark:bg-neutral-800"></span>
          <span>CERTIFICATIONS & CREDENTIALS</span>
        </div>
      </ScrollReveal>

      {/* Grid of Certificates */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {certificates.map((cert, index) => {
          const isLastOdd =
            index === certificates.length - 1 && certificates.length % 2 !== 0;

          return (
            <ScrollReveal
              key={index}
              direction="up"
              delay={index * 0.1 + 0.15}
              duration={0.6}
              className={isLastOdd ? "md:col-span-2 md:max-w-xl md:mx-auto w-full" : "h-full"}
            >
              <div
                onClick={() => setSelectedCert(cert)}
                className="group p-6 bg-white dark:bg-[#161618] border border-neutral-200/80 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-700 transition-all duration-300 cursor-pointer flex flex-col justify-between h-full shadow-xs"
              >
              <div>
                {/* Top Meta Info */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-mono text-neutral-400 dark:text-neutral-500 tracking-wider">
                    {cert.id}
                  </span>
                  <span className="text-xs font-mono text-neutral-400 dark:text-neutral-500">
                    {cert.date}
                  </span>
                </div>

                {/* Certificate Image Thumbnail Preview */}
                <div className="relative w-full h-48 mb-6 overflow-hidden bg-neutral-100 dark:bg-neutral-900 border border-neutral-200/60 dark:border-neutral-800/80 group-hover:opacity-95 transition-opacity">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-xs font-mono text-white bg-black/70 px-3 py-1.5 uppercase tracking-wider backdrop-blur-xs">
                      View Certificate 🔍
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl font-medium text-neutral-900 dark:text-white group-hover:text-black dark:group-hover:text-neutral-100 transition-colors mb-2">
                  {cert.title}
                </h3>

                {/* Issuer */}
                <p className="text-xs font-mono text-neutral-500 dark:text-neutral-400 mb-4 uppercase tracking-wide">
                  ISSUER: {cert.issuer}
                </p>

                {/* Description */}
                <p className="text-sm text-neutral-600 dark:text-neutral-300 font-light leading-relaxed mb-6">
                  {cert.description}
                </p>
              </div>

              {/* Tags Badges */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-neutral-100 dark:border-neutral-800/60">
                {cert.tags.map((tag, tIndex) => (
                  <span
                    key={tIndex}
                    className="text-[10px] font-mono text-neutral-500 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-800 px-2 py-0.5 rounded-none uppercase"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        );
      })}
      </div>

      {/* Lightbox Modal */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="relative bg-white dark:bg-[#161618] border border-neutral-200 dark:border-neutral-800 max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 p-2 text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors text-xl font-mono cursor-pointer"
              aria-label="Close modal"
            >
              ✕
            </button>

            {/* Header */}
            <div>
              <div className="flex items-center space-x-3 text-xs font-mono text-neutral-400 dark:text-neutral-500 uppercase tracking-wider mb-2">
                <span>{selectedCert.id}</span>
                <span>•</span>
                <span>{selectedCert.date}</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl text-neutral-900 dark:text-white">
                {selectedCert.title}
              </h2>
              <p className="text-xs font-mono text-neutral-500 dark:text-neutral-400 mt-1 uppercase">
                ISSUER: {selectedCert.issuer}
              </p>
            </div>

            {/* Full Image */}
            <div className="relative w-full min-h-[300px] max-h-[60vh] h-[50vh] bg-neutral-100 dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 overflow-hidden">
              <Image
                src={selectedCert.image}
                alt={selectedCert.title}
                fill
                className="object-contain"
              />
            </div>

            {/* Description & Tags */}
            <div className="space-y-4">
              <p className="text-sm text-neutral-700 dark:text-neutral-300 font-light leading-relaxed">
                {selectedCert.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {selectedCert.tags.map((tag, tIndex) => (
                  <span
                    key={tIndex}
                    className="text-[10px] font-mono text-neutral-500 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-800 px-2.5 py-1 uppercase"
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
