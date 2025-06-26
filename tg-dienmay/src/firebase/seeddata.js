// src/firebase/seedData.js
import { db } from "./firebase.js";
import {
  collection,
  addDoc,
  getDocs,
  serverTimestamp
} from "firebase/firestore";

// ----------- Danh mục (Categories) -----------
const categories = [
  { id: "ac", name: "Máy Lạnh" },
  { id: "tv", name: "Tivi" },
  { id: "fridge", name: "Tủ Lạnh" },
  { id: "washer", name: "Máy Giặt" },
  { id: "microwave", name: "Lò Vi Sóng" }
];

// ----------- Sản phẩm (Products) -----------
const products = [
  {
    name: "Máy lạnh Panasonic 1HP",
    category: "ac",
    price: 7200000,
    imageUrl: "https://cdn.tgdd.vn/Products/Images/211/303222/may-lanh-panasonic-cu-cs-pu9wkh-8m-1-1hp-inverter-080223-104919-600x600.jpg",
    description: "Tiết kiệm điện, làm lạnh nhanh, công nghệ Inverter hiện đại."
  },
  {
    name: "Tivi Samsung 50 inch 4K UHD",
    category: "tv",
    price: 11000000,
    imageUrl: "https://cdn.tgdd.vn/Products/Images/1942/273081/samsung-ua50au7002-1-600x600.jpg",
    description: "Tivi 4K hình ảnh sắc nét, điều khiển giọng nói thông minh."
  },
  {
    name: "Tủ lạnh LG Inverter 315 lít",
    category: "fridge",
    price: 9500000,
    imageUrl: "https://cdn.tgdd.vn/Products/Images/1943/303228/tu-lanh-lg-inverter-315-lit-gv-b322s-1-600x600.jpg",
    description: "Dung tích lớn, tiết kiệm điện, vận hành êm ái."
  },
  {
    name: "Máy giặt Toshiba 9kg cửa trên",
    category: "washer",
    price: 5600000,
    imageUrl: "https://cdn.tgdd.vn/Products/Images/1944/303395/may-giat-toshiba-inverter-9-kg-aw-d-m1005av-1-600x600.jpg",
    description: "Giặt mạnh mẽ, không xoắn rối quần áo, tiết kiệm nước."
  },
  {
    name: "Lò vi sóng Sharp 20 lít",
    category: "microwave",
    price: 1700000,
    imageUrl: "https://cdn.tgdd.vn/Products/Images/1945/303425/lo-vi-song-sharp-r-205vn-s-20-lit-1-600x600.jpg",
    description: "Nấu, hâm nóng, rã đông tiện lợi. Thiết kế nhỏ gọn."
  }
];

// ----------- Người dùng (Users) -----------
const users = [
  { name: "Nguyễn Văn A", email: "a.nguyen@gmail.com", phone: "0901111111" },
  { name: "Trần Thị B", email: "b.tran@gmail.com", phone: "0902222222" },
  { name: "Lê Văn C", email: "c.le@gmail.com", phone: "0903333333" },
  { name: "Phạm Thị D", email: "d.pham@gmail.com", phone: "0904444444" },
  { name: "Hoàng Văn E", email: "e.hoang@gmail.com", phone: "0905555555" }
];

// ----------- Admin Users -----------
const adminUsers = [
  { name: "Admin Chính", email: "admin@store.com", role: "superadmin" },
  { name: "Nguyễn Quản Trị", email: "admin1@store.com", role: "admin" },
  { name: "Trần Điều Hành", email: "mod1@store.com", role: "moderator" }
];

// ----------- FAQs -----------
const faqs = [
  {
    question: "Làm sao để đặt hàng?",
    answer: "Bạn có thể chọn sản phẩm và nhấn 'Thêm vào giỏ hàng' để tiến hành đặt hàng."
  },
  {
    question: "Thời gian giao hàng bao lâu?",
    answer: "Thời gian giao hàng từ 1 đến 3 ngày làm việc tùy khu vực."
  },
  {
    question: "Tôi có thể đổi/trả hàng không?",
    answer: "Bạn có thể đổi trả trong vòng 7 ngày nếu sản phẩm bị lỗi."
  },
  {
    question: "Phương thức thanh toán nào được hỗ trợ?",
    answer: "Chúng tôi hỗ trợ thanh toán qua chuyển khoản, ví điện tử và COD."
  },
  {
    question: "Làm sao để liên hệ hỗ trợ?",
    answer: "Bạn có thể gọi hotline 1800 1234 hoặc gửi email về support@dienmay.com."
  }
];

// ----------- Reviews -----------
const reviews = [
  {
    userName: "Nguyễn Văn A",
    productName: "Máy lạnh Panasonic 1HP",
    rating: 5,
    comment: "Sản phẩm tốt, làm lạnh nhanh."
  },
  {
    userName: "Trần Thị B",
    productName: "Tủ lạnh LG Inverter 315 lít",
    rating: 4,
    comment: "Tủ chạy êm, tiết kiệm điện."
  }
];

// ----------- Orders -----------
const orders = [
  {
    userName: "Nguyễn Văn A",
    items: [
      { productName: "Máy lạnh Panasonic 1HP", quantity: 1 },
      { productName: "Lò vi sóng Sharp 20 lít", quantity: 2 }
    ],
    status: "completed"
  },
  {
    userName: "Lê Văn C",
    items: [
      { productName: "Tivi Samsung 50 inch 4K UHD", quantity: 1 }
    ],
    status: "pending"
  }
];

// ------------------- Seed Functions -------------------
const seedCollection = async (name, items) => {
  const ref = collection(db, name);
  for (const item of items) {
    await addDoc(ref, { ...item, createdAt: serverTimestamp() });
  }
  console.log(`✅ Đã seed ${name}`);
};

export const seedAll = async () => {
  console.log("🚀 Bắt đầu seed dữ liệu tĩnh...");
  await seedCollection("categories", categories);
  await seedCollection("products", products);
  await seedCollection("users", users.map(u => ({ ...u, role: "user" })));
  await seedCollection("adminUsers", adminUsers);
  await seedCollection("faqs", faqs);

  // Lấy lại ID từ Firestore
  const userSnap = await getDocs(collection(db, "users"));
  const productSnap = await getDocs(collection(db, "products"));

  const userMap = {};
  const productMap = {};

  userSnap.docs.forEach(doc => {
    const data = doc.data();
    userMap[data.name] = doc.id;
  });

  productSnap.docs.forEach(doc => {
    const data = doc.data();
    productMap[data.name] = doc.id;
  });

  const resolvedReviews = reviews.map(r => ({
    userId: userMap[r.userName],
    productId: productMap[r.productName],
    rating: r.rating,
    comment: r.comment,
    createdAt: serverTimestamp()
  }));

  const resolvedOrders = orders.map(o => ({
    userId: userMap[o.userName],
    items: o.items.map(i => ({
      productId: productMap[i.productName],
      quantity: i.quantity
    })),
    totalAmount: o.items.reduce((sum, i) => sum + i.quantity * 100000, 0), // Giả định đơn giá cố định
    status: o.status,
    createdAt: serverTimestamp()
  }));

  await seedCollection("reviews", resolvedReviews);
  await seedCollection("orders", resolvedOrders);

  console.log("🎉 Seed hoàn tất!");
};