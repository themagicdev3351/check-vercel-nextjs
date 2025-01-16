"use client";
import React from "react";

import "./LearningJourneySection.css";

import CrownIcon from "../assets/CrownIcon.svg";
import Image from "next/image";
import { useScreenSize } from "@/lib/useScreenSize";
import VerticalDottedLine from "../../DashedLine/VerticalDottedLine";
import HorizontalDottedLine from "../../DashedLine/HorizontalDottedLine";

const sections = [
  {
    title: "Popular online language courses",
    items: [
      "Online English classes",
      "Online Spanish classes",
      "Online German classes",
      "Online French classes",
      "Online Business English courses",
    ],
  },
  {
    title: "Learn a language online",
    items: [
      "Learn English online",
      "Learn Spanish online",
      "Learn French online",
      "Learn Japanese online",
      "Learn German online",
    ],
  },
  {
    title: "Tutors for different learning needs",
    items: [
      "English classes for kids",
      "IELTS tutors",
      "Native english speakers online",
      "Online English courses for adults",
      "Spanish tutors for high school students",
      "Online Spanish courses for adults",
    ],
  },
];

const levelSection = {
  title: "Popular online courses by level",
  items: [
    "English course for beginners",
    "Spanish course for beginners",
    "Advanced english classes",
    "Online English speaking courses",
  ],
};

const otherSection = {
  title: "Other popular courses",
  items: [
    "English conversational classes",
    "English classes for Spanish speakers",
    "Business English lessons",
    "Canadian English tutors",
    "Intensive Spanish classes",
  ],
};

const LearningJourneySection = () => {
  const screenSize = useScreenSize();

  return (
    <section
      className="learning-journey"
      aria-labelledby="learning-journey-title"
    >
      <h2
        id="learning-journey-title"
        className="relative learning-journey__title"
      >
        Begin your learning journey
        <Image
          src={CrownIcon}
          alt="crown"
          className="absolute max-sm:w-[40px] ml-2 max-sm:-left-6 max-sm:-top-5 -left-9 -top-7"
          role="presentation"
        />
      </h2>
      <div className="learning-journey__content ">
        <div className="learning-journey__column">
          <div className="learning-journey__section">
            <h2 className="learning-journey__section-title">
              {sections[0].title}
            </h2>
            <ul className="learning-journey__list">
              {sections[0].items.map((item, index) => (
                <li key={index} className="learning-journey__item">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          {screenSize === "sm" ? (
            <VerticalDottedLine />
          ) : (
            <HorizontalDottedLine />
          )}

          <div className="learning-journey__section">
            <h2 className="learning-journey__section-title">
              {levelSection.title}
            </h2>
            <ul className="learning-journey__list">
              {levelSection.items.map((item, index) => (
                <li key={index} className="learning-journey__item">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        {screenSize !== "sm" && <VerticalDottedLine />}

        {/* <div className="learning-journey__separator" /> */}

        <div className="learning-journey__column">
          <div className="learning-journey__section">
            <h2 className="learning-journey__section-title">
              {sections[1].title}
            </h2>
            <ul className="learning-journey__list">
              {sections[1].items.map((item, index) => (
                <li key={index} className="learning-journey__item">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          {screenSize === "sm" ? (
            <VerticalDottedLine />
          ) : (
            <HorizontalDottedLine />
          )}

          <div className="learning-journey__section">
            <h2 className="learning-journey__section-title">
              {otherSection.title}
            </h2>
            <ul className="learning-journey__list">
              {otherSection.items.map((item, index) => (
                <li key={index} className="learning-journey__item">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        {screenSize !== "sm" && <VerticalDottedLine />}

        <div className="learning-journey__column">
          <div className="learning-journey__section">
            <h2 className="learning-journey__section-title">
              {sections[2].title}
            </h2>
            <ul className="learning-journey__list">
              {sections[2].items.map((item, index) => (
                <li key={index} className="learning-journey__item">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningJourneySection;
