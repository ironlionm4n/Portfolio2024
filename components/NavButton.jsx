import React from "react";

const NavButton = ({ children }) => {
  return (
    <li className="bg-gradient-to-r hover:from-cyan-600 hover:to-teal-800 from-cyan-500 text-md lg:text-lg to-teal-500 text-white border-none rounded-md flex justify-center items-center text-center p-2  font-semibold cursor-pointer">
      {children}
    </li>
  );
};

export default NavButton;
