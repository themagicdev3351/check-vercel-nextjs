import TutorCard from "./landingPage/tutor-card";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const Carousel = () => {
  const items = [
    { title: "English Tutors", img: "/img-1.png", cost: "$250.00" },
    { title: "Math Tutors", img: "/img-1.png", cost: "$200.00" },
    { title: "Science Tutors", img: "/img-1.png", cost: "$180.00" },
    { title: "History Tutors", img: "/img-1.png", cost: "$220.00" },
    { title: "French Tutors", img: "/img-1.png", cost: "$240.00" },
    { title: "Korean Tutors", img: "/img-1.png", cost: "$190.00" },
    { title: "Japanese Tutors", img: "/img-1.png", cost: "$210.00" },
  ];

  const [itemsToDisplay, setItemsToDisplay] = useState([]);
  const [windowWidth, setWindowWidth] = useState("");

  const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  };

  useEffect(() => {
    const handleResize = debounce(() => {
      setWindowWidth(window.innerWidth);
    }, 250);

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Run only once on mount

  useEffect(() => {
    if (windowWidth < 596) {
      setItemsToDisplay(items.slice(0, 4));
    } else if (windowWidth < 1280) {
      setItemsToDisplay(items.slice(0, 6));
    } else {
      setItemsToDisplay(items); // Show all items for larger screens
    }
  }, [windowWidth]); // Only run when windowWidth changes

  return (
    <div className="relative flex flex-col justify-around items-center">
      <div className=" flex items-center justify-center flex-wrap  sm:w-[100vw] md:w-[85vw] lg:w-[85vw] xl:w-[1170px] md:gap-10 lg:gap-4 mb-8 gap-2">
        {itemsToDisplay.map((item, index) => (
          <div
            key={index}
            className="lg:w-[275px] lg:h-[242px] lg:px-4 lg:py-5 w-[188px] h-[201px] mb-4 h6 text-[#16192C] bg-white rounded-[20px] font-bold text-center flex items-center justify-center">
            <TutorCard title={item.title} cost={item.cost} img={item.img} />
          </div>
        ))}
      </div>
      {/* Navigation Buttons */}
      <div className="flex gap-6 items-center justify-center mx-4">
        <button
          onClick={() => console.log("Previous Slide")}
          className="xl:absolute relative xl:top-[50%] xl:-left-[6%] transform xl:-translate-y-1/2 p-1 mx-2"
          aria-label="Previous slide">
          <Image src="/left.png" width={50} height={50} alt="previous" />
        </button>
        <button
          onClick={() => console.log("Next Slide")}
          className="xl:absolute relative xl:top-[50%] xl:-right-[6%] transform xl:-translate-y-1/2 p-1 mx-2"
          aria-label="Next slide">
          <Image src="/right.png" width={50} height={50} alt="next" />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
