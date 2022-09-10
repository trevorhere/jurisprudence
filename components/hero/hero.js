
import React, { useState } from 'react'
// Surgery  = require('../../assets/surgery.jpg')
import Image from "next/image"

const Hero = () => {
  const [showSolutions, setShowSolutions] = useState(false)
  const [showMore, setShowMore] = useState(false)

    return (
      <div className="relative bg-gray-50">
        <div className="relative bg-white shadow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="hidden md:flex justify-between items-center py-6 md:justify-start md:space-x-10">
              <nav className=" space-x-10">
                <a href="#services" className="text-base font-medium text-gray-500 hover:text-gray-900">
                 Services 
                </a>
                <a href="#our_work" className="text-base font-medium text-gray-500 hover:text-gray-900">
                 Our Work 
                </a>
                <a href="#about_us" className="text-base font-medium text-gray-500 hover:text-gray-900">
                 About Us 
                </a>
                <a href="#contact" className="text-base font-medium text-gray-500 hover:text-gray-900">
                 Contact 
                </a>
      
              </nav>
              <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                <a href="#contact" className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-600 hover:bg-red-700">
                  Schedule A Call Today 
                </a>
              </div>
            </div>
          </div>
        </div>
      
        <main className="lg:relative">
          <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
            <Image
              src="/images/surgery.jpg"
              alt="Picture of the author"
              className="hidden md:absolute inset-0 w-full h-full object-cover"
              layout="fill"
            />
          </div>
          <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
            <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                <span className="block text-red-600 xl:inline">America's Legal Nurse™</span><br/>
                <span className="block xl:inline">Lane & Associates</span>
                <span className="block text-red-600 xl:inline"> Legal Nurse Consultants</span>
              </h1>
              <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
                A coordinated team of legal nurse consultants working as your medical subject matter experts. 
                
              </p>
              {/* <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a href="/" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                    Get started
                  </a>
                </div>
                <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                  <a href="/" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
                    Live demo
                  </a>
                </div>
              </div> */}
            </div>
          </div>

        </main>
      </div>
    );
  }  

  export default Hero