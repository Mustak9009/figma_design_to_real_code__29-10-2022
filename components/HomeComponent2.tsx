import React from "react";
import Image from "next/image";
import { TbArrowsRightLeft, TbCopy, TbMessage2 } from "react-icons/tb";
import { BsPencil } from "react-icons/bs";
import { HiOutlineClipboardList, HiOutlineUserAdd } from "react-icons/hi";

export default function HomeComponent2() {
  return (
    <div className=" w-full bg-gradient-to-r   from-[#785EFD] to-[#371BCB] -z-20"> {/**/}
    
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
        <div className="mt-10 flex justify-center items-center flex-wrap p-1 gap-7 pb-6">
          <ContextBox />
          <ContextBox />
          <ContextBox />
          <ContextBox />
          <ContextBox />
          <ContextBox />
        </div>
      </div>
    </div>
  );
}
function TextArea() {
  return (
    <div className="max-w-7xl mx-auto mt-16">
      <div className="flex justify-center items-center">
        <button className="px-7 bg-white hover:bg-gray-200 active:bg-gray-200 outline-none py-3 flex items-center justify-center gap-5 m-2 rounded-lg">
          <HiOutlineUserAdd />
          Free Signup
        </button>
      </div>
      <div className="flex justify-center items-center text-center mt-10 md:mt-12">
        <section className="text-center flex justify-center flex-col items-center">
          <h3 className="md:text-6xl text-4xl font-Inter font-normal   text-transparent bg-clip-text bg-gradient-to-r from-[#38FFDC] to-[#FFE44B] mb-2">
            Use the latest <span className="font-Oswald">AI</span> features
          </h3>
          <p className="text-gray-200 font-Inter md:w-2/3 w-full">
            Start enhancing a range of tasks using AI, from writing emails,
            code, or blogs, to rephrasing paragraph’s you just want to reword!
          </p>
        </section>
      </div>
    </div>
  );
}
function ContextBox() {
  return (
    <section className="flex items-center justify-center bg-gray-700 p-4 rounded-xl  after:absolute after:top-1 after:bottom-1 after:right-0 after:left-0 after:bg-white relative after:-z-10 z-10 after:rounded-lg -rotate-3 after:rotate-3">
      <TbMessage2 className="text-5xl rotate-3 mb-4" />
      <article>
        <p className="text-gray-500 rotate-3">Content</p>
        <h4 className="text-3xl rotate-3">Explain Code</h4>
        <p className="text-gray-600 rotate-3">
          Explain some code based on the syntax provided
        </p>
      </article>
    </section>
  );
}
