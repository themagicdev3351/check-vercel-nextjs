"use client";

import * as React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import Image from "next/image";

import CrownIcon from "../../../../../public/CrownIcon.svg";

const FAQs = () => {
  const [openIndex, setOpenIndex] = React.useState(null); // Track the currently open accordion item

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle open/close
  };

  const accordionData = [
    {
      title: "What Is Xpertbuddy?",
      content:
        "Xpertbuddy is the future of 1-1 tutoring, designed to replace traditional tutoring methods with an innovative online platform. We provide on-demand access to expert tutors and cutting-edge teaching tools to help students reach their full potential. Our platform makes quality tutoring accessible and convenient through our digital infrastructure.",
    },
    {
      title: "Which Subjects Do Your Tutors Cover?",
      content: "Subjects include Math, Science, English, and more!",
    },
    {
      title: "How Do I Schedule A Session With An Expert?",
      content:
        "Simply sign in to your account, choose a tutor, and pick a time that works for you.",
    },
    {
      title: "What Are The Different Session Types And Durations?",
      content:
        "You can choose between 30-minute, 1-hour, and custom session durations.",
    },
    {
      title: "How Do I Join My Tutoring Session?",
      content:
        "Join your session via the link provided in your dashboard after booking.",
    },
  ];

  return (
    <div className="mx-auto w-full text-black flex flex-col items-center p-4">
      <h2 className="text-h5 text-black text-center relative sm:text-h3 md:text-h3 xl:text-h2 font-bold">
        Frequently Asked Question's
        <Image
          src={CrownIcon}
          alt="CrownIcon"
          width={40}
          height={40}
          className="absolute -top-2 right-1 sm:-top-4 sm:-right-4 md:-top-6 md:-right-16 w-10 h-10 md:w-20 md:h-20 xs:-right-7"
        />
      </h2>

      <Accordion
        type="single"
        collapsible
        className="w-full border-[#cfd7e68b] p-5 border-[1px] rounded-xl max-w-[1170px] mt-4"
      >
        {accordionData.map((item, index) => (
          <AccordionItem
            key={`item-${index}`}
            value={`item-${index}`}
            className="border-b border-gray-300"
          >
            <AccordionTrigger
              onClick={() => handleToggle(index)}
              className="flex text-black items-center justify-between py-3 text-[16px] sm:text-h6 font-semibold"
                aria-expanded={openIndex === index}
                aria-controls={`content-${index}`}
            >
              {item.title}
              {openIndex === index ? (
                <Image src="/close.png" alt="close" height={32} width={32} />
              ) : (
                <Image src="/expand.png" alt="expand" height={32} width={32} />
              )}
            </AccordionTrigger>
            {openIndex === index && (
              <AccordionContent className="py-2 max-sm:text-[12px] text-[#6B7B93]">
                <p>{item.content}</p>
              </AccordionContent>
            )}
          </AccordionItem>
        ))}
      </Accordion>

      <button
        className="mt-4 px-6 py-2 bg-black text-[20px] text-white rounded-full shadow-lg hover:bg-gray-800 transition-colors"
        aria-label="View all frequently asked questions"
        style={{ boxShadow: "0px 10px 25px rgba(0, 0, 0, .5)" }}
        onClick={() => {}}
      >
        View All FAQs
      </button>
    </div>
  );
};

export default FAQs;
