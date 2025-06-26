'use client';
import { useEffect, useState } from 'react';
import 'flowbite';

const categories = [
  { id: 'ac', name: 'Máy Lạnh', icon: '/images/maylanh.png' },
  { id: 'tv', name: 'Tivi', icon: '/images/tivi.png' },
  { id: 'fridge', name: 'Tủ Lạnh', icon: '/images/tulanh.png' },
  { id: 'washer', name: 'Máy Giặt', icon: '/images/maygiat.png' },
  { id: 'microwave', name: 'Máy quạt', icon: '/images/mayquat.png' }
];

export default function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => { }, []);

  return (
    <div>
      {/* Banner phía trên */}
      <img
        src="/images/banner1.png"
        alt="Banner"
        className="w-full max-h-72 object-contain mx-auto"
      />

      {/* Navbar chính */}
      <nav className="bg-[#2196f3] w-full">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 py-2 relative">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2">
            <img src="/images/logo1.png" alt="Logo" className="h-32 w-32" />
          </a>
          {/* Danh mục */}
          <div className="relative">
            <button
              className="flex items-center text-white font-medium px-3 py-2 rounded hover:bg-blue-700 transition"
              onClick={() => setShowDropdown((v) => !v)}
              onBlur={() => setTimeout(() => setShowDropdown(false), 150)}
            >
              <svg className="w-6 h-6 mr-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              Danh mục
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {showDropdown && (
              <div className="absolute left-0 mt-2 w-56 bg-white rounded shadow-lg z-20 animate-fade-in">
                <ul className="divide-y divide-gray-100">
                  {categories.map((cat) => (
                    <li key={cat.id}>
                      <a
                        href={`/san-pham?category=${cat.id}`}
                        className="flex items-center gap-3 px-4 py-3 hover:bg-blue-50 transition text-gray-800"
                        onClick={() => setShowDropdown(false)}
                      >
                        <img src={cat.icon} alt={cat.name} className="w-8 h-8 object-contain" />
                        <span className="font-medium">{cat.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Thanh tìm kiếm */}
          <form className="flex-1 mx-4 max-w-xl">
            <div className="relative">
              <input
                type="text"
                className="w-full pl-10 pr-4 py-2 rounded-full text-sm focus:outline-none bg-white"
                placeholder="Bạn tìm gì..."
              />
              <span className="absolute left-3 top-2.5 text-gray-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </span>
            </div>
          </form>

          {/* Đăng nhập */}
          <a href="#" className="flex items-center text-white px-3 py-2 rounded hover:bg-blue-700 transition">
            <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A9 9 0 1112 21a9 9 0 01-6.879-3.196z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Đăng nhập
          </a>

          {/* Giỏ hàng */}
          <a href="#" className="flex items-center text-white px-3 py-2 rounded hover:bg-blue-700 transition relative">
            <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
            </svg>
            Giỏ hàng
          </a>
        </div>
      </nav>
    </div>
  );
}