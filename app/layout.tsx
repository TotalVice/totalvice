import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TotalVice | Juegos gratis, ofertas y promociones",
  description:
    "Encuentra juegos gratis, ofertas, promociones y regalos de Steam, Epic Games, Prime Gaming, GOG, Xbox y PlayStation.",
  keywords: [
    "juegos gratis",
    "steam",
    "epic games",
    "prime gaming",
    "gog",
    "ofertas",
    "videojuegos",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen bg-slate-950 text-white">
        {children}
      </body>
    </html>
  );
}