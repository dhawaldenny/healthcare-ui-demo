"use client";
import LeftSideBar from "@/components/LeftSideBar/LeftSideBar";
import MiddlePage from "@/components/Main/MiddlePage";
import Navbar from "@/components/Navbar";
import RightSideBar from "@/components/RightSideBar/RightSideBar";
import data from "@/components/data.json";
import { createContext, useEffect, useState } from "react";

export const dataContext = createContext<any>(null);

const page = () => {
  const [currentUserData, setcurrentUserData] = useState(data[0]);

  useEffect(() => {
    console.log(currentUserData);
  }, [currentUserData]);

  return (
    <dataContext.Provider value={{ currentUserData, setcurrentUserData }}>
      <div className="bg-[#F6F7F8] w-auto h-auto md:flex flex-col">
        <div className="w-full h-[13%] p-3">
          <Navbar />
        </div>
        <div className="flex flex-col md:flex-row gap-3 px-5 h-[87%]">
          {/* Left Sidebar */}
          <div className="md:w-1/4 w-full md:pt-3 order-1 md:order-1">
            <LeftSideBar />
          </div>

          {/* Middle Content */}
          <div className="md:w-3/4 lg:w-2/4 w-full pt-3 order-2 md:order-2">
            <MiddlePage />
            <div className="hidden md:flex lg:hidden">
              <RightSideBar />
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="w-full lg:w-1/4 md:pt-3 order-3 flex lg:flex md:hidden">
            <RightSideBar />
          </div>
        </div>
      </div>
    </dataContext.Provider>
  );
};

export default page;
