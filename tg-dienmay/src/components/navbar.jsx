'use client';
import { use, useEffect } from 'react';
import 'flowbite';

export default function Navbar() {
  useEffect(() => {
    
  }, []);

  return (
    <nav className="bg-white border-b border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between">
        <a href="/" className="flex items-center space-x-3">
          <img src="/images/logo.png" className="h-20 w-auto" alt="Logo" />
        </a>

        <button
          data-collapse-toggle="navbar-search"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-search"
          aria-expanded="false"
        >
          <span className="sr-only">Mở menu</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

       
        <div className="hidden w-full md:flex md:w-auto md:items-center md:space-x-6 mt-4 md:mt-0" id="navbar-search">
          <form className="w-full md:w-[400px] mb-3 md:mb-0">
            <div className="relative">
              <input
                type="search"
                className="block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="Tìm sản phẩm..."
                required
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
              </div>
              <button
                type="submit"
                className="text-white absolute right-2.5 bottom-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-1.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Tìm
              </button>
            </div>
          </form>

          {/* Menu */}
          <ul className="flex flex-col md:flex-row md:items-center md:space-x-4 text-sm font-medium text-gray-900 dark:text-white">
            <li><a href="#" className="block py-2 px-3 hover:text-blue-600">Đăng Nhập</a></li>
            <li><a href="#" className="block py-2 px-3 hover:text-blue-600">Giỏ Hàng</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
