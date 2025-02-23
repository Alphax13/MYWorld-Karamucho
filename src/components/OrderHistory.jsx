import { useEffect, useState } from "react";

const OrderHistory = () => {
  // ✅ เก็บข้อมูลออเดอร์จาก API
  const [orderHistory, setOrderHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // ✅ เรียก API ดึงข้อมูล
    fetch("https://api.example.com/order-history") // 🔹 เปลี่ยนเป็น URL จริงของ API
      .then((response) => response.json())
      .then((data) => {
        setOrderHistory(data); // เซ็ตค่าข้อมูล
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching order history:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="overflow-y-auto shadow-lg h-[20vh] rounded-lg">

      {loading ? (
        <p className="text-center py-4 text-gray-500">กำลังโหลดข้อมูล...</p>
      ) : orderHistory.length > 0 ? (
        <ul className="p-4">
          {orderHistory.map((order) => (
            <li key={order.id} className="border-b py-2">
              <p className="text-lg font-semibold">{order.itemName}</p>
              <p className="text-sm text-gray-600">จำนวน: {order.quantity}</p>
              <p className="text-sm text-gray-500">วันที่สั่งซื้อ: {order.date}</p>
              <p className="text-sm text-gray-500">สถานะ: <span className={`font-semibold ${order.status === "สำเร็จ" ? "text-green-500" : "text-red-500"}`}>{order.status}</span></p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center py-4 text-gray-500">ไม่มีประวัติการสั่งซื้อ</p>
      )}
    </div>
  );
};

export default OrderHistory;
