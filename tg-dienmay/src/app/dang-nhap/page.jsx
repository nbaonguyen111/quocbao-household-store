
"use client";
import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "@/firebase/firebase";
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import { getDoc, doc } from "firebase/firestore";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [userRole, setUserRole] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      let userDoc = await getDoc(doc(db, "users", user.uid));
      let userData = userDoc.data();
      if (!userData) {
        userDoc = await getDoc(doc(db, "adminUsers", user.uid));
        userData = userDoc.data();
      }

      if (userData) {
        if (userData.status === 'locked' && userData.role !== 'superadmin' && userData.role !== 'admin' && userData.role !== 'moderator') {
          setError("Tài khoản của bạn đã bị khóa. Vui lòng liên hệ quản trị viên.");
          return;
        }

        const role = userData.role || "user";
        setUserRole(role);
        if (role === "superadmin" || role === "admin" || role === "moderator") {
          console.log("Đăng nhập admin thành công, role:", role);
          router.push("/admin");
        } else if (role === "admin") {
          console.log("Đăng nhập admin thành công, role:", role);
          router.push("/admin");
        } else {
          console.log("Đăng nhập thành công, role:", role);
          router.push("/");
        }
      } else {
        console.log("Không tìm thấy thông tin người dùng trong Firestore");
        setError("Tài khoản không tồn tại trong hệ thống.");
      }
    } catch (err) {
      console.error("Lỗi đăng nhập:", err.message);
      if (err.code === 'auth/user-not-found') {
        setError("Email không tồn tại trong hệ thống.");
      } else if (err.code === 'auth/wrong-password') {
        setError("Mật khẩu không đúng.");
      } else if (err.code === 'auth/too-many-requests') {
        setError("Quá nhiều lần đăng nhập sai. Vui lòng thử lại sau.");
      } else {
        setError("Email hoặc mật khẩu không đúng.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar />
      <main>
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
              disabled={loading}
            />
            <input
              type="password"
              placeholder="Mật khẩu"
              className="w-full border p-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={loading}
            />
            <button
              type="submit"
              className="bg-red-500 text-white py-2 px-4 rounded w-full hover:bg-red-600 disabled:opacity-50"
              disabled={loading}
            >
              {loading ? "Đang đăng nhập..." : "Đăng nhập"}
            </button>
            <span>Bạn chưa có tài khoản? <a href="/dang-ky" className="text-blue-500">Đăng ký</a></span>
          </form>
          {error && <p className="text-red-500 mt-2">{error}</p>}
          {userRole && (
            <p className="text-green-600 mt-2">
              Bạn đang đăng nhập với vai trò: <strong>
                {userRole === 'superadmin' ? 'Super Admin' :
                  userRole === 'admin' ? 'Admin' :
                    userRole === 'moderator' ? 'Moderator' : userRole}
              </strong>
            </p>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
