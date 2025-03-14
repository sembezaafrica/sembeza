"use client";

import Head from "next/head";
import Image from "next/image";

export default function Ubuntu() {
  return (
    <>
      <Head>
        <title>Ubuntu</title>
      </Head>
      <div className="bg-[#F6F4DE] min-h-screen pb-10">
        <div className="relative">
          {/* Background Image */}
          <Image
            src="/assets/us3.jpeg"
            alt="top image in page"
            width={1920}
            height={434}
            className="w-full h-[434px] object-cover object-[center_50%] rounded-lg"
          />
        </div>
        <div className="text-[#505A28] ">
          <div className="font-extrabold justify-center text-[30pt] mt-5 text-center">
            <h1>Ubuntu Sports Festival</h1>
          </div>
          <div className="font-bold text-[20pt] text-center mt-5">
            <h2> Uniting communities through sports and conservation</h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
          <div className="bg-[#505A28] rounded-lg ">
            <div className="font-extrabold text-[20pt] pl-5 pt-10 text-center">
              <h2>Not just sports events</h2>
            </div>
            <div className="font-bold text-[15pt] pl-5 pr-5 pt-5 pb-5">
              <p>
                The Ubuntu Sports Festival is much more than just a sports
                event: it is a transformative experience based on the values of
                cultural preservation, environmental sustainability, and
                connecting diverse cultures and communities. Over the years, the
                festival has involved thousands of participants, not only from
                all over Uganda, but from around the world, to celebrate love,
                humanity, and shared passions through sports and traditional
                Ugandan games. In light of this, the philosophy of the Ubuntu
                Festival is based on the concept of “I am because we are,”
                emphasizing the sense of humanity, respect, dignity and
                recognition among humans and populations.
              </p>
            </div>
          </div>
          <div className="bg-[#F69441] rounded-lg text-[#505A28]">
            <div className="font-extrabold text-[20pt] text-center pl-5 pr-5 pt-10">
              <h2>Why Ubuntu?</h2>
            </div>
            <div className="font-bold text-[15pt] pl-5 pr-5 pt-5 pb-5">
              <p>
                “Ubuntu” encapsulates the essence of community and
                interconnectedness. This festival is built on the belief that
                when we come together, we can create powerful change. By
                engaging in sports and conservation, participants experience
                firsthand the importance of collaboration, cultural
                preservation, and environmental responsibility.
                <div className="font-extrabold text-[17pt]">
                  “Ubuntu places emphasis on values of human solidarity,
                  empathy, human dignity and the humaneness in every person, and
                  that holds that a person is a person through others”.
                  (Mugumbate & Nyanguru, 2015)
                </div>
              </p>
            </div>
          </div>
        </div>
        <div className="font-extrabold text-center text-[30pt] text-[#505A28] mt-10 mb-0">
          <h1>Our Mission</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-0 ">
          <div className="text-[#505A28] font-bold text-[15pt] mt-0 pl-5 pr-5 pt-5 pb-5">
            <div>
              <p>
                ​Fostering, persevering and practicing the concepts of unity and
                collaboration: Respecting the central philosophy of Ubuntu, the
                Festival promotes the values of interdependence and sharing, by
                bringing together various communities and different people
                through sports and games, as these do not look at social
                differences and racial prejudices.
              </p>
            </div>
          </div>
          <div className="text-[#505A28] font-bold text-[15pt] mt-0 pl-5 pr-5 pt-5 pb-5">
            <div>
              <p>
                Preserving cultural heritage and traditions: Through traditional
                games, such as Omweso, Morabaraba and Oware, we work to preserve
                and especially promote Uganda&#39;s rich cultural history, so
                that the latter is not pushed aside, but is recognized with the
                importance it carries.
              </p>
            </div>
          </div>
          <div className="text-[#505A28] font-bold text-[15pt] mt-0 pl-5 pr-5 pt-5 pb-5">
            <div>
              <p>
                Promoting environmental conservation and the achievement of the
                Sustainable Development Goals (SDGs) set by the United Nations:
                Participants are educated and, if necessary, introduced to
                sustainable conservation and protection practices for the
                environment, communities and well-being.
              </p>
            </div>
          </div>
          <div className="text-[#505A28] font-bold text-[15pt] mt-0 pl-5 pr-5 pt-5 pb-5">
            <div>
              <p>
                Specifically, our goal is the achievement of the following SDGs:
                <p>
                  <strong> i. </strong> SDG 3: Good Health and Well-Being.
                </p>
                <p>
                  <strong> ii. </strong> SDG 4: Quality Education
                </p>
                <p>
                  <strong> iii. </strong> SDG 5: Gender Equality
                </p>
                <p>
                  <strong> iv. </strong> SDG 10: Reduced Inequalities.
                </p>
                <p>
                  <strong> v: </strong> SDG 13: Climate Action
                </p>
                <strong> vi: </strong> SDG 15: Life on Land By staking our
                energies and efforts, we hope to achieve SDG 17: Partnership for
                the Goals.
              </p>
            </div>
          </div>
        </div>
        <div className="font-extrabold text-center text-[30pt] text-[#505A28] ">
          <h1>Key Features</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3 pl-10 ">
          <div className="text-[#505A28] font-bold text-[20pt] mt-5 ">
            <h3>1. Traditional games and sports</h3>{" "}
          </div>
          <div className="text-[#505A28] font-bold text-[20pt] mt-5 ">
            <h3>2. Conservation workshops</h3>{" "}
          </div>
          <div className="text-[#505A28] font-bold text-[20pt] mt-5 ">
            <h3>3. Cultural exchange</h3>
          </div>
          <div className="text-[#505A28] font-bold text-[20pt] mt-5 ">
            <h3>4. Global impact and volunteerism</h3>
          </div>
          <div className="text-[#505A28] font-bold text-[20pt] mt-5 ">
            <h3>5. Our partners and collaborators</h3>
          </div>
          <div className="text-[#505A28] font-bold text-[20pt] mt-5 ">
            <h3>6. Impact and next steps</h3>
          </div>
        </div>
        <div className="bg-[#505A28] rounded-lg mt-10 p-5">
          <div className="text-center font-extrabold text-[#F6F4DE] text-[30pt] mt-10">
            <h1>Achievements</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
            <div className="rounded-lg p-5">
              <div className="text-[50pt] font-extrabold text-center mt-5">
                <h1>1,000+</h1>
              </div>
              <div className="text-[15pt] font-semibold text-center">
                <p>
                  Participants from Uganda and various international communities
                  engaged in sports, conservation, and cultural activities.
                </p>
              </div>
            </div>
            <div className="rounded-lg p-5">
              <div className="text-[50pt] font-extrabold text-center mt-5">
                <h1>5</h1>
              </div>
              <div className="text-[15pt] font-semibold text-center">
                <p>
                  International partnerships collaborating with organizations
                  from five different countries.
                </p>
              </div>
            </div>
            <div className="rounded-lg p-5">
              <div className="text-[50pt] font-extrabold text-center mt-5">
                <h1>6</h1>
              </div>
              <div className="text-[15pt] font-semibold text-center mb-10">
                <p>
                  Community-based partners working closely with six local
                  community partners to ensure the festival's reach and
                  effectiveness in promoting unity and development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
