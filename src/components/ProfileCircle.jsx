// import React from "react";

const ProfileCircle = () => {
  return (
    <div className="relative z-10  w-[500px] h-[500px] flex items-center justify-center mt-24">
      {/* Rotating border ring */}
      <div
        className="absolute inset-0 rounded-full p-[6px] bg-gradient-to-tr from-blue-600 to-orange-400"
        style={{
          animation: "spin-slow 12s linear infinite",
        }}
      >
        <div className="w-full h-full rounded-full bg-white"></div>
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
