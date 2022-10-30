import React from "react";
import Image from "next/image";
import { TbMessage2 } from "react-icons/tb";
import { IoIosArrowDroprightCircle, IoIosArrowForward } from "react-icons/io";
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
      <HomeSection1 />
    </div>
  );
}
function HomeSection1() {
  return (
    <div className="shadow-xl border rounded-md md:flex  justify-around mt-16 ">
      <section className="text-left md:w-1/2 border-r p-4">
        <div>
          <div className="flex items-center">
            <TbMessage2 className="text-3xl mr-2" />
            <h2 className="sm:text-3xl text-2xl">Explain Code</h2>
          </div>
          <p className="mt-1 text-gray-500">
            Explain some code based on the syntax provided
          </p>
        </div>
        <div className="mt-3">
          <p className="font-Inter">Paste your code below:</p>
          <div className="bg-gray-200 p-4 mt-2 mb-8 rounded md:max-w-sm">
            <pre className="inline text-[#381BCB]">function</pre>{" "}
            <pre className="inline text-[#E10000]">{`HelloWorld`}</pre>
            <pre className="inline">(text)</pre>
            <pre className="inline">
              {`{  
  echo text || `}
            </pre>
            <pre className="inline text-[#009471]">{`"Hello world";`}</pre>
            <pre>{`}`}</pre>
          </div>
        </div>
        <button className="px-6 py-3 flex gap-2  items-center bg-gradient-to-r  from-[#795FFD] to-[#3518C9] text-white rounded-xl hover:text-black">
          <Image
            src={"/CopyLogo.png"}
            alt="Design to code"
            width={25}
            height={10}
          />
          Enhance with AI
        </button>
      </section>
      {/* ----------------- */}
      <section className="text-left md:w-1/2 border-l p-4">
        <div>
          <div className="flex items-center">
            <IoIosArrowDroprightCircle className="text-3xl mr-2" />
            <h2 className="sm:text-3xl text-2xl">What does this code do?</h2>
          </div>
          <p className="mt-1 text-gray-500">The following code does:</p>
        </div>
        <div className="flex justify-center mt-6">
          <div className="flex flex-col  mr-2 gap-12">
            <IoIosArrowForward className="text-2xl bg-gray-300 rounded-full  text-black p-1" />
            <IoIosArrowForward className="text-2xl  bg-gray-300 rounded-full  text-black p-1 " />
            <IoIosArrowForward className="text-2xl bg-gray-300 rounded-full  text-black p-1" />
          </div>
          <div >
            <div className="w-full border-b pb-2 ">
              The code above is a function definition.
            </div>
            <div className="border-b pb-2 mt-9">
              It defines a new function called `HelloWorld` that takes a single
              argument called `text`
            </div>
            <div className="mt-4 mb-7">
              The body of the function is a single line of code that prints out
              the value of `text` if it is defined, or `Hello World` if it is
              not defined.
            </div>
          </div>
        </div>
        <button className="px-6 py-2 flex gap-2  items-center bg-gray-300 rounded-xl hover:text-gray-500">
          <Image
            src={"/CopyLogo.png"}
            alt="Design to code"
            width={25}
            height={10}
          />
          Copy Output
        </button>
      </section>
    </div>
  );
}
