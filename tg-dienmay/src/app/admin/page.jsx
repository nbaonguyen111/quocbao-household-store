'use client';
import React, { useState, useEffect } from "react";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "@/firebase/firebase";
import Link from "next/link";
import { Bar, Pie } from "react-chartjs-2";
import { Chart, BarElement, ArcElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";
import { FaBoxOpen, FaUsers, FaShoppingCart, FaCrown, FaUserCircle } from "react-icons/fa";
Chart.register(BarElement, ArcElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function AdminDashboard() {
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
  const [orders, setOrders] = useState([]);
  const [tab, setTab] = useState("products");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const prodSnap = await getDocs(collection(db, "products"));
      setProducts(prodSnap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      const userSnap = await getDocs(collection(db, "users"));
      setUsers(userSnap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      const orderSnap = await getDocs(collection(db, "orders"));
      setOrders(orderSnap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      setLoading(false);
    };
    fetchData();
  }, []);

  const totalRevenue = orders.reduce((sum, o) => sum + (o.total || 0), 0);
  const topProducts = [...products]
    .sort((a, b) => (b.sold || 0) - (a.sold || 0))
    .slice(0, 3);
  const chartData = {
    labels: ["Sản phẩm", "Người dùng", "Đơn hàng"],
    datasets: [
      {
        label: "Số lượng",
        data: [products.length, users.length, orders.length],
        backgroundColor: ["#2563eb", "#059669", "#f59e42"],
      },
    ],
  };
  const pieData = {
    labels: ["Sản phẩm", "Người dùng", "Đơn hàng"],
    datasets: [
      {
        data: [products.length, users.length, orders.length],
        backgroundColor: ["#2563eb", "#059669", "#f59e42"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300">
      <div className="bg-blue-900 py-4 px-8 flex items-center justify-between shadow">
        <h1 className="text-2xl text-white font-bold tracking-wide flex items-center gap-2">
          <FaCrown className="text-yellow-300" /> Admin Dashboard
        </h1>
        <Link href="/" className="text-white underline hover:text-yellow-300 transition">Về trang chủ</Link>
      </div>
      <div className="max-w-6xl mx-auto mt-8 bg-blue-900 rounded-xl shadow-lg p-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="flex items-center bg-blue-100 rounded-lg p-5 shadow hover:scale-105 transition">
            <div className="bg-blue-600 text-white rounded-full p-3 mr-4">
              <FaBoxOpen size={28} />
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-700">{products.length}</div>
              <div className="text-blue-700 font-semibold">Sản phẩm</div>
            </div>
          </div>
          <div className="flex items-center bg-green-100 rounded-lg p-5 shadow hover:scale-105 transition">
            <div className="bg-green-600 text-white rounded-full p-3 mr-4">
              <FaUsers size={28} />
            </div>
            <div>
              <div className="text-2xl font-bold text-green-700">{users.length}</div>
              <div className="text-green-700 font-semibold">Người dùng</div>
            </div>
          </div>
          <div className="flex items-center bg-yellow-100 rounded-lg p-5 shadow hover:scale-105 transition">
            <div className="bg-yellow-500 text-white rounded-full p-3 mr-4">
              <FaShoppingCart size={28} />
            </div>
            <div>
              <div className="text-2xl font-bold text-yellow-700">{orders.length}</div>
              <div className="text-yellow-700 font-semibold">Đơn hàng</div>
            </div>
          </div>
          <div className="flex items-center bg-purple-100 rounded-lg p-5 shadow hover:scale-105 transition">
            <div className="bg-purple-600 text-white rounded-full p-3 mr-4">
              <FaCrown size={28} />
            </div>
            <div>
              <div className="text-base font-bold text-purple-700">
                {totalRevenue.toLocaleString()}₫
              </div>
              <div className="text-purple-700 font-semibold">Tổng doanh thu</div>
            </div>
          </div>

        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-blue-50 rounded-lg p-4 shadow">
            <h2 className="text-lg font-semibold mb-2 text-blue-700">Biểu đồ cột tổng quan</h2>
            <Bar data={chartData} options={{ responsive: true, plugins: { legend: { display: false } } }} height={120} />
          </div>
          <div className="bg-yellow-50 rounded-lg p-4 shadow">
            <h2 className="text-lg font-semibold mb-2 text-yellow-700">Tỷ lệ tổng thể</h2>
            <Pie data={pieData} options={{ responsive: true, plugins: { legend: { position: "bottom" } } }} height={120} />
          </div>
        </div>
        {/* <div className="mb-8">
          <h2 className="text-lg font-semibold mb-2 text-pink-700 flex items-center gap-2">
            <FaBoxOpen /> Top 3 sản phẩm bán chạy
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {topProducts.map((p, idx) => (
              <div key={p.id} className="bg-white border rounded-lg shadow p-4 flex flex-col items-center hover:shadow-lg transition">
                {p.image && <img src={p.image} alt={p.name} className="h-20 w-20 object-cover rounded mb-2" />}
                <div className="font-bold text-blue-700">{p.name}</div>
                <div className="text-gray-600">{p.price?.toLocaleString()}₫</div>
                <div className="text-sm text-gray-500">Đã bán: <span className="font-semibold">{p.sold || 0}</span></div>
                <div className="mt-1 text-xs text-gray-400">#{idx + 1}</div>
              </div>
            ))}
            {topProducts.length === 0 && <div className="text-gray-500 col-span-3">Chưa có dữ liệu bán chạy.</div>}
          </div>
        </div> */}
        <div className="flex gap-4  mb-6">
          <button
            className={`px-4 py-2 rounded font-semibold shadow ${tab === "products" ? "bg-blue-600 text-white" : "bg-white text-black hover:bg-blue-100"}`}
            onClick={() => setTab("products")}
          >
            Sản phẩm
          </button>
          <button
            className={`px-4 py-2 rounded font-semibold shadow ${tab === "users" ? "bg-green-600 text-white" : "bg-white text-black hover:bg-green-100"}`}
            onClick={() => setTab("users")}
          >
            Người dùng
          </button>
          <button
            className={`px-4 py-2 rounded font-semibold shadow ${tab === "orders" ? "bg-yellow-500 text-white" : "bg-white text-black hover:bg-yellow-100"}`}
            onClick={() => setTab("orders")}
          >
            Đơn hàng
          </button>
        </div>
        {loading ? (
          <div className="text-center py-10 text-blue-600 font-semibold">Đang tải dữ liệu...</div>
        ) : (
          <>
            {tab === "products" && (
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold">Danh sách sản phẩm</h2>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full border text-sm rounded-lg overflow-hidden shadow">
                    <thead>
                      <tr className="bg-blue-900">
                        <th className="p-2 border">Tên</th>
                        <th className="p-2 border">Giá</th>
                        <th className="p-2 border">Danh mục</th>
                      </tr>
                    </thead>
                    <tbody>
                      {products.map((p) => (
                        <tr key={p.id} className="hover:bg-blue-50 transition">
                          <td className="p-2 border">{p.name}</td>
                          <td className="p-2 border">{p.price?.toLocaleString()}₫</td>
                          <td className="p-2 border">{p.category}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  {products.length === 0 && <div className="text-center py-4 text-gray-500">Chưa có sản phẩm.</div>}
                </div>
              </div>
            )}
            {tab === "users" && (
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold ">Danh sách người dùng</h2>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full border text-sm rounded-lg overflow-hidden shadow">
                    <thead>
                      <tr className="bg-blue-900">
                        <th className="p-2 border">Tên</th>
                        <th className="p-2 border">Email</th>
                        <th className="p-2 border">Vai trò</th>

                      </tr>
                    </thead>
                    <tbody>
                      {users.map((u) => (
                        <tr key={u.id} className="hover:bg-green-50 transition">
                          <td className="p-2 border">
                            {u.name || "Chưa đặt tên"}
                          </td>
                          <td className="p-2 border">{u.email}</td>
                          <td className="p-2 border">
                            <span className={`px-2 py-1 rounded text-xs font-semibold
                              ${u.role === "admin" ? "bg-yellow-200 text-yellow-700" : "bg-blue-200 text-blue-700"}`}>
                              {u.role || "user"}
                            </span>
                          </td>
                          {/* <td className="p-2 border">
                            <button onClick={() => handleDeleteUser(u.id)} className="text-red-600 hover:underline">Xóa</button>
                          </td> */}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  {users.length === 0 && <div className="text-center py-4 text-gray-500">Chưa có người dùng.</div>}
                </div>
              </div>

            )}
            {tab === "orders" && (
              <div>
                <h2 className="text-xl font-bold mb-4">Danh sách đơn hàng</h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full border text-sm rounded-lg overflow-hidden shadow">
                    <thead>
                      <tr className="bg-blue-900">
                        <th className="p-2 border">Mã đơn</th>
                        <th className="p-2 border">Khách hàng</th>
                        <th className="p-2 border">Tổng tiền</th>
                        <th className="p-2 border">Trạng thái</th>
                      </tr>
                    </thead>
                    <tbody>
                      {orders.map((o) => (
                        <tr key={o.id} className="hover:bg-yellow-50 transition">
                          <td className="p-2 border">{o.id}</td>
                          <td className="p-2 border">{o.receiverName || o.customerEmail}</td>
                          <td className="p-2 border">{o.total?.toLocaleString()}₫</td>
                          <td className="p-2 border">
                            <span className={`px-2 py-1 rounded text-xs font-semibold
                              ${o.status === "completed" ? "bg-green-200 text-green-700" :
                                o.status === "pending" ? "bg-yellow-200 text-yellow-700" :
                                  "bg-gray-200 text-gray-700"}`}>
                              {o.status || "uncompleted"}
                            </span>
                          </td>

                        </tr>
                      ))}
                    </tbody>
                  </table>
                  {orders.length === 0 && <div className="text-center py-4 text-gray-500">Chưa có đơn hàng.</div>}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
