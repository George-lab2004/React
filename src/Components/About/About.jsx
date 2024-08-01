import React from 'react';
import "./../../../src/index.css"; // Ensure this path is correct
import { RxStarFilled } from 'react-icons/rx';

export default function About() {
  return (
    <div id='About' className='container bg-customGreen h-[80vh] flex flex-col items-center justify-center w-[100vw] max-w-full'>
      <h1 className='font-bold text-5xl text-white uppercase mb-8 max-[1000px]:text-2xl firefox-specific firefox-center'>
        About Component
      </h1>
      
      <div className='flex items-center justify-center w-full max-w-4xl'>
        <hr className='border-t-4 border-white max-w-36 flex-grow' /> {/* Left horizontal line */}
        
        <RxStarFilled className='text-white mx-8' size={30} /> {/* Star icon with margin */}
        
        <hr className='border-t-4 border-white max-w-36 flex-grow' /> {/* Left horizontal line */}
      </div>
      <div className='flex p-3 text-white w-3/4 justify-center'>
<p className='w-full pe-12 firefox-text'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
<p className='w-full firefox-text' >Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
      </div>
    </div>
  );
}
