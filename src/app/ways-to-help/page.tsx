"use client"

import Head from "next/head";

export default function WaysToHelp() {


  return (
    <div className="bg-[#F6F4DE]">
      <Head>
        <title>Sembeza Africa</title>
      </Head>
      <div className="flex flex-col">
        <h3 className="text-[#505A28] text-center font-extrabold mt-11 text-[37pt]">
          WAYS TO HELP
        </h3>

        {/* Content section */}
        {/* <div className="bg-[#F6F4DE] text-[#505A28] font-bold p-7 text-[14pt] pl-[10%] pr-[10%] mb-20">
          <p>
            Your donation to Sembeza Africa directly supports programs that empower Uganda&#39;s youth through 
            education, health, and leadership development, while promoting conservation and sustainable 
            communities. By giving, you help create opportunities for young people to build brighter futures 
            and drive lasting, positive change across Uganda. Together, we can transform lives and strengthen 
            communities.
          </p>
        </div> */}

        <div className="flex justify-center px-[10%] pt-15 pb-10 mt-5 mb-15 bg-[#505A28]">
          <div className="whatwedo-grid gap-2 justify-items-center">
            <div className="flex flex-col items-center w-[350px] h-[500px] bg-[#F6F4DE] mt-6 relative">
                <div className="flex justify-center items-center w-24 h-24 rounded-full bg-[#F79442] mt-[-30px]">
                    <p className="text-[#F6F4DE] font-sans font-semibold text-[30pt]">1</p>
                </div>
                <p className="text-[#505A28] font-bold text-[16pt] mt-8">
                    MAKE A DONATION
                </p>
                <p className="text-[#505A28] font-medium text-[12pt] ml-[10%] mr-[10%] mt-8 text-center">
                    Help Sembeza Africa empower vulnerable Ugandan children through sports. 
                    Your support provides coaching, equipment, meals, and school programs, 
                    giving children life skills, teamwork, and new opportunities to thrive.
                </p>
                <a href="https://donate.stripe.com/cN2aH13hm6GM3zGaEE" target="_blank" rel="noopener noreferrer" className="bg-[#505A28] text-[#F6F4DE] text-[10pt] p-3 pl-7 pr-7 mt-20 transition-all duration-100 hover:bg-[#F79442]">
                    Yes, I want to make a donation
                </a>
            </div>
            <div className="flex flex-col items-center w-[350px] h-[500px] bg-[#F6F4DE] mt-6 relative">
                <div className="flex justify-center items-center w-24 h-24 rounded-full bg-[#F79442] mt-[-30px]">
                    <p className="text-[#F6F4DE] font-sans font-semibold text-[30pt]">2</p>
                </div>
                <p className="text-[#505A28] font-bold text-[16pt] mt-8">
                    BECOME A MEMBER
                </p>
                <p className="text-[#505A28] font-medium text-[12pt] ml-[10%] mr-[10%] mt-8 text-center">
                    Help Sembeza Africa empower vulnerable Ugandan children through sports. 
                    Your support provides coaching, equipment, meals, and school programs, 
                    giving children life skills, teamwork, and new opportunities to thrive.
                </p>
                <a href="https://buy.stripe.com/14k2av3hm1ms5HOfYZ" target="_blank" rel="noopener noreferrer" className="bg-[#505A28] text-[#F6F4DE] text-[10pt] p-3 pl-7 pr-7 mt-20 transition-all duration-100 hover:bg-[#F79442]">
                    I want to become a member
                </a>
            </div>
            <div className="flex flex-col items-center w-[350px] h-[500px] bg-[#F6F4DE] mt-6 relative">
                <div className="flex justify-center items-center w-24 h-24 rounded-full bg-[#F79442] mt-[-30px]">
                    <p className="text-[#F6F4DE] font-sans font-semibold text-[30pt]">3</p>
                </div>
                <p className="text-[#505A28] font-bold text-[16pt] mt-8">
                    VOLUNTEER WITH US
                </p>
                <p className="text-[#505A28] font-medium text-[12pt] ml-[10%] mr-[10%] mt-8 text-center">
                    Help Sembeza Africa empower vulnerable Ugandan children through sports. 
                    Your support provides coaching, equipment, meals, and school programs, 
                    giving children life skills, teamwork, and new opportunities to thrive.
                </p>
                <a href="mailto:info@sembezaafrica.org?subject=Volunteering%20Proposal" target="_blank" rel="noopener noreferrer" className="bg-[#505A28] text-[#F6F4DE] text-[10pt] p-3 pl-7 pr-7 mt-20 transition-all duration-100 hover:bg-[#F79442]">
                    Email us
                </a>
            </div>
          </div>
        </div>


      </div>
    </div>

  );
}
