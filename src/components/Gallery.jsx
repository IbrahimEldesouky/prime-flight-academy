"use client";

import { useState } from "react";

const images = [
  { id: 1, type: "practical", title: "تدريب عملي", img: "/g1.jpg" },
  { id: 2, type: "theory", title: "محاضرة نظرية", img: "/g2.jpg" },
  { id: 3, type: "fitness", title: "تدريبات بدنية", img: "/g3.jpg" },
  { id: 4, type: "practical", title: "تدريب عملي", img: "/g4.jpg" },
  { id: 5, type: "theory", title: "محاضرة نظرية", img: "/g5.jpg" },
  { id: 6, type: "fitness", title: "تدريبات بدنية", img: "/g6.jpg" },
];

export default function Gallery() {
  const [filter, setFilter] = useState("all");

  const filtered =
    filter === "all" ? images : images.filter((img) => img.type === filter);

  return (
    <section className="w-full bg-[#f5f7fb] py-20" dir="rtl" id="gallery">

      <div className="max-w-6xl mx-auto px-6 space-y-10 text-center">

        <h2 className="text-3xl font-bold text-[#0b1f3a]">
          معرض الأنشطة
        </h2>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3">

          <button
            onClick={() => setFilter("all")}
            className="px-4 py-2 bg-[#0b1f3a] text-white rounded"
          >
            الكل
          </button>

          <button
            onClick={() => setFilter("practical")}
            className="px-4 py-2 bg-white border rounded"
          >
            تدريب عملي
          </button>

          <button
            onClick={() => setFilter("theory")}
            className="px-4 py-2 bg-white border rounded"
          >
            محاضرات نظرية
          </button>

          <button
            onClick={() => setFilter("fitness")}
            className="px-4 py-2 bg-white border rounded"
          >
            تدريبات بدنية
          </button>

        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-6">

          {filtered.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition"
            >

              <div className="h-48 bg-gray-200 flex items-center justify-center">
                صورة هنا
              </div>
              

              <div className="p-4 font-bold text-[#0b1f3a]">
                {item.title}
              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}