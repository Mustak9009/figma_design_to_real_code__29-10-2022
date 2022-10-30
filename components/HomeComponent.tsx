import React from "react";
import Image from "next/image";
import { TbMessage2 } from "react-icons/tb";
export default function Home() {
  return (
    <div className="text-center max-w-5xl mx-auto relative">
      <section className="p-2">
        <h1 className="md:text-6xl text-4xl font-Inter font-normal   text-transparent bg-clip-text bg-gradient-to-r from-[#3ED6BB] to-[#785DFC] mb-2">
          <span className="font-Oswald">AI</span> to write code, blo
          <span className="text-[#775dfcb8]">g</span>s & more
        </h1>{" "}
        {/*bg-clip-text -> this tailwind class help to set gradient color on -> text // more -> https://developer.mozilla.org/en-US/docs/Web/CSS/background-clip* */}
        <p className="mt-7 text-gray-500 font-Inter">
          Enhance everything you do by using the latest from OpenAI to solve
          problems, <br className="hidden md:block" /> write solutions and make
          life easier.
        </p>
        <button className="md:w-[240px] md:h-[60px] w-[150px] h-[40px] text-xl bg-gradient-to-l to-[#2AC4A0] from-[#6C77EF] text-white font-Roboto rounded-2xl  hover:text-black mt-7">
          Get started
        </button>
      </section>
      <Image
        src={"/HomePageRightLogo.svg"}
        alt="Design to code"
        width={100}
        height={100}
        className="absolute md:-right-40 top-0 hidden xl:block"
      />
      <div>
        <HomeSection1 />
      </div>
    </div>
  );
}
function HomeSection1() {
  return (
    <div className="border-2 flex p-3">
      <div className="text-left">
        <section>
          <div>
            <div className="flex items-center">
              <TbMessage2 className="text-3xl mr-2"/>
              <h2 className="text-3xl">Explain Code</h2>
            </div>
            <p className="mt-1 text-gray-500">Explain some code based on the syntax provided</p>
          </div>
          <div>
            <p>Paste your code below:</p>
            <div>
              <code>
                {`
                  function HelloWorld(text){ 
                    echo text || Hello World; 
                  }   
              `}
              </code>
            </div>
          </div>
          <button className="px-6 py-3 bg-gradient-to-r from-[#795FFD] to-[#3518C9] text-white rounded-xl">Enhance with AI</button>
        </section>
      </div>
      <div></div>
    </div>
  );
}
