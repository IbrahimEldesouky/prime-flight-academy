"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { auth, db } from "@/firebase/config";
import { signOut } from "firebase/auth";

import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  doc,
  serverTimestamp,
} from "firebase/firestore";

export default function DashboardPage() {
  const router = useRouter();

  // 📰 News
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  // 👨‍🎓 Student (Add)
  const [name, setName] = useState("");
  const [nationalId, setNationalId] = useState("");
  const [password, setPassword] = useState("");
  const [batch, setBatch] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [phone, setPhone] = useState("");
  const [feesTotal, setFeesTotal] = useState("");
  const [feesPaid, setFeesPaid] = useState("");

  // 🔍 Search Student
  const [searchId, setSearchId] = useState("");
  const [foundStudent, setFoundStudent] = useState(null);
  const [newPayment, setNewPayment] = useState("");

  // 🔐 Protect
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) router.push("/login");
    });

    return () => unsubscribe();
  }, [router]);

  // 📰 Add News
  const handleAddNews = async (e) => {
    e.preventDefault();

    await addDoc(collection(db, "news"), {
      title,
      description,
      image,
      createdAt: serverTimestamp(),
    });

    setTitle("");
    setDescription("");
    setImage("");

    alert("تم إضافة الخبر ✈️");
  };

  // 👨‍🎓 Add Student
  const handleAddStudent = async (e) => {
    e.preventDefault();

    const total = Number(feesTotal || 0);
    const paid = Number(feesPaid || 0);

    await addDoc(collection(db, "students"), {
      name,
      nationalId,
      password,
      batch,
      birthDate,
      phone,
      feesTotal: total,
      feesPaid: paid,
      feesRemaining: total - paid,
      grades: "",
      certificates: "",
      createdAt: serverTimestamp(),
    });

    alert("تم إضافة الطالب");

    setName("");
    setNationalId("");
    setPassword("");
    setBatch("");
    setBirthDate("");
    setPhone("");
    setFeesTotal("");
    setFeesPaid("");
  };

  // 🔍 Search student
  const handleSearch = async () => {
    const snapshot = await getDocs(collection(db, "students"));

    const found = snapshot.docs
      .map((doc) => ({ id: doc.id, ...doc.data() }))
      .find((s) => s.nationalId === searchId);

    setFoundStudent(found || null);
  };

  // 💰 Add Payment
  const handleAddPayment = async () => {
    if (!foundStudent) return;

    const updatedPaid =
      Number(foundStudent.feesPaid || 0) +
      Number(newPayment || 0);

    const updatedRemaining =
      Number(foundStudent.feesTotal || 0) - updatedPaid;

    const studentRef = doc(db, "students", foundStudent.id);

    await updateDoc(studentRef, {
      feesPaid: updatedPaid,
      feesRemaining: updatedRemaining,
    });

    setFoundStudent({
      ...foundStudent,
      feesPaid: updatedPaid,
      feesRemaining: updatedRemaining,
    });

    setNewPayment("");
    alert("تم تسجيل الدفع 💰");
  };

  return (
    <div className="min-h-screen bg-[#f5f7fb] p-6" dir="rtl">

      {/* HEADER */}
      <div className="max-w-5xl mx-auto flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-[#0b1f3a]">
          لوحة التحكم
        </h1>

        <button
          onClick={() => signOut(auth)}
          className="bg-red-500 text-white px-4 py-2 rounded-lg"
        >
          تسجيل خروج
        </button>
      </div>

      <div className="max-w-5xl mx-auto space-y-10">

        {/* 📰 NEWS */}
        <div className="bg-white p-6 rounded-2xl shadow space-y-4">
          <h2 className="font-bold text-xl">إضافة خبر</h2>

          <form onSubmit={handleAddNews} className="space-y-4">

            <input className="w-full border p-3 rounded-lg"
              placeholder="عنوان الخبر"
              value={title}
              onChange={(e) => setTitle(e.target.value)} />

            <textarea className="w-full border p-3 rounded-lg h-32"
              placeholder="وصف الخبر"
              value={description}
              onChange={(e) => setDescription(e.target.value)} />

            <input className="w-full border p-3 rounded-lg"
              placeholder="الصورة"
              value={image}
              onChange={(e) => setImage(e.target.value)} />

            <button className="bg-[#0b1f3a] text-white px-6 py-3 rounded-lg">
              إضافة الخبر
            </button>
          </form>
        </div>

        {/* 👨‍🎓 ADD STUDENT */}
        <div className="bg-white p-6 rounded-2xl shadow space-y-4">

          <h2 className="font-bold text-xl">إضافة طالب</h2>

          <form onSubmit={handleAddStudent} className="space-y-4">

            <input className="w-full border p-3 rounded-lg"
              placeholder="اسم الطالب"
              value={name}
              onChange={(e) => setName(e.target.value)} />

            <input className="w-full border p-3 rounded-lg"
              placeholder="الرقم القومي"
              value={nationalId}
              onChange={(e) => setNationalId(e.target.value)} />

            <input className="w-full border p-3 rounded-lg"
              placeholder="كلمة المرور"
              value={password}
              onChange={(e) => setPassword(e.target.value)} />

            <input className="w-full border p-3 rounded-lg"
              placeholder="الدفعة"
              value={batch}
              onChange={(e) => setBatch(e.target.value)} />

            <input type="date" className="w-full border p-3 rounded-lg"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)} />

            <input className="w-full border p-3 rounded-lg"
              placeholder="رقم الهاتف"
              value={phone}
              onChange={(e) => setPhone(e.target.value)} />

            <input className="w-full border p-3 rounded-lg"
              placeholder="إجمالي المصروفات"
              value={feesTotal}
              onChange={(e) => setFeesTotal(e.target.value)} />

            <input className="w-full border p-3 rounded-lg"
              placeholder="المدفوع"
              value={feesPaid}
              onChange={(e) => setFeesPaid(e.target.value)} />

            <button className="bg-green-600 text-white px-6 py-3 rounded-lg">
              إضافة الطالب
            </button>

          </form>
        </div>

        {/* 🔍 SEARCH + PAYMENT */}
        <div className="bg-white p-6 rounded-2xl shadow space-y-4">

          <h2 className="font-bold text-xl">تعديل مصروفات طالب</h2>

          <div className="flex gap-2">
            <input
              className="w-full border p-3 rounded-lg"
              placeholder="ابحث بالرقم القومي"
              value={searchId}
              onChange={(e) => setSearchId(e.target.value)}
            />

            <button
              onClick={handleSearch}
              className="bg-blue-600 text-white px-4 rounded-lg"
            >
              بحث
            </button>
          </div>

          {foundStudent && (
            <div className="space-y-3 mt-4">

              <p>الاسم: {foundStudent.name}</p>
              <p>إجمالي: {foundStudent.feesTotal}</p>
              <p>مدفوع: {foundStudent.feesPaid}</p>
              <p>متبقي: {foundStudent.feesRemaining}</p>

              <div className="flex gap-2">
                <input
                  className="w-full border p-3 rounded-lg"
                  placeholder="المبلغ المدفوع الجديد"
                  value={newPayment}
                  onChange={(e) => setNewPayment(e.target.value)}
                />

                <button
                  onClick={handleAddPayment}
                  className="bg-green-600 text-white px-4 rounded-lg"
                >
                  إضافة
                </button>
              </div>

            </div>
          )}

        </div>

      </div>
    </div>
  );
}