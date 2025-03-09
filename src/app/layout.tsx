import type { Metadata } from "next";
import { Geist, Geist_Mono, Nunito } from "next/font/google";
import Header from "./components/header";
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  title: "Sembeza Africa",
  description: "Using Sports for conservation, health, education, and tourism to drive impactful change across Uganda",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunito.className} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
