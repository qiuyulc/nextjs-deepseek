"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { SvgIcon } from "@mui/material";
import SunnyIcon from "@mui/icons-material/Sunny";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import ComputerIcon from "@mui/icons-material/Computer";
const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const themeList = [
    { value: "system", icon: ComputerIcon,className:'bg-[#e1e1e1]' },
    { value: "dark", icon: NightsStayIcon,className:'bg-[#e1e1e1]' },
    { value: "light", icon: SunnyIcon,className:'bg-[#e1e1e1]' },
  ];
  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const toggleTheme = themeList.find((item) => item.value === theme)?.value;
  console.log(toggleTheme);
  return (
    <div className="border-1 flex flex-row pt-1 pb-1 pl-2 pr-2 justify-between rounded-md">
      {themeList.map((item, index) => {
        return (
          <div
            className={`${toggleTheme === item.value ? item.className : ""} w-8 h-8 rounded-full p-0.5 flex justify-center items-center`}
            onClick={() => setTheme(item.value)}
            key={index}
          >
            {<SvgIcon fontSize={'small'} component={item.icon} />}
          </div>
        );
      })}
    </div>
  );
};

export default ThemeSwitch;
