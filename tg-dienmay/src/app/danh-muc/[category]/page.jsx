"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { db } from "../../../firebase/firebase";
import { collection, query, where, getDocs, getDoc, doc } from "firebase/firestore";
import Footer from "@/components/footer";

export default function DanhMucPage() {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [sortBy, setSortBy] = useState("hot");
  const [loading, setLoading] = useState(true);
  const [categoryInfo, setCategoryInfo] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      try {
        const q = query(
          collection(db, "products"),
          where("category", "==", category)
        );
        const querySnapshot = await getDocs(q);
        const data = [];
        querySnapshot.forEach((doc) => {
          data.push({ id: doc.id, ...doc.data() });
        });
        setProducts(data);
      } catch (err) {
        setProducts([]);
      }
      setLoading(false);
    }
    if (category) fetchProducts();
  }, [category]);

  useEffect(() => {
    async function fetchCategoryInfo() {
      if (!category) return;
      try {
        const q = query(
          collection(db, "categories"),
          where("id", "==", category)
        );
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
          setCategoryInfo(querySnapshot.docs[0].data());
        } else {
          setCategoryInfo(null);
        }
      } catch (err) {
        setCategoryInfo(null);
      }
    }
    fetchCategoryInfo();
  }, [category]);

  const sortOptions = [
    { value: "hot", label: "Nổi bật" },
    { value: "discount", label: "Giảm giá" },
    { value: "new", label: "Mới" },
    { value: "price-asc", label: "Giá tăng dần" },
    { value: "price-desc", label: "Giá giảm dần" },
  ];

  const sortedProducts = [...products].sort((a, b) => {
    if (sortBy === "hot") return (b.isHot ? 1 : 0) - (a.isHot ? 1 : 0);
    if (sortBy === "discount") return (b.discount || 0) - (a.discount || 0);
    if (sortBy === "new") return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
    if (sortBy === "price-asc") return (a.price || 0) - (b.price || 0);
    if (sortBy === "price-desc") return (b.price || 0) - (a.price || 0);
    return 0;
  });

  return (
    <>
      <div
        style={{
          minHeight: "80vh",
          background: "linear-gradient(135deg,#e3f0ff 0%,#f6f8fa 100%)",
          padding: "32px 0",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div
            style={{
              background: "#21a5f5",
              borderRadius: 18,
              boxShadow: "0 2px 12px #1976d211",
              padding: "24px 32px",
              marginBottom: 32,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 16,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
              <Link href="/" prefetch={false} scroll={true} replace={true}>
                <img
                  src={categoryInfo?.logo || "/images/logo1.png"}
                  style={{ width: 300, height: 200, objectFit: "contain", cursor: "pointer" }}
                />
              </Link>
              <h1 style={{ fontSize: 28, color: "#rgb(239, 240, 240)", fontWeight: 800, margin: 0 }}>
                Danh mục: {categoryInfo?.name || category}
              </h1>
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              style={{
                padding: "10px 18px",
                borderRadius: 22,
                border: "1.5px solid #1976d2",
                fontSize: 16,
                background: "#f5faff",
                minWidth: 180,
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
          {loading ? (
            <div style={{ textAlign: "center", color: "#1976d2", fontSize: 20, padding: 40 }}>
              Đang tải sản phẩm...
            </div>
          ) : sortedProducts.length === 0 ? (
            <div style={{ textAlign: "center", color: "#d32f2f", fontWeight: 500, fontSize: 18 }}>
              Không có sản phẩm nào trong danh mục này.
            </div>
          ) : (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                gap: 32,
              }}
            >
              {sortedProducts.map((p, idx) => (
                <Link
                  key={p.id || idx}
                  href={`/product/${p.id}`}
                  style={{ textDecoration: "none" }}
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
                      src={p.imageUrl}
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
                      {p.brand && <>Thương hiệu: <b>{p.brand}</b></>}
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
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}