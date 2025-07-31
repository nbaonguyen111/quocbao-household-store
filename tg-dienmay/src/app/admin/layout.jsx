"use client";
import { useEffect, useState, createContext, useContext } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { auth, db } from "@/firebase/firebase";
import Sidebar from "@/components/sidebar";

// Tạo context cho phân quyền
export const AdminContext = createContext();

// Hook để sử dụng context
export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('useAdmin must be used within AdminLayout');
  }
  return context;
};

// Hàm kiểm tra quyền
const checkPermission = (userRole, requiredRole) => {
  const roleHierarchy = {
    'superadmin': 3,
    'admin': 2,
    'moderator': 1
  };

  return roleHierarchy[userRole] >= roleHierarchy[requiredRole];
};

export default function AdminLayout({ children }) {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [permissions, setPermissions] = useState({});

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        router.push("/dang-nhap");
        return;
      }

      try {
        // Kiểm tra trong collection users trước
        let userDoc = await getDoc(doc(db, "users", user.uid));
        let userData = userDoc.data();

        // Nếu không có trong users, kiểm tra trong adminUsers
        if (!userData) {
          userDoc = await getDoc(doc(db, "adminUsers", user.uid));
          userData = userDoc.data();
        }

        if (userData) {
          const role = userData.role;

          // Kiểm tra quyền truy cập admin
          if (role === 'superadmin' || role === 'admin' || role === 'moderator') {
            setCurrentUser({ ...userData, uid: user.uid });

            // Thiết lập permissions dựa trên role
            const userPermissions = {
              canManageProducts: checkPermission(role, 'moderator'),
              canManageUsers: checkPermission(role, 'admin'),
              canManageOrders: checkPermission(role, 'moderator'),
              canManageAdmins: checkPermission(role, 'superadmin'),
              canDeleteAdmins: checkPermission(role, 'superadmin'),
              canEditAdmins: checkPermission(role, 'superadmin'),
              canViewReports: checkPermission(role, 'moderator'),
              canManageCategories: checkPermission(role, 'admin'),
              canManageReviews: checkPermission(role, 'moderator'),
              canManageSettings: checkPermission(role, 'superadmin'),
              role: role
            };

            setPermissions(userPermissions);
            setAuthorized(true);
          } else {
            setAuthorized(false);
          }
        } else {
          setAuthorized(false);
        }
      } catch (error) {
        console.error("Error checking user permissions:", error);
        setAuthorized(false);
      }
    });

    return () => unsubscribe();
  }, [router]);

  if (authorized === null) {
    return (
      <div className="w-full h-screen flex flex-col gap-2 items-center justify-center bg-gray-100 text-black">
        <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        <p>Đang xác minh quyền truy cập...</p>
      </div>
    );
  }

  if (authorized === false) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-red-100 text-red-600 text-xl font-semibold">
        <div className="flex justify-center relative">
          <img src={"/images/leuleu.jpg"} alt="leuleu" />
        </div>
        <div className="absolute ">
          <h1 className="text-2xl font-extrabold text-red-600">Bạn không có quyền truy cập trang này!!!</h1>
        </div>
      </div>
    );
  }

  return (
    <AdminContext.Provider value={{ currentUser, permissions }}>
      <div className="flex h-screen">
        <Sidebar />
        <main className="ml-64 w-full h-screen overflow-y-auto bg-gray-100 p-6">
          {children}
        </main>
      </div>
    </AdminContext.Provider>
  );
}
