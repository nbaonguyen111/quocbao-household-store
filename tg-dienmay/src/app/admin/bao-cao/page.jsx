'use client';
import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase/firebase";
import { Bar, Pie } from "react-chartjs-2";
import { Chart, BarElement, ArcElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";
import { FaMoneyBillWave, FaCheckCircle, FaHourglassHalf, FaTimesCircle, FaChartPie } from "react-icons/fa";
Chart.register(BarElement, ArcElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function Baocao() {
  const [orders, setOrders] = useState([]);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchOrders = async () => {
      setLoading(true);
      const snap = await getDocs(collection(db, "orders"));
      setOrders(snap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      setLoading(false);
    };
    fetchOrders();
  }, []);

  useEffect(() => {
    if (!from && !to) {
      setFilteredOrders(orders);
      return;
    }
    setFilteredOrders(
      orders.filter(o => {
        const d = o.createdAt ? new Date(o.createdAt) : null;
        if (!d) return false;
        const fromDate = from ? new Date(from) : null;
        const toDate = to ? new Date(to) : null;
        if (fromDate && d < fromDate) return false;
        if (toDate && d > toDate) return false;
        return true;
      })
    );
  }, [from, to, orders]);
  const totalRevenue = filteredOrders.reduce((sum, o) => sum + (o.total || 0), 0);

  const statusCount = {
    "Đã giao": 0,
    "Đang xử lý": 0,
    "Đã hủy": 0,
    "Khác": 0,
  };
  filteredOrders.forEach(o => {
    if (o.status === "Đã giao") statusCount["Đã giao"]++;
    else if (o.status === "Đang xử lý") statusCount["Đang xử lý"]++;
    else if (o.status === "Đã hủy") statusCount["Đã hủy"]++;
    else statusCount["Khác"]++;
  });


  const revenueByDate = {};
  filteredOrders.forEach(o => {
    const d = o.createdAt ? new Date(o.createdAt).toLocaleDateString() : "Không rõ";
    revenueByDate[d] = (revenueByDate[d] || 0) + (o.total || 0);
  });
  const barData = {
    labels: Object.keys(revenueByDate),
    datasets: [
      {
        label: "Doanh thu",
        data: Object.values(revenueByDate),
        backgroundColor: "#2563eb",
      },
    ],
  };


  const pieData = {
    labels: ["Đã giao", "Đang xử lý", "Đã hủy", "Khác"],
    datasets: [
      {
        data: [
          statusCount["Đã giao"],
          statusCount["Đang xử lý"],
          statusCount["Đã hủy"],
          statusCount["Khác"],
        ],
        backgroundColor: ["#22c55e", "#facc15", "#ef4444", "#a3a3a3"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-8">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-2xl font-bold text-blue-700 mb-6 flex items-center gap-2">
          <FaChartPie className="text-blue-500" /> Báo cáo bán hàng
        </h1>
  
        <div className="flex gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium mb-1">Từ ngày</label>
            <input type="date" value={from} onChange={e => setFrom(e.target.value)} className="border rounded px-2 py-1" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Đến ngày</label>
            <input type="date" value={to} onChange={e => setTo(e.target.value)} className="border rounded px-2 py-1" />
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-blue-100 rounded-lg p-4 flex flex-col items-center shadow">
            <FaMoneyBillWave className="text-blue-600 text-2xl mb-1" />
            <div className="text-lg font-bold text-blue-700">{totalRevenue.toLocaleString()}₫</div>
            <div className="text-blue-700 text-xs font-semibold">Tổng doanh thu</div>
          </div>
          <div className="bg-green-100 rounded-lg p-4 flex flex-col items-center shadow">
            <FaCheckCircle className="text-green-600 text-2xl mb-1" />
            <div className="text-lg font-bold text-green-700">{statusCount["Đã giao"]}</div>
            <div className="text-green-700 text-xs font-semibold">Đơn đã giao</div>
          </div>
          <div className="bg-yellow-100 rounded-lg p-4 flex flex-col items-center shadow">
            <FaHourglassHalf className="text-yellow-600 text-2xl mb-1" />
            <div className="text-lg font-bold text-yellow-700">{statusCount["Đang xử lý"]}</div>
            <div className="text-yellow-700 text-xs font-semibold">Đang xử lý</div>
          </div>
          <div className="bg-red-100 rounded-lg p-4 flex flex-col items-center shadow">
            <FaTimesCircle className="text-red-600 text-2xl mb-1" />
            <div className="text-lg font-bold text-red-700">{statusCount["Đã hủy"]}</div>
            <div className="text-red-700 text-xs font-semibold">Đơn hủy</div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-blue-50 rounded-lg p-4 shadow">
            <h2 className="text-lg font-semibold mb-2 text-blue-700">Biểu đồ doanh thu theo ngày</h2>
            <Bar data={barData} options={{ responsive: true, plugins: { legend: { display: false } } }} height={120} />
          </div>
          <div className="bg-green-50 rounded-lg p-4 shadow">
            <h2 className="text-lg font-semibold mb-2 text-green-700">Tỷ lệ trạng thái đơn hàng</h2>
            <Pie data={pieData} options={{ responsive: true, plugins: { legend: { position: "bottom" } } }} height={120} />
          </div>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-2 text-blue-700">Chi tiết đơn hàng</h2>
          {loading ? (
            <div>Đang tải dữ liệu...</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full border text-sm rounded-lg overflow-hidden shadow">
                <thead>
                  <tr className="bg-blue-100">
                    <th className="p-2 border">Mã đơn</th>
                    <th className="p-2 border">Khách hàng</th>
                    <th className="p-2 border">Ngày tạo</th>
                    <th className="p-2 border">Tổng tiền</th>
                    <th className="p-2 border">Trạng thái</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredOrders.map(o => (
                    <tr key={o.id} className="hover:bg-blue-50 transition">
                      <td className="p-2 border">{o.id}</td>
                      <td className="p-2 border">{o.customerName || o.customerEmail}</td>
                      <td className="p-2 border">{o.createdAt ? new Date(o.createdAt).toLocaleDateString() : ""}</td>
                      <td className="p-2 border">{o.total?.toLocaleString()}₫</td>
                      <td className="p-2 border">
                        <span className={
                          o.status === "Đã giao" ? "bg-green-200 text-green-700 px-2 py-1 rounded text-xs font-semibold" :
                          o.status === "Đang xử lý" ? "bg-yellow-200 text-yellow-700 px-2 py-1 rounded text-xs font-semibold" :
                          o.status === "Đã hủy" ? "bg-red-200 text-red-700 px-2 py-1 rounded text-xs font-semibold" :
                          "bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs font-semibold"
                        }>
                          {o.status || "Chưa xử lý"}
                        </span>
                      </td>
                    </tr>
                  ))}
                  {filteredOrders.length === 0 && (
                    <tr>
                      <td colSpan={5} className="text-center text-gray-500 py-4">Không có đơn hàng nào.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}