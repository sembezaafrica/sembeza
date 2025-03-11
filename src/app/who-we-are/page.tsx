"use client"

import Image from "next/image";
import Head from "next/head";

export default function Home() {

  return (
    <>
      <Head>
        <title>Who we are</title>
      </Head>
      <div className="flex flex-col">

        {/* Who we are Section */}
        <div className="relative bg-[#505A28] w-full text-[#F6F4DE] text-2xl flex flex-col">
            <p className="text-[32pt] font-black justify-start ml-[10%] mr-[10%] mb-5 mt-17">Who we are</p>
            <p className="text-[20pt] font-semibold justify-start ml-[10%] mr-[10%] mb-30">Welcome to Sembeza Africa, where sports, conservation, education, and community come together to transform lives.</p>
        </div>

        {/* Story Section */}
        <div className="relative bg-[#F6F4DE] w-full text-[#505A28] text-2xl flex flex-col">
            <p className="text-[32pt] font-bold text-center ml-[10%] mr-[10%] mb-5 mt-17">Our Story</p>
            <p className="text-[18pt] font-normal justify-start ml-[10%] mr-[10%] mb-15">Our journey began 
                in 1996, when a group of passionate Ugandans discovered the enormous power of sports in 
                mobilizing and supporting young people. This passion led to the creation of the Rhino Athletics 
                Club, one of Uganda&#39;s oldest athletics clubs, and the launch of an international basketball 
                tournament that ran successfully for eight years.
            </p>
            <p className="text-[18pt] font-normal justify-start ml-[10%] mr-[10%] mb-25">In the years 
                since, our founders have pursued professional growth, spreading their vision globally 
                regarding the importance of sports, respect, and human values, but never abandoning their 
                commitment to Uganda. Recognizing the value of sport as a tool for development, Sembeza 
                Africa was founded, a nonprofit organization dedicated to the mission of intertwining 
                sport with environmental, social and human sustainability, emphasizing the “I am because 
                we are” concept at the heart of Ubuntu (humanity in Zulu). Today, we use Sports for 
                conservation, health, education, and tourism to drive impactful change across Uganda.
            </p>
        </div>

        {/* Our Vision + Mission Section */}
        <div className="relative bg-[#505A28] w-full text-[#F6F4DE] text-2xl grid grid-cols-1 md:grid-cols-2 pt-5">
            <p className="text-[40pt] font-black text-center ml-[10%] mr-[10%] mb-5 mt-20">Our Vision and Mission</p>
            <div>
                <p className="text-[18pt] font-normal justify-start ml-[10%] md:ml-0 mr-[10%] mb-25 mt-16">
                Our vision is focused on developing youth-centered programs that contribute to a new generation 
                of leaders who are capable of transforming their communities through sports, conservation, 
                and education, and who are able to appreciate different cultures, diverse backgrounds, and various 
                expressions of self. 
                </p>
                <p className="text-[18pt] font-normal justify-start ml-[10%] md:ml-0 mr-[10%] mb-20 mt-16">
                Accordingly, our mission is to empower individuals through programs that promote 
                personal growth, well-being, and community connection, enabling them to develop and build
                 an open and inclusive vision toward the world around them. We emphasize conservation, 
                 education, and tourism, creating sustainable pathways to employment and lasting impact.
                </p>
            </div>

        </div>

        {/* Our Approach Section */}
        <div className="relative bg-[#F6F4DE] w-full text-[#505A28] text-2xl grid grid-cols-1 md:grid-cols-2 pt-5">
            <p className="text-[40pt] font-black text-center ml-[10%] mr-[10%] mb-5 mt-20">Our Approach</p>
            <div>
                <p className="text-[18pt] font-normal justify-start ml-[10%] md:ml-0 mr-[10%] mb-15 mt-16">
                
                Working with a large network of partners and volunteers from around the world, our 
                programs are based on collaboration with communities and focus on four main areas:
                </p>
                <ul className="list-disc pl-5 space-y-4 text-[#505A28] text-[16pt] ml-[10%] md:ml-0 mr-[10%] mb-15">
                    <li>
                        <strong>Sports development:</strong> We offer training, resources, and events to promote mental and physical well-being and social skills.
                    </li>
                    <li>
                        <strong>Conservation:</strong> Through workshops and initiatives with partners such as the Uganda Wildlife Education Center and Lukango Tree Conservancy, we educate communities on environmental stewardship.
                    </li>
                    <li>
                        <strong>Education and health:</strong> We organize teacher workshops and engage communities to promote healthy lifestyles, mental and physical well-being, academic excellence, environmental sustainability, and cultural exchange.
                    </li>
                    <li>
                        <strong>Cultural preservation:</strong> We revalue traditional games and promote cultural heritage, ensuring that future generations remain connected to their roots.
                    </li>
                </ul>
            </div>

        </div>

        {/* Our Team Section */}
        <div className="relative bg-[#505A28] w-full text-[#F6F4DE] text-2xl flex flex-col h-50">
            <p className="text-center text-[39pt] font-extrabold pt-14">Read more about our work</p>
        </div>
        {/* Our Team Section */}
        <div className="relative bg-[#F6F4DE] w-full text-[#505A28] text-2xl flex flex-col h-300">
            <p className="text-[40pt] font-extrabold justify-start ml-[10%] mr-[10%] mb-5 mt-17">Our Team</p>
            <p className="text-[14pt] font-semibold justify-start ml-[10%] mr-[10%] mb-30">Sembeza Africa 
                is led by a dedicated, highly competent team with diverse expertise in media, sports 
                management, education, youth empowerment, conservation, and community outreach, all committed 
                to transforming lives through holistic growth in young people globally and across Uganda. 
                With a passion for innovation, inclusivity, and sustainability, they work tirelessly to 
                uplift under-resourced communities, navigating challenges and maximizing impact with a 
                collaborative, results-oriented approach.
            </p>
            <div className="bg-[#505A28] ml-[5%] mr-[5%] mb-15 flex flex-wrap justify-center ">
                <div className="m-10 border-2 border-[#F6F4DE] inline-block max-w-fit max-h-fit">
                    <Image 
                        src="/team-pics/WhatsAppImage2024-11-07at14_17_edited.avif"
                        width={240}
                        height={320}
                        alt="team picture 1"
                    />
                    <div className="p-4 bg-[#F6F4DE] text-[#505A28]">
                        <p className="text-center font-extrabold text-[14pt]">Andrew Byekwaso</p>
                        <p className="text-center text-[12pt]">CEO</p>
                    </div>
                </div>
                <div className="m-10 border-2 border-[#F6F4DE] inline-block max-w-fit max-h-fit">
                    <Image 
                        src="/team-pics/WhatsAppImage2024-11-07at19_12_42.avif"
                        width={240}
                        height={320}
                        alt="team picture 2"
                    />
                    <div className="p-4 bg-[#F6F4DE] text-[#505A28]">
                        <p className="text-center font-extrabold text-[14pt]">Rachel Byekwaso</p>
                        <p className="text-center text-[12pt]">General Manager</p>
                    </div>
                </div>
                <div className="m-10 border-2 border-[#F6F4DE] inline-block max-w-fit max-h-fit">
                    <Image 
                        src="/team-pics/WhatsAppImage2024-11-08at07_56_34.avif"
                        width={240}
                        height={320}
                        alt="team picture 3"
                    />
                    <div className="p-4 bg-[#F6F4DE] text-[#505A28]">
                        <p className="text-center font-extrabold text-[14pt]">Arnold Sserukera</p>
                        <p className="text-center text-[12pt]">On-site Operations</p>
                    </div>
                </div>
                <div className="m-10 border-2 border-[#F6F4DE] inline-block max-w-fit max-h-fit">
                    <Image 
                        src="/team-pics/386B0368_edited.avif"
                        width={240}
                        height={320}
                        alt="team picture 4"
                    />
                    <div className="p-4 bg-[#F6F4DE] text-[#505A28]">
                        <p className="text-center font-extrabold text-[14pt]">Wayne Thompson</p>
                        <p className="text-center text-[12pt]">Quality Physical Educator</p>
                    </div>
                </div>
                <div className="m-10 border-2 border-[#F6F4DE] inline-block max-w-fit max-h-fit">
                    <Image 
                        src="/team-pics/386B0296(1)_JPG.avif"
                        width={240}
                        height={320}
                        alt="team picture 5"
                    />
                    <div className="p-4 bg-[#F6F4DE] text-[#505A28]">
                        <p className="text-center font-extrabold text-[14pt]">Yannick Wolffensperger</p>
                        <p className="text-center text-[12pt]">Volunteer Media Team</p>
                    </div>
                </div>
            </div>
        </div>

      


      </div>
    </>

  );
}
