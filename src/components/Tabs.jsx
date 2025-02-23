const Tabs = ({ activeTab, setActiveTab }) => {
    const tabs = [
      { id: "trading", label: "Trading" },
      { id: "tradingHistory", label: "Trading History" },
      { id: "orderHistory", label: "Order History" },
    ];
  
    return (
      <div className="flex border-b border-gray-300 justify-center">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 text-md font-normal text-center transition-all whitespace-nowrap ${
              activeTab === tab.id
                ? "text-[#28B7E1] border-b-2 font-semibold border-[#28B7E1]"
                : "text-black"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    );
  };
  
  export default Tabs;
  