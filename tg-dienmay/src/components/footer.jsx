'use client';
import { useEffect } from 'react';
import 'flowbite';

export default function Footer() {
    useEffect(() => { }, []);

    return (
        <footer className="bg-white rounded-lg shadow-sm mt-4 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
            <div className="w-full mx-auto max-w-screen-xl p-6 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm text-gray-700 dark:text-gray-300">
                {/* Tổng đài hỗ trợ */}
                <div>
                    <div className="font-bold mb-2 text-blue-700">Tổng đài hỗ trợ</div>
                    <div>
                        Gọi mua: <a href="tel:1900232461" className="text-blue-600 font-semibold hover:underline">1900 999 999</a> (8:00 - 21:30)
                    </div>
                    <div>
                        Khiếu nại: <a href="tel:18001063" className="text-blue-600 font-semibold hover:underline">1800.9999</a> (8:00 - 21:30)
                    </div>
                    <div>
                        Bảo hành: <a href="tel:1900232465" className="text-blue-600 font-semibold hover:underline">1900 999 999</a> (8:00 - 21:00)
                    </div>
                    <div className="mt-3">
                        <a href="/lien-he" className="text-blue-600 hover:underline">Liên hệ & Hỗ trợ</a>
                    </div>
                </div>
                {/* Về công ty */}
                <div>
                    <div className="font-bold mb-2 text-blue-700">Về công ty</div>
                    <ul className="space-y-1">
                        <li><a href="#" className="hover:underline">Giới thiệu công ty (MWG.vn)</a></li>
                        <li><a href="#" className="hover:underline">Tuyển dụng</a></li>
                        <li><a href="#" className="hover:underline">Gửi góp ý, khiếu nại</a></li>
                        <li><a href="#" className="hover:underline">Tìm siêu thị (2956 shop)</a></li>
                        <li><a href="/chinh-sach" className="hover:underline">Chính sách bảo mật</a></li>
                        <li><a href="/dieu-khoan" className="hover:underline">Điều khoản sử dụng</a></li>
                    </ul>
                </div>
                {/* Thông tin khác */}
                <div>
                    <div className="font-bold mb-2 text-blue-700">Thông tin khác</div>
                    <ul className="space-y-1">
                        <li><a href="#" className="hover:underline">Tích điểm Quà tặng VIP</a></li>
                        <li><a href="#" className="hover:underline">Lịch sử mua hàng</a></li>
                        <li><a href="#" className="hover:underline">Đăng ký bán hàng CTV chiết khấu cao</a></li>
                        <li><a href="#" className="hover:underline">Tìm hiểu về mua trả chậm</a></li>
                        <li><a href="/faq" className="hover:underline">Câu hỏi thường gặp (FAQ)</a></li>
                        <li>
                            <a href="/tim-kiem" className="hover:underline text-blue-600 font-semibold">
                                Tìm kiếm sản phẩm
                            </a>
                        </li>
                    </ul>
                </div>
                {/* Website cùng tập đoàn & Mạng xã hội */}
                <div>
                    <div className="font-bold mb-2 text-blue-700">Website cùng tập đoàn</div>
                    <div className="flex flex-wrap gap-2 mb-2 items-center">
                        <a href="#"><img src="/images/logo-the-gioi-di-dong-2.jpg" alt="thegioididong" className="h-7 w-auto rounded" /></a>
                        <a href="#"><img src="/images/logo_topzone.png" alt="topzone" className="h-7 w-auto rounded" /></a>
                        <a href="#"><img src="/images/Logo-Bach-Hoa-Xanh-H.webp" alt="Bách hóa XANH" className="h-7 w-auto rounded" /></a>
                        <a href="#"><img src="/images/logo-nhathuocankhang.png" alt="Nhà thuốc An Khang" className="h-7 w-auto rounded" /></a>
                        <a href="#"><img src="/images/og_image_v1.png" alt="eraBlue" className="h-7 w-auto rounded" /></a>
                        <a href="#"><img src="/images/dien-may-xanh.jpg" alt="Thế giới di động" className="h-7 w-auto rounded" /></a>
                    </div>
                    <div className="font-bold mb-2 text-blue-700">Kết nối với chúng tôi</div>
                    <div className="flex flex-wrap gap-4 mb-2 items-center">
                        <a href="#" className="flex items-center text-blue-600 hover:underline">
                            <img src="/images/Facebook_Logo_(2019).png" alt="Facebook" className="h-5 w-5 mr-1" />
                            3886.8k Fan
                        </a>
                        <a href="#" className="flex items-center text-blue-600 hover:underline">
                            <img src="/images/Youtube_logo.png" alt="YouTube" className="h-5 w-5 mr-1" />
                            684k Đăng ký
                        </a>
                        <a href="#" className="flex items-center text-blue-600 hover:underline">
                            <img src="/images/Icon_of_Zalo.svg.webp" alt="Zalo" className="h-5 w-5 mr-1" />
                            Zalo DMX
                        </a>
                    </div>
                </div>
            </div>
            <div className="w-full mx-auto max-w-screen-xl px-6 pb-4 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 dark:text-gray-400">
                <div className="mb-2 md:mb-0">© {new Date().getFullYear()} <a href="/" className="font-semibold text-blue-700">Điện Máy Store</a>. All rights reserved.</div>
                <div className="flex gap-4">
                    <a href="/chinh-sach" className="hover:underline">Chính sách bảo mật</a>
                    <a href="/dieu-khoan" className="hover:underline">Điều khoản sử dụng</a>
                </div>
            </div>
        </footer>
    );
}