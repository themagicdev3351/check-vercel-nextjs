import React from "react";
import HandshakeIcon from "../assets/HandshakeIcon.svg";
import PickingIcon from "../assets/PickingIcon.svg";
import DiscussingIcon from "../assets/DiscussingIcon.svg";
import GroupIcon from "../assets/GroupIcon.svg";
import cardPattern from "../assets/cardPattern.svg";

import CrownIcon from "../../../../../public/CrownIcon.svg";
import Image from "next/image";

const cards = [
  {
    title: "Rigorous Tutor Selection Criteria",
    description:
      "All tutor applicants must have teaching experience or relevant certifications.",
    icon: (
      <Image
        src={HandshakeIcon}
        alt="Selection"
        width={48}
        height={48}
        className="mr-4"
      />
    ),
  },
  {
    title: "Strict Hiring Process",
    description:
      "All applicants must pass a thorough approval process, including a trial lesson, to teach on ExpertBuddy.",
    icon: (
      <Image
        src={PickingIcon}
        alt="Hiring"
        width={48}
        height={48}
        className="mr-4"
      />
    ),
  },
  {
    title: "AI-Driven Tutor Ranking",
    description:
      "ExpertBuddy's AI ranking continuously evaluates tutor performance for top recommendations.",
    icon: (
      <Image
        src={DiscussingIcon}
        alt="AI Ranking"
        width={48}
        height={48}
        className="mr-4"
      />
    ),
  },
  {
    title: "Stringent Recruitment Process",
    description:
      "Tutors receive extra training from ExpertBuddy to enhance their teaching and communication skills.",
    icon: (
      <Image
        src={GroupIcon}
        alt="Training"
        width={48}
        height={48}
        className="mr-4 "
      />
    ),
  },
];

const HiringProcess = () => {
  return (
    <div id="Our Tutor" className="p-[1.25rem] text-black">
      <h1 className="relative text-black font-manrope text-h5 sm:text-h3 md:text-h3 xl:text-h2 font-bold text-center mb-6">
        ExpertBuddy Ensures Tutor Quality <br />
        <span className="text-h5 sm:text-h4 md:text-h3 xl:text font-bold">
          See Our Hiring Process Below.
        </span>
        <Image
          src={CrownIcon}
          alt="CrownIcon"
          width={40}
          height={40}
          className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 md:-top-6 md:right-3 w-10 h-10 md:w-20 md:h-20"
        />
      </h1>

      <section
        className="grid grid-cols-1 text-black md:grid-cols-2 gap-6 max-w-5xl relative"
        aria-label="Tutor Hiring Process"
      >
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white text-black p-6 rounded-2xl shadow-sm flex flex-col gap-5 items-start"
            role="article"
            aria-labelledby={`card-title-${index}`}
            style={{
              backgroundImage: `url(${cardPattern.src})`,
              backgroundPosition: "top right",
              backgroundRepeat: "no-repeat",
            }}
          >
            {card.icon}
            <div>
              <div className="font-bold text-[23px] leading-[27px] text-[#16192C]">
                {card.title}
              </div>
              <p className="text-gray-600 text-sm mt-2">{card.description}</p>
            </div>
          </div>
        ))}
      </section>
      <Image
        src="/crown.png"
        alt="Crown"
        width={40}
        height={40}
        className="md:w-[55px] md:h-[69px] w-[30px] h-[38px] relative left-2 sm:left-8 top-[4.3rem] md:top-24  md:left-4 lg:left-16 xl:left-20 "
      />
      <h2 className="text-[28px] leading-[33px] md:text-[42px] md:leading-[55px] font-bold text-[#16192C] text-center mt-12">
        We’re Always Aiming For Good Grades
      </h2>
    </div>
  );
};

export default HiringProcess;
