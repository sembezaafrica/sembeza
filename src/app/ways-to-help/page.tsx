"use client"

import Image from "next/image";
import Head from "next/head";

export default function WaysToHelp() {


  return (
    <div className="bg-[#F6F4DE]">
      <Head>
        <title>Sembeza Africa</title>
      </Head>
      <div className="flex flex-col">
        <div className="relative w-full h-[460px] overflow-hidden">
          <Image
            src="/assets/1d0560_1ce106e1d4bf44e1bbe94b16517db08b~mv2.avif"
            fill
            style={{ objectFit: 'cover' }}
            alt="background image"
            priority
          />

        </div>

        {/* Content section */}
        <div className="bg-[#F6F4DE] text-[#505A28] font-bold p-7 text-[14pt] pl-[10%] pr-[10%] mb-20">
          <p>
          Your donation to Sembeza Africa directly supports programs that empower Uganda&#39;s youth through 
          education, health, and leadership development, while promoting conservation and sustainable 
          communities. By giving, you help create opportunities for young people to build brighter futures 
          and drive lasting, positive change across Uganda. Together, we can transform lives and strengthen 
          communities.</p>
        </div>


      </div>
    </div>

  );
}
