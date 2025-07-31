"use client";
import { Home, User, Settings, ShoppingCart, Package, Users, BarChart3, Star, Cog } from 'lucide-react';
import { signOut } from "firebase/auth";
import { auth } from '@/firebase/firebase';
import { useRouter } from 'next/navigation';
import { useAdmin } from '@/app/admin/layout';

const Sidebar = () => {
  const router = useRouter();
  const { currentUser, permissions } = useAdmin();

  const handleLogout = async () => {
    await signOut(auth);
    router.push("/dang-nhap");
  };

  return (
    <div className="h-screen w-64 bg-gray-800 fixed flex flex-col">
      <div className="text-2xl font-bold p-4 border-b border-gray-700 text-white">Admin Panel</div>

      {/* Hiển thị thông tin user */}
      <div className="p-4 border-b border-gray-700">
        <div className="text-white text-sm">
          <div className="font-semibold">{currentUser?.name || 'Admin'}</div>
          <div className="text-gray-300 text-xs">
            {currentUser?.role === 'superadmin' ? 'Super Admin' :
              currentUser?.role === 'admin' ? 'Admin' : 'Moderator'}
          </div>
        </div>
      </div>

      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {/* Dashboard - tất cả role đều xem được */}
          <li className="flex items-center space-x-2 hover:text-yellow-400 cursor-pointer text-white">
            <Home size={20} />
            <a href="/admin">Dashboard</a>
          </li>

          {/* Quản lý khách hàng - chỉ admin trở lên */}
          {permissions.canManageUsers && (
            <li className="flex items-center space-x-2 hover:text-yellow-400 cursor-pointer text-white">
              <Users size={20} />
              <a href="/admin/khach-hang">Khách Hàng</a>
            </li>
          )}

          {/* Quản lý đơn hàng - moderator trở lên */}
          {permissions.canManageOrders && (
            <li className="flex items-center space-x-2 hover:text-yellow-400 cursor-pointer text-white">
              <ShoppingCart size={20} />
              <a href="/admin/don-hang">Đơn Hàng</a>
            </li>
          )}

          {/* Quản lý sản phẩm - moderator trở lên */}
          {permissions.canManageProducts && (
            <li className="flex items-center space-x-2 hover:text-yellow-400 cursor-pointer text-white">
              <Package size={20} />
              <a href="/admin/san-pham">Sản phẩm</a>
            </li>
          )}

          {/* Quản lý admin - chỉ superadmin */}
          {permissions.canManageAdmins && (
            <li className="flex items-center space-x-2 hover:text-yellow-400 cursor-pointer text-white">
              <User size={20} />
              <a href="/admin/quan-tri-vien">Quản lý Admin</a>
            </li>
          )}

          {/* Quản lý danh mục - admin trở lên */}
          {permissions.canManageCategories && (
            <li className="flex items-center space-x-2 hover:text-yellow-400 cursor-pointer text-white">
              <Settings size={20} />
              <a href="/admin/danh-muc">Danh mục</a>
            </li>
          )}

          {/* Quản lý đánh giá - moderator trở lên */}
          {permissions.canManageReviews && (
            <li className="flex items-center space-x-2 hover:text-yellow-400 cursor-pointer text-white">
              <Star size={20} />
              <a href="/admin/danh-gia">Đánh giá</a>
            </li>
          )}

          {/* Báo cáo - moderator trở lên */}
          {permissions.canViewReports && (
            <li className="flex items-center space-x-2 hover:text-yellow-400 cursor-pointer text-white">
              <BarChart3 size={20} />
              <a href="/admin/bao-cao">Báo cáo</a>
            </li>
          )}

          {/* Cài đặt - chỉ superadmin */}
          {permissions.canManageSettings && (
            <li className="flex items-center space-x-2 hover:text-yellow-400 cursor-pointer text-white">
              <Cog size={20} />
              <a href="/admin/cai-dat">Cài đặt</a>
            </li>
          )}

          {/* Đăng xuất */}
          <li className="flex items-center space-x-2 hover:text-yellow-400 cursor-pointer text-white mt-8 pt-4 border-t border-gray-700">
            <Settings size={20} />
            <button onClick={handleLogout}>Đăng Xuất</button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
