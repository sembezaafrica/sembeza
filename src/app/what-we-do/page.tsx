"use client";

import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  const objectives = [
    { text: ["Promoting physical", "well-being"] },
    { text: ["Talent identification and", "Development"] },
    { text: ["Gender equality and", "Inclusion"] },
    { text: ["Health and Social", "Awareness Campaigns"] },
    {
      text: [
        "Children and youth",
        "empowerment through",
        "education and sports",
      ],
    },
    { text: ["Environmental", "Stewardship through", "Sports"] },
    { text: ["Community Development"] },
    { text: ["Wildlife Conservation and", "Awareness"] },
  ];

  const items = [
    {
      img: "/assets/ubuntu 1.JPG",
      link: "/what-we-do/ubuntu",
      text: "Ubuntu Festival",
    },
    {
      img: "/assets/football 1.JPG",
      link: "/what-we-do/football",
      text: "TheBestBareFootLeague in the World ",
    },
    {
      img: "/assets/tree 1.JPG",
      link: "/what-we-do/treetwingo",
      text: "Tree Twin Go",
    },
    {
      img: "/assets/SPSP.jpg",
      link: "/what-we-do/SPSP",
      text: "Satellite Primary Schools Programme",
    },
  ];

  return (
    <>
      <Head>
        <title>What we do</title>
      </Head>
      <div className="bg-[#F6F4DE] min-h-screen">
        <div className="relative">
          {/* Background Image */}
          <Image
            src="/assets/1.jpg"
            alt="top image in page"
            width={1920}
            height={434}
            className="w-full h-[434px] object-cover object-[center_50%]"
          />

          {/* Text Overlay */}
          <div className="absolute left-[16.5%] top-30 z-10 text-[#ffffff] w-[50%]">
            <h1 className="font-bold text-[50px] tracking-tight leading-none">
              WHAT WE DO
            </h1>
            <p className="mt-1 font-semibold text-[15pt] italic">
              Sembeza Africa is committed to transforming
            </p>
            <p className="mt-[2px] font-semibold text-[15pt] italic">
              lives in Uganda by using sports to promote health,
            </p>
            <p className="mt-[2px] font-semibold text-[15pt] italic">
              education, community development, and
            </p>
            <p className="mt-[2px] font-semibold text-[15pt] italic">
              environmental sustainability.
            </p>
          </div>
        </div>
        <h3 className="text-[#505A28] text-center font-extrabold mt-10 text-[37pt]">
          Objectives of Sembeza Africa
        </h3>

        {/* Box Section */}
        <div className="bg-[#798156] w-full mx-auto mt-10 text-[#F6F4DE] rounded-lg p-10">
          <div className="grid grid-cols-4 gap-8">
            {objectives.map((obj, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <Image
                  src="/assets/2.png"
                  alt="Objective img"
                  width={250}
                  height={250}
                />
                {obj.text.map((line, idx) => (
                  <h2
                    key={idx}
                    className="font-bold leading-tight text-[18pt] mt-2"
                  >
                    {line}
                  </h2>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* extra page info */}
        <div className="w-full mx-auto mt-10 text-[#788156] rounded-lg p-10">
          <div className="grid grid-cols-4 gap-8">
            {items.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className="relative flex flex-col items-center w-[300px] h-[300px] group"
              >
                {/* Image */}
                <div className="relative w-full h-full">
                  <Image
                    src={item.img}
                    alt={item.text}
                    width={200}
                    height={200}
                    className="rounded-lg object-cover w-full h-full transition duration-300 group-hover:opacity-80"
                  />
                  {/* Text Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center text-[#ffffff] opacity-0 transition-opacity duration-300 group-hover:opacity-100 font-bold text-[20pt]">
                    Read More.
                  </div>
                </div>
                {/* Text Below Image */}
                <h3 className="mt-2 text-center text-lg font-extrabold">
                  {item.text}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
