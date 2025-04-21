"use client";

import Head from "next/head";
import Image from "next/image";

export default function Ubuntu() {
  return (
    <>
      <Head>
        <title>Ubuntu 1</title>
      </Head>
      <div className="bg-[#F6F4DE] min-h-screen pb-10">
        <div className="relative">
          {/* Background Image */}
          <Image
            src="/assets/tree2.jpeg"
            alt="top image in page"
            width={1920}
            height={434}
            className="w-full h-[434px] object-cover object-[center_50%] rounded-lg"
            priority
          />
        </div>
        <div className="text-[#505A28] text-center text-[40pt] font-extrabold ">
          <h1>Tree-Go-Twin Project: Growing Trees, Connecting Communities</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
          <div>
            <div className="text-[#505A28] text-[30pt] font-bold text-center">
              <h3>About the Project</h3>
            </div>
            <div className="text-[#505A28] text-[15pt] font-semibold mt-5 text-center pl-1 pr-1">
              <p>
                The Tree-Go-Twin Project is an innovative conservation
                initiative by Sembeza Africa, designed to inspire environmental
                stewardship among children while fostering global connections.
                This program pairs Ugandan children with international peers to
                plant, nurture, and care for trees, promoting sustainable living
                and a shared sense of responsibility for our planet.
              </p>
            </div>
          </div>
          <div>
            <div className="text-[#505A28] text-[30pt] font-bold text-center">
              <h3>Our Mission</h3>
            </div>
            <div className="text-[#505A28] text-[15pt] font-semibold mt-5 text-center pl-1 pr-1">
              <p>
                To empower young people to become environmental stewards by
                combining tree planting with cultural exchange, environmental
                education, and community engagement.
              </p>
            </div>
          </div>
          <div>
            <div className="text-[#505A28] text-[30pt] font-bold text-center">
              <h3>Our Impact</h3>
            </div>
            <div className="text-[#505A28] text-[15pt] font-semibold mt-2 text-center pl-1 pr-1">
              <p>
                <strong>.</strong> Increased awareness of environmental
                conservation among children and their communities.
              </p>
              <p>
                <strong>.</strong> Stronger global partnerships through
                cross-cultural exchanges.
              </p>
              <p>
                <strong>.</strong> Active participation in reforestation
                efforts, improving biodiversity and local ecosystems.
              </p>
              <p>
                <strong>.</strong> Long-term adoption of sustainable living
                practices.
              </p>
            </div>
          </div>
          <div>
            <div className="text-[#505A28] text-[30pt] font-bold text-center">
              <h3>How It Works</h3>
            </div>
            <div className="text-[#505A28] text-[15pt] font-semibold mt-2 text-center pl-1 pr-1">
              <p>
                1. <strong>Tree Planting and Care:</strong> Ugandan children are
                provided with tree seedlings to plant and care for, fostering a
                hands-on connection to the environment.
              </p>
              <p>
                2. <strong>Twinning Across Borders:</strong> Each child is
                paired with an international peer, creating a unique
                partnership. They share their tree-growing journey through
                photos, letters, and videos.
              </p>
              <p>
                3. <strong>Environmental Education: </strong>Children learn
                about the importance of trees in mitigating climate change,
                conserving biodiversity, and improving local ecosystems.
              </p>
              <p>
                4. <strong>Community Involvement: </strong>The project engages
                schools, families, and local organizations, ensuring collective
                ownership and sustainable impact.
              </p>
            </div>
          </div>
          <div>
            <div className="text-[#505A28] text-[30pt] font-bold text-center">
              <h3>How You Can Help</h3>
            </div>
            <div className="text-[#505A28] text-[15pt] font-semibold mt-2 text-center pl-1 pr-1">
              <p>
                <strong>.</strong> Donate: Your support funds tree seedlings,
                educational materials, and communication tools for the project.
              </p>
              <p>
                <strong>.</strong> Partner: Join us as a school, organization,
                or corporate sponsor to expand our reach.
              </p>
              <p>
                <strong>.</strong> Volunteer: Help us engage communities and
                ensure the success of this impactful initiative.
              </p>
            </div>
          </div>
          <div>
            <div className="text-[#505A28] text-[30pt] font-bold text-center">
              <h3>Join Us in Growing a Greener Future</h3>
            </div>
            <div className="text-[#505A28] text-[15pt] font-semibold mt-3 text-center pl-1 pr-1">
              <p>
                By supporting the Tree-Go-Twin Project, you’re not just planting
                trees you’re nurturing young minds, fostering global
                friendships, and contributing to a healthier planet for
                generations to come.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
