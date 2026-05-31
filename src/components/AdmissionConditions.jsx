import {
  FaGraduationCap,
  FaUserClock,
  FaHeartbeat,
  FaGavel,
  FaEye,
  FaUserSlash,
} from "react-icons/fa";

export default function AdmissionConditions() {
  const conditions = [
    {
      text:
        "الأكاديمية تقبل الحاصلين على الثانوية العامة، الأزهرية، الدبلومات بمختلف أنواعها، وثانوي السياحة والفنادق من 50% أو أكتر دون التقيد بسنة التخرج.",
      icon: <FaGraduationCap />,
      type: "education",
    },
    {
      text: "بنقبل طلاب الشهادة الإعدادية.",
      icon: <FaGraduationCap />,
      type: "education",
    },
    {
      text: "السن لضباط الحركة: 18 - 30 سنة.",
      icon: <FaUserClock />,
      type: "age",
    },
    {
      text: "عدم وجود أمراض مزمنة (قلب، سكر، ضغط).",
      icon: <FaHeartbeat />,
      type: "medical",
    },
    {
      text: "عدم وجود قضايا جنائية.",
      icon: <FaGavel />,
      type: "legal",
    },
    {
      text: "عدم وجود تشوهات بالكف واليدين.",
      icon: <FaUserSlash />,
      type: "medical",
    },
    {
      text: "قوة نظر جيدة (ضعف النظر بعد النظارة غير مقبول).",
      icon: <FaEye />,
      type: "medical",
    },
  ];

  // 🎨 اللون حسب النوع
  const typeStyles = {
    education: "border-blue-500 text-blue-700 bg-blue-50",
    medical: "border-red-500 text-red-700 bg-red-50",
    legal: "border-gray-500 text-gray-700 bg-gray-100",
    age: "border-yellow-500 text-yellow-700 bg-yellow-50",
  };

  return (
    <section className="w-full py-20 bg-white" dir="rtl" id="admission-conditions">

      <div className="max-w-6xl mx-auto px-6 space-y-10">

        {/* Title */}
        <div className="text-center space-y-3">

          <h2 className="text-3xl md:text-4xl font-bold text-[#0b1f3a]">
            شروط القبول في الأكاديمية 📌
          </h2>

          <p className="text-gray-500">
            تأكد من استيفاء جميع الشروط قبل التقديم
          </p>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6">

          {conditions.map((item, index) => (
            <div
              key={index}
              className={`flex gap-4 p-5 rounded-xl shadow-sm hover:shadow-md transition border-r-4 ${typeStyles[item.type]}`}
            >

              {/* Icon */}
              <div className="text-2xl mt-1">
                {item.icon}
              </div>

              {/* Text */}
              <p className="leading-7">
                {item.text}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}