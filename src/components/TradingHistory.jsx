import { useEffect, useState } from "react";

const TradingHistory = () => {
  // ✅ เก็บข้อมูลที่ได้จาก API
  const [tradingHistory, setTradingHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // ✅ เรียก API ดึงข้อมูล
    fetch("https://api.example.com/trading-history") // 🔹 เปลี่ยนเป็น URL จริงของ API
      .then((response) => response.json())
      .then((data) => {
        setTradingHistory(data); // เซ็ตค่าข้อมูล
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching trading history:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="overflow-y-auto shadow-lg bg-white/25 rounded-lg">
      {loading ? (
        <p className="text-center py-4 text-gray-500">กำลังโหลดข้อมูล...</p>
      ) : tradingHistory.length > 0 ? (
        <ul className="p-4">
          {tradingHistory.map((trade) => (
            <li key={trade.id} className="border-b py-2">
              <p className="text-lg font-semibold">{trade.itemName}</p>
              <p className="text-sm text-gray-600">จำนวน: {trade.quantity}</p>
              <p className="text-sm text-gray-500">วันที่: {trade.date}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center py-4 text-gray-500">ไม่มีประวัติการเทรด</p>
      )}
    </div>
  );
};

export default TradingHistory;
