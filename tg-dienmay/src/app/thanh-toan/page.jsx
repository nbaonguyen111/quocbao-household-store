"use client";
import { useEffect, useState } from "react";
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import { db } from "@/firebase/firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { collection, getDocs, doc, getDoc, setDoc, addDoc, serverTimestamp } from "firebase/firestore";
import { Toaster, toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function Thanhtoan() {
    const [userId, setUserId] = useState(null);
    const [cartItems, setCartItems] = useState([]);
    const [shippingAddress, setShippingAddress] = useState("");
    const [receiverName, setReceiverName] = useState("");
    const [receiverPhone, setReceiverPhone] = useState("");
    const router = useRouter();

    const handleCheckout = async () => {
        if (!receiverName || !receiverPhone || !shippingAddress || cartItems.length === 0) {
            toast.error("Vui lòng nhập đầy đủ thông tin và có sản phẩm trong giỏ!");
            return;
        }
        try {
            await addDoc(collection(db, "orders"), {
                userId,
                receiverName,
                receiverPhone,
                shippingAddress,
                items: cartItems,
                total: totalPrice,
                createdAt: serverTimestamp(),
            });
            setCartItems([]);
            toast.success("Thanh toán thành công!", {
                duration: 1200,
                onClose: () => router.push("/TrangChu")
            });
        } catch (err) {
            toast.error("Có lỗi khi thanh toán!");
        }
    };
    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) setUserId(user.uid);
            else setUserId("demoUser");
        });
        return () => unsubscribe();
    }, []);

    useEffect(() => {
        const fetchCart = async () => {
            if (!userId) return;
            const itemsCol = collection(db, "carts", userId, "items");
            const snapshot = await getDocs(itemsCol);
            const items = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            const merged = [];
            items.forEach(item => {
                const found = merged.find(i => i.name === item.name);
                if (found) {
                    found.quantity += item.quantity;
                    found.price += item.price * item.quantity;
                } else {
                    merged.push({ ...item, price: item.price * item.quantity });
                }
            });
            setCartItems(merged);
            const cartDoc = await getDoc(doc(db, "carts", userId));
            if (cartDoc.exists()) {
                setShippingAddress(cartDoc.data().address || "");
            }
        };
        fetchCart();
    }, [userId]);
    const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

    return (
        <>
            <Toaster />
            <Navbar />
            <div className="p-8 text-center">
                <h1 className="text-2xl font-bold mb-4">Thanh toán</h1>
                <div className="max-w-2xl mx-auto mb-6 text-left bg-white p-4 rounded shadow">
                    <div className="mb-3">
                        <label className="font-semibold block mb-1">Tên người nhận</label>
                        <input
                            className="border rounded px-3 py-2 w-full"
                            value={receiverName}
                            onChange={e => setReceiverName(e.target.value)}
                            placeholder="Nhập tên người nhận"
                        />
                    </div>
                    <div className="mb-3">
                        <label className="font-semibold block mb-1">Số điện thoại</label>
                        <input
                            className="border rounded px-3 py-2 w-full"
                            value={receiverPhone}
                            onChange={e => setReceiverPhone(e.target.value)}
                            placeholder="Nhập số điện thoại"
                            type="tel"
                        />
                    </div>
                    <div className="mb-3">
                        <label className="font-semibold block mb-1">Địa chỉ nhận hàng</label>
                        <input
                            className="border rounded px-3 py-2 w-full"
                            value={shippingAddress}
                            onChange={e => setShippingAddress(e.target.value)}
                            placeholder="Nhập địa chỉ nhận hàng"
                        />
                    </div>
                </div>
                <div className="max-w-2xl mx-auto">
                    <table className="w-full border mt-6">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="py-2 px-4 border">Tên sản phẩm</th>
                                <th className="py-2 px-4 border">Số lượng</th>
                                <th className="py-2 px-4 border">Tổng giá</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map(item => (
                                <tr key={item.name}>
                                    <td className="py-2 px-4 border">{item.name}</td>
                                    <td className="py-2 px-4 border">{item.quantity}</td>
                                    <td className="py-2 px-4 border text-right">{item.price.toLocaleString()}₫</td>
                                </tr>
                            ))}
                            {cartItems.length === 0 && (
                                <tr>
                                    <td colSpan={3} className="py-4 text-gray-500 text-center">Không có sản phẩm nào trong giỏ hàng</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                    <div className="border-b-4 border-red-500 my-4"></div>
                    <div className="text-right font-bold text-lg text-red-600 mb-4">
                        Tổng tiền cần thanh toán: {totalPrice.toLocaleString()}₫
                    </div>
                    <button
                        className="bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-2 rounded"
                        onClick={handleCheckout}
                    >
                        Thanh toán
                    </button>
                </div>
            </div>
            <Footer />
        </>
    );
}