"use client"

import Image from "next/image";
import Head from "next/head";

export default function Home() {
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
        {/* Content Section */}
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
            <div className="col-span-1 flex flex-col justify-center mt-40">
              <p className="text-4xl font-extrabold">35%</p>
              <p className=" mt-2 text-[13pt] font-bold">Of women give birth by 18</p>
            </div>
          </div>
        </div>
      </div>
    </>

  );
}
