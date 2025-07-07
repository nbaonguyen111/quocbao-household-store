import React  from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase/firebase";
export default function AdminDashboard() {
  
    return (
      <div className="text-black">
        <h1 className="text-2xl text-black font-bold">Admin Dashboard</h1>
        <p>Chào mừng đến trang quản trị!</p>
      </div>
    );
  }
  