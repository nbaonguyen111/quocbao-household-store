'use client';
import React, { useEffect, useState } from "react";
import { collection,getDocs } from "firebase/firestore";
import { db } from "@/firebase/firebase";

export default function TrangChu() {
  const[products,setProducts] = useState([]);
  const fetchProducts = async () => {
    try {
      const snapshot = await getDocs(collection(db, "products"));
      const data = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setProducts(data);
    } catch (error) {
      console.error("Lỗi khi lấy sản phẩm:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className="container mx-auto p-4">
      <section className="banner">
        <div className="bg-gray-300 h-96 rounded-lg overflow-hidden">
          [Slider ảnh]
        </div>
      </section>

      <section className="danh-muc mt-8">
        <h2 className="text-3xl font-bold">Danh mục sản phẩm</h2>
        <div className="grid grid-cols-3 gap-4 mt-4">
          [Các danh mục]
        </div>
      </section>

      <section className="san-pham-noi-bat mt-8">
        <h2 className="text-3xl font-bold">Sản phẩm nổi bật</h2>
        <div className="grid grid-cols-3 gap-4 mt-4">
          [Danh sách sản phẩm]
        </div>
      </section>
      <section className="product mt-8">
        <h2 className="text-3xl font-bold">Danh Sách Sản Phẩm</h2>
        <div className="grid grid-cols-3 gap-4 mt-4">
        {products.map(product => (
          <div key={product.id} className="bg-white rounded-lg shadow p-4">
            <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover" />
            <h4 className="text-xl font-bold mt-4">{product.name}</h4>
            <p className="text-gray-600">{product.description}</p>
            <strong className="text-2xl font-bold">{product.price.toLocaleString()} đ</strong>
          </div>
        ))}
        </div>
      </section>

    
    </div>
  );
}
