"use client";
import { doc, setDoc } from "firebase/firestore";
import React, { useEffect, useState, useCallback } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase/firebase";
import {db} from "@/firebase/firebase";
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import { useRouter } from "next/navigation";
export default function DangKy() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const router = useRouter();
    const handleSubmit = async (e) => {

        e.preventDefault();
        setError("");
        setSuccess("");
        try {
            const userRegister =await createUserWithEmailAndPassword(auth, email, password);
            
            const user = userRegister.user;
            await setDoc(doc(db, "users", user.uid), {
                email: user.email,
                createdAt: new Date(),
                name: name,
                phone: phone,
                role:"user"
              });
            setSuccess("Đăng ký thành công");
            router.push("/");

        } catch (err) {
            setError(err.message);
        }
    };
    return (
        <div>
            <Navbar />
            <main>
            <div className="container mx-auto md:w-1/2 border border-black p-4 mt-4">
                <h1 className="text-3xl text-red-500 font-bold text-center mb-4">Đăng ký</h1>

                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="text-sm font-medium text-gray-700">
                            <label htmlFor="name">Họ và tên</label>
                            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className="border border-black p-2 w-full" placeholder="Nhập họ và tên" required />
                        </div>

                        <div className="text-sm font-medium text-gray-700">
                            <label htmlFor="phone">Số điện thoại</label>
                            <input type="text" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} className="border border-black p-2 w-full" placeholder="Nhập số điện thoại" required />
                        </div>

                        <div className="text-sm font-medium text-gray-700">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="border border-black p-2 w-full" placeholder="Nhập email" required />
                        </div>

                        <div className="text-sm font-medium text-gray-700">
                            <label htmlFor="password">Mật khẩu</label>
                            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="border border-black p-2 w-full" placeholder="Nhập mật khẩu" required />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-4">
                        <a className="bg-red-500 hover:bg-red-300 text-white text-center font-bold py-2 px-4 rounded w-full" href="/dang-nhap">Quay trở lại đăng nhập</a>
                        <button
                            type="submit"
                            className="bg-red-500 hover:bg-red-200 text-white font-bold py-2 px-4 rounded w-full">
                            Đăng Ký
                        </button>
                    </div>

                </form>
                {error && <p className="text-red-500 mt-2">{error}</p>}
                {success && <p className="text-green-500 mt-2">{success}</p>}
            </div>
            </main>
            <Footer />

        </div>
    );
}