import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0b1f3a] text-white pt-16 pb-6" dir="rtl" id="footer">

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">

        {/* Logo & About */}
        <div className="space-y-4">

          <h2 className="text-2xl font-bold text-[#f5c542]">
            برايم فلايت ✈️
          </h2>

          <p className="text-gray-300 leading-7">
            أكاديمية متخصصة في تدريب وتأهيل الطلاب للعمل في مجال الطيران
            وخدمات المطارات وفق أعلى معايير الجودة.
          </p>

        </div>

        {/* Quick Links */}
        <div className="space-y-4">

          <h3 className="text-xl font-bold text-[#f5c542]">
            روابط سريعة
          </h3>

          <ul className="space-y-2 text-gray-300">

            <li><a href="#home">الرئيسية</a></li>
            <li><a href="#about">من نحن</a></li>
            <li><a href="#vision">رؤيتنا</a></li>
          <li><a href="#departments">الأقسام</a></li>
          <li><a href="#gallery">الانشطة والتدريبات</a></li>

          </ul>

        </div>

        {/* Contact */}
        <div className="space-y-4">

          <h3 className="text-xl font-bold text-[#f5c542]">
            تواصل معنا
          </h3>

          <p className="text-gray-300">
            📞 01130816071
          </p>

          <p className="text-gray-300">
            📍 قنا - شارع الجميل بجوار شاورما ابو رفيق
          </p>

          <a
            href="https://wa.me/201130816071"
            target="_blank"
            className="inline-block mt-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition"
          >
            واتساب مباشر
          </a>

        </div>

      </div>

      {/* Bottom Bar */}
      <div className="mt-12 border-t border-gray-700 pt-4 text-center text-gray-400 text-sm">

        © {new Date().getFullYear()} برايم فلايت أكاديمي - جميع الحقوق محفوظة

      </div>

    </footer>
  );
}