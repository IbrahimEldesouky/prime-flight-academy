"use client";

import { useState } from "react";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappMessage = `
اسم: ${form.name}
رقم: ${form.phone}
رسالة: ${form.message}
    `;

    const phoneNumber = "201130816071"; // غيره برقم الأكاديمية

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(url, "_blank");
  };

  return (
    <section className="w-full py-20 bg-white" dir="rtl" id="contact">

      <div className="max-w-6xl mx-auto px-6 space-y-12">

        {/* Title */}
        <div className="text-center space-y-3">

          <h2 className="text-3xl md:text-4xl font-bold text-[#0b1f3a]">
            تواصل معنا 📞
          </h2>

          <p className="text-gray-500">
            نحن هنا للإجابة على جميع استفساراتك
          </p>

        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* Contact Info */}
          <div className="space-y-6">

            <div className="bg-[#f5f7fb] p-5 rounded-xl">
              <h3 className="font-bold text-[#0b1f3a]">📱 الهاتف</h3>
              <p>01130816071</p>
            </div>

            <div className="bg-[#f5f7fb] p-5 rounded-xl">
              <h3 className="font-bold text-[#0b1f3a]">💬 واتساب</h3>
              <a
                href="https://wa.me/201130816071"
                target="_blank"
                className="text-green-600 font-bold"
              >
                تواصل مباشر عبر واتساب
              </a>
            </div>

            <div className="bg-[#f5f7fb] p-5 rounded-xl">
              <h3 className="font-bold text-[#0b1f3a]">📍 الموقع</h3>
              <p>قنا - شارع الجميل بجوار شاورما ابو رفيق</p>
            </div>

            {/* Map */}
            <div className="rounded-xl overflow-hidden shadow">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.114875782624!2d32.726879125296904!3d26.160387992017494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x144eb78f1088800b%3A0xfd629c5f121572e8!2z2LTYp9ix2Lkg2KfZhNis2YXZh9mI2LHZitmH!5e0!3m2!1sar!2sus!4v1780265617478!5m2!1sar!2sus"
                className="w-full h-60"
                loading="lazy"
              ></iframe>
            </div>

          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-4 bg-[#f5f7fb] p-6 rounded-xl shadow"
          >

            <input
              type="text"
              name="name"
              placeholder="الاسم"
              value={form.name}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border"
              required
            />

            <input
              type="text"
              name="phone"
              placeholder="رقم الهاتف"
              value={form.phone}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border"
              required
            />

            <textarea
              name="message"
              placeholder="اكتب رسالتك"
              value={form.message}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border h-32"
              required
            />

            <button
              type="submit"
              className="w-full bg-[#25D366] text-white font-bold p-3 rounded-lg hover:bg-green-600 transition"
            >
              إرسال عبر واتساب
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}