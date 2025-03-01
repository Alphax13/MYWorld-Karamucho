import React, { useState, useEffect } from "react";

const rawScores = [
  { name: "Name1", score: 17, profile: "/images/profile1.png", timestamp: 1 },
  { name: "Name2", score: 22, profile: "/images/profile1.png", timestamp: 2 },
  { name: "Name3", score: 17, profile: "/images/profile1.png", timestamp: 3 },
  { name: "Name4", score: 18, profile: "/images/profile1.png", timestamp: 4 },
  { name: "Name5", score: 16, profile: "/images/profile1.png", timestamp: 5 },
  { name: "Name6", score: 15, profile: "/images/profile1.png", timestamp: 6 },
  { name: "Name7", score: 15, profile: "/images/profile1.png", timestamp: 7 },
  { name: "Name8", score: 55, profile: "/images/profile1.png", timestamp: 8 },
  { name: "Name9", score: 50, profile: "/images/profile1.png", timestamp: 9 },
  { name: "Name10", score: 13, profile: "/images/profile1.png", timestamp: 10 },
  { name: "Name11", score: 13, profile: "/images/profile1.png", timestamp: 10 },
  { name: "Name12", score: 3, profile: "/images/profile1.png", timestamp: 10 },
  { name: "Name13", score: 13, profile: "/images/profile1.png", timestamp: 10 },
  { name: "Name14", score: 10, profile: "/images/profile1.png", timestamp: 10 },
];

const icons = {
  1: "/images/r1.png",
  2: "/images/r2.png",
  3: "/images/r3.png",
};

const sortedScores = rawScores
  .sort((a, b) => b.score - a.score || a.timestamp - b.timestamp)
  .map((player, index) => ({
    ...player,
    rank: index + 1,
    icon: icons[index + 1] || null,
    king: index === 0,
  }));

const Scoreboard = () => {
  const [visibleScores, setVisibleScores] = useState(window.innerWidth < 768 ? 5 : 10);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setVisibleScores(window.innerWidth < 768 ? 5 : 10);
    };
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const showMore = () => {
    setVisibleScores((prev) => Math.min(prev + 5, sortedScores.length));
  };

  return (
    <div className="p-5 pb-10 flex flex-col items-center bg-[url(/images/bgbroad.png)] bg-left-top bg-no-repeat bg-cover">
      <div className="text-center text-white font-bold text-2xl mb-4">
        <img src="/images/score.png" alt="Logo" className="mx-auto w-40" />
      </div>

      <div className="w-full max-w-2xl p-4 flex flex-col gap-4 overflow-hidden transition-all duration-300">
        {sortedScores.slice(0, visibleScores).map((player) => (
          <div
            key={player.name}
            className="flex justify-between items-center bg-white px-2 py-2 border-b last:border-none shadow-md shadow-black"
          >
            <div className="flex items-center gap-3">
              <div className="flex items-center w-12 justify-center">
                {player.icon ? (
                  <img src={player.icon} alt={`Rank ${player.rank}`} className="w-6 h-6" />
                ) : (
                  <span className="text-lg font-bold">{player.rank}</span>
                )}
              </div>
              <div className="border-l border-gray-300 h-8"></div>
              <div className="relative">
                <img src={player.profile} alt="Profile" className="w-8 h-8 rounded-full" />
                {player.king && (
                  <img
                    src="/images/king.png"
                    alt="King Crown"
                    className="absolute -top-6 -right-5 w-10 h-10"
                  />
                )}
              </div>
              <span className="text-lg">{player.name}</span>
            </div>
            <div className="bg-[#C2F1FF] text-black px-3 py-1 rounded-xl shadow-md">
              {player.score} แต้ม
            </div>
          </div>
        ))}
      </div>
      {visibleScores < sortedScores.length && (
        <button className="mt-4 text-white underline" onClick={showMore}>ดูรายชื่อเพิ่มเติม</button>
      )}
    </div>
  );
};

export default Scoreboard;