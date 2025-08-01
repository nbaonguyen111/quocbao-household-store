"use client";
import { useEffect, useState } from "react";
import { db } from "@/firebase/firebase";
import { collection, getDocs, doc, deleteDoc, getDoc, updateDoc } from "firebase/firestore";

export default function Danhgia() {
    const [allReviews, setAllReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filterStar, setFilterStar] = useState(-1);

    useEffect(() => {
        fetchAllReviews();
    }, []);

    async function fetchAllReviews() {
        setLoading(true);
        const productsCol = collection(db, "products");
        const productsSnap = await getDocs(productsCol);
        const reviewsArr = [];
        for (const productDoc of productsSnap.docs) {
            const productId = productDoc.id;
            const reviewsCol = collection(db, "products", productId, "reviews");
            const reviewsSnap = await getDocs(reviewsCol);
            for (const reviewDoc of reviewsSnap.docs) {
                const reviewData = reviewDoc.data();
                let userName = reviewData.userId;
                // Lấy tên đăng nhập từ collection users
                if (reviewData.userId && reviewData.userId !== "Khách" && reviewData.userId !== "demoUser") {
                    const userRef = doc(db, "users", reviewData.userId);
                    const userSnap = await getDoc(userRef);
                    if (userSnap.exists()) {
                        userName = userSnap.data().displayName || userName;
                    }
                }
                reviewsArr.push({
                    ...reviewData,
                    productId,
                    reviewId: reviewDoc.id,
                    productName: productDoc.data().name,
                    userName,
                    hidden: reviewData.hidden ?? false,
                    reported: reviewData.reported ?? false,
                });
            }
        }
        setAllReviews(reviewsArr);
        setLoading(false);
    }

    const ratingLabels = ["Chưa đánh giá", "Rất tệ", "Tệ", "Tạm ổn", "Tốt", "Rất tốt"];
    const filteredReviews = filterStar === -1
        ? allReviews
        : allReviews.filter(r => (r.rating ?? 0) === filterStar);

    // Xoá đánh giá
    const handleDelete = async (productId, reviewId) => {
        if (window.confirm("Bạn có chắc muốn xoá đánh giá này?")) {
            await deleteDoc(doc(db, "products", productId, "reviews", reviewId));
            fetchAllReviews();
        }
    };

    // Ẩn/hiện đánh giá
    const handleToggleHidden = async (productId, reviewId, current) => {
        await updateDoc(doc(db, "products", productId, "reviews", reviewId), {
            hidden: !current,
        });
        fetchAllReviews();
    };

    // Đánh dấu báo cáo bình luận xấu
    const handleReport = async (productId, reviewId, current) => {
        await updateDoc(doc(db, "products", productId, "reviews", reviewId), {
            reported: !current,
        });
        fetchAllReviews();
    };

    return (
        <div className="p-8 min-h-screen bg-gray-100">
            <h1 className="text-2xl font-bold mb-6">Quản lý đánh giá sản phẩm</h1>
            <div className="mb-4 flex items-center gap-2">
                <span>Lọc theo số sao:</span>
                <select
                    className="border rounded px-2 py-1"
                    value={filterStar}
                    onChange={e => setFilterStar(Number(e.target.value))}
                >
                    <option value={-1}>Tất cả</option>
                    <option value={0}>0 sao - Chưa đánh giá</option>
                    <option value={1}>1 sao - Rất tệ</option>
                    <option value={2}>2 sao - Tệ</option>
                    <option value={3}>3 sao - Tạm ổn</option>
                    <option value={4}>4 sao - Tốt</option>
                    <option value={5}>5 sao - Rất tốt</option>
                </select>
            </div>
            {loading ? (
                <div>Đang tải dữ liệu...</div>
            ) : (
                <div className="bg-white rounded-lg shadow p-6">
                    <table className="w-full text-sm border">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="border px-2 py-2">Sản phẩm</th>
                                <th className="border px-2 py-2">Người đánh giá</th>
                                <th className="border px-2 py-2">Số sao</th>
                                <th className="border px-2 py-2">Nội dung</th>
                                <th className="border px-2 py-2">Thời gian</th>
                                <th className="border px-2 py-2">Trạng thái</th>
                                <th className="border px-2 py-2">Thao tác</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredReviews.length === 0 && (
                                <tr>
                                    <td colSpan={7} className="text-center py-4 text-gray-500">Không có đánh giá phù hợp.</td>
                                </tr>
                            )}
                            {filteredReviews.map((r, idx) => (
                                <tr key={idx} className={r.hidden ? "bg-gray-100 opacity-60" : ""}>
                                    <td className="border px-2 py-2">{r.productName}</td>
                                    <td className="border px-2 py-2">{r.userName}</td>
                                    <td className="border px-2 py-2">
                                        <div className="flex items-center gap-1">
                                            {[1,2,3,4,5].map(star => (
                                                <svg key={star} width="16" height="16" viewBox="0 0 24 24"
                                                    fill={star <= (r.rating ?? 0) ? "#FFA500" : "none"}
                                                    stroke="#FFA500"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                >
                                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                                                </svg>
                                            ))}
                                            <span className="ml-2 text-xs">{ratingLabels[r.rating ?? 0]}</span>
                                        </div>
                                    </td>
                                    <td className="border px-2 py-2">{r.text}</td>
                                    <td className="border px-2 py-2">{r.date}</td>
                                    <td className="border px-2 py-2">
                                        {r.hidden ? (
                                            <span className="text-red-500 font-semibold">Đã ẩn</span>
                                        ) : (
                                            <span className="text-green-600 font-semibold">Hiện</span>
                                        )}
                                        {r.reported && (
                                            <div className="text-xs text-orange-600 font-semibold">Bị báo cáo</div>
                                        )}
                                    </td>
                                    <td className="border px-2 py-2 flex flex-col gap-1">
                                        <button
                                            className={`px-2 py-1 rounded ${r.hidden ? "bg-green-500" : "bg-gray-400"} text-white`}
                                            onClick={() => handleToggleHidden(r.productId, r.reviewId, r.hidden)}
                                        >
                                            {r.hidden ? "Hiện" : "Ẩn"}
                                        </button>
                                        <button
                                            className={`px-2 py-1 rounded ${r.reported ? "bg-orange-600" : "bg-orange-400"} text-white`}
                                            onClick={() => handleReport(r.productId, r.reviewId, r.reported)}
                                        >
                                            {r.reported ? "Bỏ báo cáo" : "Báo xấu"}
                                        </button>
                                        <button
                                            className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                                            onClick={() => handleDelete(r.productId, r.reviewId)}
                                        >
                                            Xoá
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}