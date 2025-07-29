"use client";
import React, { useEffect, useState } from "react";
import { db } from "../../../firebase/firebase";
import {
    collection,
    getDocs,
    updateDoc,
    doc,
    query,
    orderBy,
    where,
} from "firebase/firestore";

export default function DonHang() {
    const [orders, setOrders] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize] = useState(10);
    const [loading, setLoading] = useState(true);
    const [statusFilter, setStatusFilter] = useState("all");
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [showDetailModal, setShowDetailModal] = useState(false);
    const [updatingStatus, setUpdatingStatus] = useState(null);

    useEffect(() => {
        const fetchOrders = async () => {
            setLoading(true);
            try {
                let q = query(collection(db, "orders"), orderBy("createdAt", "desc"));
                if (statusFilter !== "all") {
                    q = query(collection(db, "orders"), where("status", "==", statusFilter), orderBy("createdAt", "desc"));
                }
                const querySnapshot = await getDocs(q);
                const ordersData = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setOrders(ordersData);
            } catch (error) {
                console.error("Error fetching orders:", error);
            }
            setLoading(false);
        };
        fetchOrders();
    }, [statusFilter]);
    const totalPages = Math.ceil(orders.length / pageSize);
    const paginatedOrders = orders.slice((currentPage - 1) * pageSize, currentPage * pageSize);

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) setCurrentPage(page);
    };
    const handleUpdateStatus = async (orderId, newStatus) => {
        setUpdatingStatus(orderId);
        try {
            await updateDoc(doc(db, "orders", orderId), { status: newStatus });
            setOrders(prev => prev.map(order =>
                order.id === orderId ? { ...order, status: newStatus } : order
            ));
            if (selectedOrder && selectedOrder.id === orderId) {
                setSelectedOrder(prev => ({ ...prev, status: newStatus }));
            }
        } catch (error) {
            alert("Lỗi khi cập nhật trạng thái đơn hàng!");
        }
        setUpdatingStatus(null);
    };

    const handleShowDetail = (order) => {
        setSelectedOrder(order);
        setShowDetailModal(true);
    };

    const handleCloseDetail = () => {
        setShowDetailModal(false);
        setSelectedOrder(null);
    };
    const getStatusColor = (status) => {
        switch (status) {
            case 'pending': return 'bg-yellow-200 text-yellow-800';
            case 'completed': return 'bg-blue-200 text-blue-800';
            case 'uncompleted': return 'bg-purple-200 text-purple-800';
            default: return 'bg-gray-200 text-gray-800';
        }
    };
    const getStatusText = (status) => {
        switch (status) {
            case 'pending': return 'Chờ thanh toán';
            case 'completed': return 'Đã thanh toán';
            case 'uncompleted': return 'Chưa thanh toán';

            default: return status;
        }
    };

    if (loading) {
        return (
            <div className="p-6">
                <div className="text-center">Đang tải dữ liệu...</div>
            </div>
        );
    }

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">Quản lý đơn hàng</h1>
            <div className="mb-4">
                <label className="mr-2">Lọc theo trạng thái:</label>
                <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="border rounded px-3 py-1"
                >
                    <option value="all">Tất cả</option>
                    <option value="pending">Chờ thanh toán</option>
                    <option value="completed">Đã thanh toán</option>
                    <option value="uncompleted">Chưa thanh toán</option>

                </select>
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border rounded-lg">
                    <thead>
                        <tr className="bg-gray-50">
                            <th className="border px-4 py-2">Mã đơn hàng</th>
                            <th className="border px-4 py-2">Khách hàng</th>
                            <th className="border px-4 py-2">Số điện thoại</th>
                            <th className="border px-4 py-2">Tổng tiền</th>
                            <th className="border px-4 py-2">Trạng thái</th>
                            <th className="border px-4 py-2">Ngày đặt</th>
                            <th className="border px-4 py-2">Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        {paginatedOrders.map((order) => (
                            <tr key={order.id} className="hover:bg-gray-50">
                                <td className="border px-4 py-2 text-center">{order.id.slice(-8)}</td>
                                <td className="border px-4 py-2">{order.receiverName}</td>
                                <td className="border px-4 py-2">{order.receiverPhone}</td>
                                <td className="border px-4 py-2 text-right">{order.total?.toLocaleString()}₫</td>
                                <td className="border px-4 py-2">
                                    <span className={`px-2 py-1 flex  rounded text-xs font-semibold ${getStatusColor(order.status)}`}>
                                        {getStatusText(order.status)}
                                    </span>
                                </td>
                                <td className="border px-4 py-2 text-center">
                                    {order.createdAt?.toDate().toLocaleDateString('vi-VN')}
                                </td>
                                <td className="border px-4 py-2">
                                    <div className="flex gap-2 justify-center">
                                        <button
                                            className="bg-blue-500 text-white px-2 py-1 rounded text-xs hover:bg-blue-600"
                                            onClick={() => handleShowDetail(order)}
                                        >
                                            Chi tiết
                                        </button>
                                        <select
                                            className="border rounded px-2 py-1 text-xs"
                                            value={order.status}
                                            onChange={(e) => handleUpdateStatus(order.id, e.target.value)}
                                            disabled={updatingStatus === order.id}
                                        >
                                            <option value="pending">Chờ thanh toán</option>
                                            <option value="completed">Đã thanh toán</option>
                                            <option value="uncompleted">Chưa thanh toán</option>

                                        </select>
                                    </div>
                                </td>
                            </tr>
                        ))}
                        {paginatedOrders.length === 0 && (
                            <tr>
                                <td colSpan={7} className="text-center py-4 text-gray-500">
                                    Không có đơn hàng nào
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            {totalPages > 1 && (
                <div className="flex justify-center mt-4 gap-1">
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="px-3 py-1 border rounded bg-white text-black disabled:opacity-50"
                    >
                        &lt;
                    </button>
                    {Array.from({ length: totalPages }, (_, i) => (
                        <button
                            key={i + 1}
                            onClick={() => handlePageChange(i + 1)}
                            className={`px-3 py-1 border rounded ${currentPage === i + 1 ? "bg-blue-500 text-white" : "bg-white text-black"}`}
                        >
                            {i + 1}
                        </button>
                    ))}
                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="px-3 py-1 border rounded bg-white text-black disabled:opacity-50"
                    >
                        &gt;
                    </button>
                </div>
            )}
            {showDetailModal && selectedOrder && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
                    <div className="bg-white rounded-lg p-6 w-full max-w-2xl shadow-lg relative max-h-[80vh] overflow-y-auto">
                        <h2 className="text-xl font-bold mb-4">Chi tiết đơn hàng #{selectedOrder.id.slice(-8)}</h2>

                        <div className="grid grid-cols-2 gap-4 mb-4">
                            <div>
                                <h3 className="font-semibold mb-2">Thông tin khách hàng</h3>
                                <p><strong>Tên:</strong> {selectedOrder.receiverName}</p>
                                <p><strong>SĐT:</strong> {selectedOrder.receiverPhone}</p>
                                <p><strong>Địa chỉ:</strong> {selectedOrder.shippingAddress}</p>
                            </div>
                            <div>
                                <h3 className="font-semibold mb-2">Thông tin đơn hàng</h3>
                                <p><strong>Trạng thái:</strong>
                                    <span className={`ml-2 px-2 py-1 rounded text-xs font-semibold ${getStatusColor(selectedOrder.status)}`}>
                                        {getStatusText(selectedOrder.status)}
                                    </span>
                                </p>
                                <p><strong>Ngày đặt:</strong> {selectedOrder.createdAt?.toDate().toLocaleString('vi-VN')}</p>
                                <p><strong>Tổng tiền:</strong> {selectedOrder.total?.toLocaleString()}₫</p>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold mb-2">Sản phẩm đã đặt</h3>
                            <table className="w-full border">
                                <thead>
                                    <tr className="bg-gray-50">
                                        <th className="border px-2 py-1">Tên sản phẩm</th>
                                        <th className="border px-2 py-1">Số lượng</th>
                                        <th className="border px-2 py-1">Giá</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {selectedOrder.items?.map((item, index) => (
                                        <tr key={index}>
                                            <td className="border px-2 py-1">{item.name}</td>
                                            <td className="border px-2 py-1 text-center">{item.quantity}</td>
                                            <td className="border px-2 py-1 text-right">{item.price?.toLocaleString()}₫</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="flex justify-end gap-2 mt-6">
                            <button
                                className="px-4 py-2 rounded bg-gray-300 text-gray-700 hover:bg-gray-400"
                                onClick={handleCloseDetail}
                            >
                                Đóng
                            </button>
                        </div>
                        <button
                            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 text-2xl"
                            onClick={handleCloseDetail}
                        >
                            &times;
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
