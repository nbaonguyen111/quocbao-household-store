"use client";
import { useEffect, useState } from "react";
import { auth, db } from "@/firebase/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { onAuthStateChanged } from "firebase/auth";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import OrderHistory from "@/components/ui/orderhistory";

export default function User() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (!currentUser) {
        console.log("Chưa đăng nhập");
        return;
      }
  
      try {
        const docRef = doc(db, "users", currentUser.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = { id: docSnap.id, ...docSnap.data() };
          setUser(data);
          setName(data.name || "");
          setPhone(data.phone || "");
          setEmail(data.email || "");
  
          console.log("✅ User data từ Firestore:", data);
        } else {
          console.log("❌ Không tìm thấy user trong Firestore");
        }
      } catch (error) {
        console.error("🔥 Lỗi khi lấy dữ liệu người dùng:", error);
      }
    });
  
    return () => unsubscribe(); // cleanup listener
  }, []);
  
  

  const handleCancel = () => {
    if (user) {
      setName(user.name);
      setPhone(user.phone);
      setEmail(user.email);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user?.id) {
      alert("Không tìm thấy người dùng!");
      return;
    }

    setLoading(true);

    try {
      const userRef = doc(db, "users", user.id);
      await updateDoc(userRef, {
        name: name.trim(),
        phone: phone.trim(),
        email: email.trim(),
      });

      alert("Cập nhật thông tin thành công!");
    } catch (error) {
      console.error("Lỗi khi cập nhật:", error);
      alert("Có lỗi xảy ra khi cập nhật!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar />
      <main className="p-4">
        <div className="flex flex-col item-between">
          <h1 className="text-2xl font-bold text-center">Quản lý tài khoản</h1>
          <div className="flex justify-center bg-gray-200 p-4 text-black">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 w-full max-w-md bg-white p-6 rounded-2xl shadow-md"
            >
              <h2 className="text-2xl font-bold text-center text-gray-800">
                Thông tin tài khoản
              </h2>

              <div>
                <label htmlFor="name" className="block mb-1 text-sm font-medium text-gray-700">
                  Tài khoản
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:outline-none px-4 py-2 rounded-md text-gray-800"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="phone" className="block mb-1 text-sm font-medium text-gray-700">
                  Số điện thoại
                </label>
                <input
                  type="text"
                  id="phone"
                  className="w-full border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:outline-none px-4 py-2 rounded-md text-gray-800"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:outline-none px-4 py-2 rounded-md text-gray-800"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="flex border-t pt-4 justify-between">
                <button
                  type="submit"
                  disabled={loading}
                  className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800"
                >
                  <span className="relative px-5 py-2.5 transition-all bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                    {loading ? "Đang cập nhật..." : "Cập nhật thông tin"}
                  </span>
                </button>
                <button
                  type="button"
                  onClick={handleCancel}
                  className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
                >
                  <span className="relative px-5 py-2.5 transition-all bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                    {loading ? "Đang hủy" : "Hủy"}
                  </span>
                </button>
              </div>
              <Dialog>
                <DialogTrigger asChild>
                  <button className="text-gray-700 hover:text-gray-900 underline">
                    Xem lịch sử đơn hàng
                  </button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Lịch sử đơn hàng</DialogTitle>
                    <DialogDescription>
                      Dưới đây là lịch sử đơn hàng của bạn
                    </DialogDescription>
                  </DialogHeader>     
                  {user?.id && <OrderHistory userId={user.id} />}
                </DialogContent>
              </Dialog>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
