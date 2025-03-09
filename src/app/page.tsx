"use client"

import Image from "next/image";
import Head from "next/head";
import { useEffect, useRef, useState } from 'react';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observerRef.current?.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observerRef.current.observe(containerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <>
      <Head>
        <title>Sembeza Africa</title>
      </Head>
      <div className="flex flex-col">
        <div className="relative w-full h-[860px] overflow-hidden">
          <Image
            src="/assets/ab5bd6fe70feecc41ef5ba694ba4aad8.jpg"
            fill
            style={{ objectFit: 'cover' }}
            alt="background image"
          />
          {/* Text Overlay */}
          <div className="absolute flex flex-col left-[10%] top-48 z-10 text-white w-[50%] leading-none">
            <p className="text-[36pt] font-extrabold">Empowering communities</p>
            <p className="text-[36pt] font-extrabold">through sports and</p>
            <p className="text-[36pt] font-extrabold">sustainability</p>
            <p className="mt-5 font-semibold text-[15pt] italic">Sembeza Africa is committed to transforming</p>
            <p className="mt-[2px] font-semibold text-[15pt] italic">lives in Uganda by using sports to promote health,</p>
            <p className="mt-[2px] font-semibold text-[15pt] italic">education, community development, and</p>
            <p className="mt-[2px] font-semibold text-[15pt] italic">environmental sustainability.</p>
          </div>

        </div>

        {/* Facts Section */}
        <div className="relative bg-[#505A28] h-[500px] w-full text-white text-2xl text-center">
          <p className="mt-3 pt-4 px-6 font-bold">Why is our intervention needed?</p> {/* Added padding */}
          <div className="grid grid-cols-3 gap-4 mt-16">
            <div className="col-span-1 flex flex-col justify-center">
              <p className="text-4xl font-extrabold">50,403,083</p>
              <p className=" mt-2 text-[13pt] font-bold">Total population in 2024</p>
            </div>
            <div className="col-span-1 flex flex-col justify-center">
              <p className="text-4xl font-extrabold">77%</p>
              <p className=" mt-2 text-[13pt] font-bold">Of the population are below 25</p>
            </div>
            <div className="col-span-1 flex flex-col justify-center">
              <p className="text-4xl font-extrabold">16.7</p>
              <p className=" mt-2 text-[13pt] font-bold">Average population age</p>
            </div>
            <div className="col-span-1 col-start-2 flex flex-col justify-center mt-40">
              <p className="text-4xl font-extrabold">35%</p>
              <p className=" mt-2 text-[13pt] font-bold">Of women give birth by 18</p>
            </div>
          </div>
        </div>

        {/* Content section */}
        <div className="bg-[#F6F4DE] text-[#505A28] font-semibold p-7 text-[17pt] pl-35 pr-35">
          <p>Uganda’s population is currently at 50 million and 
            is expected to reach 85 million by 2050. With a median 
            age of just 16.7 years, the country’s youth face 
            significant challenges, including the fact that 35% of 
            women give birth by age 18.</p> <br></br>
          <p>These numbers highlight the urgent need for sustainable
            development and opportunities for young people to thrive.</p> <br></br>
          <p>At Sembeza Africa, we believe that sports can be a 
            powerful tool to address these challenges. By using 
            sports to promote education, health, and gender equality, 
            we provide a platform for young people, especially girls, 
            to build confidence, develop leadership skills, and delay 
            early pregnancies. Through structured sports programs, 
            we aim to empower Uganda's youth, giving them the chance 
            to shape a better future for themselves and their communities.</p>
        </div>
      
        {/* Animated Sections Parent */}
        <div 
          ref={containerRef}
          className="relative flex flex-col gap-8 items-center py-16 overflow-hidden bg-[#505A28]"
        >
          {/* Left Slide-in Div */}
          <div
            className={`w-[80vw] h-64 bg-[#7A8156] rounded-lg p-8 text-[#F6F4DE] transition-transform duration-1000 ${
              isVisible ? 'translate-x-0' : '-translate-x-full'
            }`}
          >
            <h2 className="text-2xl font-bold mb-4">Vision</h2>
            <p>Develop youth-focused programs contributing to a new generation
              of excellence in transforming communities through sports and education
            </p>
          </div>

          {/* Right Slide-in Div */}
          <div
            className={`w-[80vw] h-64 bg-[#F6F4DE] rounded-lg p-8 text-[#505A28] transition-transform duration-1000 delay-300 ${
              isVisible ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <h2 className="text-2xl font-bold mb-4">Mission</h2>
            <p>Through the unifying power of sports and traditional games, we promote
              sustainable development and education, enhance health and tourism,
              and foster environmental and cultural conservation. By breaking down social,
              economin, political, and raicial barriers, we aim to inspire
              personal growth, mutual tolerance, and cultural exchange. Through these 
              efforts, we strive to create sustainable opportunities and pathways for 
              youth, empowering them to build a prosperous and inclusive
            </p>
          </div>
        </div>


      </div>
    </>

  );
}
