// components/CustomTooltip.js
import { Tooltip } from "flowbite-react";
import { useDarkMode } from "../context/DarkMode";

const CustomTooltip = ({ children, content }) => {
  const { darkMode } = useDarkMode();

  const customTheme = {
    target: "w-fit",
    animation: "transition-opacity",
    arrow: {
      base: "absolute z-10 h-2 w-2 rotate-45",
      style: {
        dark: "bg-gray-100 dark:bg-gray-100",
        light: "bg-white",
        auto: "bg-white dark:bg-gray-700",
      },
      placement: "-4px",
    },
    base: "absolute z-10 inline-block rounded-lg px-3 py-2 text-sm font-medium shadow-sm",
    hidden: "invisible opacity-0",
    style: {
      dark: "bg-gray-100 text-black dark:bg-gray-100",
      light: "border border-gray-200 bg-white text-gray-900",
      auto: "border border-gray-200 bg-white text-gray-900 dark:border-none dark:bg-gray-700 dark:text-white",
    },
    content: "relative z-20",
  };

  return (
    <Tooltip
      content={content}
      theme={customTheme}
      placement="bottom"
      trigger="hover"
    >
      {children}
    </Tooltip>
  );
};

export default CustomTooltip;
