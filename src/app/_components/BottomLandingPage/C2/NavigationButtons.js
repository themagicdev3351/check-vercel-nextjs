"use client";
import RightArrow from "./assets/RightArrow.svg";
import LeftArrow from "./assets/LeftArrow.svg";
import Image from "next/image";
export const NavigationButtons = ({ onPrevious, onNext }) => (
  <div className="flex justify-center mt-4 space-x-4">
    <button
      onClick={onPrevious}
      className="bg-white p-2 rounded-lg active:bg-gray-300 sm:hover:bg-gray-300 transition-all"
      aria-label="Previous review"
    >
      <Image src={LeftArrow} alt="Previous" />
    </button>
    <button
      onClick={onNext}
      className="bg-white p-2 rounded-lg active:bg-gray-300 sm:hover:bg-gray-300 transition-all"
      aria-label="Next review"
    >
      <Image src={RightArrow} alt="Next" />
    </button>
  </div>
);
