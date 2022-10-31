import React from "react";
import Image from "next/image";
import { TbArrowsRightLeft, TbCopy } from "react-icons/tb";
import { BsPencil } from "react-icons/bs";
import { HiOutlineClipboardList } from "react-icons/hi";
export default function HomeComponent2() {
  return (
    <div className="bg-gradient-to-r  from-[#785EFD] to-[#371BCB] w-full ">
      <div className="max-w-7xl mx-auto">
        <div className="pt-16  flex items-center justify-center flex-wrap">
          <div className="relative">
            <button className="px-7 bg-white  active:bg-white outline-none py-3 flex items-center justify-center gap-5 m-2 rounded-lg">
              <TbCopy />
              Explain Code
            </button>
            <p className="absolute ml-2 text-gray-300 truncate hidden xl:block">
              Examples of AI for Programming
            </p>
          </div>
          <button className="px-10 bg-[#A998FF] hover:bg-white active:bg-white outline-none py-3 flex items-center justify-center gap-5 m-2 rounded-lg">
            <TbArrowsRightLeft />
            Regex
          </button>
          <div className="relative">
            <button className="px-7 bg-[#A998FF] hover:bg-white active:bg-white outline-none py-3 flex items-center justify-center gap-5 m-2 rounded-lg">
              <BsPencil />
              Fix Grammar
            </button>
            <p className="absolute ml-2 text-gray-300 hidden xl:block">
              Examples of AI for Content
            </p>
          </div>
          <button className="px-10 bg-[#A998FF] hover:bg-white active:bg-white outline-none py-3 flex items-center justify-center gap-5 m-2 rounded-lg">
            <TbArrowsRightLeft />
            Todo
          </button>
          <button className="px-10 bg-[#A998FF] hover:bg-white active:bg-white outline-none py-3 flex items-center justify-center gap-5 m-2 rounded-lg">
            <HiOutlineClipboardList />
            Todo
          </button>
          <div className="relative ml-4 hidden xl:block">
            <Image
              src="/OpenAilogo.svg"
              alt="Design to code"
              width={170}
              height={150}
            />
            <p className="text-gray-300 mt-2 absolute ml-2">Powered By</p>
          </div>
        </div>
        <TextArea />
      </div>
    </div>
  );
}
function TextArea() {
  return <h1>Text area</h1>;
}
