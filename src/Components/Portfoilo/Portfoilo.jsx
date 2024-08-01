import { GoPlus } from "react-icons/go"; 
import { AiOutlinePlus } from "react-icons/ai"; 
import { RxStarFilled } from 'react-icons/rx';


import { useState } from 'react';

export default function Parent() {
    return <>
        <div id='Portfoilo' className='container flex flex-col mx-auto items-center justify-center '>

      <h1 className='font-bold text-5xl pt-40 text-black uppercase mb-8 max-[1000px]:text-2xl firefox-specific firefox-center'>
        Portfoilo  Component
      </h1>
      <div className='flex items-center justify-center w-full max-w-4xl'>
        <hr className='border-t-4 border-black max-w-36 flex-grow' /> {/* Left horizontal line */}
        
        <RxStarFilled className='text-black mx-8' size={30} /> {/* Star icon with margin */}
        
        <hr className='border-t-4 border-black max-w-36 flex-grow' /> {/* Left horizontal line */}
      </div>

<div id="white-box" class="hidden fixed inset-0 flex justify-center items-center bg-white">
<div class="main-img relative flex justify-between items-center">
    <div class="close absolute right-0 top-0" id="closeBtn">
        <i class="p-2 fa-solid fa-circle-xmark"></i>
    </div>
    <div class="left" id="leftBtn">
        <i class="fa-solid fa-arrow-left text-4xl"></i>
    </div>
    <div class="right" id="rightBtn">
        <i class="fa-solid fa-arrow-right text-4xl"></i>
    </div>
</div>
</div>
<div class="container mx-auto p-4">
<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
    <div class="item relative group">
    <img src="./Images/portfolio-1.png" class="w-full h-full object-cover" alt=""/>
        <div class="text-white text-8xl absolute inset-0 bg-customGreen bg-opacity-75 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<GoPlus />     
   </div>
    </div>
    <div class="item relative group">
    <img src="./Images/portfolio-3.png" class="w-full h-full object-cover" alt=""/>
        <div class="text-white text-8xl  absolute inset-0 bg-customGreen bg-opacity-75 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<GoPlus />     
   </div>
    </div>
    <div class="item relative group">
    <img src="./Images/portfolio-1.png" class="w-full h-full object-cover" alt=""/>
        <div class="text-white text-8xl  absolute inset-0 bg-customGreen bg-opacity-75 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<GoPlus />     
   </div>
    </div>
    <div class="item relative group">
    <img src="./Images/portfolio-2.png" class="w-full h-full object-cover" alt=""/>
        <div class="text-white text-8xl  absolute inset-0 bg-customGreen bg-opacity-75 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<GoPlus />     
   </div>
    </div>
    <div class="item relative group">
    <img src="./Images/portfolio-3.png" class="w-full h-full object-cover" alt=""/>
        <div class="text-white text-8xl  absolute inset-0 bg-customGreen bg-opacity-75 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<GoPlus />     
   </div>
    </div>
    <div class="item relative group">
    <img src="./Images/portfolio-2.png" class="w-full h-full object-cover" alt=""/>
        <div class="text-white text-8xl  absolute inset-0 bg-customGreen bg-opacity-75 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<GoPlus />     
   </div>
    </div>
</div>
</div>
</div>
</>
}
