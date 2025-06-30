"use client";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase/firebase"; // Đảm bảo alias @ trỏ đúng src

const sortOptions = [
  { value: "hot", label: "Nổi bật" },
  { value: "discount", label: "Giảm giá" },
  { value: "new", label: "Mới" },
  { value: "price-asc", label: "Giá tăng dần" },
  { value: "price-desc", label: "Giá giảm dần" },
];

const pageSize = 8; // Số sản phẩm mỗi trang

export default function TimKiemPage() {
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

  // Đồng bộ searchTerm với keyword trên URL mỗi khi keyword thay đổi
  useEffect(() => {
    setSearchTerm(keyword);
  }, [keyword]);

  // Lấy dữ liệu từ Firestore
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

  // Lấy danh sách thương hiệu duy nhất
  const uniqueBrands = Array.from(new Set(products.map((p) => p.brand)));

  // Lọc, sắp xếp, tìm kiếm
  useEffect(() => {
    let filtered = products;

    // Lọc theo từ khóa (không phân biệt dấu)
    if (searchTerm.trim()) {
      const lower = removeVietnameseTones(searchTerm.trim().toLowerCase());
      filtered = filtered.filter(
        (p) =>
          removeVietnameseTones(p.name?.toLowerCase() || "").includes(lower) ||
          removeVietnameseTones(p.description?.toLowerCase() || "").includes(lower)
      );
    }

    // Lọc theo thương hiệu
    if (selectedBrand !== "all") {
      filtered = filtered.filter((p) => p.brand === selectedBrand);
    }

    // Sắp xếp
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
    setCurrentPage(1); // Reset về trang 1 khi filter/sort thay đổi
  }, [searchTerm, selectedBrand, sortBy, products]);

  // Phân trang
  const totalPages = Math.ceil(results.length / pageSize);
  const paginatedResults = results.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  function removeVietnameseTones(str) {
    return str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/đ/g, "d")
      .replace(/Đ/g, "D");
  }

  return (
    <div
      style={{
        minHeight: "80vh",
        background: "linear-gradient(135deg,#e3f0ff 0%,#f6f8fa 100%)",
        padding: "32px 0",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Bộ lọc và sắp xếp */}
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
        {/* Kết quả */}
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
                <div
                  key={p.id || idx}
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
                  onMouseOver={e => {
                    e.currentTarget.style.boxShadow = "0 8px 32px #1976d233";
                    e.currentTarget.style.transform = "translateY(-4px) scale(1.02)";
                  }}
                  onMouseOut={e => {
                    e.currentTarget.style.boxShadow = "0 4px 18px #0002";
                    e.currentTarget.style.transform = "none";
                  }}
                >
                  {/* Gắn nhãn nếu có */}
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
                  <button
                    style={{
                      background: "linear-gradient(90deg,#1976d2 60%,#64b5f6 100%)",
                      color: "#fff",
                      border: "none",
                      borderRadius: 20,
                      padding: "10px 28px",
                      fontWeight: 600,
                      cursor: "pointer",
                      fontSize: 16,
                      marginTop: "auto",
                      boxShadow: "0 2px 8px #1976d233",
                      transition: "background 0.2s",
                    }}
                    onMouseOver={e => e.currentTarget.style.background = "linear-gradient(90deg,#1565c0 60%,#42a5f5 100%)"}
                    onMouseOut={e => e.currentTarget.style.background = "linear-gradient(90deg,#1976d2 60%,#64b5f6 100%)"}
                    onClick={() =>
                      alert("Chức năng xem chi tiết sẽ được bổ sung!")
                    }
                  >
                    Xem chi tiết
                  </button>
                </div>
              ))}
            </div>
            {/* Phân trang */}
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
    </div>
  );
}

