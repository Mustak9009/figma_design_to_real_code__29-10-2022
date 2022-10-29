import React from 'react'

export default function Home() {
  return (
    <div className='text-center max-w-5xl mx-auto'>
      <section className='p-2'>
        <h1 className='md:text-6xl text-4xl font-Inter font-normal   text-transparent bg-clip-text bg-gradient-to-r from-[#3ED6BB] to-[#785DFC] mb-2'><span className='font-Oswald'>AI</span> to write code, blo<span className='text-[#775dfcb8]'>g</span>s & more</h1> {/*bg-clip-text -> this tailwind class help to set gradient color on -> text // more -> https://developer.mozilla.org/en-US/docs/Web/CSS/background-clip* */}
        <p className='mt-7 text-gray-500 font-Inter'>Enhance everything you do by using the latest from OpenAI to solve problems, <br className='hidden md:block'/> write solutions and make life easier.</p>
        <button className="md:w-[240px] md:h-[60px] w-[150px] h-[40px] text-xl bg-gradient-to-l to-[#2AC4A0] from-[#6C77EF] text-white font-Roboto rounded-2xl  hover:text-black mt-7">
            Get started
          </button>
      </section>
    </div>
  )
}
