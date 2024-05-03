import React from "react";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
const SwitchTheme = ({ darkMode, setDarkMode }) => {
  return (
    <li className="text-yellow-400 dark:text-white border-none rounded-md p-2 text-xl lg:text-4xl">
      {darkMode ? (
        <BsFillMoonStarsFill
          onClick={() => setDarkMode(!darkMode)}
          className=" cursor-pointer hover:text-slate-200"
        />
      ) : (
        <BsFillSunFill
          onClick={() => setDarkMode(!darkMode)}
          className=" cursor-pointer hover:text-yellow-500"
        />
      )}
    </li>
  );
};

export default SwitchTheme;
