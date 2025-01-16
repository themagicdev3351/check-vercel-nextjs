"use client";
import React, { useState, useEffect, useRef } from "react";
import RatingCard from "./RatingCard";
import Image from "next/image";
import FiveStar from "./assets/FiveStar.svg";
import Trustpilot from "./assets/Trustpilot.svg";
import { useScreenSize } from "@/lib/useScreenSize";
import { NavigationButtons } from "./NavigationButtons";

export function RatingCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const screenSize = typeof window !== "undefined" ? useScreenSize() : "lg";
  const carouselRef = useRef(null);

  const reviews = Array.from({ length: 5 }, () => ({
    title: "Best on the market",
    ratingDate: "2 days ago",
    comment:
      "I love this product because the support is great. Please upload more like this course.",
    userName: "Worldtraveler",
  }));

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowLeft") {
        handlePrevious();
      } else if (event.key === "ArrowRight") {
        handleNext();
      }
    };

    const currentRef = carouselRef.current;
    if (currentRef) {
      currentRef.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener("keydown", handleKeyDown);
      }
    };
  }, []);

  return (
    <div
      className="relative w-full max-w-[1000px] mx-auto"
      ref={carouselRef}
      tabIndex={0} // Make the carousel focusable
      aria-label="Rating carousel"
    >
      {/* Trustpilot Section */}
      <div className="flex sm:gap-8 flex-col sm:flex-row justify-center items-center">
        <div className="flex flex-col justify-between p-4">
          <div className="mb-4 text-center flex gap-6 sm:flex-col justify-between items-center sm:gap-2">
            <div className="flex flex-col items-center">
              <p className="text-lg text-black font-semibold">Excellent</p>
              <div className="flex justify-center space-x-1">
                <Image
                  src={FiveStar}
                  width={240}
                  height={40}
                  alt="Five Stars"
                  priority
                />
              </div>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-sm text-black">
                Based on <strong>456 reviews</strong>
              </p>
              <Image
                src={Trustpilot}
                width={100}
                height={20}
                alt="Trustpilot"
                priority
              />
            </div>
          </div>

          {/* Navigation Buttons for non-mobile screens */}
          {screenSize !== "sm" && (
            <NavigationButtons
              onPrevious={handlePrevious}
              onNext={handleNext}
            />
          )}
        </div>

        {/* Carousel and Navigation */}
        <div className="relative flex flex-col items-center w-full overflow-hidden">
          <div className="relative py-10 rounded-2xl px-6 w-full overflow-hidden">
            <div
              className="flex gap-2 transition-transform duration-300 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 34}%)`,
              }}
            >
              {reviews.map((review, index) => (
                <div key={index} className="w-[217.67px] flex-shrink-0 px-2">
                  <RatingCard
                    title={review.title}
                    ratingDate={review.ratingDate}
                    comment={review.comment}
                    userName={review.userName}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons for mobile screens */}
          {screenSize === "sm" && (
            <NavigationButtons
              onPrevious={handlePrevious}
              onNext={handleNext}
            />
          )}
        </div>
      </div>
    </div>
  );
}
