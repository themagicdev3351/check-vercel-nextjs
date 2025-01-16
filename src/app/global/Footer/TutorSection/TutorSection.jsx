"use client";
import React from "react";
import "./TutorSection.css";
import { useScreenSize } from "@/lib/useScreenSize";

import Image from "next/image";
import CrownIcon from "../assets/CrownIcon.svg";
import VerticalDottedLine from "../../DashedLine/VerticalDottedLine";

const TutorSection = ({
  title = "Find A Language Tutor Near You",
  topCitiesList = [
    "English classes in NYC",
    "Spanish classes in NYC",
    "English classes in Los Angeles",
    "Spanish classes in Los Angeles",
    "English classes in Miami",
    "English classes in Toronto",
  ],
  topCitiesList2 = [
    "French classes in Toronto",
    "English classes in London",
    "Spanish classes in London",
    "English classes in Sydney",
    "Chinese tutors in Singapore",
    "Chinese tutors in Hong Kong",
  ],
  englishSpeakingList = [
    "Spanish tutors near me in the USA",
    "Spanish tutors near me in the United Kingdom",
    "French tutors near me in Canada",
    "Spanish tutors near me in Australia",
  ],
  globalLanguages = [
    "Español",
    "Français",
    "Deutsch",
    "Italiano",
    "Русский",
    "Português",
    "Polski",
    "Nederlands",
  ],
}) => {
  const screenSize = useScreenSize();
  return (
    <section className="tutor-section" aria-labelledby="tutor-section-title">
      <h1 className="relative tutor-title">
        {title}
        <Image
          src={CrownIcon}
          alt="CrownIcon"
          aria-hidden="true"

          className="absolute max-sm:w-[40px]  ml-2 max-sm:-left-6 max-sm:-top-5 -left-9 -top-7"
        />
      </h1>

      <div className="tutor-content ">
        <div className="tutor-column">
          <h2 className="column-title">
            Tutors From Top Cities Around The Globe
          </h2>
          <div className=" cities-lists ">
            <ul className="cities-list">
              {topCitiesList.map((city) => (
                <li key={city.toLowerCase().replace(/\s+/g, "-")}>{city}</li>
              ))}
            </ul>
            <ul className="cities-list">
              {topCitiesList2.map((city, index) => (
                <li key={index}>{city}</li>
              ))}
            </ul>
          </div>
        </div>
        {screenSize !== "sm" && <VerticalDottedLine />}

        {screenSize === "sm" ? (
          <div className="flex gap-[30px] max-sm:justify-between">
            <div className="tutor-column">
              <h2 className="column-title">
                Tutors From English Speaking Countless Around The Globe
              </h2>
              <ul className="countries-list">
                {englishSpeakingList.map((country, index) => (
                  <li key={index}>{country}</li>
                ))}
              </ul>
            </div>
            <VerticalDottedLine />

            <div className="tutor-column">
              <h2 className="column-title">Expertbuddy Global</h2>
              <ul className="languages-list">
                {globalLanguages.map((language, index) => (
                  <li key={index}>{language}</li>
                ))}
              </ul>
            </div>
          </div>
        ) : (
          <>
            <div className="tutor-column">
              <h2 className="column-title">
                Tutors From English Speaking Countless Around The Globe
              </h2>
              <ul className="countries-list">
                {englishSpeakingList.map((country, index) => (
                  <li key={index}>{country}</li>
                ))}
              </ul>
            </div>
            <VerticalDottedLine />

            <div className="tutor-column">
              <h2 className="column-title">Expertbuddy Global</h2>
              <ul className="languages-list">
                {globalLanguages.map((language, index) => (
                  <li key={index}>{language}</li>
                ))}
              </ul>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default TutorSection;
