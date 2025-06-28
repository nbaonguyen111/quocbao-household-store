"use client";
import React, { useEffect, useState } from "react";
import { db } from "../../../firebase/firebase";
import {
    collection,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
} from "firebase/firestore";

export default function ProductAdminPage() {
    const [products, setProducts] = useState([]);
    const [form, setForm] = useState({
        name: "",
        category: "",
        price: "",
        imageUrl: "",
        description: "",
    });
    const [editId, setEditId] = useState(null);
    const [message, setMessage] = useState(""); // Thêm state cho thông báo

    // Fetch products
    const fetchProducts = async () => {
        const snap = await getDocs(collection(db, "products"));
        setProducts(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    // Handle form change
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    // Add or update product
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (editId) {
            await updateDoc(doc(db, "products", editId), {
                ...form,
                price: Number(form.price),
            });
            setMessage("Cập nhật thành công!");
        } else {
            await addDoc(collection(db, "products"), {
                ...form,
                price: Number(form.price),
            });
            setMessage("Thêm thành công!");
        }
        setForm({
            name: "",
            category: "",
            price: "",
            imageUrl: "",
            description: "",
        });
        setEditId(null);
        fetchProducts();
        setTimeout(() => setMessage(""), 2000); // Ẩn thông báo sau 2 giây
    };

    // Edit product
    const handleEdit = (product) => {
        setForm({
            name: product.name || "",
            category: product.category || "",
            price: product.price ?? "",
            imageUrl: product.imageUrl || "",
            description: product.description || "",
        });
        setEditId(product.id);
    };

    // Delete product
    const handleDelete = async (id) => {
        if (window.confirm("Bạn có chắc muốn xoá sản phẩm này?")) {
            await deleteDoc(doc(db, "products", id));
            fetchProducts();
            setMessage("Xoá thành công!");
            setTimeout(() => setMessage(""), 2000);
        }
    };


    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Product List</h2>
            {/* Hiển thị thông báo */}
            {message && (
                <div className="mb-4 px-4 py-2 bg-green-100 text-green-700 rounded border border-green-300 transition">
                    {message}
                </div>
            )}
            {/* Form */}
            <form onSubmit={handleSubmit} className="mb-6 flex gap-4 flex-wrap items-end">
                <input
                    name="name"
                    placeholder="Product Name"
                    value={form.name}
                    onChange={handleChange}
                    className="border px-2 py-1 rounded"
                    required
                />
                <input
                    name="category"
                    placeholder="Category"
                    value={form.category}
                    onChange={handleChange}
                    className="border px-2 py-1 rounded"
                    required
                />
                <input
                    name="price"
                    placeholder="Price"
                    type="number"
                    value={form.price}
                    onChange={handleChange}
                    className="border px-2 py-1 rounded"
                    required
                />
                <input
                    name="imageUrl"
                    placeholder="Image URL"
                    value={form.imageUrl}
                    onChange={handleChange}
                    className="border px-2 py-1 rounded"
                />
                <input
                    name="description"
                    placeholder="Description"
                    value={form.description}
                    onChange={handleChange}
                    className="border px-2 py-1 rounded w-60"
                />
                <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700"
                >
                    {editId ? "Update" : "Add"}
                </button>
                {editId && (
                    <button
                        type="button"
                        onClick={() => {
                            setEditId(null);
                            setForm({
                                name: "",
                                category: "",
                                price: "",
                                imageUrl: "",
                                description: "",
                            });
                        }}
                        className="bg-gray-400 text-white px-4 py-1 rounded hover:bg-gray-500"
                    >
                        Cancel
                    </button>
                )}
            </form>
            {/* Table */}
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border rounded">
                    <thead>
                        <tr>
                            <th className="border px-2 py-1">#ID</th>
                            <th className="border px-2 py-1">Image</th>
                            <th className="border px-2 py-1">Product Name</th>
                            <th className="border px-2 py-1">Category</th>
                            <th className="border px-2 py-1">Price</th>
                            <th className="border px-2 py-1">Description</th>
                            <th className="border px-2 py-1">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((p, idx) => (
                            <tr key={p.id}>
                                <td className="border px-2 py-1 text-center">{idx + 1}</td>
                                <td className="border px-2 py-1 text-center">
                                    {p.imageUrl ? (
                                        <img src={p.imageUrl} alt={p.name} className="h-10 mx-auto" />
                                    ) : (
                                        <span className="text-gray-400">No image</span>
                                    )}
                                </td>
                                <td className="border px-2 py-1">{p.name}</td>
                                <td className="border px-2 py-1">{p.category}</td>
                                <td className="border px-2 py-1">{Number(p.price).toLocaleString()}₫</td>
                                <td className="border px-2 py-1">{p.description}</td>
                                <td className="border px-2 py-1 flex gap-2 justify-center">
                                    <button
                                        className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
                                        onClick={() => handleEdit(p)}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                                        onClick={() => handleDelete(p.id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                        {products.length === 0 && (
                            <tr>
                                <td colSpan={7} className="text-center py-4 text-gray-400">
                                    No products found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}