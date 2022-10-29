import React from "react";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineUserAdd } from "react-icons/hi";
const NavBar: NextPage = () => {
  return (
    <header className="container flex flex-col  justify-center items-center py-5 xl:flex-row xl:justify-around  m-auto relative">
      <div className="hidden xl:block">
        <Image
          src={"/NavBarLogoLeftSide.svg"}
          alt="Design to code"
          width={100}
          height={100}
        />
      </div>
      <div>
        <Image
          src={"/NavBarLogo.svg"}
          height={59}
          width={291.09}
          alt="Design to code"
        />
      </div>
      <nav className="my-4">
        <ul className="flex justify-center items-center">
          <button className="w-[111px] h-[49px] border-2 rounded-2xl bg-gradient-to-l to-[#27c4a7de] from-[#4BBF49] text-white font-Roboto hidden md:block hover:text-black">
            Home
          </button>
          <li className="text-gray-500 font-Roboto md:mx-10 mx-5  hover:text-gray-600">
            <Link passHref href="/">
              Features
            </Link>
          </li>
          <li className="text-gray-500 font-Roboto md:mx-10 mx-5 hover:text-gray-600">
            <Link passHref href="/">
              Pricing
            </Link>
          </li>
          <li className="text-gray-500 font-Roboto md:mx-10 mx-5 hover:text-gray-600">
            <Link passHref href="/">
              Contact
            </Link>
          </li>
          <li className="text-gray-500 font-Roboto md:mx-10 mx-5 hover:text-gray-600">
            <Link passHref href="/">
              Login
            </Link>
          </li>
          <button className="w-[198px] h-[49px] bg-gradient-to-l to-[#795ffdee] from-[#3518C9] text-white font-Roboto md:flex justify-center items-center rounded-2xl hidden hover:text-black">
            <HiOutlineUserAdd className="text-xl mr-3" />
            Free signup
          </button>
        </ul>
      </nav>
      <div className="hidden xl:block">
        <div className="absolute top-0 right-0">
          <Image
            src={"/NavBarLogoRightSide.svg"}
            alt="Design to code"
            width={140}
            height={100}
          />
        </div>
      </div>
    </header>
  );
};
export default NavBar;
