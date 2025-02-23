import { useState, useEffect } from "react";

const ProfileCard = () => {
  const [profileImage, setProfileImage] = useState("");
  const [userName, setUserName] = useState("Peter Parker");
  const [points, setPoints] = useState(15000);
  const [gamePoints, setGamePoints] = useState(900);

  useEffect(() => {
    setProfileImage("https://placehold.co/400"); // ใส่ URL จริง
  }, []);

  return (
    <div className="bg-white rounded-lg shadow-xl p-2 w-[90%] md:w-[80%] max-w-5xl  m-5 z-10">
        <div className="bg-white flex items-center">

          <div className="flex-[30%] flex justify-center">
            <img className="rounded-full h-[80px] w-[80px] border-2 border-blue-500" src={profileImage} alt="Profile" />
          </div>

          <div className="flex-[70%]">
            <h1 className="text-xl font-semibold">{userName}</h1>
            <div className="flex items-center text-lg my-2">
              <img src="public/images/icon/coin.svg" alt="Coins" className="w-6 h-6 mr-2" />
              <span className="text-gray-700">Point: {points}</span>
            </div>
            <div className="flex items-center text-lg my-2">
              <img src="public/images/icon/game.svg" alt="Coins" className="w-6 h-6 mr-2" />
              <span className="text-gray-700">Game point: {gamePoints}</span>
            </div>
          </div>
        </div>
      </div>
  );
};

export default ProfileCard;
