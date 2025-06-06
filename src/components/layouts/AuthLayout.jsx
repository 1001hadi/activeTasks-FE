import React from "react";
import Login_IMG from "../../assets/images/login.jpg";

const AuthLayout = ({ children }) => {
  return (
    <div className="flex">
      <div className="w-screen h-screen md:w[60w] px-12 pt-8 pb-12">
        <h2 className="text-xl font-medium text-black">Active Tasks</h2>
        {children}
      </div>
      <div className="hidden md:flex w-[80vw] h-screen item-center justify-center overflow-hidden">
        <img src={Login_IMG} alt="task-image" className="lg:w-[90%]" />
      </div>
    </div>
  );
};

export default AuthLayout;
