"use client";
import React from "react";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {options,values} from './data'

const Searchbarcomponent = () => {
  const [selectedOption, setselectedOption] = React.useState(0);
  const [selectedValue, setselectedValue] = React.useState(0);

  // Initialize state based on screen width
  React.useEffect(() => {
    const updateSelectedValue = () => {
      if (window.innerWidth < 768) {
        setselectedValue(-1);
      } else {
        setselectedValue(0);
      }
    };

    // Call on initial render
    updateSelectedValue();

    // Add resize event listener
    window.addEventListener("resize", updateSelectedValue);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", updateSelectedValue);
  }, []);

  

  const handleAccordionClick = (idx) => {
    setselectedOption(idx);
  };

  const handleValueClick = (idx) => {
    if (window.innerWidth < 768) {
      if (selectedValue === idx) {
        setselectedValue(-1);
        return;
      }
    }    
    setselectedValue(idx);
  };

  return (
    <div className="w-[87vw] max-h-[999px] sm:w-[600px] sm:max-h-[800px] md:w-[650px] md:max-h-[700px] lg:w-[800px] lg:max-h-[600px] xl:w-[950px] xl:max-h-[500px] flex rounded-[30px] bg-white border border-gray-300 box-border mb-40 mr-12 md:mt-4 md:flex-row flex-col">
  {/* Options Section (30%) */}
  <div className="md:w-[30%] py-[1.2rem] md:border-r md:border-gray-300">
    <ul className="grid md:block grid-cols-2 gap-2">
      {options.map((item, idx) => (
        <div
          key={idx}
          className={`flex justify-between items-center cursor-pointer h-[48px] rounded-[12px] md:rounded-none ${
            idx === selectedOption && "bg-[#A414D50D]"
          }`}
          onClick={() => handleAccordionClick(idx)}
        >
          <div
            className={`flex justify-center items-center ml-4 md:text-[18px] md:leading-[23px] ${
              idx === 0 || idx === selectedOption
                ? "font-bold text-[#16192C]"
                : "font-[500] text-[#6B7B93]"
            }`}
          >
            {item}
          </div>
          <div className="mr-3">
            <Image
              src="/landing-page/arrow-right2.svg"
              height={24}
              width={24}
              alt="Arrow"
            />
          </div>
        </div>
      ))}
    </ul>
  </div>

  {/* Items Section (50%) */}
  <div className=" hidden md:flex md:w-full">
    <div className="md:w-[50%] py-4 px-6 space-y-6 overflow-scroll scrollbar-custom max-h-[660px]">
      <Accordion type="single" collapsible className="w-full">
        {values[options[selectedOption]].map((item, idx) => (
          <AccordionItem
            value={`item-${idx}`}
            key={idx}
            className="w-full"
            onClick={() => handleValueClick(idx)}
          >
            <AccordionTrigger className="h-[47px] w-full px-4 py-2 flex items-center justify-between text-left bg-white hover:bg-[#A414D50D] transition-colors duration-300 md:text-[18px] md:leading-[23px] font-[500] text-[#6B7B93]">
              {item.title}
              <div className="flex gap-3">
                <Image
                  src="/landing-page/star.svg"
                  height={24}
                  width={24}
                  alt="Rating Star"
                />
                {item.rating}
              </div>
            </AccordionTrigger>
          </AccordionItem>
        ))}
      </Accordion>
    </div>

  {/* Content Section (50%) */}
      <div className="md:w-[50%] py-4 px-6 h-max rounded-lg m-4 bg-[#a514d536] overflow-scroll scrollbar-hide">
        <div className="flex flex-col gap-5">
          <div className="flex flex-row gap-3 text-[16px] leading-[20px] font-bold text-[#16192C]">
          {[...Array(5)].map((_, i) => (
              <Image 
                key={i} // Always add a unique key when rendering lists in React
                src="/landing-page/star.svg"
                height={24}
                width={24}
                alt="Rating Star"
              />
          ))}
          5
        </div>
          <div className="h-[1px] w-full bg-[#CFD7E6]"></div>
            {selectedValue !== -1 &&
              values[options[selectedOption]].length > selectedValue &&
              values[options[selectedOption]][selectedValue].highlighted.map(
                (highlight, hIdx) => (
                  <div key={hIdx} className="flex gap-3">
                    <Image
                      src="/landing-page/check-circle-broken.svg"
                      height={20}
                      width={20}
                      alt="check"
                    />
                    <div className="text-[#6B7B93] text-[14px] leading-[18px]">{highlight}</div>
                  </div>
                )
              )}
              <button className="w-[134px] lg:w-[200px] xl:w-[242px] h-[40px] text-[14px] px-5 bg-[#A414D5] text-white text-center leading-[18.23px] rounded-[12px]">
                Painting Tutor
              </button>
          </div>
        </div>
      </div>
      {/* For Smaller Screen */}
      <div className="md:hidden py-4 px-6 space-y-6 overflow-scroll scrollbar-hide max-h-[660px] h-max mt-4 md:max-h-[700px] lg:max-h-[500px] xl:max-h-[400px]">
        <Accordion type="single" collapsible className="w-full">
          {values[options[selectedOption]].map((item, idx) => (
            <AccordionItem value={`item-${idx}`} key={idx} className="w-full" onClick={() => handleValueClick(idx)}>
              <AccordionTrigger className="h-[47px] w-full px-4 py-2 flex items-center justify-between text-left bg-white hover:bg-[#A414D50D] transition-colors duration-300 md:text-[18px] md:leading-[23px] font-[500] text-[#6B7B93]">
                <div className="flex gap-3">
                  {selectedValue === idx ? (
                    <Image
                      src="/minus.png"
                      alt="Collapse"
                      height={20}
                      width={20}
                      /> 
                  ) : (
                    <Image
                      src="/plus.png"
                      alt="Expand"
                      height={20}
                      width={20}
                      />
                  )}
                {item.title}
                </div>
                <div className="flex gap-3">
                  <Image
                    src="/landing-page/star.svg"
                    height={24}
                    width={24}
                    alt="Rating Star"
                  />{" "}
                  {item.rating}
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-4 py-2 bg-[#A414D50D] text-sm text-gray-700 leading-normal">
                <div className="flex flex-col gap-5">
                  <div className=" h-[1px] w-[370px] bg-[#CFD7E6]"></div>
                  <div className="flex flex-col gap-3">
                    {item.highlighted.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex gap-3">
                        <Image
                          src="/landing-page/check-circle-broken.svg"
                          height={20}
                          width={20}
                          alt="check"
                        />
                        {highlight}
                      </div>
                    ))}
                  </div>
                  <button className="w-[134px] h-[40px] text-[14px] px-5 bg-[#16192C] text-white text-center leading-[18.23px] rounded-[12px]">
                    Painting Tutor
                  </button>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
  </div>
  );
};

export default Searchbarcomponent;