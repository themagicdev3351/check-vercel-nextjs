import React, { useState, useEffect } from "react";
import Image from "next/image";

const Carousel = () => {
  const items = [
    "ACT Tutors",
    "AP Tutors",
    "Algebra Tutors",
    "Biology Tutors",
    "Calculus Tutors",
    "Chemistry Tutors",
    "Coding Tutors",
    "Computer Science Tutors",
    "Elementary Tutors",
    "French Tutors",
    "Geometry Tutors",
    "Writing Tutor",
    "German Tutors",
    "GMAT Tutors",
    "Grammar Tutors",
    "Grammar Tutors",
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

  // Update itemsToDisplay based on windowWidth
  useEffect(() => {
    if (windowWidth < 375) {
      setItemsToDisplay(items.slice(0, 5));
    } else if (windowWidth < 675) {
      setItemsToDisplay(items.slice(0, 10));
    } else if (windowWidth < 1290) {
      setItemsToDisplay(items.slice(0, 12));
    } else {
      setItemsToDisplay(items); // Show all items for larger screens
    }
  }, [windowWidth]); // Only run when windowWidth changes

  return (
    <div className="relative mx-auto flex flex-col justify-around sm:w-[100vw] md:w-[85vw] lg:w-[85vw] xl:w-[1170px]">
      <div className=" flex items-center justify-center flex-wrap w-full xl:gap-3 mb-4 gap-2">
        {itemsToDisplay.map((item, index) => (
          <div
            key={index}
            className="w-[180px] h-[55px] sm:w-[220px] sm:h-[70px] md:w-[250px] md:h-[75px]  xl:w-[275px] xl:h-[80px] p-4  h6 text-[#16192C] bg-white rounded-[20px] font-bold text-center flex items-center justify-center"
          >
            {item}
          </div>
        ))}
      </div>
      {/* Navigation Buttons */}
      <div className="flex gap-6 items-center justify-center mx-4">
        <button
          onClick={() => console.log("Previous Slide")}
          className="xl:absolute relative xl:top-[50%] xl:-left-[5%] transform xl:-translate-y-1/2 p-1 mx-2"
        >
          <Image src="/left.png" width={50} height={50} alt="Previous" />
        </button>
        <button
          onClick={() => console.log("Next Slide")}
          className="xl:absolute relative xl:top-[50%] xl:-right-[5%] transform xl:-translate-y-1/2 p-1 mx-2"
        >
          <Image src="/right.png" width={50} height={50} alt="Next" />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
