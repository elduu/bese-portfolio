// import React from "react";

const ProfileCircle = () => {
  return (
    <div className="relative  w-[400px] h-[400px] flex items-center justify-center mt-20">
      {/* Rotating border ring */}
      <div
        className=""
        style={{
          animation: "spin-slow 12s linear infinite",
        }}
      >
       
        {/* <div className=" relative w-full z-50  h-full rounded-full bg-white"></div> */}
      </div>

      {/* Static profile image */}
      <img
        src="/assets/profile.png"
        alt="Profile"
        className="relative z-50 w-7/5 h-4/5 rounded-full object-cover"
      />

      {/* Inline keyframes */}
      <style>{`
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default ProfileCircle;
