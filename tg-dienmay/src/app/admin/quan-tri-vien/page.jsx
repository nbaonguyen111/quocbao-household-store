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
import { useAdmin } from "../layout";
import { createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../../../firebase/firebase";
import { setDoc } from "firebase/firestore";

export default function QTV() {
    const { currentUser, permissions } = useAdmin();
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 8;

    const [showEditModal, setShowEditModal] = useState(false);
    const [editAdmin, setEditAdmin] = useState(null);
    const [editForm, setEditForm] = useState({ name: '', email: '', role: '' });
    const [saving, setSaving] = useState(false);
    const [showDetailModal, setShowDetailModal] = useState(false);
    const [detailAdmin, setDetailAdmin] = useState(null);
    const [lockLoading, setLockLoading] = useState(null);
    const [showAddModal, setShowAddModal] = useState(false);
    const [addForm, setAddForm] = useState({ name: '', email: '', password: '', role: 'admin' });
    const [adding, setAdding] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const q = query(collection(db, "adminUsers"));
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

    const handleEdit = (admin) => {
        if (!permissions.canEditAdmins) {
            alert("Bạn không có quyền chỉnh sửa admin!");
            return;
        }
        if (currentUser.role === 'admin' && admin.role === 'superadmin') {
            alert("Bạn không thể chỉnh sửa tài khoản Super Admin!");
            return;
        }

        setEditAdmin(admin);
        setEditForm({
            name: admin.name || '',
            email: admin.email || '',
            role: admin.role || '',
        });
        setShowEditModal(true);
    };

    const handleDelete = async (id) => {
        if (!permissions.canDeleteAdmins) {
            alert("Bạn không có quyền xóa admin!");
            return;
        }

        const admin = data.find(u => u.id === id);
        if (admin.id === currentUser.uid) {
            alert("Bạn không thể xóa tài khoản của chính mình!");
            return;
        }
        if (currentUser.role === 'admin' && admin.role === 'superadmin') {
            alert("Bạn không thể xóa tài khoản Super Admin!");
            return;
        }

        if (window.confirm(`Bạn chắc chắn muốn xóa "${admin.name}" ?`)) {
            try {
                await deleteDoc(doc(db, "adminUsers", id));
                setData(prev => prev.filter(u => u.id !== id));
            } catch (error) {
                alert("Lỗi khi xóa admin!");
            }
        }
    };

    const handleCloseModal = () => {
        setShowEditModal(false);
        setEditAdmin(null);
    };

    const handleSave = async () => {
        if (!editAdmin) return;
        if (!permissions.canEditAdmins) {
            alert("Bạn không có quyền chỉnh sửa admin!");
            return;
        }

        setSaving(true);
        try {
            await updateDoc(doc(db, "adminUsers", editAdmin.id), {
                name: editForm.name,
                email: editForm.email,
                role: editForm.role,
            });
            setData(prev => prev.map(u => u.id === editAdmin.id ? { ...u, ...editForm } : u));
            setShowEditModal(false);
            setEditAdmin(null);
        } catch (e) {
            alert("Lỗi khi lưu chỉnh sửa!");
        }
        setSaving(false);
    };

    const handleShowDetail = (admin) => {
        setDetailAdmin(admin);
        setShowDetailModal(true);
    };

    const handleCloseDetail = () => {
        setShowDetailModal(false);
        setDetailAdmin(null);
    };
    const canEditThisAdmin = (admin) => {
        if (!permissions.canEditAdmins) return false;
        if (currentUser.role === 'admin' && admin.role === 'superadmin') return false;
        return true;
    };
    const canDeleteThisAdmin = (admin) => {
        if (!permissions.canDeleteAdmins) return false;
        if (admin.id === currentUser.uid) return false;
        if (currentUser.role === 'admin' && admin.role === 'superadmin') return false;
        return true;
    };
    const handleAddAdmin = async () => {
        if (!permissions.canManageAdmins) {
            alert("Bạn không có quyền thêm admin!");
            return;
        }

        if (!addForm.name || !addForm.email || !addForm.password) {
            alert("Vui lòng nhập đầy đủ thông tin!");
            return;
        }

        if (addForm.password.length < 6) {
            alert("Mật khẩu phải có ít nhất 6 ký tự!");
            return;
        }

        setAdding(true);
        try {
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                addForm.email,
                addForm.password
            );

            const user = userCredential.user;
            const newAdmin = {
                name: addForm.name,
                email: addForm.email,
                role: addForm.role,
                createdAt: new Date(),
                uid: user.uid
            };

            await setDoc(doc(db, "adminUsers", user.uid), newAdmin);
            setData(prev => [...prev, { id: user.uid, ...newAdmin }]);
            setShowAddModal(false);
            setAddForm({ name: '', email: '', password: '', role: 'admin' });
            alert("Thêm admin thành công! Admin có thể đăng nhập với email và mật khẩu vừa tạo.");
        } catch (error) {
            console.error("Error adding admin:", error);
            if (error.code === 'auth/email-already-in-use') {
                alert("Email này đã được sử dụng!");
            } else if (error.code === 'auth/weak-password') {
                alert("Mật khẩu quá yếu!");
            } else {
                alert("Lỗi khi thêm admin: " + error.message);
            }
        }
        setAdding(false);
    };

    const handleCloseAddModal = () => {
        setShowAddModal(false);
        setAddForm({ name: '', email: '', password: '', role: 'admin' });
    };

    return (
        <div>
            <div className="overflow-x-auto ">
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-2xl text-black font-bold">Quản lý Admin</h1>
                    <div className="flex items-center gap-4">
                        <div className="text-sm text-gray-600">
                            Vai trò hiện tại: <span className="font-semibold">{currentUser?.role}</span>
                        </div>
                        {permissions.canManageAdmins && (
                            <button
                                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                                onClick={() => setShowAddModal(true)}
                            >
                                Thêm Admin
                            </button>
                        )}
                    </div>
                </div>
                <div className="shadow-lg">
                    <table className="min-w-full text-gray-500 rounded">
                        <thead>
                            <tr>
                                <th className="border px-2 py-1">#ID</th>
                                <th className="border px-2 py-1">Name</th>
                                <th className="border px-2 py-1">Email</th>
                                <th className="border px-2 py-1">Role</th>
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
                                    <td className=" px-2 py-1">{u.email}</td>
                                    <td className=" px-2 py-1">
                                        <span className={`px-2 py-1 rounded text-xs font-semibold ${u.role === 'superadmin' ? 'bg-red-200 text-red-700' :
                                            u.role === 'admin' ? 'bg-blue-200 text-blue-700' :
                                                'bg-green-200 text-green-700'
                                            }`}>
                                            {u.role === 'superadmin' ? 'Super Admin' :
                                                u.role === 'admin' ? 'Admin' : 'Moderator'}
                                        </span>
                                    </td>
                                    <td className=" px-2 py-1 flex gap-2 justify-center">
                                        {canEditThisAdmin(u) && (
                                            <button
                                                className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
                                                onClick={() => handleEdit(u)}
                                            >
                                                Edit
                                            </button>
                                        )}
                                        {canDeleteThisAdmin(u) && (
                                            <button
                                                className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                                                onClick={() => handleDelete(u.id)}
                                            >
                                                Delete
                                            </button>
                                        )}
                                        {!canEditThisAdmin(u) && !canDeleteThisAdmin(u) && (
                                            <span className="text-gray-400 text-xs">Chỉ xem</span>
                                        )}
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
                            <h2 className="text-xl font-bold mb-4 text-gray-700">Chỉnh sửa</h2>
                            <div className="space-y-3">
                                <div>
                                    <label className="block text-gray-600 mb-1">Tên</label>
                                    <input type="text" className="w-full border rounded px-3 py-2" value={editForm.name} onChange={e => setEditForm(f => ({ ...f, name: e.target.value }))} />
                                </div>
                                <div>
                                    <label className="block text-gray-600 mb-1">Email</label>
                                    <input type="email" className="w-full border rounded px-3 py-2" value={editForm.email} onChange={e => setEditForm(f => ({ ...f, email: e.target.value }))} />
                                </div>
                                <div>
                                    <label className="block text-gray-600 mb-1">Vai trò</label>
                                    <select className="w-full border rounded px-3 py-2" value={editForm.role} onChange={e => setEditForm(f => ({ ...f, role: e.target.value }))}>
                                        {currentUser.role === 'superadmin' && (
                                            <option value="superadmin">Super Admin</option>
                                        )}
                                        <option value="admin">Admin</option>
                                        <option value="moderator">Moderator</option>
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
                {showDetailModal && detailAdmin && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
                        <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg relative">
                            <h2 className="text-xl font-bold mb-4 text-gray-700">Chi tiết</h2>
                            <div className="space-y-3 text-gray-700">
                                <div><span className="font-semibold">Tên:</span> {detailAdmin.name}</div>
                                <div><span className="font-semibold">Email:</span> {detailAdmin.email}</div>
                                <div><span className="font-semibold">Vai trò:</span>
                                    <span className={`ml-2 px-2 py-1 rounded text-xs font-semibold ${detailAdmin.role === 'superadmin' ? 'bg-red-200 text-red-700' :
                                        detailAdmin.role === 'admin' ? 'bg-blue-200 text-blue-700' :
                                            'bg-green-200 text-green-700'
                                        }`}>
                                        {detailAdmin.role === 'superadmin' ? 'Super Admin' :
                                            detailAdmin.role === 'admin' ? 'Admin' : 'Moderator'}
                                    </span>
                                </div>
                                <div>
                                    <span className="font-semibold">Ngày tạo tài khoản:</span>{' '}
                                    {detailAdmin.createdAt?.toDate().toLocaleString()}
                                </div>
                            </div>
                            <div className="flex justify-end gap-2 mt-6">
                                <button className="px-4 py-2 rounded bg-gray-300 text-gray-700 hover:bg-gray-400" onClick={handleCloseDetail}>Đóng</button>
                            </div>
                            <button className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 text-2xl" onClick={handleCloseDetail}>&times;</button>
                        </div>
                    </div>
                )}
                {showAddModal && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
                        <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg relative">
                            <h2 className="text-xl font-bold mb-4 text-gray-700">Thêm Admin mới</h2>
                            <div className="space-y-3">
                                <div>
                                    <label className="block text-gray-600 mb-1">Tên</label>
                                    <input
                                        type="text"
                                        className="w-full border rounded px-3 py-2"
                                        value={addForm.name}
                                        onChange={e => setAddForm(f => ({ ...f, name: e.target.value }))}
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-600 mb-1">Email (dùng để đăng nhập)</label>
                                    <input
                                        type="email"
                                        className="w-full border rounded px-3 py-2"
                                        value={addForm.email}
                                        onChange={e => setAddForm(f => ({ ...f, email: e.target.value }))}
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-600 mb-1">Mật khẩu</label>
                                    <input
                                        type="password"
                                        className="w-full border rounded px-3 py-2"
                                        value={addForm.password}
                                        onChange={e => setAddForm(f => ({ ...f, password: e.target.value }))}
                                        placeholder="Ít nhất 6 ký tự"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-600 mb-1">Vai trò</label>
                                    <select
                                        className="w-full border rounded px-3 py-2"
                                        value={addForm.role}
                                        onChange={e => setAddForm(f => ({ ...f, role: e.target.value }))}
                                    >
                                        {currentUser.role === 'superadmin' && (
                                            <option value="superadmin">Super Admin</option>
                                        )}
                                        <option value="admin">Admin</option>
                                        <option value="moderator">Moderator</option>
                                    </select>
                                </div>
                            </div>
                            <div className="flex justify-end gap-2 mt-6">
                                <button
                                    className="px-4 py-2 rounded bg-gray-300 text-gray-700 hover:bg-gray-400"
                                    onClick={handleCloseAddModal}
                                    disabled={adding}
                                >
                                    Huỷ
                                </button>
                                <button
                                    className="px-4 py-2 rounded bg-green-500 text-white hover:bg-green-600"
                                    onClick={handleAddAdmin}
                                    disabled={adding}
                                >
                                    {adding ? "Đang thêm..." : "Thêm"}
                                </button>
                            </div>
                            <button
                                className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 text-2xl"
                                onClick={handleCloseAddModal}
                            >
                                &times;
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
