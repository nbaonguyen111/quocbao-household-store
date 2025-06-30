"use client";
import { Home, User, Settings } from 'lucide-react';
import { signOut } from "firebase/auth";
import { auth } from '@/firebase/firebase';
import { useRouter } from 'next/navigation';
const Sidebar = () => {
  const router = useRouter();
  const handleLogout = async () => {
    await signOut(auth);
    router.push("/dang-nhap");
  };
  return (
    <div className="h-screen w-64 bg-gray-800 text-white flex flex-col">
      <div className="text-2xl font-bold p-4 border-b border-gray-700">Admin Panel</div>
      <nav className="flex-1 p-4">
        <ul className="space-y-4">
          <li className="flex items-center space-x-2 hover:text-yellow-400 cursor-pointer">
            <Home size={20} />
            <a href="/admin">Dashboard</a>
          </li>
          <li className="flex items-center space-x-2 hover:text-yellow-400 cursor-pointer">
            <User size={20} />
           <a href="/admin/khach-hang">Khách Hàng</a>
          </li>
          <li className="flex items-center space-x-2 hover:text-yellow-400 cursor-pointer">
            <User size={20} />
           <a href="/admin/san-pham">Sản phẩm</a>
          </li>
       
          <li className="flex items-center space-x-2 hover:text-yellow-400 cursor-pointer">
            <User size={20} />
            <a href="/admin/quan-tri-vien">Admin</a>
          </li>
          <li className="flex items-center space-x-2 hover:text-yellow-400 cursor-pointer">
            <Settings size={20} />
           <a href="/admin/danh-muc">Danh mục</a>
          </li>
          <li className="flex items-center space-x-2 hover:text-yellow-400 cursor-pointer">
            <Settings size={20} />
           <a href="/admin/danh-gia">Đánh giá</a>
          </li>
          <li className="flex items-center space-x-2 hover:text-yellow-400 cursor-pointer">
            <Settings size={20} />
           <a href="/admin/bao-cao">Báo cáo</a>
          </li>
          <li className="flex items-center space-x-2 hover:text-yellow-400 cursor-pointer">
            <Settings size={20} />
           <a href="/admin/cai-dat">Cài đặt</a>
          </li>
          <li className="flex items-center space-x-2 hover:text-yellow-400 cursor-pointer">
            <Settings size={20} />
           <button onClick={handleLogout} >Đăng Xuất</button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
