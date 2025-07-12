'use client';
import { useState, useEffect } from "react";
import 'flowbite';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth, db } from "@/firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import Link from "next/link";


const categories = [
  { id: 'ac', name: 'Máy Lạnh', icon: '/images/maylanh.png' },
  { id: 'tv', name: 'Tivi', icon: '/images/tivi.png' },
  { id: 'fridge', name: 'Tủ Lạnh', icon: '/images/tulanh.png' },
  { id: 'washer', name: 'Máy Giặt', icon: '/images/maygiat.png' },
  { id: 'microwave', name: 'Lò Vi Sóng', icon: '/images/lovisong.png' }
];

export default function Navbar() {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleLogout = async () => {
    setLoading(true);
    await signOut(auth);
    setLoading(false);
    router.push("/");
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);

        // Lấy thêm info từ Firestore nếu cần
        const docRef = doc(db, "users", currentUser.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUserData(docSnap.data());
        }
      } else {
        setUser(null);
        setUserData(null);
      }

    });

    return () => unsubscribe();
  }, []);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showDropdownAc, setShowDropdownAc] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => { }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim()) {
      router.push(`/tim-kiem?keyword=${encodeURIComponent(search.trim())}`);
    }
  };

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
          <Link href="/" className="flex items-center space-x-2">
            <img src="/images/logo1.png" alt="Logo" className="h-32 w-32" />
          </Link>
          {/* Danh mục */}
          <div className="relative">
            <button
              className="flex items-center text-white font-semibold px-3 py-2 rounded hover:bg-blue-800 transition"
              onClick={() => setShowDropdown((v) => !v)}
              onBlur={() => setTimeout(() => setShowDropdown(false), 150)}
            >
              <svg className="w-6 h-6 mr-1 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              Danh mục
              <svg className="w-4 h-4 ml-1 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {showDropdown && (
              <div className="absolute left-0 mt-2 w-56 bg-white rounded shadow-lg z-20 animate-fade-in">
                <ul className="divide-y divide-gray-100">
                  {categories.map((cat) => (
                    <li key={cat.id}>
                      <a
                        href={`/danh-muc/${cat.id}`}
                        className="flex items-center gap-3 px-4 py-3 hover:bg-blue-50 transition text-gray-800 hover:text-blue-700 font-medium"
                        onClick={() => setShowDropdown(false)}
                      >
                        <img src={cat.icon} alt={cat.name} className="w-8 h-8 object-contain" />
                        <span>{cat.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Thanh tìm kiếm */}
          <form onSubmit={handleSearch} className="flex-1 mx-4 max-w-xl">
            <div className="relative">
              <input
                type="text"
                className="w-full pl-10 pr-12 py-2 rounded-full text-sm focus:outline-none bg-white text-gray-900 placeholder-gray-400"
                placeholder="Bạn tìm gì..."
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
              
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-600 hover:bg-blue-800 text-white rounded-full p-1.5 transition"
                aria-label="Tìm kiếm"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            </div>
          </form>

          {/* Đăng nhập */}

            
          {!user ? (
  <a href="/dang-nhap" className="flex items-center text-white px-3 py-2 rounded hover:bg-blue-700 transition">
    <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A9 9 0 1112 21a9 9 0 01-6.879-3.196z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
    Đăng nhập
  </a>
) : (
  <div
  className="relative"
  onMouseEnter={() => setShowDropdownAc(true)}
  onMouseLeave={() => setShowDropdownAc(false)}
>
    <button className="flex items-center text-white px-3 py-2 rounded hover:bg-blue-700 transition">
      👋 {userData?.name || user.email}
      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </button>

    {showDropdownAc && (
    <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded shadow-lg z-50">
      <a href={`/tai-khoan/${user.uid}`} className="block px-4 py-2 hover:bg-gray-100">
        Thông tin tài khoản
      </a>
      <a href="/lich-su-don-hang" className="block px-4 py-2 hover:bg-gray-100">
        Lịch sử đơn hàng
      </a>
      <button
        onClick={handleLogout}
        disabled={loading}
        className="w-full text-left px-4 py-2 hover:bg-gray-100 text-red-500"
      >
        {loading ? "Đang đăng xuất..." : "Đăng xuất"}
      </button>
    </div>
  )}
</div>
)}


          {/* Giỏ hàng */}
          <a href="/gio-hang" className="flex items-center text-white px-3 py-2 rounded hover:bg-blue-800 transition relative font-semibold">
            <svg className="w-5 h-5 mr-1 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
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

