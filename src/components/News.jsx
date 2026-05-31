"use client";

import { useEffect, useState } from "react";
import { db } from "@/firebase/config";
import { collection, getDocs, orderBy, query } from "firebase/firestore";

export default function News() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const q = query(
          collection(db, "news"),
          orderBy("createdAt", "desc")
        );

        const snapshot = await getDocs(q);

        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setNews(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchNews();
  }, []);

  return (
    <section className="w-full bg-white py-20" dir="rtl">
      <div className="max-w-6xl mx-auto px-6 text-center space-y-10">

        <h2 className="text-3xl font-bold text-[#0b1f3a]">
          آخر الأخبار
        </h2>

        {news.length === 0 ? (
          <p className="text-gray-500">لا توجد أخبار حتى الآن</p>
        ) : (
          <div className="grid md:grid-cols-3 gap-6 text-right">

            {news.map((item) => (
              <div
                key={item.id}
                className="p-6 border rounded-xl shadow hover:shadow-lg transition"
              >

                {/* Image */}
                {item.image && (
                  <img
                    src={`/${item.image}`}
                    alt="news"
                    className="w-full h-40 object-cover rounded-lg mb-4"
                  />
                )}

                {/* Title */}
                <h3 className="font-bold text-lg text-[#0b1f3a]">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mt-3 text-sm">
                  {item.description}
                </p>

              </div>
            ))}

          </div>
        )}

      </div>
    </section>
  );
}