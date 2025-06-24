import React from "react";
import { assets } from "../assets/Assets/assets";
import { AiOutlineLogin } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between items-center py-5 mx-8 sm:mx-20 xl:mx-32">
      <p
        className="flex items-center text-xl sm:text-lg font-semibold text-primary cursor-pointer"
        onClick={() => navigate("/")}
      >
        <img src={assets.logo} alt="logo" className="w-32 sm:w-10" />
        BlogPlatfrom
      </p>

      <button
        className="flex items-center gap-2 rounded-full text-sm cursor-pointer bg-primary text-white px-10 py-2.5"
        onClick={() => navigate("/admin")}
      >
        Login <AiOutlineLogin />
      </button>
    </div>
  );
};

export default Navbar;
