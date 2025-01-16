import React from "react";
import "./TutorBanner.css";
import CheckCircle from "./assets/CheckCircle.svg";
import Attachment from "./assets/Attachment.jpeg";
import TwoGirl from "./assets/TwoGirl.svg";
import WhiteCrown from "./assets/WhiteCrown.svg";
import Image from "next/image";
const TutorBanner = ({
  title = "Become a tutor\nStart Your Tutoring Journey",
  features = [
    { text: "Set your Own Rates" },
    { text: "Flexible" },
    { text: "Set your Own Rates" },
    { text: "All-in-One Platform" },
    { text: "Regular Students" },
    { text: "Set your Own Rates" },
  ],
  ctaText = "Apply to Tech",
}) => {
  return (
    <div id="Become A Tutor" className="w-full px-[20px]">
      <div className="tutor-banner max-sm:min-h-[394px] min-h-[550px] ">
        <div className="pattern-bg ">
          <Image src={Attachment} alt="Pattern Background" />
          <div className="gradient-overlay"></div>
        </div>

        <div className="content-wrapper  ">
          <div className="text-content">
            <h1 className="title text-[50px]">{title}</h1>

            <div className="features-grid ">
              <div className="features-column max-lg:flex flex-col">
                {features.slice(0, 3).map((feature, index) => (
                  <div key={index} className="feature-item text-[18px]">
                    <Image
                      src={CheckCircle}
                      alt="Check"
                      className="check-icon"
                    />
                    <span>{feature.text}</span>
                  </div>
                ))}
              </div>
              <div className="features-column">
                {features.slice(3, 6).map((feature, index) => (
                  <div key={index} className="feature-item text-[18px]">
                    <Image
                      src={CheckCircle}
                      alt="Check"
                      className="check-icon"
                    />
                    <span>{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <button className="cta-button  max-sm:w-full">{ctaText}</button>
          </div>

          <div className="absolute   -z-10 -bottom-24  lg:-bottom-16 -right-48 md:-right-32 lg:-right-0">
            <Image
              src={TwoGirl}
              alt="Students collaborating on a learning platform"
            />
            <Image
              src={WhiteCrown}
              alt="Premium tutor badge"
              className="absolute top-[3.5rem] left-[14rem]"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorBanner;
