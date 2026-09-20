import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

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
      lang="id"
      className={`${cormorant.variable} ${plusJakarta.variable} font-sans scroll-smooth antialiased`}
    >
      <body className="bg-[#FAFAFA] text-[#1C1C1E] min-h-screen selection:bg-neutral-200">
        {children}
      </body>
    </html>
  );
}
