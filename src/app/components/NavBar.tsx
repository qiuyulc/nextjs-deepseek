"use client";
import { useState } from "react";
import ThemeSwitch from "./ThemeSwitch";
import { useRouter } from "next/navigation";
import DehazeIcon from "@mui/icons-material/Dehaze";
const NavBar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div
        className="fixed block lg:hidden top-6 left-10"
        onClick={() => setIsOpen(!isOpen)}
      >
        <DehazeIcon />
      </div>
      <div
        className={`w-2/5 ${
          isOpen ? "fixed top-0 left-0 flex" : "hidden "
        } lg:flex lg:w-1/5  h-full  flex-col bg-white dark:bg-[#292a2d]`}
      >
        <div className="flex flex-row shrink-0 items-center mt-4 h-12">
          <h2
            onClick={()=>{
                router.push('/');
            }}
            className=" cursor-pointer font-bold w-4/5 h-12 leading-12 text-center m-auto  bg-gray-200 dark:bg-gray-600 dark:text-white rounded-lg"
          >
            DeepSeek
          </h2>
          <div
            className="block lg:hidden mr-2 ml-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <DehazeIcon />
          </div>
        </div>
        <div className="grow"></div>
        <div className="shrink-0 mb-2 w-4/5 m-auto">
          <ThemeSwitch />
        </div>
      </div>
    </>
  );
};

export default NavBar;
