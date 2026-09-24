"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // Synchronize DOM theme on mount without triggering ESLint set-state-in-effect error
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldBeDark = savedTheme === "dark" || (!savedTheme && prefersDark);

    if (shouldBeDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // Schedule state update asynchronously to avoid synchronous cascading renders error
    const timer = setTimeout(() => {
      setIsDark(shouldBeDark);
    }, 0);

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close dropdown menu on click outside or escape key
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [menuOpen]);

  const toggleDarkMode = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    if (nextDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  // Maximum 3 primary menus displayed directly on the navbar
  const primaryNavItems = [
    { label: "About", href: "#about" },
    { label: "Works", href: "#works" },
    { label: "Contact", href: "#contact" },
  ];

  // Remaining sections stored inside the three-lines hamburger menu
  const moreNavItems = [
    { label: "Specialization", href: "#specialization", number: "02" },
    { label: "Skills", href: "#skills", number: "03" },
    { label: "CTF Logs", href: "#logs", number: "05" },
    { label: "Certifications", href: "#certifications", number: "06" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#FAFAFA]/90 dark:bg-[#0F0F10]/90 backdrop-blur-md border-b border-neutral-200/60 dark:border-neutral-800/80 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex items-center justify-between relative">
        {/* Brand Logo */}
        <Link
          href="#"
          className="font-mono text-xs sm:text-sm tracking-[0.25em] font-bold text-neutral-900 dark:text-white hover:opacity-75 transition-opacity uppercase shrink-0"
        >
          NAUFAL DEV
        </Link>

        {/* Navigation & Controls */}
        <div className="flex items-center space-x-4 sm:space-x-6 md:space-x-8">
          {/* Max 3 Main Nav Links */}
          <nav className="flex items-center space-x-3 sm:space-x-6 md:space-x-8">
            {primaryNavItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-[11px] sm:text-xs tracking-wider text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white transition-colors uppercase font-medium"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Action Buttons: Three-lines Menu + Theme Toggle */}
          <div className="flex items-center space-x-1 sm:space-x-2 border-l border-neutral-200 dark:border-neutral-800 pl-3 sm:pl-4">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleDarkMode}
              type="button"
              className="p-2 rounded-full text-neutral-600 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white hover:bg-neutral-200/50 dark:hover:bg-neutral-800/60 transition-all focus:outline-none cursor-pointer"
              title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
              aria-label="Toggle Theme"
            >
              {isDark ? (
                /* Sun Icon */
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.8}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              ) : (
                /* Moon Icon */
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.8}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              )}
            </button>

            {/* Three-lines (Hamburger) Menu Button */}
            <button
              ref={buttonRef}
              onClick={() => setMenuOpen(!menuOpen)}
              type="button"
              className={`p-2 rounded-full text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white hover:bg-neutral-200/50 dark:hover:bg-neutral-800/60 transition-all focus:outline-none cursor-pointer ${
                menuOpen ? "bg-neutral-200/60 dark:bg-neutral-800/80 text-black dark:text-white" : ""
              }`}
              title="More Sections"
              aria-label="Toggle Navigation Menu"
              aria-expanded={menuOpen}
            >
              <svg className="w-4 h-4 sm:w-4.5 sm:h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.8}
                    d="M3.75 7h16.5M3.75 12h16.5M3.75 17h16.5"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Dropdown Menu for Stored Sections */}
        {menuOpen && (
          <div
            ref={menuRef}
            className="absolute right-6 md:right-12 top-full mt-3 w-64 sm:w-72 bg-white/95 dark:bg-[#141416]/95 backdrop-blur-md border border-neutral-200/80 dark:border-neutral-800 p-5 shadow-2xl space-y-4 animate-in fade-in slide-in-from-top-2 duration-200 z-50"
          >
            {/* Header label */}
            <div className="text-[10px] font-mono tracking-widest text-neutral-400 dark:text-neutral-500 uppercase flex items-center justify-between border-b border-neutral-100 dark:border-neutral-800/80 pb-2.5">
              <span>MORE SECTIONS</span>
              <span className="text-[10px] tracking-normal font-sans">目録</span>
            </div>

            {/* List of Other Stored Sections */}
            <div className="space-y-1">
              {moreNavItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-between px-3 py-2.5 text-xs tracking-wider text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800/60 rounded-xs transition-all group"
                >
                  <span className="uppercase font-medium group-hover:translate-x-0.5 transition-transform">
                    {item.label}
                  </span>
                  <span className="text-[10px] font-mono text-neutral-400 dark:text-neutral-500 group-hover:text-neutral-700 dark:group-hover:text-neutral-300">
                    {item.number}
                  </span>
                </Link>
              ))}
            </div>

            {/* Quick access to primary items */}
            <div className="pt-2.5 border-t border-neutral-100 dark:border-neutral-800/80">
              <div className="text-[9px] font-mono tracking-widest text-neutral-400 dark:text-neutral-500 uppercase mb-2 px-1">
                PRIMARY
              </div>
              <div className="grid grid-cols-3 gap-1">
                {primaryNavItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-center py-1.5 text-[10px] font-mono uppercase text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800/50 transition-colors rounded-xs"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}