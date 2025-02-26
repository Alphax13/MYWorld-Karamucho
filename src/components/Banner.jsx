import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full p-4">
      {/* ✅ คลิกแล้วไป /boxset */}
      {/* <div
        className="w-full flex justify-center mb-2 cursor-pointer"
        onClick={() => navigate("/boxset")}
      >
        <img src="/images/Boxset.png" alt="Boxset Banner" className="w-full max-w-5xl rounded-lg shadow-md" />
      </div> */}

      {/* ✅ คลิกแล้วไป /mymap */}
      <div
        className="w-full flex justify-center cursor-pointer"
        onClick={() => navigate("/checkin")}
      >
        <img src="/images/Mymap.png" alt="Mymap Banner" className="w-full max-w-5xl rounded-lg shadow-md" />
      </div>
    </div>
  );
};

export default Banner;
