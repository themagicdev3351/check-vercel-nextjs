"use client";
import React from "react";
import Image from "next/image";

const StatItem = ({ value, unit, description, isStar }) => (
  <div className="flex flex-col justify-center items-center gap-2 h-[34px] md:h-[96px]">
    <h5 className="font-[700] text-h5 flex justify-center items-center mq:text-H2">
      {value}{" "}
      <div className="text-[#A414D5]">
        {isStar ? (
          <Image src="/star.png" height={34} width={34} alt="star" />
        ) : (
          unit
        )}
      </div>
    </h5>
    <div className="text-[#6B7B93] font-[400] text-p2 h-[20px] md:font-[500] mq:text-P1">
      {description}
    </div>
  </div>
);

const Stats = () => {
  const statsData = [
    { value: "23k", unit: "+", description: "Tutors" },
    { value: "96", unit: "%", description: "4 & 5 Star Reviews" },
    { value: "150", unit: "+", description: "Subjects" },
    { value: "90", unit: "%", description: "Successfully Improve" },
    { value: "4.8", unit: null, description: "App Store Rating", isStar: true },
  ];

  return (
    <div className="stats-container flex flex-wrap justify-between mq:justify-center items-center gap-y-6 px-6 mq:gap-[calc((50/1440)*100vw)] my-12 ">
      {statsData.map((stat, index) => (
        <React.Fragment key={index}>
          <StatItem {...stat} />
          {index < statsData.length - 1 && (
            <Image
              src="/Line.svg"
              height={62}
              width={8}
              alt="statistics separator"
              className={`${
                index === statsData.length - 3 ? "hidden sm:flex" : ""
              } mq:w-[12px]`}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Stats;
