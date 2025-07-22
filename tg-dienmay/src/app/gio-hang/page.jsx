'use client'

import { useEffect, useState } from "react";
import { db } from "@/firebase/firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { useRouter } from "next/navigation"; // Nếu muốn redirect về trang login

export default function Giohang() {
  const [cartItems, setCartItems] = useState([]);
  const [userId, setUserId] = useState(null);
  const router = useRouter();

  // Theo dõi đăng nhập
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        // Nếu chưa đăng nhập → có thể điều hướng về trang login hoặc hiển thị cảnh báo
        router.push("/dang-nhap"); // hoặc setUserId("guest")
      }
    });

    return () => unsubscribe();
  }, [router]);

  // Lấy danh sách giỏ hàng từ Firebase
  useEffect(() => {
    const fetchCart = async () => {
      if (!userId) return;

      const itemsCol = collection(db, "carts", userId, "items");
      const snapshot = await getDocs(itemsCol);
      const items = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setCartItems(items);
    };

    fetchCart();
  }, [userId]);

  const handleDeleteItem = async (productId) => {
    await deleteDoc(doc(db, "carts", userId, "items", productId));
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  const handleDeleteAll = async () => {
    const itemsCol = collection(db, "carts", userId, "items");
    const snapshot = await getDocs(itemsCol);
    const batch = snapshot.docs.map((doc) =>
      deleteDoc(doc.ref)
    );
    await Promise.all(batch);
    setCartItems([]);
  };

  if (!userId) return <div className="p-8 text-center text-gray-500">Đang kiểm tra đăng nhập...</div>;

  return (
    <div>
      <Navbar />
      <main>
        <div className="p-8 space-y-6">
          <div className="text-center">
            <h1 className="text-2xl font-bold">Giỏ hàng</h1>
          </div>

          <div className="flex justify-center">
            <table className="w-3/4 border border-gray-300 shadow-md rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-100 text-gray-700">
                  <th className="px-4 py-2 border">STT</th>
                  <th className="px-4 py-2 border">Hình Ảnh</th>
                  <th className="px-4 py-2 border">Tên Sản Phẩm</th>
                  <th className="px-4 py-2 border">Số Lượng</th>
                  <th className="px-4 py-2 border">Giá</th>
                  <th className="px-4 py-2 border">Hành động</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item, index) => (
                  <tr key={item.id} className="text-center border-t">
                    <td className="px-4 py-2 border">{index + 1}</td>
                    <td className="px-4 py-2 border">
                      <img
                        src={`/images/${item.imageUrl}` || "https://via.placeholder.com/50"}
                        alt="Hình ảnh"
                        className="w-12 h-12 object-cover mx-auto"
                      />
                    </td>
                    <td className="px-4 py-2 border">{item.name}</td>
                    <td className="px-4 py-2 border">{item.quantity}</td>
                    <td className="px-4 py-2 border">{(item.price * item.quantity).toLocaleString()}₫</td>
                    <td className="px-4 py-2 border">
                      <button
                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                        onClick={() => handleDeleteItem(item.id)}
                      >
                        Xóa
                      </button>
                    </td>
                  </tr>
                ))}
                {cartItems.length === 0 && (
                  <tr>
                    <td colSpan="6" className="text-center py-4 text-gray-500">
                      Giỏ hàng trống
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {cartItems.length > 0 && (
            <div className="flex justify-between w-3/4 mx-auto">
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded"
                onClick={() => router.push("/thanh-toan")}
              >
                Thanh toán
              </button>
              <span className="font-bold text-lg text-green-700">Tổng tiền:{` ${cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toLocaleString()}₫`}</span>
              <button
                className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded"
                onClick={handleDeleteAll}
              >
                Xóa tất cả
              </button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
