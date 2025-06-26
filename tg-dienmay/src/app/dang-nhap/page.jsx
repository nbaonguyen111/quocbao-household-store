
"use client";
import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "@/firebase/firebase";
import { getDoc, doc } from "firebase/firestore";
import {useRouter} from "next/navigation";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [userRole, setUserRole] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const userData = docSnap.data();
        setUserRole(userData.role || "user");
        if (userData.role === "admin") {
          router.push ("/admin");
        } else {
          console.log("Đăng nhập thành công, role:", userData.role);
          router.push("/");
        }
      } else {
        console.log("Không tìm thấy thông tin người dùng trong Firestore");
      }
    } catch (err) {
      console.error("Lỗi đăng nhập:", err.message);
      setError("Email hoặc mật khẩu không đúng.");
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 border rounded mt-8">
      <h1 className="text-2xl font-bold mb-4 text-center">Đăng nhập</h1>
      <form onSubmit={handleLogin} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Mật khẩu"
          className="w-full border p-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-red-500 text-white py-2 px-4 rounded w-full"
        >
          Đăng nhập
        </button>
        <span>Bạn chưa có tài khoản? <a href="/dang-ky" className="text-blue-500">Đăng ký</a></span>
      </form>
      {error && <p className="text-red-500 mt-2">{error}</p>}
      {userRole && (
        <p className="text-green-600 mt-2">Bạn đang đăng nhập với vai trò: <strong>{userRole}</strong></p>
      )}
    </div>
  );
}
