"use client";

// import { useState } from "react";

const SidebarMenu = () => {
  // const [chosenFieldIndex, setChosenFieldIndex] = useState(0);
  const menuItems = [
    "Expert Tutoring",
    "Trending Topics",
    "Our Students",
    "How It Works",
    "Our Tutor",
    "Become A Tutor",
  ];

  const handleNavigation = (id) => {
    const targetElement = document.getElementById(id);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    } else {
      console.warn(`Section "${id}" not found`);
      // Optionally show user feedback
    }
  };

  return (
    <div
      className="absolute top-[20%] -right-4 flex flex-col items-end p-6 gap-2 h-fit "
      role="navigation"
      aria-label="Page sections">
      {menuItems.map((item, index) => (
        <div
          key={index}
          role="button"
          tabIndex={0}
          className={`lg:flex items-center px-5 py-2 rounded-[100px] hidden  text-p2 lg:text-P2 cursor-pointer bg-white ${
            index === 0
              ? "text-[#16192C] font-[600]"
              : "text-[#6B7B93] hover:text-[#16192C]"
          } shadow-md`}
          onClick={() => {
            handleNavigation(item);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              handleNavigation(item);
            }
          }}
          aria-current={index === 0 ? "page" : undefined}>
          {item}
        </div>
      ))}
    </div>
  );
};

export default SidebarMenu;
