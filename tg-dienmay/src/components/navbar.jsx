'use client';
import { useState, useEffect } from "react";
import 'flowbite';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth, db } from "@/firebase/firebase";
import { doc, getDoc, collection, getDocs } from "firebase/firestore";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FaSearch, FaUser, FaShoppingCart, FaBars, FaTimes, FaChevronDown, FaSignOutAlt, FaUserCircle } from "react-icons/fa";

export default function Navbar() {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [search, setSearch] = useState("");
  const [categories, setCategories] = useState([]);
  const [settings, setSettings] = useState({});
  const [cart, setCart] = useState({});
  const router = useRouter();

  const handleLogout = async () => {
    setLoading(true);
    await signOut(auth);
    setLoading(false);
    router.push("/");
  };
  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const ref = doc(db, "settings", "main");
        const snap = await getDoc(ref);
        if (snap.exists()) {
          setSettings(snap.data());
        }
      } catch (error) {
        console.error("Lỗi khi tải settings:", error);
      }
    };
    fetchSettings();
  }, []);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const snap = await getDocs(collection(db, "categories"));
        const uniqueCategories = [];
        const seenNames = new Set();
        snap.docs.forEach(doc => {
          const data = { id: doc.id, ...doc.data() };
          if (!seenNames.has(data.name)) {
            uniqueCategories.push(data);
            seenNames.add(data.name);
          }
        });
        setCategories(uniqueCategories);
      } catch (error) {
        console.error("Lỗi khi tải categories:", error);
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        let docRef = doc(db, "users", currentUser.uid);
        let docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          if (data.status === 'locked') {
            alert('Tài khoản của bạn đã bị khóa. Vui lòng liên hệ quản trị viên Zalo:0866633426.');
            await signOut(auth);
            setUser(null);
            setUserData(null);
            router.push('/dang-nhap');
            return;
          }
          setUserData(data);
        } else {
          docRef = doc(db, "adminUsers", currentUser.uid);
          docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setUserData(docSnap.data());
          }
        }
      } else {
        setUser(null);
        setUserData(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim()) {
      router.push(`/tim-kiem?keyword=${encodeURIComponent(search.trim())}`);
      setSearch("");
    }
  };

  return (
    <div className="bg-white shadow-lg sticky top-0 z-50">
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-2">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <span>📞 Hotline: {settings.hotline || "0866633426"}</span>
              <span>📧 Email: {settings.email || "support@example.com"}</span>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <span>🚚 Miễn phí vận chuyển cho đơn hàng trên 500k</span>
            </div>
          </div>
        </div>
      </div>

      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex text-yellow-900 items-center space-x-3 group">

                <img
                  src={settings.logo || "/images/logo1.png"}
                  alt={settings.websiteName || "TG Điện Máy"}
                  className="h-16 w-auto transition-transform group-hover:scale-105"
                />
              <h1 className="text-2xl font-semibold tracking-normal uppercase flex">
                {(() => {
                  const name = settings.websiteName || "TG Điện Máy";
                  const half = Math.ceil(name.length / 2);
                  const firstHalf = name.slice(0, half);
                  const secondHalf = name.slice(half);

                  return (
                    <>
                      <span className="text-yellow-500">{firstHalf}</span>
                      <span className="text-gray-800">{secondHalf}</span>
                    </>
                  );
                })()}
              </h1>
            </Link>
            <div className="hidden lg:flex items-center space-x-8 flex-1 justify-center">
              <div className="relative group">
                <button className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 rounded-lg hover:bg-blue-50">
                  <FaBars className="w-4 h-4" />
                  <span>Danh mục</span>
                  <FaChevronDown className="w-3 h-3" />
                </button>

                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top">
                  <div className="p-2">
                    {categories.map((cat) => (
                      <Link
                        key={cat.id}
                        href={`/danh-muc/${cat.id}`}
                        className="flex items-center space-x-3 px-3 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors duration-150"
                      >
                        <img src={cat.icon || ""} alt={cat.name} className="w-8 h-8 object-contain" />
                        <span className="font-medium">{cat.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <form onSubmit={handleSearch} className="flex-1 max-w-md">
                <div className="relative">
                  <input
                    type="text"
                    className="w-full pl-4 pr-12 py-3 border border-gray-300 rounded-full text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Tìm kiếm sản phẩm..."
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-2 transition-colors duration-200"
                  >
                    <FaSearch className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </div>
            <div className="hidden lg:flex items-center space-x-4">
              <Link
                href="/gio-hang"
                className="relative flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 rounded-lg hover:bg-blue-50"
              >
                <FaShoppingCart className="w-5 h-5" />
                <span>Giỏ hàng</span>
                {/* <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cart.length}
                </span> */}
              </Link>
              {!user ? (
                <Link
                  href="/dang-nhap"
                  className="flex items-center space-x-2 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200"
                >
                  <FaUser className="w-4 h-4" />
                  <span>Đăng nhập</span>
                </Link>
              ) : (
                <div className="relative">
                  <button
                    onClick={() => setShowUserDropdown(!showUserDropdown)}
                    className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 rounded-lg hover:bg-blue-50"
                  >
                    <FaUserCircle className="w-5 h-5" />
                    <span>{userData?.name || user.email}</span>
                    <FaChevronDown className="w-3 h-3" />
                  </button>

                  {showUserDropdown && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 py-2">
                      <Link
                        href="/tai-khoan"
                        className="flex items-center space-x-3 px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-150"
                        onClick={() => setShowUserDropdown(false)}
                      >
                        <FaUser className="w-4 h-4" />
                        <span>Thông tin tài khoản</span>
                      </Link>
                      <button
                        onClick={handleLogout}
                        disabled={loading}
                        className="w-full flex items-center space-x-3 px-4 py-2 text-red-600 hover:text-red-700 hover:bg-red-50 transition-colors duration-150"
                      >
                        <FaSignOutAlt className="w-4 h-4" />
                        <span>{loading ? "Đang đăng xuất..." : "Đăng xuất"}</span>
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
            <button
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="lg:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              {showMobileMenu ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
            </button>
          </div>
        </div>
        {showMobileMenu && (
          <div className="lg:hidden bg-white border-t border-gray-200 py-4">
            <div className="max-w-7xl mx-auto px-4 space-y-4">
              <form onSubmit={handleSearch} className="w-full">
                <div className="relative">
                  <input
                    type="text"
                    className="w-full pl-4 pr-12 py-3 border border-gray-300 rounded-full text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tìm kiếm sản phẩm..."
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-2"
                  >
                    <FaSearch className="w-4 h-4" />
                  </button>
                </div>
              </form>
              <div className="space-y-2">
                <h3 className="font-semibold text-gray-700 mb-2">Danh mục</h3>
                {categories.map((cat) => (
                  <Link
                    key={cat.id}
                    href={`/danh-muc/${cat.id}`}
                    className="flex items-center space-x-3 px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors duration-150"
                    onClick={() => setShowMobileMenu(false)}
                  >
                    <img src={cat.icon || ""} alt={cat.name} className="w-6 h-6 object-contain" />
                    <span>{cat.name}</span>
                  </Link>
                ))}
              </div>
              <div className="space-y-2 pt-4 border-t border-gray-200">
                <Link
                  href="/gio-hang"
                  className="flex items-center space-x-3 px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors duration-150"
                  onClick={() => setShowMobileMenu(false)}
                >
                  <FaShoppingCart className="w-5 h-5" />
                  <span>Giỏ hàng</span>
                </Link>

                {!user ? (
                  <Link
                    href="/dang-nhap"
                    className="flex items-center space-x-3 px-3 py-2 bg-blue-600 text-white rounded-md transition-colors duration-150"
                    onClick={() => setShowMobileMenu(false)}
                  >
                    <FaUser className="w-4 h-4" />
                    <span>Đăng nhập</span>
                  </Link>
                ) : (
                  <div className="space-y-2">
                    <Link
                      href="/tai-khoan"
                      className="flex items-center space-x-3 px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors duration-150"
                      onClick={() => setShowMobileMenu(false)}
                    >
                      <FaUser className="w-4 h-4" />
                      <span>Thông tin tài khoản</span>
                    </Link>
                    <button
                      onClick={handleLogout}
                      disabled={loading}
                      className="w-full flex items-center space-x-3 px-3 py-2 text-red-600 hover:text-red-700 hover:bg-red-50 rounded-md transition-colors duration-150"
                    >
                      <FaSignOutAlt className="w-4 h-4" />
                      <span>{loading ? "Đang đăng xuất..." : "Đăng xuất"}</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}

