"use client";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { auth, db } from "@/firebase/firebase";
import Sidebar from "@/components/sidebar";

export default function AdminLayout({ children }) {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(null); 

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        router.push("/dang-nhap");
        return;
      }

      const userDoc = await getDoc(doc(db, "users", user.uid));
      const userData = userDoc.data();

      if (userData?.role === "admin") {
        setAuthorized(true);
      } else {
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
    <div className="flex h-screen">
      <Sidebar />
      <main className="ml-64 w-full h-screen overflow-y-auto bg-gray-100 p-6">
        {children}
      </main>
    </div>
  );
}
