"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t-6 border-[#F6F4DE] w-full bg-[#F6F4DE]">
      <div className="relative bg-[#505A28] w-[100%] md:w-[40%] text-[#F6F4DE] text-2xl flex flex-col pl-5">
        <p className="text-[24pt] font-extrabold justify-start ml-[5%] mr-[10%] mb-5 mt-17">
          Get in Touch
        </p>
        <div className="flex">
          <div className="ml-[5%] mb-5 mt-9">
            <p className="text-[12pt]">14, rue Charles </p>

            <p className="text-[12pt]">Bernhoeft, Kirchberg </p>

            <p className="text-[12pt]">Luxembourg </p>

            <p className="text-[12pt]">L-1240 </p>
            <br></br>
            <p className="text-[12pt]">+352 621 495 483</p>
            <p className="text-[12pt]">nfo@sembezaafrica.org</p>
          </div>
        </div>
        <div className="ml-[5%] mb-5 mt-0 flex gap-x-1.5">
          <a
            href="https://www.linkedin.com/company/106016949/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block hover:opacity-80 transition-opacity"
            aria-label={`Visit our linkedin (opens in new tab)`}
          >
            <Image
              src="/logos/11062b_60c5fc4a3ecd49f2a697206b09eeace1~mv2.avif"
              height={30}
              width={30}
              alt="linkedin logo"
            />
          </a>
          <a
            href="https://www.instagram.com/sembezaafrica"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block hover:opacity-80 transition-opacity"
            aria-label={`Visit our instagram (opens in new tab)`}
          >
            <Image
              src="/logos/11062b_6e9638ad803e4099a6116eb750b5a584~mv2.avif"
              height={30}
              width={30}
              alt="instagram logo"
            />
          </a>
          <a
            href="https://www.youtube.com/@sembezaafarica"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block hover:opacity-80 transition-opacity"
            aria-label={`Visit our youtube (opens in new tab)`}
          >
            <Image
              src="/logos/11062b_30de4e7217e64dfdadc3ea03beea7b94~mv2.avif"
              height={30}
              width={30}
              alt="youtube logo"
            />
          </a>
          <a
            href="https://x.com/SembezaAfrica"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block hover:opacity-80 transition-opacity"
            aria-label={`Visit our twitter (opens in new tab)`}
          >
            <Image
              src="/logos/11062b_81cefb1bd2e2490d892a1cad5cc1cd8a~mv2.avif"
              height={30}
              width={30}
              alt="twitter logo"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
