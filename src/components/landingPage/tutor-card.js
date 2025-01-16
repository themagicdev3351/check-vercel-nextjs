import React from "react";
import Image from "next/image";

const TutorCard = ({ title, img, cost }) => {
  return (
    <div
      className="mq:h-[calc((242/1440)*100vw)] mq:w-[calc((270/1440)*100vw)] w-[188px] h-[201px] pt-5  sm:pt-8 md:pt-4 bg-white rounded-[20px]  flex flex-col items-center text-center relative"
      role="article"
      aria-label={`Tutor card for ${title}`}>
      <div className="relative flex items-center justify-center">
        <div className="w-[50px] h-[50px] mq:w-[calc((70/1440)*100vw)] mq:h-[calc((70/1440)*100vw)] relative">
          <Image
            src="/tut-bg.png"
            layout="fill"
            objectFit="contain"
            alt="background"
            sizes="(max-width: 768px) 50px, (max-width: 1440px) calc((70/1440)*100vw), 70px"
            priority={true}
          />
        </div>
        <div className="absolute top-0 left-0 w-[50px] h-[50px] mq:w-[calc((70/1440)*100vw)] mq:h-[calc((70/1440)*100vw)]">
          <Image
            src={img}
            layout="fill"
            sizes="(max-width: 768px) 50px, (max-width: 1440px) calc((70/1440)*100vw), 70px"
            priority={true}
            objectFit="contain"
            alt="foreground"
          />
        </div>
      </div>
      <div className="w-[97px] opacity-5 bg-[#16192C] h-[2px] lg:my-3 sm:my-1 "></div>
      <div className="flex flex-col lg:w-[238px] gap-2 w-[156px] justify-center items-center">
        <div className="font-bold mq:text-H6 text-[#16192C] text-p1">
          {title}
        </div>
        <div className="mq:text-P1 font-[500] text-p2">
          <span className="text-[#640D51]">{cost}</span>
          <span className="text-[#16192C]">/</span>
          <span className="text-[#16192C] italic">Lesson</span>
        </div>
        <div className="w-[24px] h-[24px] lg:w-[32px] lg:h-[32px] text-center">
          <Image
            src="/arrow-right.png"
            width={24} // For small screens
            height={24} // For small screens
            className="mq:w-[calc((32/1440)*100vw)] mq:h-[calc((32/1440)*100vw)]" // Tailwind for responsive sizing
            alt="right-arrow"
            onError={(e) => {
              e.target.style.display = "none";
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default TutorCard;
