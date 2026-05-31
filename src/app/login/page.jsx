"use client";

import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase/config";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);

      alert("تم تسجيل الدخول بنجاح ✈️");

      router.push("/dashboard");
    } catch (error) {
      console.log(error);
      alert("بيانات الدخول غير صحيحة");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f5f7fb]" dir="rtl">

      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-2xl shadow w-full max-w-md space-y-6"
      >

        <h1 className="text-2xl font-bold text-[#0b1f3a] text-center">
          تسجيل دخول الأدمن
        </h1>

        <input
          type="email"
          placeholder="الإيميل"
          className="w-full border p-3 rounded-lg"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="كلمة المرور"
          className="w-full border p-3 rounded-lg"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="w-full bg-[#0b1f3a] text-white p-3 rounded-lg font-bold"
        >
          دخول
        </button>

      </form>

    </div>
  );
}