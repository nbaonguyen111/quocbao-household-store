"use client";
import React from "react";

export default function TrangChu() {
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
    <div className="flex flex-col items-center px-4 py-2 bg-gray-100 rounded">
      <div className="relative">
        <img src="/images/maylanh.png" alt="Máy lạnh" className="h-12 w-auto mb-1" />
        <span className="absolute top-0 right-0 bg-red-200 text-red-600 text-xs font-bold px-2 rounded">HOT</span>
      </div>
      <span className="mt-1 text-sm font-medium">Máy lạnh</span>
    </div>
    {/* Quạt điều hòa */}
    <div className="flex flex-col items-center px-4 py-2">
      <div className="relative">
        <img src="/images/maygiat.png" alt="Quạt điều hòa" className="h-12 w-auto mb-1" />
        <span className="absolute top-0 right-0 bg-red-200 text-red-600 text-xs font-bold px-2 rounded">HOT</span>
      </div>
      <span className="mt-1 text-sm font-medium">Máy giặt</span>
    </div>
    {/* Máy giặt */}
    <div className="flex flex-col items-center px-4 py-2">
      <img src="/images/tulanh.png" alt="Máy giặt" className="h-12 w-auto mb-2" />
      <span className="mt-1 text-sm font-medium">Tủ lạnh</span>
    </div>
    {/* Máy lọc nước */}
    <div className="flex flex-col items-center px-4 py-2">
      <img src="/images/mayquat.png" alt="Máy lọc nước" className="h-12 w-auto mb-2" />
      <span className="mt-1 text-sm font-medium">Máy quạt</span>
    </div>
    {/* Tủ đông mát */}
    <div className="flex flex-col items-center px-4 py-2">
      <img src="/images/tivi.png" alt="Tủ đông mát" className="h-12 w-auto mb-2" />
      <span className="mt-1 text-sm font-medium">Tivi</span>
    </div>
  </div>
</section>

      <section className="san-pham-noi-bat">
        <h2>Sản phẩm nổi bật</h2>
        <div>[Danh sách sản phẩm]</div>
      </section>
    </div>
  );
}