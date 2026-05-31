"use client";

import { useState } from "react";
import Image from "next/image";

const departments = [
  {
    name: "الضيافة الجوية",
    image: "/cabin-crew.png",
    duration: "سنتين",

    description:
      "برنامج الضيافة الجوية يؤهلك للعمل كمضيف أو مضيفة طيران وفق أعلى معايير شركات الطيران العالمية.",

    skills: [
      "خدمة الركاب",
      "مهارات التواصل",
      "إجراءات السلامة",
      "الإتيكيت المهني",
    ],

    jobs: [
      "مضيف جوي",
      "مضيفة جوية",
      "خدمة العملاء بالمطارات",
      "خدمات كبار الزوار",
    ],
  },

  {
    name: "ضباط الحركة الجوية",
    image: "/air-traffic.png",
    duration: "سنتين",

    description:
      "برنامج متخصص لتأهيل الكوادر للعمل في إدارة وتنظيم حركة الطائرات داخل المطارات وشركات الطيران.",

    skills: [
      "إدارة الحركة الجوية",
      "قوانين الطيران",
      "الاتصالات الجوية",
      "التعامل مع أنظمة المطارات",
    ],

    jobs: [
      "ضابط حركة جوية",
      "موظف عمليات",
      "منسق رحلات",
      "موظف تشغيل بالمطار",
    ],
  },
];

export default function Departments() {
  const [selectedDept, setSelectedDept] = useState(null);

  return (
    <>
      <section className="w-full bg-white py-20" dir="rtl" id="departments">
        <div className="max-w-6xl mx-auto px-6 text-center space-y-10">

          <h2 className="text-3xl font-bold text-[#0b1f3a]">
            أقسام الأكاديمية
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            {departments.map((dept) => (
              <div
                key={dept.name}
                onClick={() => setSelectedDept(dept)}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 cursor-pointer"
              >

                <div className="relative h-64">

                  <Image
                    src={dept.image}
                    alt={dept.name}
                    fill
                    className="object-cover"
                  />

                </div>

                <div className="p-5">

                  <h3 className="text-xl font-bold text-[#0b1f3a]">
                    {dept.name}
                  </h3>

                  <p className="text-gray-500 mt-2">
                    اضغط لعرض التفاصيل
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Modal */}
      {selectedDept && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">

          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">

            {/* Image */}
            <div className="relative h-80 w-full">

              <Image
                src={selectedDept.image}
                alt={selectedDept.name}
                fill
                className="object-cover"
              />

            </div>

            {/* Content */}
            <div className="p-8 space-y-6" dir="rtl">

              <h2 className="text-3xl font-bold text-[#0b1f3a]">
                {selectedDept.name}
              </h2>

              <p className="text-gray-600 leading-8">
                {selectedDept.description}
              </p>

              <div className="bg-[#f5f7fb] p-4 rounded-xl">
                <strong>مدة الدراسة:</strong> {selectedDept.duration}
              </div>

              <div>
                <h3 className="font-bold text-xl mb-3 text-[#0b1f3a]">
                  المهارات المكتسبة
                </h3>

                <div className="grid md:grid-cols-2 gap-3">

                  {selectedDept.skills.map((skill, index) => (
                    <div
                      key={index}
                      className="bg-[#f5f7fb] p-3 rounded-lg"
                    >
                      ✓ {skill}
                    </div>
                  ))}

                </div>
              </div>

              <div>
                <h3 className="font-bold text-xl mb-3 text-[#0b1f3a]">
                  فرص العمل
                </h3>

                <div className="grid md:grid-cols-2 gap-3">

                  {selectedDept.jobs.map((job, index) => (
                    <div
                      key={index}
                      className="bg-[#f5f7fb] p-3 rounded-lg"
                    >
                      ✈️ {job}
                    </div>
                  ))}

                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-4">

                <a
                  href="https://forms.gle/6RfTgggUg2AD7dbx6"
                  className="bg-[#f5c542] text-black px-6 py-3 rounded-lg font-bold"
                >
                  التقديم الآن
                </a>

                <button
                  onClick={() => setSelectedDept(null)}
                  className="bg-gray-200 px-6 py-3 rounded-lg"
                >
                  إغلاق
                </button>

              </div>

            </div>

          </div>

        </div>
      )}
    </>
  );
}