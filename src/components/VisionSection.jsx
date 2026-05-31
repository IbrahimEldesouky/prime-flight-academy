import { FaEye, FaBullseye, FaLightbulb } from "react-icons/fa";

export default function VisionSection() {
  return (
    <section
      className="w-full py-20 bg-white"
      dir="rtl"
      id="vision"
    >
      <div className="max-w-6xl mx-auto px-6 text-center space-y-12">

        {/* Title */}
        <div className="space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0b1f3a]">
            رؤية الأكاديمية 🎯
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto leading-8">
            نهدف إلى بناء جيل محترف قادر على المنافسة في سوق العمل المحلي
            والعالمي من خلال تدريب عالي الجودة ومهارات عملية حقيقية.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* Vision */}
          <div className="bg-blue-50 border-t-4 border-blue-500 p-8 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 space-y-4">

            <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-blue-100">
              <FaEye className="text-3xl text-blue-600" />
            </div>

            <h3 className="text-2xl font-bold text-blue-800">
              رؤيتنا
            </h3>

            <p className="text-gray-700 leading-8">
              أن نكون من الرواد في مجال التدريب الجوي وتأهيل الشباب
              للعمل في كبرى شركات الطيران والمطارات، من خلال تقديم
              برامج تدريبية تواكب متطلبات سوق العمل الحديثة.
            </p>

          </div>

          {/* Mission */}
          <div className="bg-yellow-50 border-t-4 border-yellow-500 p-8 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 space-y-4">

            <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-yellow-100">
              <FaBullseye className="text-3xl text-yellow-600" />
            </div>

            <h3 className="text-2xl font-bold text-yellow-700">
              رسالتنا
            </h3>

            <p className="text-gray-700 leading-8">
              تقديم تدريب عملي ونظري عالي الجودة يعتمد على أحدث
              أساليب التعليم والتكنولوجيا لإعداد كوادر مؤهلة
              للعمل في مختلف مجالات الطيران والمطارات.
            </p>

          </div>

          {/* Goals */}
          <div className="bg-green-50 border-t-4 border-green-500 p-8 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 space-y-4">

            <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-green-100">
              <FaLightbulb className="text-3xl text-green-600" />
            </div>

            <h3 className="text-2xl font-bold text-green-700">
              أهدافنا
            </h3>

            <p className="text-gray-700 leading-8">
              تمكين الطلاب من اكتساب مهارات حقيقية تؤهلهم لسوق العمل،
              وتنمية قدراتهم المهنية والشخصية لتحقيق فرص وظيفية
              متميزة داخل وخارج مصر.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}