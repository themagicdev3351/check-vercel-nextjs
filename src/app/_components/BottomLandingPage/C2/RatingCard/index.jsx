import Image from "next/image";
import React from "react";
import Qoute from "../assets/Quote.svg";
import FiveStar from "../assets/FiveStar.svg";

const RatingCard = ({ title, ratingDate, comment, userName }) => {
  return (
    <div className="rounded-2xl shadow-lg min-w-[217.67px] max-w-[217.67px] py-6 px-4 h-[260px] flex flex-col justify-between gap-3 ">
      <Image src={Qoute} alt="Opening quotation mark" />
      <h2 className="text-black font-semibold">{title}</h2>
      <div className="flex items-center justify-between gap-4">
        <span>
        <Image src={FiveStar} alt="5 out of 5 star rating" />
        </span>
        <h4 className="text-[12px] text-gray-800">{ratingDate}</h4>
      </div>
      <p className="text-gray-800 line-clamp-2 font-extralight text-[14px]">
        {comment}
      </p>
      <div className="bg-gray-500 w-[60px] h-[.5px]"></div>
      <h3 className="text-black font-semibold">{userName}</h3>
    </div>
  );
};

export default RatingCard;
