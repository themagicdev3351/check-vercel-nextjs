import React from "react";
import HeaderSection from "./HeaderSection/HeaderSection";
import LearningJourneySection from "./LearningJourneySection/LearningJourneySection";
import TutorSection from "./TutorSection/TutorSection.jsx";
import FooterSection from "./FooterSection/Footer";
import "./Footer.css";
import HorizontalDottedLine from "../DashedLine/HorizontalDottedLine";



const Footer = () => {
  return (
    <div className="main-component">
      <div className="max-w-[1141px] p-[30px]">
        <HeaderSection />
        <div className="my-6">

        <HorizontalDottedLine/>
        </div>
        <LearningJourneySection />
        <div className="my-2">

        <HorizontalDottedLine/>
        </div>
        <TutorSection />

      </div>
      <FooterSection />
    </div>
  );
};

export default Footer;
