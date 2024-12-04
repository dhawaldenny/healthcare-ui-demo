"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle menu

  // Toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full px-5 h-16 flex justify-between items-center rounded-full bg-white">
      <div>
        <Image
          src="TestLogo.svg"
          width={200}
          height={64}
          alt="Logo"
          className=""
        />
      </div>

      {/* Menu for larger screens */}
      <div className="hidden md:flex ">
        <Menu />
      </div>

      <div className="hidden lg:flex">
        <RightMenu />
      </div>

      {/* Menu and hamburger for small screens */}
      <div className="flex lg:hidden">
        {/* Hamburger icon */}
        <button onClick={toggleMenu} className="flex items-center p-2">
          <Image src="/hamburgerIcon.svg" width={24} height={24} alt="Menu" />
        </button>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="absolute top-24 p-3 left-0 mx-5 w-[93%] md:w-[95%] rounded-3xl bg-white lg:hidden flex flex-col">
          <div className="flex md:hidden lg:hidden">
            <Menu />
          </div>
          <RightMenu />
        </div>
      )}
    </div>
  );
};

const MenuList = [
  {
    name: "Overview",
    iconPath: "homeIcon.svg",
    path: "#",
  },
  {
    name: "Patients",
    iconPath: "peopleIcon.svg",
    path: "#",
  },
  {
    name: "Schedule",
    iconPath: "calenderIcon.svg",
    path: "#",
  },
  {
    name: "Message",
    iconPath: "chatIcon.svg",
    path: "#",
  },
  {
    name: "Transactions",
    iconPath: "cardIcon.svg",
    path: "#",
  },
];

const Menu = () => {
  const [isActive, setIsActive] = useState<null | number>(null);
  const handleClick = (index: number) => {
    setIsActive(index); // Set active item on click
  };

  return (
    <nav>
      <ul className="flex justify-between md:flex-row flex-col">
        {MenuList.map((item, index) => (
          <li key={index}>
            <Link
              href={item.path}
              onClick={() => handleClick(index)}
              className={`flex items-center gap-1 p-3 rounded-full ${
                isActive === index ? "bg-[#01F0D0]" : "bg-transparent"
              }`}
            >
              <Image
                src={`${item.iconPath}`}
                alt={`${item.name} icon`}
                width={16}
                height={16}
                className="menu-icon w-4 h-4"
              />
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const RightMenu = () => {
  return (
    <div className="flex">
      <div className="flex gap-1 pr-3 border-r-2">
        <Image
          src={`/doctorIcon.png`}
          width={40}
          height={42}
          className="w-auto h-auto"
          alt="user icon"
        />
        <div className="flex flex-col">
          <p className="text-[#072635] font-bold md:text-sm">
            Dr. Jose Simmons
          </p>
          <p className="text-[#707070] md:text-sm">General Practitioner</p>
        </div>
      </div>
      <div className="flex items-center gap-2 pl-3">
        <Image
          src={"/settingIcon.png"}
          className="w-auto h-auto"
          height={20}
          width={20}
          alt="setting icon"
        />
        <Image
          src="/moreIcon.png"
          className="w-auto h-[18px]"
          height={18}
          width={5}
          alt="more icon"
        />
      </div>
    </div>
  );
};

export default Navbar;
