"use client";

import Head from "next/head";
import Image from "next/image";

export default function Ubuntu() {
  return (
    <>
      <Head>
        <title>Ubuntu</title>
      </Head>
      <div className="bg-[#F6F4DE] min-h-screen">
        <div className="relative">
          {/* Background Image */}
          <Image
            src="/assets/us 4.JPG"
            alt="top image in page"
            width={1920}
            height={434}
            className="w-full h-[434px] object-cover object-[center_50%] rounded-lg"
          />
        </div>
        <div className="text-[#505A28] text-[40pt] font-extrabold mt-10 pl-20">
          <h1>Satellite Primary Schools Programme (SPSP)</h1>
        </div>
        <div className="pl-20 text-[#505A28] text-[15pt] font-semibold">
          <p>August - 2021 tilll now</p>
        </div>
        <div className="text-[#505A28] text-center text-[30pt] font-bold mt-10 pl-20">
          <h3>
            Empowering Youth Through Sports and Environmental Conservation
          </h3>
        </div>
        <div className="pl-20 text-[#505A28] text-[15pt] font-semibold">
          <p>
            Welcome to the Satellite Primary Schools Programme (SPSP), a
            transformative initiative by Sembeza Africa, RAC, and SportsUganda
            Ltd (UK). Our program intertwines sports and environmental
            conservation to impact young lives across Uganda.
          </p>
        </div>
        <div className="text-[#505A28] text-[30pt] font-bold mt-10 pl-20">
          <h3>Our mission</h3>
        </div>
        <div className="pl-20 text-[#505A28] text-[15pt] font-semibold">
          <p>
            We are committed to building an inclusive, active, and
            environmentally aware generation by combining sports with
            Sustainable Development Goals:
          </p>
          <p>
            <strong>.</strong> SDG 4: Ensure inclusive and equitable quality
            education.
          </p>
          <p>
            <strong>.</strong> SDG 13: Combat climate change through sustainable
            action.
          </p>
        </div>
        <div className="text-[#505A28] text-[30pt] font-bold mt-10 pl-20">
          <h3>What we do</h3>
        </div>
        <div className="pl-20 text-[#505A28] text-[15pt] font-semibold">
          <p>
            Our program has four main hubs in Uganda, impacting thousands of
            children:
          </p>
          <p>1. Akadot Primary School, Kumi District</p>
          <p>2. Xsabo Stadium, Kati-Kolo, Mukono District</p>
          <p>3. Ogul Primary School and Prisons Ground, Gulu District</p>
          <p>4. Karibu International School, Iganga District</p>
          <p>
            We promote physical education, conservation, and life skills,
            creating opportunities for youth to thrive and learn.
          </p>
        </div>
        <div className="font-extrabold text-center text-[30pt] text-[#505A28] mt-5">
          <h1>.Program Highlights.</h1>
        </div>
        <div className="text-[#505A28] font-bold text-[20pt] mt-5 grid grid-cols-3 gap-8 pl-5 pr-5">
          <h3>1. Environmental Impact</h3>
          <h3>2. Sports and Physical Education</h3>
          <h3>3. Lifelong Learning</h3>
        </div>
        <div className="bg-[#505A28] rounded-lg mt-10">
          <div className="text-center font-extrabold text-[#F6F4DE] text-[30pt] mt-10">
            <h1>.Achievements.</h1>
          </div>
          <div className="grid grid-cols-3 gap-8 mt-10">
            <div>
              <div className=" pl-10 text-[50pt] font-extrabold">
                <h1>10.000</h1>
              </div>
              <div className="pl-10 text-[15pt] font-semibold">
                <p>
                  Young People Reached: The program has engaged 10,000 children
                  across various hubs through continuous sports and conservation
                  activities.
                </p>
              </div>
            </div>
            <div>
              <div className=" pl-10 text-[50pt] font-extrabold">
                <h1>4</h1>
              </div>
              <div className="pl-10 text-[15pt] font-semibold">
                <p>
                  Pilot hubs launched. Four hubs were successfully launched in
                  different districts: Kumi, Mukono, Gulu, and Iganga.
                </p>
              </div>
            </div>
            <div>
              <div className=" pl-10 text-[50pt] font-extrabold">
                <h1>€15.000</h1>
              </div>
              <div className="pl-10 text-[15pt] font-semibold">
                <p>
                  Donated so far towards sports empowerment, environmental
                  action, facility upgrades, and coach training, transforming
                  young lives across Uganda.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
