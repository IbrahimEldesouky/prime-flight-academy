"use client";

import { useState } from "react";
import { db } from "@/firebase/config";
import { collection, getDocs } from "firebase/firestore";

export default function StudentPage() {
  const [nationalId, setNationalId] = useState("");
  const [password, setPassword] = useState("");
  const [student, setStudent] = useState(null);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    const snapshot = await getDocs(collection(db, "students"));

    const found = snapshot.docs
      .map((doc) => ({ id: doc.id, ...doc.data() }))
      .find(
        (s) =>
          s.nationalId === nationalId &&
          s.password === password
      );

    if (!found) {
      setError("البيانات غير صحيحة");
      return;
    }

    setStudent(found);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#eef2f7] to-[#f5f7fb] p-6" dir="rtl">

      {!student ? (
        <div className="max-w-md mx-auto bg-white p-8 rounded-2xl shadow-lg border border-gray-100">

          <h1 className="text-2xl font-bold text-[#0b1f3a] mb-6 text-center">
            بوابة الطالب
          </h1>

          <form onSubmit={handleLogin} className="space-y-4">

            <input
              type="text"
              placeholder="الرقم القومي"
              value={nationalId}
              onChange={(e) => setNationalId(e.target.value)}
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-200 outline-none"
            />

            <input
              type="password"
              placeholder="كلمة المرور"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-200 outline-none"
            />

            {error && (
              <p className="text-red-500 text-sm">{error}</p>
            )}

            <button className="w-full bg-[#0b1f3a] hover:bg-[#132a4d] transition text-white p-3 rounded-lg font-bold">
              دخول
            </button>

          </form>

        </div>
      ) : (
        <>
          {/* HEADER */}
          <div className="max-w-5xl mx-auto mb-6 p-6 rounded-2xl text-white shadow-lg bg-gradient-to-r from-[#0b1f3a] to-[#1f3d66]">

            <h1 className="text-2xl font-bold">
              👋 مرحبًا {student.name}
            </h1>

            <p className="text-sm opacity-80 mt-1">
              بوابة الطالب - أكاديمية برايم فلايت
            </p>

          </div>

          {/* CARDS */}
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">

            {/* 👤 PROFILE */}
            <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-blue-500 hover:shadow-xl transition">

              <h2 className="font-bold text-lg text-[#0b1f3a] mb-3">
                👤 البيانات الشخصية
              </h2>

              <div className="space-y-2 text-sm text-gray-700">
                <p>الاسم: <b>{student.name}</b></p>
                <p>الرقم القومي: <b>{student.nationalId}</b></p>
                <p>الهاتف: <b>{student.phone}</b></p>
                <p>تاريخ الميلاد: <b>{student.birthDate}</b></p>
              </div>

            </div>

            {/* 📚 ACADEMIC */}
            <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-purple-500 hover:shadow-xl transition">

              <h2 className="font-bold text-lg text-[#0b1f3a] mb-3">
                📚 البيانات الدراسية
              </h2>

              <div className="space-y-2 text-sm text-gray-700">
                <p>الدفعة: <b>{student.batch}</b></p>

                <div className="p-3 bg-purple-50 rounded-lg">
                  <p className="text-xs text-gray-500">الدرجات</p>
                  <p className="font-bold">
                    {student.grades || "لم تُضاف بعد"}
                  </p>
                </div>
              </div>

            </div>

            {/* 💰 FINANCE */}
            <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-green-500 hover:shadow-xl transition">

              <h2 className="font-bold text-lg text-[#0b1f3a] mb-3">
                💰 المصروفات
              </h2>

              <div className="space-y-3 text-sm text-gray-700">

                <div className="p-3 bg-blue-50 rounded-lg">
                  <p className="text-xs text-gray-500">إجمالي</p>
                  <p className="font-bold">{student.feesTotal || 0} جنيه</p>
                </div>

                <div className="p-3 bg-green-50 rounded-lg">
                  <p className="text-xs text-gray-500">مدفوع</p>
                  <p className="font-bold">{student.feesPaid || 0} جنيه</p>
                </div>

                <div className="p-3 bg-red-50 rounded-lg">
                  <p className="text-xs text-gray-500">المتبقي</p>
                  <p className="font-bold">
                    {(student.feesTotal || 0) - (student.feesPaid || 0)} جنيه
                  </p>
                </div>

              </div>

            </div>

          </div>

        </>
      )}

    </div>
  );
}