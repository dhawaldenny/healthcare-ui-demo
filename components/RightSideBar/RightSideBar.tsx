"use client";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import { LabResultDataProps, LabResultsData, ProfileItemData } from "./Data";
import { dataContext } from "@/app/page";

export interface ProfileItemInterface {
  id: number;
  name: string;
  iconPath: string;
  value: string;
}

const RightSideBar = () => {
  const { currentUserData } = useContext(dataContext);
  const [data, setData] = useState<ProfileItemInterface[] | null>();

  useEffect(() => {
    setData((pre) => [
      {
        id: 1,
        name: "Date Of Birth",
        iconPath: "/icons/BirthIcon.svg",
        value: currentUserData.date_of_birth,
      },
      {
        id: 2,
        name: "Gender",
        iconPath: "/icons/FemaleIcon.svg",
        value: currentUserData.gender,
      },
      {
        id: 3,
        name: "Contact Info.",
        iconPath: "/icons/PhoneIcon.svg",
        value: currentUserData.phone_number,
      },
      {
        id: 4,
        name: "Emergency Contacts",
        iconPath: "/icons/PhoneIcon.svg",
        value: currentUserData.emergency_contact,
      },
      {
        id: 5,
        name: "Insurance Provider",
        iconPath: "/icons/InsuranceIcon.svg",
        value: currentUserData.insurance_type,
      },
    ]);
  }, [currentUserData]);

  return (
    <div className="h-full w-full gap-2 flex flex-col">
      <div className="h-auto w-full bg-white rounded-xl flex flex-col gap-4 p-3">
        <div className="justify-items-center w-full">
          <Image
            src={currentUserData.profile_picture}
            alt="Profile Photo"
            width={100}
            height={100}
            className="w-24 h-auto rounded-full"
          />
          <p className="text-2xl font-bold">{currentUserData.name}</p>
        </div>
        <div className="flex flex-col gap-2 justify-items-start">
          {data &&
            data.map((item, index) => <ProfileItems key={index} item={item} />)}
        </div>
        <div className="text-center w-full">
          <button className="p-3 rounded-full bg-[#01F0D0]">
            Show All Information
          </button>
        </div>
      </div>
      <div className="h-[55vh] w-full bg-white rounded-xl p-3">
        <div className="h-[15%] flex justify-between px-3 items-center">
          <p className="font-extrabold text-2xl">Lab Results</p>
        </div>
        <div
          className="overflow-y-auto h-[80%] scrollbar-thin scrollbar-thumb-dark-blue scrollbar-track-light-gray scrollbar-rounded-full"
          style={{
            scrollbarWidth: "thin",
            scrollbarColor: "black #E9E9E9",
          }}
        >
          {currentUserData.lab_results.map((item: string, index: number) => (
            <LabResult key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RightSideBar;

const ProfileItems = ({ item }: { item: ProfileItemInterface }) => {
  return (
    <div className="flex gap-2 items-center">
      <Image
        src={item.iconPath}
        alt={item.name}
        width={28}
        height={28}
        className="w-auto h-auto"
      />
      <div>
        <p className="">{item.name}</p>
        <p className="font-bold">{item.value}</p>
      </div>
    </div>
  );
};

const LabResult = ({ item }: { item: string }) => {
  return (
    <div className="flex justify-between p-3 hover:bg-[#F6F7F8] rounded-xl">
      <p>{item}</p>
      <Image
        src={"/icons/downloadIcon.svg"}
        alt="download Icon"
        width={20}
        height={20}
        className="w-auto h-auto cursor-pointer"
      />
    </div>
  );
};
