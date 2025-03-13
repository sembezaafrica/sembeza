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
            src="/assets/us 3.JPG"
            alt="top image in page"
            width={1920}
            height={434}
            className="w-full h-[434px] object-cover object-[center_50%] rounded-lg"
          />
        </div>
        <div className="text-[#505A28] ">
          <div className="font-extrabold justify-center text-[30pt] mt-5 text-center">
            <h1>Ubuntu Sports Festival:</h1>
          </div>
          <div className="font-bold text-[20pt] text-center">
            <h2> Uniting communities through sports and conservation</h2>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 text-[#505A28] mt-5 ">
          <div>
            <div className="font-extrabold text-[20pt] pl-5">
              <h2>Not just sports events</h2>
            </div>
            <div className="font-bold text-[15pt] pl-5 pr-5">
              <p>
                The Ubunto Sports Festival is much more than just a sports
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
          <div>
            <div className="font-extrabold text-[20pt] ">
              <h2>Why Ubuntu?</h2>
            </div>
            <div className="font-bold text-[15pt]">
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
        <div className="font-extrabold text-center text-[30pt] text-[#505A28] mt-5">
          <h1>.Our Mission.</h1>
        </div>
        <div className="text-[#505A28] font-semibold text-[15pt] mt-5 grid grid-cols-4 gap-8 pl-5 pr-5">
          <div>
            <p>
              ​Fostering, persevering and practicing the concepts of unity and
              collaboration: Respecting the central philosophy of Ubuntu, the
              Festival promotes the values of interdependence and sharing, by
              bringing together various communities and different people through
              sports and games, as these do not look at social differences and
              racial prejudices.
            </p>
          </div>
          <div>
            <p>
              Preserving cultural heritage and traditions: Through traditional
              games, such as Omweso, Morabaraba and Oware, we work to preserve
              and especially promote Uganda's rich cultural history, so that the
              latter is not pushed aside, but is recognized with the importance
              it carries.
            </p>
          </div>
          <div>
            <p>
              Promoting environmental conservation and the achievement of the
              Sustainable Development Goals (SDGs) set by the United Nations:
              Participants are educated and, if necessary, introduced to
              sustainable conservation and protection practices for the
              environment, communities and well-being.
            </p>
          </div>
          <div>
            <p>
              Specifically, our goal is the achievement of the following SDGs:
              i. SDG 3: Good Health and Well-Being. ii. SDG 4: Quality Education
              iii. SDG 5: Gender Equality iv. SDG 10: Reduced Inequalities. v:
              SDG 13: Climate Action vi: SDG 15: Life on Land By staking our
              energies and efforts, we hope to achieve SDG 17: Partnership for
              the Goals.
            </p>
          </div>
        </div>
        <div className="font-extrabold text-center text-[30pt] text-[#505A28] mt-5">
          <h1>.Key Features.</h1>
        </div>
        <div className="text-[#505A28] font-bold text-[20pt] mt-5 grid grid-cols-3 gap-8 pl-5 pr-5">
          <h3>1. Traditional games and sports</h3>
          <h3>2. Conservation workshops</h3>
          <h3>3. Cultural exchange</h3>
        </div>
        <div className="text-[#505A28] font-bold text-[20pt] mt-5 grid grid-cols-3 gap-8 pl-5 pr-5">
          <h3>4. Global impact and volunteerism</h3>
          <h3>5. Our partners and collaborators</h3>
          <h3>6. Impact and next steps</h3>
        </div>
        <div className="bg-[#505A28] rounded-lg mt-10">
          <div className="text-center font-extrabold text-[#F6F4DE] text-[30pt] mt-10">
            <h1>.Achievements.</h1>
          </div>
          <div className="grid grid-cols-3 gap-8 mt-10">
            <div>
              <div className=" pl-10 text-[50pt] font-extrabold">
                <h1>1,000+</h1>
              </div>
              <div className="pl-10 text-[15pt] font-semibold">
                <p>
                  Participants from Uganda and various international communities
                  engaged in sports, conservation, and cultural activities.
                </p>
              </div>
            </div>
            <div>
              <div className=" pl-10 text-[50pt] font-extrabold">
                <h1>5</h1>
              </div>
              <div className="pl-10 text-[15pt] font-semibold">
                <p>
                  International partnerships collaborating with organizations
                  from five different countries.
                </p>
              </div>
            </div>
            <div>
              <div className=" pl-10 text-[50pt] font-extrabold">
                <h1>6</h1>
              </div>
              <div className="pl-10 text-[15pt] font-semibold">
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
