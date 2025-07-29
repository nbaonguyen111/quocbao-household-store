"use client";
import React, { useState, useEffect, useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase/firebase";
import Link from "next/link";
import Footer from "@/components/footer";

const sortOptions = [
  { value: "hot", label: "Nổi bật" },
  { value: "discount", label: "Giảm giá" },
  { value: "new", label: "Mới" },
  { value: "price-asc", label: "Giá tăng dần" },
  { value: "price-desc", label: "Giá giảm dần" },
];

const pageSize = 8;
const smallBanners = [
  "/images/bannernho1.png",
  "/images/bannernho2.png",
  "/images/bannernho3.png",
  "/images/bannernho4.png",
  "/images/bannernho5.png",
  "/images/bannernho6.png",
];

function removeVietnameseTones(str) {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D");
}

export default function TimKiemPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const keyword = searchParams.get("keyword") || "";
  const [searchTerm, setSearchTerm] = useState(keyword);
  const [selectedBrand, setSelectedBrand] = useState("all");
  const [sortBy, setSortBy] = useState("hot");
  const [products, setProducts] = useState([]);
  const [results, setResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [smallBannerIdx, setSmallBannerIdx] = useState(0);
  const nextSlide = useCallback(() => {
    setSmallBannerIdx((prev) => (prev + 2) % smallBanners.length);
  }, []);
  useEffect(() => {
    const timer = setInterval(nextSlide, 3000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  useEffect(() => {
    setSearchTerm(keyword);
  }, [keyword]);

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      setError("");
      try {
        const querySnapshot = await getDocs(collection(db, "products"));
        const data = [];
        querySnapshot.forEach((doc) => {
          data.push({ id: doc.id, ...doc.data() });
        });
        setProducts(data);
      } catch (err) {
        setError("Không thể tải dữ liệu sản phẩm. Vui lòng thử lại sau.");
      }
      setLoading(false);
    }
    fetchProducts();
  }, []);

  const uniqueBrands = Array.from(new Set(products.map((p) => p.brand)));
  useEffect(() => {
    let filtered = products;
    if (searchTerm.trim()) {
      const lower = removeVietnameseTones(searchTerm.trim().toLowerCase());
      filtered = filtered.filter(
        (p) =>
          removeVietnameseTones(p.name?.toLowerCase() || "").includes(lower) ||
          removeVietnameseTones(p.description?.toLowerCase() || "").includes(lower)
      );
    }
    if (selectedBrand !== "all") {
      filtered = filtered.filter((p) => p.brand === selectedBrand);
    }
    switch (sortBy) {
      case "hot":
        filtered = filtered.slice().sort((a, b) => Number(b.isHot) - Number(a.isHot));
        break;
      case "discount":
        filtered = filtered.slice().sort((a, b) => (b.discount || 0) - (a.discount || 0));
        break;
      case "new":
        filtered = filtered.slice().sort((a, b) => Number(b.isNew) - Number(a.isNew));
        break;
      case "price-asc":
        filtered = filtered.slice().sort((a, b) => (a.price || 0) - (b.price || 0));
        break;
      case "price-desc":
        filtered = filtered.slice().sort((a, b) => (b.price || 0) - (a.price || 0));
        break;
      default:
        break;
    }

    setResults(filtered);
    setCurrentPage(1);
  }, [searchTerm, selectedBrand, sortBy, products]);

  const totalPages = Math.ceil(results.length / pageSize);
  const paginatedResults = results.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    router.push(`?keyword=${encodeURIComponent(searchTerm)}`);
  };


  const categories = [
    { label: "Máy Lạnh", href: "/danh-muc/may-lanh", icon: "/images/maylanh.png" },
    { label: "Tivi", href: "/danh-muc/tivi", icon: "/images/tivi.png" },
    { label: "Tủ Lạnh", href: "/danh-muc/tu-lanh", icon: "/images/tulanh.png" },
    { label: "Máy Giặt", href: "/danh-muc/may-giat", icon: "/images/maygiat.png" },
    { label: "Lò Vi Sóng", href: "/danh-muc/lo-vi-song", icon: "/images/lovisong.png" },
  ];

  const [showMenu, setShowMenu] = useState(false);

  return (
    <div
      style={{
        minHeight: "80vh",
        background: "linear-gradient(135deg,#e3f0ff 0%,#f6f8fa 100%)",
        padding: "32px 0",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="relative w-full max-w-6xl mx-auto mb-6 px-4">
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

        <div
          className="flex items-center gap-6 mb-8 px-2 w-full"
          style={{
            background: "#21a5f5", 
            borderRadius: 16,
            padding: "18px 18px",
            marginBottom: 32,
            boxShadow: "0 2px 12px #1976d211",
          }}
        >
          <Link
            href="/"
            className="flex items-center group shrink-0"
            style={{ textDecoration: "none", minWidth: 120 }}
          >
            <img
              src="/images/logo1.png"
              alt="Thế Giới Điện Máy"
              style={{
                height: 150,        
                width: "auto",
                maxWidth: 160,      
                objectFit: "contain",
                display: "block",
                background: "transparent",
                borderRadius: 8,
              }}
            />
          </Link>

          <div className="relative ml-4 shrink-0">
            <button
              className="flex items-center px-4 py-2 rounded-lg font-bold text-lg shadow transition"
              onClick={() => setShowMenu((v) => !v)}
              style={{
                minWidth: 140,
                color: "#fff",
                background: "#21a5f5",
                transition: "all 0.2s",
                cursor: "pointer",
              }}
              onMouseOver={e => {
                e.currentTarget.style.background = "#1976d2";
              }}
              onMouseOut={e => {
                e.currentTarget.style.background = "#21a5f5";
              }}
            >
              <svg width="26" height="26" fill="none" viewBox="0 0 24 24" className="mr-2">
                <rect x="3" y="6" width="18" height="2" rx="1" fill="#fff"/>
                <rect x="3" y="11" width="18" height="2" rx="1" fill="#fff"/>
                <rect x="3" y="16" width="18" height="2" rx="1" fill="#fff"/>
              </svg>
              Danh mục
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24" className="ml-1">
                <path d="M7 10l5 5 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            {showMenu && (
              <div
                className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-lg z-20"
                style={{ minWidth: 210 }}
                onMouseLeave={() => setShowMenu(false)}
              >
                {categories.map((cat) => (
                  <Link
                    key={cat.href}
                    href={cat.href}
                    className="flex items-center gap-3 px-4 py-3 transition font-medium text-blue-900 hover:text-white hover:bg-[#21a5f5]"
                    style={{
                      borderRadius: 8,
                    }}
                    onClick={() => setShowMenu(false)}
                  >
                    <img src={cat.icon} alt={cat.label} className="h-7 w-7 object-contain" />
                    <span>{cat.label}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div className="flex-1 flex justify-center">
            <form
              onSubmit={handleSearch}
              className="relative w-full max-w-2xl"
              style={{ minWidth: 320 }}
            >
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Bạn tìm gì..."
                className="w-full rounded-full px-6 py-3 pr-14 text-lg border border-blue-200 focus:outline-none focus:border-blue-500 shadow transition"
                style={{
                  background: "#fff",
                  color: "#222",
                  fontWeight: 500,
                  boxShadow: "0 2px 12px #1976d211",
                }}
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white rounded-full w-10 h-10 flex items-center justify-center transition"
                style={{ boxShadow: "0 2px 8px #1976d233" }}
                aria-label="Tìm kiếm"
              >
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
                  <circle cx="11" cy="11" r="7" stroke="white" strokeWidth="2" />
                  <path
                    d="M20 20L16.65 16.65"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 20,
            alignItems: "center",
            marginBottom: 32,
            justifyContent: "space-between",
            background: "#fff",
            borderRadius: 18,
            boxShadow: "0 2px 12px #0001",
            padding: "18px 24px",
          }}
        >
          <div style={{ display: "flex", gap: 18, flexWrap: "wrap" }}>
            <select
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
              disabled={loading}
              style={{
                padding: "10px 18px",
                borderRadius: 22,
                border: "1.5px solid #1976d2",
                fontSize: 16,
                background: "#f5faff",
                minWidth: 150,
                color: "#1a237e",
                fontWeight: 500,
                boxShadow: "0 1px 4px #0001",
                outline: "none",
                transition: "border 0.2s",
                opacity: loading ? 0.6 : 1,
                cursor: loading ? "not-allowed" : "pointer",
              }}
            >
              <option value="all">Tất cả thương hiệu</option>
              {uniqueBrands.map((brand) => (
                <option key={brand} value={brand}>
                  {brand}
                </option>
              ))}
            </select>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              style={{
                padding: "10px 18px",
                borderRadius: 22,
                border: "1.5px solid #1976d2",
                fontSize: 16,
                background: "#f5faff",
                minWidth: 150,
                color: "#1a237e",
                fontWeight: 500,
                boxShadow: "0 1px 4px #0001",
                outline: "none",
                transition: "border 0.2s",
              }}
            >
              {sortOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  Sắp xếp theo {opt.label}
                </option>
              ))}
            </select>
          </div>
        </div>
        {loading ? (
          <div style={{ textAlign: "center", color: "#1976d2", fontSize: 20, padding: 40 }}>
            Đang tải dữ liệu sản phẩm...
          </div>
        ) : error ? (
          <div style={{ textAlign: "center", color: "#d32f2f", fontWeight: 500, fontSize: 18 }}>
            {error}
          </div>
        ) : searchTerm.trim() === "" && selectedBrand === "all" ? (
          <div style={{ textAlign: "center", color: "#888", fontSize: 18 }}>
            Vui lòng nhập từ khóa hoặc chọn thương hiệu để tìm kiếm sản phẩm.
          </div>
        ) : paginatedResults.length === 0 ? (
          <div style={{ textAlign: "center", color: "#d32f2f", fontWeight: 500, fontSize: 18 }}>
            Không tìm thấy sản phẩm phù hợp.
          </div>
        ) : (
          <>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                gap: 32,
              }}
            >
              {paginatedResults.map((p, idx) => (
                <Link
                  key={p.id || idx}
                  href={`/product/${p.id}`}
                  style={{ textDecoration: "none" }}
                  onClick={() => console.log("Đi tới sản phẩm id:", p.id)}
                >
                  <div
                    style={{
                      background: "#fff",
                      borderRadius: 20,
                      boxShadow: "0 4px 18px #0002",
                      padding: 20,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      transition: "box-shadow 0.2s, transform 0.2s",
                      minHeight: 390,
                      position: "relative",
                      border: "1.5px solid #e3eafc",
                      cursor: "pointer",
                      overflow: "hidden",
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.boxShadow = "0 8px 32px #1976d233";
                      e.currentTarget.style.transform = "translateY(-4px) scale(1.02)";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.boxShadow = "0 4px 18px #0002";
                      e.currentTarget.style.transform = "none";
                    }}
                  >
                    {p.isHot && (
                      <span
                        style={{
                          position: "absolute",
                          top: 14,
                          left: 14,
                          background: "linear-gradient(90deg,#ff9800 60%,#ffd54f 100%)",
                          color: "#fff",
                          borderRadius: 8,
                          padding: "3px 12px",
                          fontSize: 13,
                          fontWeight: 700,
                          letterSpacing: 1,
                          boxShadow: "0 2px 8px #ff980033",
                        }}
                      >
                        NỔI BẬT
                      </span>
                    )}
                    {p.isNew && (
                      <span
                        style={{
                          position: "absolute",
                          top: 14,
                          right: 14,
                          background: "linear-gradient(90deg,#1976d2 60%,#64b5f6 100%)",
                          color: "#fff",
                          borderRadius: 8,
                          padding: "3px 12px",
                          fontSize: 13,
                          fontWeight: 700,
                          letterSpacing: 1,
                          boxShadow: "0 2px 8px #1976d233",
                        }}
                      >
                        MỚI
                      </span>
                    )}
                    {p.discount > 0 && (
                      <span
                        style={{
                          position: "absolute",
                          bottom: 14,
                          left: 14,
                          background: "linear-gradient(90deg,#d32f2f 60%,#ff8a65 100%)",
                          color: "#fff",
                          borderRadius: 8,
                          padding: "3px 12px",
                          fontSize: 13,
                          fontWeight: 700,
                          letterSpacing: 1,
                          boxShadow: "0 2px 8px #d32f2f33",
                        }}
                      >
                        GIẢM {p.discount}%
                      </span>
                    )}
                    <img
                      src={Array.isArray(p.images) ? p.images[0] : p.imageUrl}
                      alt={p.name}
                      style={{
                        width: "100%",
                        height: 180,
                        objectFit: "contain",
                        borderRadius: 14,
                        marginBottom: 14,
                        background: "#f9f9f9",
                        boxShadow: "0 2px 8px #1976d211",
                        display: "block",
                      }}
                    />
                    <h3
                      style={{
                        fontSize: 19,
                        color: "#1976d2",
                        margin: "10px 0 6px",
                        fontWeight: 700,
                        textAlign: "center",
                      }}
                    >
                      {p.name}
                    </h3>
                    <div style={{ color: "#555", fontSize: 15, marginBottom: 4 }}>
                      Danh mục:{" "}
                      <Link
                        key={p.id || idx}
                        href={`/danh-muc/${encodeURIComponent(p.category)}`}
                        style={{ textDecoration: "none" }}
                        onClick={() => console.log("Đi tới danh mục:", p.category)}
                      >
                        <div>
                        </div>
                      </Link>
                    </div>
                    <div style={{ color: "#555", fontSize: 15, marginBottom: 4 }}>
                      Thương hiệu: <b>{p.brand}</b>
                    </div>
                    <div
                      style={{
                        color: "#d32f2f",
                        fontWeight: 700,
                        fontSize: 18,
                        marginBottom: 8,
                      }}
                    >
                      {p.price?.toLocaleString()}₫
                    </div>
                    <div
                      style={{
                        color: "#555",
                        fontSize: 15,
                        marginBottom: 18,
                        textAlign: "center",
                      }}
                    >
                      {p.description}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            {totalPages > 1 && (
              <div style={{ display: "flex", justifyContent: "center", margin: "32px 0 0" }}>
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  style={{
                    padding: "8px 16px",
                    margin: "0 6px",
                    borderRadius: 8,
                    border: "1px solid #1976d2",
                    background: currentPage === 1 ? "#e3eafc" : "#fff",
                    color: "#1976d2",
                    cursor: currentPage === 1 ? "not-allowed" : "pointer",
                    fontWeight: 600,
                    transition: "background 0.2s",
                  }}
                >
                  &lt;
                </button>
                {Array.from({ length: totalPages }, (_, i) => (
                  <button
                    key={i + 1}
                    onClick={() => handlePageChange(i + 1)}
                    style={{
                      padding: "8px 16px",
                      margin: "0 4px",
                      borderRadius: 8,
                      border: "1px solid #1976d2",
                      background: currentPage === i + 1 ? "#1976d2" : "#fff",
                      color: currentPage === i + 1 ? "#fff" : "#1976d2",
                      cursor: "pointer",
                      fontWeight: 600,
                      transition: "background 0.2s",
                    }}
                  >
                    {i + 1}
                  </button>
                ))}
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  style={{
                    padding: "8px 16px",
                    margin: "0 6px",
                    borderRadius: 8,
                    border: "1px solid #1976d2",
                    background: currentPage === totalPages ? "#e3eafc" : "#fff",
                    color: "#1976d2",
                    cursor: currentPage === totalPages ? "not-allowed" : "pointer",
                    fontWeight: 600,
                    transition: "background 0.2s",
                  }}
                >
                  &gt;
                </button>
              </div>
            )}
          </>
        )}
      </div>

      <Footer />
    </div>
  );
}

