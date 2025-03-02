const BannerKV = () => {
  return (
    <div className="w-full">
      <div className="w-full flex justify-center cursor-pointer">
        <img 
          src="images/KV-mobile.png" 
          alt="Checkin Banner" 
          className="w-full max-w-5xl md:hidden" 
        />
        <img 
          src="images/KV-desktop.png" 
          alt="Checkin Banner" 
          className="w-screen h-auto md:block hidden"
        />
      </div>
    </div>
  );
};

export default BannerKV;
