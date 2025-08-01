'use client';
import React, { useState, useEffect } from "react";
import { collection, getDocs, addDoc, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "@/firebase/firebase";
import { FaPlus, FaTrash, FaEdit, FaList, FaTags } from "react-icons/fa";

export default function Danhmuc() {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editingName, setEditingName] = useState("");
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true);
      const snap = await getDocs(collection(db, "categories"));
      setCategories(snap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      setLoading(false);
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    if (message) {
      const t = setTimeout(() => setMessage(""), 2000);
      return () => clearTimeout(t);
    }
  }, [message]);
  const handleAdd = async (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    const docRef = await addDoc(collection(db, "categories"), { name: name.trim() });
    setCategories([...categories, { id: docRef.id, name: name.trim() }]);
    setName("");
    setMessage("Thêm danh mục thành công!");
  };
  const handleDelete = async (id) => {
    if (!confirm("Bạn chắc chắn muốn xóa danh mục này?")) return;
    await deleteDoc(doc(db, "categories", id));
    setCategories(categories.filter(c => c.id !== id));
    setMessage("Đã xóa danh mục!");
  };

  const handleEdit = (id, name) => {
    setEditingId(id);
    setEditingName(name);
  };
  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!editingName.trim()) return;
    await updateDoc(doc(db, "categories", editingId), { name: editingName.trim() });
    setCategories(categories.map(c => c.id === editingId ? { ...c, name: editingName.trim() } : c));
    setEditingId(null);
    setEditingName("");
    setMessage("Cập nhật thành công!");
  };
  const badgeColors = [
    "bg-blue-200 text-blue-700",
    "bg-green-200 text-green-700",
    "bg-yellow-200 text-yellow-700",
    "bg-pink-200 text-pink-700",
    "bg-purple-200 text-purple-700",
    "bg-orange-200 text-orange-700",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-8">
      <div className="max-w-2xl mx-auto bg-blue-900 rounded-xl shadow-lg p-8">
        <h1 className="text-2xl font-bold text-blue-700 mb-6 flex items-center gap-2">
          <FaList className="text-blue-500" /> Quản lý danh mục sản phẩm
        </h1>
        {message && (
          <div className="mb-4 px-4 py-2 bg-green-100 border border-green-300 text-green-700 rounded shadow text-center animate-bounce">
            {message}
          </div>
        )}
        <form onSubmit={editingId ? handleUpdate : handleAdd} className="flex gap-2 mb-6">
          <input
            type="text"
            className="border rounded px-3 py-2 flex-1 focus:ring-2 focus:ring-blue-300"
            placeholder="Tên danh mục..."
            value={editingId ? editingName : name}
            onChange={e => editingId ? setEditingName(e.target.value) : setName(e.target.value)}
          />
          <button
            type="submit"
            className={`flex items-center gap-1 px-4 py-2 rounded text-white font-semibold transition
              ${editingId ? "bg-yellow-500 hover:bg-yellow-600" : "bg-blue-600 hover:bg-blue-700"}`}
          >
            {editingId ? <FaEdit /> : <FaPlus />}
            {editingId ? "Cập nhật" : "Thêm"}
          </button>
          {editingId && (
            <button
              type="button"
              className="px-3 py-2 rounded bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold"
              onClick={() => { setEditingId(null); setEditingName(""); }}
            >
              Hủy
            </button>
          )}
        </form>
        <div className="overflow-x-auto">
          <table className="min-w-full border text-sm rounded-lg overflow-hidden shadow">
            <thead>
              <tr className="bg-blue-100">
                <th className="p-2 border text-left">Tên danh mục</th>
                <th className="p-2 border w-32 text-center">Thao tác</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((c, idx) => (
                <tr key={c.id} className="hover:bg-blue-50 transition">
                  <td className="p-2 border flex items-center gap-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1 ${badgeColors[idx % badgeColors.length]}`}>
                      <FaTags /> {c.name}
                    </span>
                  </td>
                  <td className="p-2 border flex gap-2 justify-center">
                    <button
                      className="text-yellow-600 hover:text-yellow-800"
                      onClick={() => handleEdit(c.id, c.name)}
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
                  <td colSpan={2} className="text-center text-gray-500 py-4">Chưa có danh mục nào.</td>
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

