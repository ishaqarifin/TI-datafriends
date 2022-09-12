import React, { useState } from "react";
import Login from "./component/Login";
import Register from "./component/Register";

export const Auth = () => {
  const [loginPage, setLoginpage] = useState(true);

  const handleLogin = () => {
    setLoginpage(false);
  };
  const handleRegister = () => {
    setLoginpage(true);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-1/2 flex items-center justify-center">
        <img className="object-cover object-center rounded-lg " alt="hero" src="/assets/friend.png" />
      </div>
      <div className="w-1/2 flex items-center justify-center">
        {/* <Login /> */}
        {loginPage ? <Login isLogin={handleLogin} /> : <Register isRegister={handleRegister} />}
      </div>
    </div>
  );
};
