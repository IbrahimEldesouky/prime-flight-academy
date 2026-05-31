import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="w-full py-20 bg-white" dir="rtl" id="about">

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        {/* TEXT */}
        <div className="space-y-5">

          <h2 className="text-3xl md:text-4xl font-bold text-[#0b1f3a]">
            من نحن ✈️
          </h2>

          <p className="text-gray-600 leading-8">
            برايم فلايت أكاديمي هي منصة تدريب متخصصة تهدف إلى إعداد جيل
            احترافي للعمل في مجال الطيران وخدمات المطارات، من خلال برامج
            تدريب عملية ونظرية على أعلى مستوى.
          </p>

          <p className="text-gray-600 leading-8">
            نؤمن بأن التدريب الحقيقي هو طريق النجاح، لذلك نوفر بيئة تعليمية
            متكاملة تجمع بين الخبرة العملية والتقنيات الحديثة في التعليم.
          </p>

          {/* Highlights */}
          <div className="grid grid-cols-2 gap-4 pt-4">

            <div className="bg-[#f5f7fb] p-4 rounded-xl">
              <p className="font-bold text-[#0b1f3a]">تدريب عملي</p>
              <p className="text-sm text-gray-500">داخل بيئة حقيقية</p>
            </div>

            <div className="bg-[#f5f7fb] p-4 rounded-xl">
              <p className="font-bold text-[#0b1f3a]">مدربين محترفين</p>
              <p className="text-sm text-gray-500">خبرة في المجال</p>
            </div>

            <div className="bg-[#f5f7fb] p-4 rounded-xl">
              <p className="font-bold text-[#0b1f3a]">شهادات معتمدة</p>
              <p className="text-sm text-gray-500">بعد التخرج</p>
            </div>

            <div className="bg-[#f5f7fb] p-4 rounded-xl">
              <p className="font-bold text-[#0b1f3a]">مستقبل وظيفي</p>
              <p className="text-sm text-gray-500">فرص حقيقية</p>
            </div>

          </div>

        </div>

        {/* IMAGE */}
        <div className="relative">

          <div className="rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/logo.png"
              alt="about"
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Floating badge */}
          <div className="absolute -bottom-5 -left-5 bg-[#0b1f3a] text-white px-5 py-3 rounded-xl shadow-lg">
            🎓 أكاديمية معتمدة
          </div>

        </div>

      </div>

    </section>
  );
}