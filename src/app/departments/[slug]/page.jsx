export default function DepartmentPage({ params }) {
  const { slug } = params;

  const departmentsData = {
    "cabin-crew": {
      title: "الضيافة الجوية",
      description:
        "برنامج الضيافة الجوية يؤهلك للعمل كمضيف/مضيفة طيران وفق أعلى معايير شركات الطيران العالمية.",
      duration: "3 شهور",
      skills: [
        "خدمة الركاب",
        "مهارات التواصل",
        "إجراءات السلامة",
        "إتيكيت الطيران",
      ],
    },

    "air-traffic": {
      title: "ضباط الحركة الجوية",
      description:
        "تأهيل شامل للعمل في مجال إدارة وتنظيم حركة الطائرات في المطارات.",
      duration: "4 شهور",
      skills: [
        "إدارة الحركة الجوية",
        "التعامل مع برج المراقبة",
        "قوانين الطيران",
        "اتصالات الطيران",
      ],
    },

    "interview-prep": {
      title: "تأهيل مقابلات الطيران",
      description:
        "برنامج متخصص لتجهيز الطلاب لاجتياز مقابلات شركات الطيران بثقة واحترافية.",
      duration: "شهرين",
      skills: [
        "مهارات المقابلة الشخصية",
        "اللغة الإنجليزية للطيران",
        "الثقة بالنفس",
        "الـ Grooming",
      ],
    },
  };

  const dept = departmentsData[slug];

  if (!dept) {
    return <div className="p-10">القسم غير موجود</div>;
  }

  return (
    <div className="bg-white" dir="rtl">

      {/* Hero Section */}
      <div className="bg-[#0b1f3a] text-white py-20 text-center space-y-4">
        <h1 className="text-4xl font-bold">{dept.title}</h1>
        <p className="text-gray-300">{dept.description}</p>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto p-6 space-y-10">

        {/* Info */}
        <div className="bg-[#f5f7fb] p-6 rounded-xl">
          <h2 className="text-xl font-bold text-[#0b1f3a]">
            تفاصيل البرنامج
          </h2>

          <p className="mt-2">مدة الدراسة: {dept.duration}</p>
        </div>

        {/* Skills */}
        <div>
          <h2 className="text-xl font-bold text-[#0b1f3a] mb-4">
            المهارات المكتسبة
          </h2>

          <ul className="grid md:grid-cols-2 gap-4">
            {dept.skills.map((skill, i) => (
              <li
                key={i}
                className="bg-white border p-4 rounded-lg shadow"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>

        {/* Apply Button */}
        <div className="text-center">
          <a
            href="/apply"
            className="bg-[#f5c542] text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-400 transition"
          >
            التقديم على هذا القسم
          </a>
        </div>

      </div>
    </div>
  );
}