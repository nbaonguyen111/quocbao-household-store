'use client';
import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase/firebase";
import { Bar, Pie } from "react-chartjs-2";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
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
        const d = o.createdAt ? new Date(o.createdAt.toDate()) : null;
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
    "pending": 0,
    "completed": 0,
    "uncompleted": 0,
  };

  filteredOrders.forEach(o => {
    if (o.status === "pending") statusCount["pending"]++;
    else if (o.status === "completed") statusCount["completed"]++;
    else if (o.status === "uncompleted") statusCount["uncompleted"]++;
    else statusCount["pending"]++;
  });

  const revenueByDate = {};
  filteredOrders.forEach(o => {
    const d = o.createdAt ? new Date(o.createdAt.toDate()).toLocaleDateString() : "Không rõ";
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
    labels: ["Chờ thanh toán", "Đã thanh toán", "Chưa thanh toán"],
    datasets: [
      {
        data: [
          statusCount["pending"],
          statusCount["completed"],
          statusCount["uncompleted"],
        ],
        backgroundColor: ["#facc15", "#22c55e", "#ef4444"],
        borderWidth: 1,
      },
    ],
  };
  const getStatusText = (status) => {
    switch (status) {
      case 'pending': return 'Chờ thanh toán';
      case 'completed': return 'Đã thanh toán';
      case 'uncompleted': return 'Chưa thanh toán';
      default: return 'Chờ thanh toán';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending': return 'bg-yellow-200 text-yellow-700';
      case 'completed': return 'bg-green-200 text-green-700';
      case 'uncompleted': return 'bg-red-200 text-red-700';
      default: return 'bg-gray-200 text-gray-700';
    }
  };

  const exportToExcel = () => {
    const excelData = filteredOrders.map(order => ({
      'Mã đơn hàng': order.id.slice(-8),
      'Tên khách hàng': order.receiverName || 'Không có tên',
      'Số điện thoại': order.receiverPhone || 'Không có',
      'Địa chỉ': order.shippingAddress || 'Không có',
      'Ngày tạo': order.createdAt?.toDate ? new Date(order.createdAt.toDate()).toLocaleDateString("vi-VN") : 'Không rõ',
      'Tổng tiền (VNĐ)': order.total || 0,
      'Trạng thái': getStatusText(order.status),
      'Ghi chú': order.note || ''
    }));
    const statsData = [
      { 'Chỉ số': 'Tổng số đơn hàng', 'Giá trị': filteredOrders.length },
      { 'Chỉ số': 'Tổng doanh thu (VNĐ)', 'Giá trị': totalRevenue.toLocaleString() },
      { 'Chỉ số': 'Đã thanh toán', 'Giá trị': statusCount.completed },
      { 'Chỉ số': 'Chờ thanh toán', 'Giá trị': statusCount.pending },
      { 'Chỉ số': 'Chưa thanh toán', 'Giá trị': statusCount.uncompleted },
      { 'Chỉ số': 'Tỷ lệ hoàn thành (%)', 'Giá trị': filteredOrders.length > 0 ? ((statusCount.completed / filteredOrders.length) * 100).toFixed(2) : 0 }
    ];

    const wb = XLSX.utils.book_new();
    const wsStats = XLSX.utils.json_to_sheet(statsData);
    XLSX.utils.book_append_sheet(wb, wsStats, "Thống kê tổng quan");
    const wsOrders = XLSX.utils.json_to_sheet(excelData);
    XLSX.utils.book_append_sheet(wb, wsOrders, "Chi tiết đơn hàng");
    const today = new Date().toLocaleDateString('vi-VN').replace(/\//g, '-');
    const fileName = `bao-cao-don-hang-${today}.xlsx`;
    XLSX.writeFile(wb, fileName);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-8">
      <div className="max-w-5xl mx-auto bg-blue-900 rounded-xl shadow-lg p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-blue-700 flex items-center gap-2">
            <FaChartPie className="text-blue-500" /> Báo cáo bán hàng
          </h1>
          <button
            onClick={exportToExcel}
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Xuất Excel
          </button>
        </div>

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
            <div className="text-lg font-bold text-green-700">{statusCount["completed"]}</div>
            <div className="text-green-700 text-xs font-semibold">Đã thanh toán</div>
          </div>
          <div className="bg-yellow-100 rounded-lg p-4 flex flex-col items-center shadow">
            <FaHourglassHalf className="text-yellow-600 text-2xl mb-1" />
            <div className="text-lg font-bold text-yellow-700">{statusCount["pending"]}</div>
            <div className="text-yellow-700 text-xs font-semibold">Chờ thanh toán</div>
          </div>
          <div className="bg-red-100 rounded-lg p-4 flex flex-col items-center shadow">
            <FaTimesCircle className="text-red-600 text-2xl mb-1" />
            <div className="text-lg font-bold text-red-700">{statusCount["uncompleted"]}</div>
            <div className="text-red-700 text-xs font-semibold">Chưa thanh toán</div>
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
                      <td className="p-2 border">{o.id.slice(-8)}</td>
                      <td className="p-2 border">{o.receiverName || "Không có tên"}</td>
                      <td className="p-2 border">
                        {o.createdAt?.toDate ? new Date(o.createdAt.toDate()).toLocaleDateString("vi-VN") : "Không rõ"}
                      </td>
                      <td className="p-2 border">{o.total?.toLocaleString()}₫</td>
                      <td className="p-2 border">
                        <span className={`px-2 py-1 rounded text-xs font-semibold ${getStatusColor(o.status)}`}>
                          {getStatusText(o.status)}
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