import React from "react";
import Image from "next/image";

const HandshakeIcon = "./assets/HandshakeIcon.svg";
const PickingIcon = "./assets/PickingIcon.svg";
const DiscussingIcon = "./assets/DiscussingIcon.svg";
const GroupIcon = "./assets/GroupIcon.svg";
const CrownIcon = "/CrownIcon.svg";

const cards = [
  {
    title: "Rigorous Tutor Selection Criteria",
    description:
      "All tutor applicants must have teaching experience or relevant certifications.",
    icon: (
      <Image
        src={"/images/PickingIcon.svg"}
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
        src={"/images/PickingIcon.svg"}
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
        src={"/images/DiscussingIcon.svg"}
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
        src={"/images/GroupIcon.svg"}
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
    <div className="bg-gradient-to-r pt-9 from-gray-50 to-purple-100 min-h-screen flex flex-col items-center justify-center px-4">
      <h1 className="relative text-h5 sm:text-h3 md:text-h3 xl:text-h2 font-bold text-center mb-6">
        ExpertBuddy Ensures Tutor Quality <br />
        <span className="text-h5 sm:text-h4 md:text-h3 xl:text-h2 font-semibold">
          See Our Hiring Process Below.
        </span>
        <Image
          src={"images/CrownIcon.svg"}
          alt="CrownIcon"
          width={40}
          height={40}
          className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 md:-top-7 md:-right-9 w-10 h-10 md:w-20 md:h-20"
        />
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-sm flex flex-col gap-5 items-start"
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
      </div>
    </div>
  );
};

export default HiringProcess;
