'use client';
import React, { useState, useEffect } from "react";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "@/firebase/firebase";
import { FaCog, FaImage, FaPhoneAlt, FaMapMarkerAlt, FaGlobe, FaEnvelope, FaUndo } from "react-icons/fa";

export default function Caidat() {
  const [settings, setSettings] = useState({
    logo: "",
    favicon: "",
    hotline: "",
    address: "",
    websiteName: "",
    email: "",
  });
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

 
  const fetchSettings = async () => {
    setLoading(true);
    const ref = doc(db, "settings", "main");
    const snap = await getDoc(ref);
    if (snap.exists()) setSettings(snap.data());
    setLoading(false);
  };

  useEffect(() => {
    fetchSettings();
    
  }, []);

  
  const handleSave = async (e) => {
    e.preventDefault();
    await setDoc(doc(db, "settings", "main"), settings);
    setMessage("✅ Đã lưu cài đặt!");
    await fetchSettings(); 
    setTimeout(() => setMessage(""), 2500);
  };

  
  const handleReset = () => {
    setSettings({
      logo: "",
      favicon: "",
      hotline: "",
      address: "",
      websiteName: "",
      email: "",
    });
    setMessage("Đã reset về mặc định!");
    setTimeout(() => setMessage(""), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 p-8">
      <div className="max-w-xl mx-auto bg-blue-900 rounded-2xl shadow-2xl p-8">
        <h1 className="text-3xl font-bold text-blue-700 mb-6 flex items-center gap-3">
          <FaCog className="text-blue-500" /> Cài đặt website
        </h1>
        {message && (
          <div className="mb-4 px-4 py-2 bg-green-100 border border-green-300 text-green-700 rounded shadow text-center animate-bounce font-semibold">
            {message}
          </div>
        )}
        {loading ? (
          <div className="text-blue-600 text-center font-semibold">Đang tải dữ liệu...</div>
        ) : (
          <form onSubmit={handleSave} className="space-y-5">
            <div>
              <label className="block font-semibold mb-1 flex items-center gap-2">
                <FaGlobe /> Tên website
              </label>
              <input
                type="text"
                className="border rounded px-3 py-2 w-full focus:ring-2 focus:ring-blue-300"
                value={settings.websiteName}
                onChange={e => setSettings({ ...settings, websiteName: e.target.value })}
                placeholder="Nhập tên website..."
              />
            </div>
            <div>
              <label className="block font-semibold mb-1 flex items-center gap-2">
                <FaPhoneAlt /> Hotline
              </label>
              <input
                type="text"
                className="border rounded px-3 py-2 w-full focus:ring-2 focus:ring-blue-300"
                value={settings.hotline}
                onChange={e => setSettings({ ...settings, hotline: e.target.value })}
                placeholder="Nhập số hotline..."
              />
            </div>
            <div>
              <label className="block font-semibold mb-1 flex items-center gap-2">
                <FaEnvelope /> Email liên hệ
              </label>
              <input
                type="email"
                className="border rounded px-3 py-2 w-full focus:ring-2 focus:ring-blue-300"
                value={settings.email}
                onChange={e => setSettings({ ...settings, email: e.target.value })}
                placeholder="Nhập email liên hệ..."
              />
            </div>
            <div>
              <label className="block font-semibold mb-1 flex items-center gap-2">
                <FaMapMarkerAlt /> Địa chỉ
              </label>
              <input
                type="text"
                className="border rounded px-3 py-2 w-full focus:ring-2 focus:ring-blue-300"
                value={settings.address}
                onChange={e => setSettings({ ...settings, address: e.target.value })}
                placeholder="Nhập địa chỉ..."
              />
            </div>
            <div>
              <label className="block font-semibold mb-1 flex items-center gap-2">
                <FaImage /> Logo (URL)
              </label>
              <input
                type="text"
                className="border rounded px-3 py-2 w-full focus:ring-2 focus:ring-blue-300"
                value={settings.logo}
                onChange={e => setSettings({ ...settings, logo: e.target.value })}
                placeholder="Dán link ảnh logo..."
              />
              {settings.logo && (
                <div className="flex flex-col items-center mt-2">
                  <img src={settings.logo} alt="Logo" className="h-24 rounded shadow-lg border" />
                  <span className="text-xs text-gray-500 mt-1">Xem trước logo</span>
                </div>
              )}
            </div>
            <div>
              <label className="block font-semibold mb-1 flex items-center gap-2">
                <FaImage /> Favicon (URL)
              </label>
              <input
                type="text"
                className="border rounded px-3 py-2 w-full focus:ring-2 focus:ring-blue-300"
                value={settings.favicon}
                onChange={e => setSettings({ ...settings, favicon: e.target.value })}
                placeholder="Dán link favicon..."
              />
              {settings.favicon && (
                <div className="flex flex-col items-center mt-2">
                  <img src={settings.favicon} alt="Favicon" className="h-10 w-10 rounded shadow border" />
                  <span className="text-xs text-gray-500 mt-1">Xem trước favicon</span>
                </div>
              )}
            </div>
            <div className="flex gap-3 mt-6">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded font-semibold shadow transition"
              >
                Lưu cài đặt
              </button>
              <button
                type="button"
                className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded font-semibold shadow flex items-center gap-2 transition"
                onClick={handleReset}
              >
                <FaUndo /> Reset
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}