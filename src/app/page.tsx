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
          <div className="absolute left-6 top-12 z-10 text-white text-3xl">
            <p>Empowering communities</p>
            <p>through sports and</p>
            <p>sustainability</p>
          </div>

        </div>
        {/* Content Section */}
        <div className="relative bg-[#505A28] h-[500px] w-full text-white text-2xl text-center">
          <p className="mt-3 pt-4 px-6 font-bold">Why is our intervention needed?</p> {/* Added padding */}
          <div className="grid grid-cols-3 gap-4 mt-14">
            <div className="col-span-1 flex flex-col justify-center">
              <p className="text-4xl font-extrabold">50,403,083</p>
              <p className=" mt-2 text-[13pt] font-bold">Total population in 2024</p>
            </div>
            <div className="col-span-1">Box 2</div>
            <div className="col-span-1">Box 3</div>
            <div className="col-span-1 mt-44">Box 4</div>
          </div>
        </div>
      </div>
    </>

  );
}
