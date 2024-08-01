import React, { useState } from 'react'
import { RxStarFilled } from 'react-icons/rx';

export default function Contact() {



  return <>
      <div className="contact-section py-20 bg-white">

      <div className="container mx-auto px-4">
        <h1 className="text-5xl pt-40 text-gray-800 font-bold text-center mb-8">
          CONATCT SECTION
        </h1>
        <div className='flex items-center justify-center w-full max-w-4xl text-center mx-auto'>
        <hr className='border-t-4 border-black max-w-36 flex-grow' /> {/* Left horizontal line */}
        
        <RxStarFilled className='text-black mx-8' size={30} /> {/* Star icon with margin */}
        
        <hr className='border-t-4 border-black max-w-36 flex-grow' /> {/* Left horizontal line */}
      </div>
        <form className="max-w-2xl mx-auto bg-white p-10 rounded-lg shadow-lg">
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="userName">
              userName
            </label>
            <input
              className="w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              id="userName"
              type="text"
              placeholder="userName"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="userAge">
              userAge
            </label>
            <input
              className="w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              id="userAge"
              type="text"
              placeholder="userAge"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="userEmail">
              userEmail
            </label>
            <input
              className="w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              id="userEmail"
              type="text"
              placeholder="userEmail"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="userPassword">
              userPassword
            </label>
            <input
              className="w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              id="userPassword"
              type="password"
              placeholder="userPassword"
            />
          </div>
          <div className="text-left">
            <button
              className="px-6 py-2 bg-green-500 text-white font-bold rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
              type="submit"
            >
              send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  </>
}
