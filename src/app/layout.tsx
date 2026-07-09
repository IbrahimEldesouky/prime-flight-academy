import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

<meta name="google-site-verification" content="SOWSRNkEbXkKLF7yAVo-2O596r2f5PzoVhe-xiv-MLA" />
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "برايم فلايت أكاديمي | دراسة علوم الطيران والضيافة الجوية في مصر",
  description: "برايم فلايت أكاديمي تقدم برامج تدريب احترافية في الضيافة الجوية وضباط الحركة الجوية مع تدريب عملي وفرص تأهيل لسوق العمل.",
  keywords: [
    "أكاديمية طيران",
    "دراسة الطيران في مصر",
    "الضيافة الجوية",
    "مضيف طيران",
    "مضيفة طيران",
    "ضباط الحركة الجوية",
    "Cabin Crew Egypt",
    "Air Traffic Officer",
    "Aviation Academy Egypt",
    "علوم الطيران",
    "تدريب الطيران",
    "أكاديمية طيران مصر",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
