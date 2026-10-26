import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./context/LanguageContext";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Naufal Rizqi Ilham Gibran | Fullstack Developer",
  // description: "Mencari keteraturan dalam kekacauan kode, menyingkap kebenaran dari balik jejak digital.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`dark ${cormorant.variable} ${plusJakarta.variable} font-sans scroll-smooth antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('theme');
                  if (saved === 'light') {
                    document.documentElement.classList.remove('dark');
                  } else {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="bg-[#FAFAFA] dark:bg-[#0F0F10] text-[#1C1C1E] dark:text-[#F4F4F5] min-h-screen selection:bg-neutral-200 dark:selection:bg-neutral-800">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
