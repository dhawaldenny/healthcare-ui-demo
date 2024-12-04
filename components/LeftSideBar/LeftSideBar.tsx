"use client";
import Image from "next/image";
import React, { useContext, useState } from "react";
// import { UserData } from "./UserData";
import data from "@/components/data.json";
import { dataContext } from "@/app/page";

const LeftSideBar: React.FC = () => {
  const { setcurrentUserData } = useContext(dataContext);
  const [isSelect, setIsSelect] = useState<number>(0);

  const handleSelect = (id: number) => {
    setIsSelect(id);
    
    setcurrentUserData(data[id]);
  };

  return (
    <div className="h-auto md:h-[140vh] sm:h-[60vh] sm:mb-2 w-full bg-white rounded-xl">
      <div className="h-auto flex justify-between p-5 items-center">
        <p className="font-extrabold text-3xl">Patients</p>
        <Image
          src={"/searchIcon.png"}
          alt="search Icon"
          height={18}
          width={18}
          className="w-5 h-5"
        />
      </div>
      <div
        className="flex flex-col w-full h-[90%] overflow-y-auto scrollbar-thin scrollbar-thumb-dark-blue scrollbar-track-light-gray scrollbar-rounded-full"
        style={{
          scrollbarWidth: "thin",
          scrollbarColor: "black #E9E9E9",
        }}
      >
        {data.map((item, index) => (
          <div
            key={index}
            onClick={() => handleSelect(index)}
            className={`flex items-center  shadow-md p-2 rounded-lg space-x-4 hover:bg-[#cde4e1] ${
              isSelect === index ? "bg-[#D8FCF7]" : "bg-white"
            }`}
          >
            <Image
              src={item.profile_picture}
              alt={item.name}
              className="w-12 h-12 rounded-full object-cover"
              width={48} // Provide explicit width and height for next/image
              height={48}
            />
            <div className="flex-1">
              <h3 className="text-base font-semibold text-gray-800">
                {item.name}
              </h3>
              <p className="text-sm text-gray-600">{`${item.gender}, ${item.age}`}</p>
            </div>
            <button className="text-gray-400 hover:text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M6 10a2 2 0 110-4 2 2 0 010 4zM10 10a2 2 0 110-4 2 2 0 010 4zM14 10a2 2 0 110-4 2 2 0 010 4z" />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeftSideBar;
