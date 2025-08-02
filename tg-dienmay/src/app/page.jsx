"use client";
import React, { useEffect, useState, useCallback } from "react";
import { db } from "@/firebase/firebase";
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import { collection, getDocs, query, limit, where } from "firebase/firestore";
import { createFetch } from "next/dist/client/components/router-reducer/fetch-server-response";
import { useRouter } from "next/navigation";
import { addToCart } from "./gio-hang/addtocart";
import toast from "react-hot-toast";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Link from 'next/link';



export default function TrangChu() {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [userId, setUserId] = useState(null);
  const router = useRouter();
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
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        setUserId(null); // hoặc điều hướng sang /login nếu cần
      }
    });

    return () => unsubscribe();
  })
  const handleAddToCart = async (product) => {
    if (!userId) {
      toast.error("Bạn cần đăng nhập để thêm giỏ hàng");
      return;
    }

    await addToCart(userId, product);
    toast.success("Đã thêm vào giỏ hàng!");
  };
  const fetchFeaturedProducts = async () => {
    try {
      const snapshot = await getDocs(query(collection(db, "products"), where("featured", "==", true), limit(4)));
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

      const productsWithRating = await Promise.all(
        data.map(async (product) => {
          const reviewsSnapshot = await getDocs(
            query(collection(db, "products", product.id, "reviews"))
          );

          const ratings = reviewsSnapshot.docs.map(doc => doc.data().rating).filter(r => typeof r === "number" && !isNaN(r));
          const avgRating =
            ratings.length > 0
              ? (ratings.reduce((a, b) => a + b, 0) / ratings.length).toFixed(1)
              : "Chưa có";

          return {
            ...product,
            rating: avgRating,
          };
        })
      );

      setFeaturedProducts(productsWithRating);
    } catch (error) {
      console.log("Lỗi khi lấy sản phẩm nổi bật", error);
    }
  };
  const getAllProducts = async () => {
    try {
      const snapshot = await getDocs(collection(db, "products"));
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setAllProducts(data);
    } catch (error) {
      console.log("Lỗi khi lấy sản phẩm", error);
    }
  };



  useEffect(() => {
    getAllProducts();
    fetchFeaturedProducts();
  }, []);

  return (
    <div>
      <Navbar />
      <main>
        <section className="banner w-full mb-4 flex justify-center">
          <img
            src="/images/bannerlonpng.png"
            alt="Banner"
            className="w-full max-h-72 object-contain rounded-lg shadow"
          />
        </section>

        <section className="danh-muc bg-gray-500 py-4 rounded-lg shadow mb-6">
          <div className="flex justify-around items-end text-yellow-500 font-bold">
            {/* Máy lạnh */}
            <Link href="/danh-muc/ac" className="flex flex-col items-center px-4 py-2 bg-gray-100 rounded-lg hover:bg-blue-100 transition cursor-pointer border border-transparent hover:border-blue-400 focus:outline-none">
              <div className="relative">
                <img src="/images/maylanh.png" alt="Máy lạnh" className="h-12 w-auto mb-1" />
                <span className="absolute top-0 right-0 bg-red-200 text-red-600 text-xs font-bold px-2 rounded">HOT</span>
              </div>
              <span className="mt-1 text-sm font-medium">Máy lạnh</span>
            </Link>
            {/* Máy giặt */}
            <Link href="/danh-muc/washer" className="flex flex-col items-center px-4 py-2 bg-gray-100 rounded-lg hover:bg-blue-100 transition cursor-pointer border border-transparent hover:border-blue-400 focus:outline-none">
              <div className="relative">
                <img src="/images/maygiat.png" alt="Máy giặt" className="h-12 w-auto mb-1" />
                <span className="absolute top-0 right-0 bg-red-200 text-red-600 text-xs font-bold px-2 rounded">HOT</span>
              </div>
              <span className="mt-1 text-sm font-medium">Máy giặt</span>
            </Link>
            {/* Tủ lạnh */}
            <Link href="/danh-muc/fridge" className="flex flex-col items-center px-4 py-2 bg-gray-100 rounded-lg hover:bg-blue-100 transition cursor-pointer border border-transparent hover:border-blue-400 focus:outline-none">
              <img src="/images/tulanh.png" alt="Tủ lạnh" className="h-12 w-auto mb-2" />
              <span className="mt-1 text-sm font-medium">Tủ lạnh</span>
            </Link>
            {/* Máy quạt */}
            <Link href="/danh-muc/microwave" className="flex flex-col items-center px-4 py-2 bg-gray-100 rounded-lg hover:bg-blue-100 transition cursor-pointer border border-transparent hover:border-blue-400 focus:outline-none">
              <img src="/images/lovisong.png" alt="Máy quạt" className="h-12 w-auto mb-2" />
              <span className="mt-1 text-sm font-medium">Lò vi sóng</span>
            </Link>
            {/* Tivi */}
            <Link href="/danh-muc/tv" className="flex flex-col items-center px-4 py-2 bg-gray-100 rounded-lg hover:bg-blue-100 transition cursor-pointer border border-transparent hover:border-blue-400 focus:outline-none">
              <img src="/images/tivi.png" alt="Tivi" className="h-12 w-auto mb-2" />
              <span className="mt-1 text-sm font-medium">Tivi</span>
            </Link>
          </div>
        </section>

        <section className="san-pham-noi-bat">
          <h2 className="text-2xl text-yellow-500 font-bold mb-4 text-center">Sản phẩm nổi bật</h2>
          <div className="flex flex-wrap gap-4 justify-center">
            {featuredProducts.length === 0 ? (
              <div>Đang tải...</div>
            ) : (
              featuredProducts.map((sp) => (
                <Link href={`product/${sp.id}`} key={sp.id} className="bg-white text-yellow-500 rounded-lg shadow p-3 w-60 flex flex-col items-center">
                  <img src={`images/${sp.imageUrl}`} alt={sp.name} className="w-full h-28 object-contain mb-2" />
                  <div className="font-semibold mb-1">{sp.name}</div>
                  <div className="text-red-600 text-lg font-bold mb-1">
                    {sp.price?.toLocaleString()}₫
                  </div>
                  <div className="flex items-center text-yellow-500 text-sm">
                    <span>★</span>
                    <span className="ml-1">{sp.rating}</span>
                  </div>

                </Link>
              ))
            )}
          </div>
        </section>
        <br />
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
        <br />
        <section className="all-products">
          <h2 className="text-2xl text-yellow-500 font-bold mb-4 text-center">Tất Cả Sản Phẩm</h2>
          <div className="flex flex-wrap gap-4 justify-center">
            {allProducts.length === 0 ? (
              <div>Đang tải...</div>
            ) : (
              allProducts.map((sp) => (

                <Link href={`product/${sp.id}`} key={sp.id} className="bg-white text-yellow-500 rounded-lg shadow p-3 w-60 flex flex-col items-center" >

                  <img
                    src={sp.imageUrl.startsWith("http") ? sp.imageUrl : `/images/${sp.imageUrl}`}
                    alt={sp.name}
                    className="w-full h-28 object-contain mb-2"
                  />

                  <div className="font-semibold mb-1">{sp.name}</div>
                  <div className="text-red-600 text-lg font-bold mb-1">
                    {sp.price?.toLocaleString()}₫
                  </div>

                  <div className="flex items-center text-yellow-500 text-sm">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        handleAddToCart(sp);
                      }}
                      className="bg-blue-500 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded"
                    >
                      Thêm vào giỏ hàng
                    </button>
                  </div>
                </Link>
              ))
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}