import React, { useState } from "react";
// Surgery  = require('../../assets/surgery.jpg')
import Image from "next/image";
import { Button } from "./Button";
import { Container } from "./Container";

const Hero = () => {
  const [showSolutions, setShowSolutions] = useState(false);
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="relative bg-gray-50 border-b-4 border-red-500">
      <div className="relative bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="hidden md:flex justify-between items-center py-6 md:justify-start md:space-x-10">
            <nav className=" space-x-10">
              <a
                href="#services"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Services
              </a>
              <a
                href="#our_work"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Our Work
              </a>
              <a
                href="#about_us"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                About Us
              </a>
              <a
                href="#contact"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Contact
              </a>
            </nav>
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0  font-extrabold text-xl">
              <span className="text-black pr-2">Call Today:</span>
              <span className="text-red-500">+1 559-816-3948</span>
            </div>
          </div>
        </div>
      </div>
      <Container className="pt-20 pb-16 text-center lg:pt-32 ">
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
          Lane & Associates{" "}
          <span className="relative md:whitespace-nowrap text-red-600">
            <span className="relative">Legal Nurse Consultants</span>
          </span>{" "}
          for legal experts.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
          America&apos;s Legal Nurse™
          {/* A coordinated team of legal nurse consultants working as your medical subject matter experts. */}
        </p>
      </Container>
    </div>
  );
};

export default Hero;
