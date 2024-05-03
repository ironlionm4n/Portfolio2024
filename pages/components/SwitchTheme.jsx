import React from "react";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
const SwitchTheme = ({ darkMode, setDarkMode }) => {
  return (
    <li className="text-yellow-400 hover:text-yellow-600 dark:text-white border-none rounded-md p-2">
      {darkMode ? (
        <BsFillMoonStarsFill
          onClick={() => setDarkMode(!darkMode)}
          className=" cursor-pointer text-2xl"
        />
      ) : (
        <BsFillSunFill
          onClick={() => setDarkMode(!darkMode)}
          className=" cursor-pointer text-2xl"
        />
      )}
    </li>
  );
};

export default SwitchTheme;
