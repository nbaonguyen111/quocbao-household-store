'use client';
import { collection, getDocs, deleteDoc, doc, updateDoc, setDoc } from "firebase/firestore";
import { db } from "@/firebase/firebase";
import React, { useState, useEffect } from "react";
import { FaPlus, FaTrash, FaEdit, FaList, FaTags, FaImage, FaTimes } from "react-icons/fa";

export default function Danhmuc() {
  const [categories, setCategories] = useState([]);
  const [form, setForm] = useState({ id: "", name: "", icon: "" });
  const [editId, setEditId] = useState(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);

  
  const fetchCategories = async () => {
    setLoading(true);
    const snap = await getDocs(collection(db, "categories"));
    setCategories(snap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    setLoading(false);
  };

  useEffect(() => { fetchCategories(); }, []);

  useEffect(() => {
    if (message) {
      const t = setTimeout(() => setMessage(""), 2000);
      return () => clearTimeout(t);
    }
  }, [message]);

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.id.trim() || !form.name.trim()) return;
    try {
      
      if (!editId && categories.some(c => c.id === form.id.trim())) {
        setMessage("ID này đã tồn tại, vui lòng chọn ID khác!");
        return;
      }
      if (editId) {
        
        await updateDoc(doc(db, "categories", editId), {
          name: form.name.trim(),
          icon: form.icon.trim(),
        });
        setMessage("Cập nhật thành công!");
      } else {
        
        await setDoc(doc(db, "categories", form.id.trim()), {
          name: form.name.trim(),
          icon: form.icon.trim(),
        });
        setMessage("Thêm danh mục thành công!");
      }
      setForm({ id: "", name: "", icon: "" });
      setEditId(null);
      fetchCategories();
    } catch (err) {
      setMessage("Có lỗi xảy ra khi cập nhật/thêm danh mục!");
      console.error(err);
    }
  };

  
  const handleDelete = async (id) => {
    if (!confirm("Bạn chắc chắn muốn xóa danh mục này?")) return;
    await deleteDoc(doc(db, "categories", id));
    setMessage("Đã xóa danh mục!");
    fetchCategories();
  };

  
  const handleEdit = (cat) => {
    setEditId(cat.id);
    setForm({ id: cat.id, name: cat.name, icon: cat.icon || "" });
  };

 
  const handleCancel = () => {
    setEditId(null);
    setForm({ id: "", name: "", icon: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-8">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-2xl font-bold text-blue-700 mb-6 flex items-center gap-2">
          <FaList className="text-blue-500" /> Quản lý danh mục sản phẩm
        </h1>
        {message && (
          <div className="mb-4 px-4 py-2 bg-green-100 border border-green-300 text-green-700 rounded shadow text-center animate-bounce">
            {message}
          </div>
        )}
        <form onSubmit={handleSubmit} className="flex gap-2 mb-6 flex-wrap">
          <input
            type="text"
            className="border rounded px-3 py-2 flex-1 focus:ring-2 focus:ring-blue-300"
            placeholder="ID (ví dụ: tv, ac, fridge...)"
            value={form.id}
            onChange={e => setForm({ ...form, id: e.target.value })}
            
          />
          <input
            type="text"
            className="border rounded px-3 py-2 flex-1 focus:ring-2 focus:ring-blue-300"
            placeholder="Tên danh mục..."
            value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })}
          />
          <input
            type="text"
            className="border rounded px-3 py-2 flex-1 focus:ring-2 focus:ring-blue-300"
            placeholder="Link ảnh icon (VD: /images/tivi.png)"
            value={form.icon}
            onChange={e => setForm({ ...form, icon: e.target.value })}
          />
          <button
            type="submit"
            className={`flex items-center gap-1 px-4 py-2 rounded text-white font-semibold transition
              ${editId ? "bg-yellow-500 hover:bg-yellow-600" : "bg-blue-600 hover:bg-blue-700"}`}
          >
            {editId ? <FaEdit /> : <FaPlus />}
            {editId ? "Cập nhật" : "Thêm"}
          </button>
          {editId && (
            <button
              type="button"
              className="px-3 py-2 rounded bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold flex items-center gap-1"
              onClick={handleCancel}
            >
              <FaTimes /> Hủy
            </button>
          )}
        </form>
        <div className="overflow-x-auto">
          <table className="min-w-full border text-sm rounded-lg overflow-hidden shadow">
            <thead>
              <tr className="bg-blue-100">
                <th className="p-2 border text-left">ID</th>
                <th className="p-2 border text-left">Tên danh mục</th>
                <th className="p-2 border text-left">Icon</th>
                <th className="p-2 border w-32 text-center">Thao tác</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((c) => (
                <tr key={c.id} className="hover:bg-blue-50 transition">
                  <td className="p-2 border">{c.id}</td>
                  <td className="p-2 border">{c.name}</td>
                  <td className="p-2 border">
                    {c.icon ? (
                      <img src={c.icon} alt={c.name} className="w-10 h-10 object-contain rounded shadow border" />
                    ) : (
                      <span className="text-gray-400 flex items-center gap-1"><FaImage /> Không có</span>
                    )}
                  </td>
                  <td className="p-2 border flex gap-2 justify-center">
                    <button
                      className="text-yellow-600 hover:text-yellow-800"
                      onClick={() => handleEdit(c)}
                      title="Sửa"
                    >
                      <FaEdit />
                    </button>
                    <button
                      className="text-red-600 hover:text-red-800"
                      onClick={() => handleDelete(c.id)}
                      title="Xóa"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
              {categories.length === 0 && (
                <tr>
                  <td colSpan={4} className="text-center text-gray-500 py-4">Chưa có danh mục nào.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        {loading && <div className="text-center text-blue-600 mt-4">Đang tải dữ liệu...</div>}
      </div>
    </div>
  );
}
