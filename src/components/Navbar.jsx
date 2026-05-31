"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
<nav className="fixed top-0 left-0 w-full bg-[#0b1f3a] text-white shadow-md z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between p-4" dir="rtl">

        {/* Logo */}
        <div className="text-xl font-bold text-[#f5c542]">
          برايم فلايت ✈️
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6 text-sm items-center">

          <li><Link href="#home">الرئيسية</Link></li>
          <li><a href="#about">من نحن</a></li>
          <li><a href="#vision">رؤيتنا</a></li>
          <li><a href="#departments">الأقسام</a></li>
          <li><a href="#gallery">الانشطة والتدريبات</a></li>
          <li><a href="#admission-conditions">شروط القبول</a></li>
          <li><a href="#contact">تواصل معنا</a></li>

        </ul>

        {/* Actions Buttons (NEW) */}
        <div className="hidden md:flex gap-3">

          {/* 👨‍🎓 Student */}
          <Link
            href="/student"
            className="bg-[#f5c542] text-black px-4 py-2 rounded-lg font-bold hover:opacity-90 transition"
          >
            دخول الطالب
          </Link>

          {/* 🔐 Admin */}
          <Link
            href="/login"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg font-bold hover:bg-blue-700 transition"
          >
            دخول الأدمن
          </Link>

        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#0b1f3a] px-6 pb-4 space-y-3 text-right">

          <Link href="/" className="block">الرئيسية</Link>
          <Link href="/about" className="block">من نحن</Link>
          <Link href="/departments" className="block">الأقسام</Link>
          <Link href="/news" className="block">الأخبار</Link>
          <Link href="/apply" className="block">التقديم</Link>

          <div className="border-t border-white/20 pt-3 space-y-2">

            <Link
              href="/student"
              className="block bg-[#f5c542] text-black px-3 py-2 rounded-lg font-bold text-center"
            >
              دخول الطالب
            </Link>

            <Link
              href="/login"
              className="block bg-blue-600 px-3 py-2 rounded-lg font-bold text-center"
            >
              دخول الأدمن
            </Link>

          </div>

        </div>
      )}

    </nav>
  );
}