"use client";
import React, { useEffect, useState, useCallback } from "react";
import { db } from "../firebase";
import { collection, getDocs, query, limit } from "firebase/firestore";

export default function TrangChu() {
  const [products, setProducts] = useState([]);
  const smallBanners = [
    "/images/bannernho1.png",
    "/images/bannernho2.png",
    "/images/bannernho3.png",
    "/images/bannernho4.png",
    "/images/bannernho5.png",
    "/images/bannernho6.png"
  ];
  // index của banner đầu tiên trên màn hình (hiển thị 2 banner / lần)
  const [smallBannerIdx, setSmallBannerIdx] = useState(0);

  /* Hàm chuyển slide */
  const nextSlide = useCallback(() => {
    setSmallBannerIdx((prev) => (prev + 2) % smallBanners.length);
  }, []);

  const prevSlide = () => {
    // + smallBanners.length để tránh số âm rồi mod
    setSmallBannerIdx((prev) => (prev - 2 + smallBanners.length) % smallBanners.length);
  };

  /* Tự động chuyển mỗi 3 s */
  useEffect(() => {
    const timer = setInterval(nextSlide, 3000);
    return () => clearInterval(timer);
  }, [nextSlide]);


  useEffect(() => {
    async function fetchProducts() {
      const q = query(collection(db, "sanphamnoibat"), limit(4));
      const querySnapshot = await getDocs(q);
      const data = [];
      querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
      });
      setProducts(data);
    }
    fetchProducts();
  }, []);

  return (
    <div>
      <section className="banner w-full mb-4 flex justify-center">
        <img
          src="/images/bannerlonpng.png"
          alt="Banner"
          className="w-full max-h-72 object-contain rounded-lg shadow"
        />
      </section>

      <section className="danh-muc bg-white py-4 rounded-lg shadow mb-6">
        <div className="flex justify-around items-end">
          {/* Máy lạnh */}
          <button className="flex flex-col items-center px-4 py-2 bg-gray-100 rounded-lg hover:bg-blue-100 transition cursor-pointer border border-transparent hover:border-blue-400 focus:outline-none">
            <div className="relative">
              <img src="/images/maylanh.png" alt="Máy lạnh" className="h-12 w-auto mb-1" />
              <span className="absolute top-0 right-0 bg-red-200 text-red-600 text-xs font-bold px-2 rounded">HOT</span>
            </div>
            <span className="mt-1 text-sm font-medium">Máy lạnh</span>
          </button>
          {/* Quạt điều hòa */}
          <button className="flex flex-col items-center px-4 py-2 bg-gray-100 rounded-lg hover:bg-blue-100 transition cursor-pointer border border-transparent hover:border-blue-400 focus:outline-none">
            <div className="relative">
              <img src="/images/maygiat.png" alt="Quạt điều hòa" className="h-12 w-auto mb-1" />
              <span className="absolute top-0 right-0 bg-red-200 text-red-600 text-xs font-bold px-2 rounded">HOT</span>
            </div>
            <span className="mt-1 text-sm font-medium">Máy giặt</span>
          </button>
          {/* Máy giặt */}
          <button className="flex flex-col items-center px-4 py-2 bg-gray-100 rounded-lg hover:bg-blue-100 transition cursor-pointer border border-transparent hover:border-blue-400 focus:outline-none">
            <img src="/images/tulanh.png" alt="Máy giặt" className="h-12 w-auto mb-2" />
            <span className="mt-1 text-sm font-medium">Tủ lạnh</span>
          </button>
          {/* Máy lọc nước */}
          <button className="flex flex-col items-center px-4 py-2 bg-gray-100 rounded-lg hover:bg-blue-100 transition cursor-pointer border border-transparent hover:border-blue-400 focus:outline-none">
            <img src="/images/mayquat.png" alt="Máy lọc nước" className="h-12 w-auto mb-2" />
            <span className="mt-1 text-sm font-medium">Máy quạt</span>
          </button>
          {/* Tủ đông mát */}
          <button className="flex flex-col items-center px-4 py-2 bg-gray-100 rounded-lg hover:bg-blue-100 transition cursor-pointer border border-transparent hover:border-blue-400 focus:outline-none">
            <img src="/images/tivi.png" alt="Tủ đông mát" className="h-12 w-auto mb-2" />
            <span className="mt-1 text-sm font-medium">Tivi</span>
          </button>
        </div>
      </section>

      <section className="san-pham-noi-bat">
        <h2>Sản phẩm nổi bật</h2>
        <div className="flex flex-wrap gap-4 justify-center">
          {products.length === 0 ? (
            <div>Đang tải...</div>
          ) : (
            products.map((sp) => (
              <div key={sp.id} className="bg-white rounded-lg shadow p-3 w-60 flex flex-col items-center">
                <img src={sp.img} alt={sp.name} className="w-full h-28 object-contain mb-2" />
                <div className="font-semibold mb-1">{sp.name}</div>
                <div className="text-red-600 text-lg font-bold mb-1">
                  {sp.price?.toLocaleString()}₫
                </div>
                <div className="flex items-center text-yellow-500 text-sm">
                  <span>★</span>
                  <span className="ml-1">{sp.rating}</span>
                </div>
              </div>
            ))
          )}
        </div>
      </section>
      {/* Banner nhỏ chuyển động */}
      {/* ----------------- BANNER NHỎ ĐẸP & CÂN ĐỐI ----------------- */}
      <div className="relative w-full max-w-6xl mx-auto mb-6 px-4">
        {/* 2 banner chia đều 50% */}
        <div className="grid grid-cols-2 gap-4">
          {[0, 1].map((offset) => {
            const idx = (smallBannerIdx + offset) % smallBanners.length;
            return (
              <img
                key={idx}
                src={smallBanners[idx]}
                alt={`Banner ${idx + 1}`}
                className="w-full h-[110px] object-cover rounded-lg shadow-md"
              />
            );
          })}
        </div>
      </div>
      <section className="danh-sach-san-pham">
        <h2>Danh Sách Sản Phẩm</h2>
      </section>
    </div>
  );
}