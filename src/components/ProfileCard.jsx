import React,{ useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getuser } from "../common/userSlice.js/userSlice";

const ProfileCard = () => {
  const dispatch = useDispatch();
  const { profile, customerinfo, isLoading, error } = useSelector((state) => state.user);
  const [profileImage, setProfileImage] = useState("");
  const [userName, setUserName] = useState(customerinfo?.name ?? "");
  const [points, setPoints] = useState(customerinfo?.point ?? 0);
  const [gamePoints, setGamePoints] = useState(customerinfo?.game_point || 0);

  useEffect(()=>{
    if(!customerinfo){
      dispatch(getuser(profile))
    }else if(customerinfo){
      setUserName(customerinfo?.name)
      setPoints(customerinfo?.point)
      setGamePoints(customerinfo?.game_point)
    }
  },[dispatch,customerinfo,profile])

  useEffect(() => {
    setProfileImage("https://placehold.co/400");
  }, []);

  return (
    <div className="bg-white rounded-lg shadow-xl p-2 w-[90%] md:w-[80%] max-w-5xl  m-5 mt-1 z-10">
      <div className="bg-white flex items-center">

        <div className="flex-[30%] flex justify-center">
          <img className="rounded-full h-[80px] w-[80px] border-2 border-blue-500" src={customerinfo?.picture ? customerinfo?.picture : 'https://placehold.co/400'} alt="Profile" />
        </div>

        <div className="flex-[70%]">
          <h1 className="text-xl font-semibold">{userName}</h1>
          <div className="flex items-center text-lg my-2">
            <img src="images/icon/coin.svg" alt="Coins" className="w-6 h-6 mr-2" />
            <span className="text-gray-700">Coins: {points}</span>
          </div>
          <div className="flex items-center text-lg my-2">
            <img src="images/icon/game.svg" alt="Coins" className="w-6 h-6 mr-2" />
            <span className="text-gray-700">Game point: {gamePoints}</span>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ProfileCard;
