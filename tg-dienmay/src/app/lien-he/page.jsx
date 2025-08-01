"use client";
import React, { useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function LienHePage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col">
      <Navbar />
      <div className="max-w-2xl mx-auto my-10 bg-white rounded-lg shadow-lg p-8 flex-1">
        
        <h1 className="text-3xl font-bold text-blue-700 mb-2">Liên hệ & Hỗ trợ</h1>
        <p className="mb-6 text-gray-600">
          Nếu bạn có thắc mắc, góp ý hoặc cần hỗ trợ, vui lòng điền thông tin vào form dưới đây. Chúng tôi sẽ phản hồi trong thời gian sớm nhất!
        </p>
        {submitted ? (
          <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded mb-4">
            Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất có thể.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block mb-1 font-medium text-gray-700">Họ và tên <span className="text-red-500">*</span></label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                placeholder="Nhập họ tên của bạn"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium text-gray-700">Email <span className="text-red-500">*</span></label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                placeholder="Nhập email của bạn"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium text-gray-700">Số điện thoại</label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                placeholder="Nhập số điện thoại (nếu có)"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium text-gray-700">Nội dung <span className="text-red-500">*</span></label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                placeholder="Nhập nội dung cần hỗ trợ..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition"
            >
              Gửi liên hệ
            </button>
          </form>
        )}
        <div className="mt-8 border-t pt-6">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <h2 className="text-xl font-semibold text-blue-700 mb-2">Câu hỏi thường gặp</h2>
              <ul className="space-y-3 text-gray-700">
                <li>
                  <span className="font-medium text-blue-600">Làm sao để kiểm tra tình trạng đơn hàng?</span>
                  <div className="text-sm">Bạn có thể kiểm tra tại mục <a href="/lich-su-don-hang" className="text-blue-500 underline">Lịch sử đơn hàng</a> hoặc liên hệ hotline để được hỗ trợ.</div>
                </li>
                <li>
                  <span className="font-medium text-blue-600">Tôi muốn đổi/trả sản phẩm thì làm thế nào?</span>
                  <div className="text-sm">Vui lòng xem <a href="/chinh-sach" className="text-blue-500 underline">chính sách đổi trả</a> hoặc liên hệ trực tiếp với chúng tôi.</div>
                </li>
                <li>
                  <span className="font-medium text-blue-600">Có hỗ trợ giao hàng toàn quốc không?</span>
                  <div className="text-sm">Chúng tôi hỗ trợ giao hàng toàn quốc với nhiều hình thức thanh toán linh hoạt.</div>
                </li>
                <li>
                  <span className="font-medium text-blue-600">Tôi cần tư vấn sản phẩm?</span>
                  <div className="text-sm">Gọi ngay <a href="tel:1900999999" className="text-blue-500 underline">1900 999 999</a> để được tư vấn miễn phí.</div>
                </li>
                <li>
                  <span className="font-medium text-blue-600">Có hỗ trợ lắp đặt tận nơi không?</span>
                  <div className="text-sm">Chúng tôi hỗ trợ lắp đặt tận nơi cho các sản phẩm điện máy lớn.</div>
                </li>
                <li>
                  <span className="font-medium text-blue-600">Tôi muốn xuất hóa đơn VAT?</span>
                  <div className="text-sm">Vui lòng để lại thông tin khi đặt hàng hoặc liên hệ bộ phận CSKH để được hỗ trợ xuất hóa đơn VAT.</div>
                </li>
              </ul>
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-semibold text-blue-700 mb-2">Thông tin liên hệ nhanh</h2>
              <ul className="space-y-2 text-gray-700">
                <li>
                  <span className="font-medium">Hotline mua hàng:</span>{" "}
                  <a href="tel:1900999999" className="text-blue-600 hover:underline font-semibold">1900 999 999</a> (8:00 - 21:30)
                </li>
                <li>
                  <span className="font-medium">Hỗ trợ bảo hành:</span>{" "}
                  <a href="tel:1900999999" className="text-blue-600 hover:underline font-semibold">1900 999 999</a> (8:00 - 21:00)
                </li>
                <li>
                  <span className="font-medium">Email:</span>{" "}
                  <a href="mailto:support@dienmaystore.vn" className="text-blue-600 hover:underline">support@dienmaystore.vn</a>
                </li>
                <li>
                  <span className="font-medium">Địa chỉ:</span> 123 Đường ABC, Quận 1, TP. Hồ Chí Minh
                </li>
                <li>
                  <span className="font-medium">Facebook:</span>{" "}
                  <a href="https://facebook.com" target="_blank" className="text-blue-600 hover:underline">facebook.com/dienmaystore</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-6">
          <h2 className="text-xl font-semibold text-blue-700 mb-2">Bản đồ cửa hàng</h2>
          <div className="rounded-lg overflow-hidden shadow border">
            <iframe
              title="Bản đồ cửa hàng"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.466099293254!2d106.7004233153347!3d10.77637369232259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f1c1b1b1b1b%3A0x1b1b1b1b1b1b1b1b!2zMTIzIMSQxrDhu51uZyBBQkMsIFF14bqtbiAxLCBUUC4gSOG7kyBDaMOtbmggTWluaA!5e0!3m2!1svi!2s!4v1688888888888!5m2!1svi!2s"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}