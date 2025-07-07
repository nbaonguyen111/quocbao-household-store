"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { db } from "@/firebase/firebase";
import { doc, getDoc } from "firebase/firestore";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [showAddressModal, setShowAddressModal] = useState(false);
  const [address, setAddress] = useState("Phường Bình Chiểu, TP. Thủ Đức, Hồ Chí Minh");
  const [tempAddress, setTempAddress] = useState(address);
  const [deliveryTime, setDeliveryTime] = useState("");

  useEffect(() => {
    async function fetchProduct() {
      const docRef = doc(db, "products", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setProduct({ id: docSnap.id, ...docSnap.data() });
      }
    }
    if (id) fetchProduct();
  }, [id]);

  useEffect(() => {
    // Cập nhật thời gian giao hàng thực tế
    const now = new Date();
    const start = new Date(now.getTime() + 2 * 60 * 60 * 1000); // +2h
    const end = new Date(now.getTime() + 4 * 60 * 60 * 1000);   // +4h
    const format = (d) => d.toLocaleTimeString("vi-VN", { hour: "2-digit", minute: "2-digit" });
    setDeliveryTime(`${format(start)} - ${format(end)} hôm nay (${now.getDate().toString().padStart(2, "0")}/${(now.getMonth() + 1).toString().padStart(2, "0")})`);
  }, []);

  if (!product) return <div>Đang tải...</div>;

  return (
    <div className="p-8 text-black bg-gray-100 min-h-screen flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
      <div className="flex gap-8 items-start mb-8">
        <div>
          <div className="border-2 border-blue-400 rounded-lg flex items-center justify-center w-80 h-80 mb-4 bg-white shadow">
            <img
              src={`/images/${product.imageUrl}`}
              alt={product.name}
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>
        <div className="bg-white border-2 border-orange-400 rounded-lg p-4 w-80 flex flex-col gap-4 shadow">
          {/* Số lượng */}
          <div>
            <span className="font-semibold">Số lượng:</span>
            <div className="flex items-center mt-2">
              <button
                className="border px-3 py-1 rounded-l text-lg"
                onClick={() => setQuantity(q => Math.max(1, q - 1))}
              >-</button>
              <span className="mx-4 font-semibold text-lg">{quantity}</span>
              <button
                className="border px-3 py-1 rounded-r text-lg"
                onClick={() => setQuantity(q => q + 1)}
              >+</button>
            </div>
          </div>
          {/* Nút mua */}
          <div className="flex gap-3">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-3 py-2 rounded flex-1">Thêm vào giỏ</button>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-3 py-2 rounded flex-1">Mua ngay</button>
          </div>
          {/* Thông tin vận chuyển */}
          <div className="bg-gray-50 rounded p-3 text-sm border">
            <div className="font-semibold mb-1">Thông tin vận chuyển</div>
            <div className="mb-1 flex items-center gap-2">
              Giao đến:{" "}
              <span className="font-medium">{address}</span>
              <button
                className="ml-2 px-2 py-1 border rounded text-xs text-blue-600 hover:bg-blue-50"
                onClick={() => {
                  setTempAddress(address);
                  setShowAddressModal(true);
                }}
              >
                Thay đổi
              </button>
            </div>
            <div className="mb-1">
              Giao hàng: <span className="text-green-600 font-semibold">Miễn phí</span> - Nhận hàng:{" "}
              <span className="font-medium">{deliveryTime}</span>
            </div>
          </div>
        </div>
        {/* Modal đổi địa chỉ */}
        {showAddressModal && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-[400px] shadow-lg relative">
              <button
                className="absolute top-2 right-3 text-gray-500 text-xl"
                onClick={() => setShowAddressModal(false)}
              >×</button>
              <h3 className="font-bold text-lg mb-2">Chọn địa chỉ nhận hàng</h3>
              <div className="mb-2 text-sm">
                Địa chỉ đang chọn: <span className="font-medium">{address}</span>
              </div>
              <div className="mb-3">
                <label className="block text-sm mb-1">Thay đổi địa chỉ khác</label>
                <input
                  className="border rounded px-2 py-1 w-full"
                  value={tempAddress}
                  onChange={e => setTempAddress(e.target.value)}
                  placeholder="Nhập địa chỉ mới..."
                />
              </div>
              <div className="flex justify-end gap-2">
                <button
                  className="px-3 py-1 rounded border"
                  onClick={() => setShowAddressModal(false)}
                >Huỷ</button>
                <button
                  className="px-3 py-1 rounded bg-blue-600 text-white"
                  onClick={() => {
                    setAddress(tempAddress);
                    setShowAddressModal(false);
                  }}
                >Xác nhận</button>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="bg-white p-6 rounded-lg shadow mt-2 w-[560px]">
        <h3 className="font-semibold text-lg mb-4 border-b pb-2">Thông tin sản phẩm</h3>
        <table className="w-full text-sm">
          <tbody>
            <tr>
              <td className="font-semibold py-2 pr-4 w-1/3">Tên sản phẩm:</td>
              <td className="py-2">{product.name}</td>
            </tr>
            <tr>
              <td className="font-semibold py-2 pr-4">Danh mục:</td>
              <td className="py-2">{product.category}</td>
            </tr>
            <tr>
              <td className="font-semibold py-2 pr-4">Mô tả:</td>
              <td className="py-2">{product.description}</td>
            </tr>
            <tr>
              <td className="font-semibold py-2 pr-4">Giá sản phẩm:</td>
              <td className="py-2 text-red-600 font-bold">{product.price?.toLocaleString()}₫</td>
            </tr>
            <tr>
              <td className="font-semibold py-2 pr-4">Nổi bật:</td>
              <td className="py-2">{product.featured ? "Có" : "Không"}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}