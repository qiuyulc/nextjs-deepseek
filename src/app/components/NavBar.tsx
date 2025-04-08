"use client";
import React, { useMemo, useState } from "react";
import ThemeSwitch from "./ThemeSwitch";
import DehazeIcon from "@mui/icons-material/Dehaze";
import { useUser } from "@clerk/nextjs";
import { useQuery } from "@tanstack/react-query";
import { useRouter, usePathname } from "next/navigation";
import axios from "axios";
import User from "./User";
import GradientCircularProgress from './Loading'

import { CharModel } from "@/db/schema";
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useUser();
  const router = useRouter();
  const { data: chats, isPending } = useQuery({
    queryKey: ["chats"],
    queryFn: () => {
      return axios.post("/api/get-chats");
    },
    enabled: !!user?.id,
  });
  const pathname = usePathname();

  const navBarList = useMemo(() => {
    if (isPending) {
      return (
        <div className="h-12 w-4/5 m-auto flex items-center justify-center">
          <GradientCircularProgress />
        </div>
      );
    }
    return chats?.data.map((chat: CharModel) => {
      return (
        <div
          className="h-12 w-4/5 cursor-pointer mb-1  m-auto flex items-center justify-center"
          onClick={() => {
            router.push(`/chat/${chat.id}`);
          }}
          key={chat.id}
        >
          <p
            className={`h-full leading-12  w-full text-center line-clamp-1 ${
              pathname === `/chat/${chat.id}`
                ? "text-blue-700 dark:text-white-700 font-bold "
                : ""
            }`}
          >
            {chat.title}
          </p>
        </div>
      );
    });
  }, [isPending, chats?.data, pathname, router]);
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
            onClick={() => {
              router.push("/");
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
        <div className="grow">{navBarList}</div>
        <div className="shrink-0 mb-2 w-4/5 m-auto">
          <User></User>
        </div>
        <div className="shrink-0 mb-2 w-4/5 m-auto">
          <ThemeSwitch />
        </div>
      </div>
    </>
  );
};

export default NavBar;
