"use client";
import React, { useEffect, useState } from "react";
import { db } from "../../../firebase/firebase";
import {
    collection,
    getDocs,
    addDoc,
    where,
    updateDoc,
    deleteDoc,
    doc,
    query,
} from "firebase/firestore";
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
  } from "@/components/ui/dialog";
  import OrderHistory from "@/components/ui/orderhistory";

export default function Khachhang() {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 8; 

    const [showEditModal, setShowEditModal] = useState(false);
    const [editUser, setEditUser] = useState(null);
    const [editForm, setEditForm] = useState({ name: '', phone: '', email: '', role: '' });
    const [saving, setSaving] = useState(false);
    const [showDetailModal, setShowDetailModal] = useState(false);
    const [detailUser, setDetailUser] = useState(null);
    const [lockLoading, setLockLoading] = useState(null); 
    useEffect(() => {
        const fetchData = async () => {
            const q = query(collection(db, "users"), where("role", "==", "user"));
            const querySnapshot = await getDocs(q);
            const items = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setData(items);
        };
        fetchData();
    }, []);
    const totalPages = Math.ceil(data.length / pageSize);
    const paginatedData = data.slice((currentPage - 1) * pageSize, currentPage * pageSize);
    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) setCurrentPage(page);
    };
    const handleEdit = (user) => {
        setEditUser(user);
        setEditForm({
            name: user.name || '',
            phone: user.phone || '',
            email: user.email || '',
            role: user.role || '',
        });
        setShowEditModal(true);
    };
    const handleDelete = async (id) => {
        const user = data.find(u => u.id === id);
        if (window.confirm(`Bạn chắc chắn muốn xóa "${user.name}" ?`)) {
            await deleteDoc(doc(db, "users", id));
            setData(prev => prev.filter(u => u.id !== id));
        }
    };


    const handleCloseModal = () => {
        setShowEditModal(false);
        setEditUser(null);
    };
    const handleSave = async () => {
        if (!editUser) return;
        setSaving(true);
        try {
            await updateDoc(doc(db, "users", editUser.id), {
                name: editForm.name,
                phone: editForm.phone,
                email: editForm.email,
                role: editForm.role,
            });
            setData(prev => prev.map(u => u.id === editUser.id ? { ...u, ...editForm } : u));
            setShowEditModal(false);
            setEditUser(null);
        } catch (e) {
            alert("Lỗi khi lưu chỉnh sửa!");
        }
        setSaving(false);
    };
    const handleShowDetail = (user) => {
        setDetailUser(user);
        setShowDetailModal(true);
    };
    const handleCloseDetail = () => {
        setShowDetailModal(false);
        setDetailUser(null);
    };
    const handleToggleLock = async (user) => {
        setLockLoading(user.id);
        try {
            const newStatus = user.status === 'locked' ? 'active' : 'locked';
            await updateDoc(doc(db, "users", user.id), { status: newStatus });
            setData(prev => prev.map(u => u.id === user.id ? { ...u, status: newStatus } : u));
            if (detailUser && detailUser.id === user.id) {
                setDetailUser(d => ({ ...d, status: newStatus }));
            }
        } catch (e) {
            alert("Lỗi khi cập nhật trạng thái tài khoản!");
        }
        setLockLoading(null);
    };
    return (
        <div>
            <div className="overflow-x-auto ">
                <h1 className="text-2xl text-black font-bold">Quản lý khách hàng</h1>
                <div className="shadow-lg">
                    <table className="min-w-full text-gray-500   rounded">
                        <thead>
                            <tr>
                                <th className="border px-2 py-1">#ID</th>
                                <th className="border px-2 py-1">Name</th>
                                <th className="border px-2 py-1">Phone</th>
                                <th className="border px-2 py-1">Email</th>
                                <th className="border px-2 py-1">Role</th>
                                <th className="border px-2 py-1">Trạng thái</th>
                                <th className="border px-2 py-1">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {paginatedData.map((u, idx) => (
                                <tr key={u.id} className={`${idx % 2 === 0 ? "bg-white" : "bg-gray-300"}`}>
                                    <td className=" px-2 py-1 text-center">{(currentPage - 1) * pageSize + idx + 1}</td>
                                    <td className=" px-2 py-1">
                                        <button className="text-blue-600 underline hover:text-blue-800" onClick={() => handleShowDetail(u)}>{u.name}</button>
                                    </td>
                                    <td className=" px-2 py-1">{u.phone}</td>
                                    <td className=" px-2 py-1">{u.email}</td>
                                    <td className=" px-2 py-1">{u.role}</td>
                                    <td className=" px-2 py-1">
                                        <span className={`px-2 py-1 rounded text-xs font-semibold ${u.status === 'locked' ? 'bg-red-200 text-red-700' : 'bg-green-200 text-green-700'}`}>
                                            {u.status === 'locked' ? 'Khóa' : 'Hoạt động'}
                                        </span>
                                    </td>
                                    <td className=" px-2 py-1 flex gap-2 justify-center">
                                        <button
                                            className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
                                            onClick={() => handleEdit(u)}
                                        >
                                            Edit
                                        </button>
                                        <button
                                            className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                                            onClick={() => handleDelete && handleDelete(u.id)}
                                        >
                                            Delete
                                        </button>
                                        <button
                                            className={`px-2 py-1 rounded ${u.status === 'locked' ? 'bg-green-500 hover:bg-green-600' : 'bg-yellow-500 hover:bg-yellow-600'} text-white`}
                                            onClick={() => handleToggleLock(u)}
                                            disabled={lockLoading === u.id}
                                        >
                                            {lockLoading === u.id ? 'Đang xử lý...' : (u.status === 'locked' ? 'Mở khóa' : 'Khóa')}
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {totalPages > 1 && (
                    <div className="flex justify-center mt-4 gap-1">
                        <button
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            className="px-3 py-1 border rounded bg-white text-black disabled:opacity-50" >&lt;
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

                {showEditModal && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black text-yellow-400 bg-opacity-40 z-50">
                        <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg relative">
                            <h2 className="text-xl font-bold mb-4 text-gray-700">Chỉnh sửa khách hàng</h2>
                            <div className="space-y-3">
                                <div>
                                    <label className="block text-gray-600 mb-1">Tên</label>
                                    <input type="text" className="w-full border rounded px-3 py-2" value={editForm.name} onChange={e => setEditForm(f => ({ ...f, name: e.target.value }))} />
                                </div>
                                <div>
                                    <label className="block text-gray-600 mb-1">Số điện thoại</label>
                                    <input type="text" className="w-full border rounded px-3 py-2" value={editForm.phone} onChange={e => setEditForm(f => ({ ...f, phone: e.target.value }))} />
                                </div>
                                <div>
                                    <label className="block text-gray-600 mb-1">Email</label>
                                    <input type="email" className="w-full border rounded px-3 py-2" value={editForm.email} onChange={e => setEditForm(f => ({ ...f, email: e.target.value }))} />
                                </div>
                                <div>
                                    <label className="block text-gray-600 mb-1">Vai trò</label>
                                    <select className="w-full border rounded px-3 py-2" value={editForm.role} onChange={e => setEditForm(f => ({ ...f, role: e.target.value }))}>
                                        <option value="user">Khách hàng</option>
                                        <option value="admin">Quản trị viên</option>
                                    </select>
                                </div>
                            </div>
                            <div className="flex justify-end gap-2 mt-6">
                                <button className="px-4 py-2 rounded bg-gray-300 text-gray-700 hover:bg-gray-400" onClick={handleCloseModal} disabled={saving}>Huỷ</button>
                                <button className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600" onClick={handleSave} disabled={saving}>{saving ? "Đang lưu..." : "Lưu"}</button>
                            </div>
                            <button className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 text-2xl" onClick={handleCloseModal}>&times;</button>
                        </div>
                    </div>
                )}
                {showDetailModal && detailUser && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
                        <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg relative">
                            <h2 className="text-xl font-bold mb-4 text-gray-700">Chi tiết khách hàng</h2>
                            <div className="space-y-3 text-gray-700">
                                <div><span className="font-semibold">Tên:</span> {detailUser.name}</div>
                                <div><span className="font-semibold">Số điện thoại:</span> {detailUser.phone}</div>
                                <div><span className="font-semibold">Email:</span> {detailUser.email}</div>
                                <div><span className="font-semibold">Vai trò:</span> {detailUser.role === 'admin' ? 'Quản trị viên' : 'Khách hàng'}</div>
                                <div>
                                    <span className="font-semibold">Trạng thái:</span> <span className={`px-2 py-1 rounded text-xs font-semibold ${detailUser.status === 'locked' ? 'bg-red-200 text-red-700' : 'bg-green-200 text-green-700'}`}>{detailUser.status === 'locked' ? 'Khóa' : 'Hoạt động'}</span>
                                </div>
                                <Dialog>
                <DialogTrigger asChild>
                  <button className="text-gray-700 hover:text-gray-900 underline">
                    Xem lịch sử đơn hàng
                  </button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Lịch sử đơn hàng</DialogTitle>
                    <DialogDescription>
                      Dưới đây là lịch sử đơn hàng của bạn
                    </DialogDescription>
                  </DialogHeader>     
                  {detailUser?.id && <OrderHistory userId={detailUser.id} />}
                </DialogContent>
              </Dialog>
                                <div>
                                    <span className="font-semibold">Ngày tạo tài khoản:</span>{' '}
                                    {detailUser.createdAt?.toDate().toLocaleString()}
                                </div>
                            </div>
                            <div className="flex justify-end gap-2 mt-6">
                                <button className="px-4 py-2 rounded bg-gray-300 text-gray-700 hover:bg-gray-400" onClick={handleCloseDetail}>Đóng</button>
                            </div>
                            <button className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 text-2xl" onClick={handleCloseDetail}>&times;</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
