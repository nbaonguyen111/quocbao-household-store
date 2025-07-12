import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '@/firebase/firebase';
import { useState, useEffect } from 'react';
import { Timestamp } from "firebase/firestore";

const OrderHistory = ({ userId }) => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const ordersCol = collection(db, 'orders');
      const q = query(ordersCol, where('userId', '==', userId));
      const snapshot = await getDocs(q);
      const ordersData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setOrders(ordersData);
    };

    fetchOrders();
  }, [userId]);

  if (orders.length === 0) return <p className='text-center text-gray-500'>Không có đơn hàng nào.</p>;

  return (
    <div className="space-y-3">
      {orders.map(order => (
        <div key={order.id} className="p-4 border rounded">
          <p><strong>Mã đơn hàng:</strong> {order.id}</p>
          <p><strong>Ngày đặt:</strong>{" "} {order.createdAt instanceof Timestamp
            ? order.createdAt.toDate().toLocaleString("vi-VN")
            : "Không rõ"}
          </p>
          {console.log(order.createdAt)}
          <p><strong>Tổng tiền:</strong> {order.total.toLocaleString()}₫</p>
        </div>

      ))}

    </div>
  );
};

export default OrderHistory;

