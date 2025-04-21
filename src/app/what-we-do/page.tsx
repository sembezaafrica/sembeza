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
      img: "/assets/ubuntu_1.jpeg",
      link: "/what-we-do/ubuntu",
      text: "Ubuntu Festival",
      period: "Anually",
      description: "The Ubuntu III Sports Festival \
      of Culture 2025 is a weeklong event that aims \
      to promote unity, physical well-being, cultural\
      awareness, and youth empowerment through sports \
      and traditional games.",
    },
    {
      img: "/assets/football_1.jpeg",
      link: "/what-we-do/football",
      text: "TheBestBareFootLeague in the World ",
      period: "2023 - Today",
      description: "The Best Barefoot League celebrates \
      raw talent and resilience, bringing players together \
      to compete without shoes in an authentic, grassroots \
      football experience. It unites communities globally, \
      emphasizing passion over luxury."

    },
    {
      img: "/assets/tree_1.jpeg",
      link: "/what-we-do/treetwingo",
      text: "Tree Twin Go",
      period: "Anually",
      description: "The Ubuntu III Sports Festival of \
      Culture 2025 is a weeklong event that aims to \
      promote unity, physical well-being, cultural awareness, \
      and youth empowerment through sports and traditional games. "
    },
    {
      img: "/assets/SPSP.jpg",
      link: "/what-we-do/spsp",
      text: "Satellite Primary Schools Programme",
      period: "2021 - 2023",
      description: "SPSP is an initiative that empowers \
      youth through sports and environmental conservation, \
      promoting physical activity, education, and \
      sustainable practices across Uganda.",
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
            priority
          />

          <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

          {/* Text Overlay */}
          <div className="absolute left-[10%] top-[20%] z-10 text-[#ffffff] w-[80%]">
            <h1 className="font-bold text-[50px] tracking-tight leading-none text-center">
              WHAT WE DO
            </h1>
            <p className="mt-1 font-semibold text-[15pt] italic text-center">
              Sembeza Africa is committed to transforming lives in Uganda by
              using sports to promote health, education, community development,
              and environmental sustainability.
            </p>
          </div>
        </div>
        <h3 className="text-[#505A28] text-center font-extrabold mt-10 text-[37pt]">
          Objectives of Sembeza Africa
        </h3>

        {/* Box Section */}
        <div className="bg-[#798156] w-full mx-auto mt-10 text-[#F6F4DE] rounded-lg p-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
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
        <div className="flex justify-center px-[10%] pt-10 pb-10">
          <div className="whatwedo-grid gap-2 justify-items-center">
            {items.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className="flex flex-col w-[300px] h-[500px] bg-white overflow-hidden group mt-6 relative"
              >
                {/* Image covers top 250px */}
                <div className="relative w-full h-[250px] overflow-hidden">
                  <Image
                    src={item.img}
                    alt={item.text}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-100"
                  />
                </div>

                {/* Text area with sliding animation */}
                <div className="flex flex-col h-[250px] p-4 bg-[#505A28] text-[#F6F4DE] transition-all duration-300 group-hover:h-[300px]">
                  <div className="h-20">
                    <p className="font-black text-[16pt] leading-tight font-sans">
                      {item.text}
                    </p>
                    <p className="font-normal text-[12pt] leading-tight font-sans mt-2">
                      {item.period}
                    </p>
                  </div>

                  <p className="font-normal text-[9pt] leading-tight font-sans mt-[14%] mb-3 overflow-scroll h-20">
                    {item.description}
                  </p>
                </div>

                {/* View More */}
                <div className="absolute bottom-0 left-0 w-full bg-[#505A28]/90 backdrop-blur-sm">
                  <div className="flex items-center gap-2 px-4 py-2 transition-all duration-300 opacity-0 group-hover:opacity-100 translate-y-full group-hover:translate-y-0">
                    <span className="text-[#F6F4DE] text-[12pt] font-semibold hover:text-[#F79442] transition-all">
                      View more
                    </span>
                    <div className="transition-transform duration-300 group-hover:translate-x-1">
                      <Image
                        src="/icons/arrow-right.png"
                        alt="arrow icon"
                        width={20}
                        height={20}
                      />
                    </div>
                  </div>
                </div>
                {/* <div className="absolute bottom-0 w-full h-[2px] bg-[#505A28] opacity-0 transition-opacity duration-300 group-hover:opacity-100" /> */}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
