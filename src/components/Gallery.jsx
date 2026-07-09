"use client";

import Image from "next/image";
import { useState } from "react";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const images = [
  { id: 1, type: "practical", title: "أنشطة وفعاليات", img: "/g1.jpg" },
  { id: 2, type: "theory", title: "محاضرة نظرية", img: "/g2.jpg" },
  { id: 3, type: "fitness", title: "تدريبات بدنية", img: "/g3.jpg" },
  { id: 4, type: "practical", title: "أنشطة وفعاليات", img: "/g4.jpg" },
  { id: 5, type: "theory", title: "محاضرة نظرية", img: "/g5.jpg" },
  { id: 6, type: "fitness", title: "تدريبات بدنية", img: "/g6.jpg" },
  { id: 7, type: "theory", title: "محاضرة نظرية", img: "/g7.jpg" },
  { id: 8, type: "fitness", title: "تدريبات بدنية", img: "/g8.jpg" },
  { id: 9, type: "theory", title: "محاضرة نظرية", img: "/g9.jpg" },
];

export default function Gallery() {
  const [filter, setFilter] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);

  const filtered =
    filter === "all"
      ? images
      : images.filter((img) => img.type === filter);

  const currentIndex = filtered.findIndex(
    (img) => img.id === selectedImage?.id
  );

  const nextImage = () => {
    if (currentIndex < filtered.length - 1) {
      setSelectedImage(filtered[currentIndex + 1]);
    }
  };

  const prevImage = () => {
    if (currentIndex > 0) {
      setSelectedImage(filtered[currentIndex - 1]);
    }
  };

  return (
    <>
      <section
        className="w-full bg-[#f5f7fb] py-20"
        dir="rtl"
        id="gallery"
      >
        <div className="max-w-6xl mx-auto px-6 space-y-10 text-center">

          <h2 className="text-3xl font-bold text-[#0b1f3a]">
            معرض الأنشطة
          </h2>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3">

            <button
              onClick={() => setFilter("all")}
              className={`px-5 py-2 rounded-lg font-semibold transition ${
                filter === "all"
                  ? "bg-[#0b1f3a] text-white"
                  : "bg-white border hover:bg-[#0b1f3a] hover:text-white"
              }`}
            >
              الكل
            </button>

            <button
              onClick={() => setFilter("practical")}
              className={`px-5 py-2 rounded-lg font-semibold transition ${
                filter === "practical"
                  ? "bg-[#0b1f3a] text-white"
                  : "bg-white border hover:bg-[#0b1f3a] hover:text-white"
              }`}
            >
              أنشطة وفعاليات
            </button>

            <button
              onClick={() => setFilter("theory")}
              className={`px-5 py-2 rounded-lg font-semibold transition ${
                filter === "theory"
                  ? "bg-[#0b1f3a] text-white"
                  : "bg-white border hover:bg-[#0b1f3a] hover:text-white"
              }`}
            >
              محاضرات نظرية
            </button>

            <button
              onClick={() => setFilter("fitness")}
              className={`px-5 py-2 rounded-lg font-semibold transition ${
                filter === "fitness"
                  ? "bg-[#0b1f3a] text-white"
                  : "bg-white border hover:bg-[#0b1f3a] hover:text-white"
              }`}
            >
              تدريبات بدنية
            </button>

          </div>

          {/* Gallery */}
          <div className="grid md:grid-cols-3 gap-6">

            {filtered.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300 cursor-pointer"
                onClick={() => setSelectedImage(item)}
              >
                <div className="relative h-64 overflow-hidden">

                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover hover:scale-110 transition duration-500"
                  />

                </div>

                <div className="p-4 font-bold text-[#0b1f3a] text-lg">
                  {item.title}
                </div>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Popup */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-[9999] flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >

          {/* Close */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white text-3xl hover:text-red-500 transition"
          >
            <FaTimes />
          </button>

          {/* Previous */}
          {currentIndex > 0 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-5 md:left-10 text-white text-4xl hover:text-yellow-400 transition"
            >
              <FaChevronLeft />
            </button>
          )}

          {/* Next */}
          {currentIndex < filtered.length - 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-5 md:right-10 text-white text-4xl hover:text-yellow-400 transition"
            >
              <FaChevronRight />
            </button>
          )}

          {/* Image */}
          <div
            className="relative w-full max-w-5xl h-[75vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage.img}
              alt={selectedImage.title}
              fill
              className="object-contain rounded-xl"
            />
          </div>

          {/* Title */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-black/70 px-6 py-3 rounded-xl text-white text-xl font-bold">
            {selectedImage.title}
          </div>

        </div>
      )}
    </>
  );
}