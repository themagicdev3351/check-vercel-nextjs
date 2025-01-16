import React, { useState } from "react";

import "./Footer.css";
import Link from "next/link";
import XpertBuddyLogo from "../assets/XpertBuddyLogo.svg";
import Facebook from "../assets/Social-icons/Facebook.svg";
import Instagram from "../assets/Social-icons/Instagram.svg";
import TikTok from "../assets/Social-icons/TikTok.svg";
import Twitter from "../assets/Social-icons/Twitter.svg";
import Pinterest from "../assets/Social-icons/Pinterest.svg";
import Linkedin from "../assets/Social-icons/Linkedin.svg";
import ExpertBuddyBigLogo from "../assets/ExpertBuddyBigLogo.svg";
import USAFlag from "../assets/USAFlag.svg";
import QR from "../assets/QR.svg";
import Image from "next/image";
import GooglePlay from "../assets/GooglePlay.svg";
import StoreLogo from "../assets/StoreLogo.svg";
import { useScreenSize } from "@/lib/useScreenSize";
import HorizontalDottedLine from "../../DashedLine/HorizontalDottedLine";
import VerticalDottedLine from "../../DashedLine/VerticalDottedLine";

const FooterSection = ({
  backgroundColor = "#16192C",
  textColor = "#ffffff",
  accentColor = "#8a99b1",
  buttonColor = "#a414d5",
}) => {
  const sections = [
    {
      title: "About Us",
      items: [
        "Who we are",
        "How it works",
        "ExpertBuddy reviews",
        "ExpertBuddy app",
        "Work at ExpertBuddy!",
        "Status",
        "ExpertBuddy Research and Studies",
        "We stand with Ukraine",
        "Reviews",
        "FAQ",
        "In the News",
        "Refund Policy",
      ],
    },
    {
      title: "Need Any Help?",
      items: ["FAQ", "Contact us"],
    },
    {
      title: "For Student",
      items: [
        "ExpertBuddy Blog",
        "Questions and Answers",
        "Student discount",
        "Refer a friend",
        "Test your English for free",
        "Test your vocab",
        "ExpertBuddy discounts",
        "Blogs",
      ],
    },
    {
      title: "Online Language Class And Courses",
      items: [
        "Online English Classes",
        "Business English courses",
        "Online Spanish classes",
        "Online French classes",
        "Online German classes",
        "Online Chinese classes",
        "Online Japanese classes",
        "Online Turkish classes",
        "Online Portuguese classes",
      ],
    },
    {
      title: "For Tutor",
      items: [
        "Become an online tutor",
        "Teach English online",
        "Teach French online",
        "Teach Spanish online",
        "Teach German online",
        "See all online tutoring jobs",
      ],
    },
    {
      title: "1-ON-1 Tutors",
      items: [
        "Maths Tutor",
        "Physics Tutor",
        "Chemistry Tutor",
        "Biology Tutor",
        "Programming Language Tutors",
        "AP Tutors",
        "ACT Tutors",
        "English Tutors",
        "Spanish Tutors",
        "French Tutors",
        "German Tutors",
        "Arabic Tutors",
        "Japanese Tutors",
        "Chinese Tutors",
        "Portuguese Tutors",
        "Math Tutors",
      ],
    },
    {
      title: "For Parents",
      items: [
        "Find a tutor",
        "ExpertBuddy Reviews",
        "Membership prices",
        "Online tutoring",
        "Book a free trial lesson",
        "Learning tips",
        "Education report",
        "Student Code of Conduct",
        "ExpertBuddy Learning",
      ],
    },
    {
      title: "Tutor Near You",
      items: [
        "Tutors in Dubai",
        "Tutors in Abu Dhabi",
        "Tutors in Qatar",
        "Tutors in NYC",
        "Tutors in Los Angeles",
        "Tutors in Toronto",
        "Tutors in London",
        "Tutors in Singapore",
        "Tutors abroad",
        "Tutors by city",
        "Spanish tutors near me in the USA",
        "Spanish tutors near me in the UK",
        "French tutors near me in Canada",
      ],
    },
  ];
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (!name.trim()) {
      setError("Name is required.");
      return;
    }
    if (!email.trim()) {
      setError("Email address is required.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setTimeout(() => {
      setSuccess("Thank you for subscribing!");
      setName("");
      setEmail("");
    }, 1000);
  };

  const screenSize = useScreenSize();

  return (
    <footer className="footer" style={{ backgroundColor }}>
      <div className="learning-journey">
        <div className="footer__content  flex max-sm:flex-col">
          <div className=" flex gap-[30px] p-4 ">
            <div className="footer__column ">
              <div className="footer__section">
                <h2 className="footer__section-title">{sections[0].title}</h2>
                <ul className="footer__list">
                {sections[0].items.map((item) => (

                    <li key={item.toLowerCase().replace(/\s+/g, '-')} className="footer__item">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <HorizontalDottedLine />

              <div className="footer__section">
                <h2 className="footer__section-title">{sections[1].title}</h2>
                <ul className="footer__list">
                  {sections[1].items.map((item, index) => (
                    <li key={index} className="footer__item">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <VerticalDottedLine />

            <div className="footer__column">
              <div className="footer__section">
                <h2 className="footer__section-title">{sections[2].title}</h2>
                <ul className="footer__list">
                  {sections[2].items.map((item, index) => (
                    <li key={index} className="footer__item">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <HorizontalDottedLine />

              <div className="footer__section">
                <h2 className="footer__section-title">{sections[3].title}</h2>
                <ul className="footer__list">
                  {sections[3].items.map((item, index) => (
                    <li key={index} className="footer__item">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {screenSize !== "sm" ? (
            <VerticalDottedLine />
          ) : (
            <div className="px-4">
              <HorizontalDottedLine />{" "}
            </div>
          )}

          <div className=" flex gap-[30px] p-4">
            <div className="footer__column">
              <div className="footer__section">
                <h2 className="footer__section-title">{sections[4].title}</h2>
                <ul className="footer__list">
                  {sections[4].items.map((item, index) => (
                    <li key={index} className="footer__item">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <HorizontalDottedLine />

              <div className="footer__section">
                <h2 className="footer__section-title">{sections[5].title}</h2>
                <ul className="footer__list">
                  {sections[5].items.map((item, index) => (
                    <li key={index} className="footer__item">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <VerticalDottedLine />

            <div className="footer__column">
              <div className="footer__section">
                <h2 className="footer__section-title">{sections[6].title}</h2>
                <ul className="footer__list">
                  {sections[6].items.map((item, index) => (
                    <li key={index} className="footer__item">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <HorizontalDottedLine />

              <div className="footer__section">
                <h2 className="footer__section-title">{sections[7].title}</h2>
                <ul className="footer__list">
                  {sections[7].items.map((item, index) => (
                    <li key={index} className="footer__item">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-middle  ">
        <div className="contact-section    max-sm:flex flex-col items-center">
          <Image src={XpertBuddyLogo} alt="Logo" className="footer-logo" />
          <div className="contact-info max-sm:flex flex-col items-center">
            <h3 style={{ color: textColor }}>Contacts</h3>
            <div className=" address  max-sm:flex max-sm:text-center ">
              <Image src={USAFlag} alt="US Flag" className="flag" />
              <p style={{ color: textColor }}>
                1309 Beacon Street, Suite 300, Brookline, MA, 02446
              </p>
            </div>
          </div>
          <div className="social max-sm:flex flex-col items-center">
            <h3 style={{ color: textColor }}>ExpertBuddy Social</h3>
            <div className="social-links">
              <a
                href="https://www.instagram.com/your-profile"
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={Instagram} alt="Instagram" />
              </a>
              <a
                href="https://www.tiktok.com/@your-profile"
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={TikTok} alt="TikTok" />
              </a>
              <a
                href="https://twitter.com/your-profile"
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={Twitter} alt="Twitter" />
              </a>
              <a
                href="https://www.facebook.com/your-profile"
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={Facebook} alt="Facebook" />
              </a>
              <a
                href="https://www.pinterest.com/your-profile"
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={Pinterest} alt="Pinterest" />
              </a>
              <a
                href="https://www.linkedin.com/in/your-profile"
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={Linkedin} alt="LinkedIn" />
              </a>
            </div>
          </div>
        </div>

        <div className="app-section ">
          <h3 style={{ color: textColor }} className="max-sm:text-center">
            ExpertBuddy App
          </h3>

          <div className="max-sm:flex  gap-4 sm:gap-8  items-center justify-between">
            <div className="app-stores flex justify-between sm:mb-[20px] ">
              <div className="store-badge ">
                <Image
                  src={StoreLogo}
                  alt="App Store"
                  className="min-w-[148px] min-h-[57px] "
                />
              </div>
              <div className="store-badge">
                <Image
                  src={GooglePlay}
                  className=" bg-white rounded-md min-w-[148px] h-[52px]"
                  alt="Play Store"
                />
              </div>
            </div>

            <Image src={QR} alt="QR Code" className="qr-code" />
          </div>
          <p style={{ color: textColor }} className="text-center">
            Scan the QR code to install the expertbuddy app on your mobile
          </p>
        </div>

        <div className="newsletter-section text-center">
          <h3 style={{ color: textColor }}>Subscribe To Our Newsletter</h3>
          <p style={{ color: textColor }}>
            Receive discounts, study tips, and more.
          </p>
          <div className="newsletter-form flex flex-col">
            <form onSubmit={handleSubmit} className="flex gap-2 flex-col">
              <input
                type="text"
                placeholder="Enter Name*"
                className="input-field"
                value={name}
                onChange={(e) => setName(e.target.value)}
                aria-label="Name"
                aria-required="true"
              />
              <input
                type="email"
                placeholder="Enter Email Address*"
                className="input-field"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-label="Email"
                aria-required="true"
              />
              {error && <p className="error-message">{error}</p>}
              {success && <p className="success-message">{success}</p>}
              <button
                type="submit"
                className="submit-btn"
                style={{ backgroundColor: buttonColor }}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="copyright text-center" style={{ color: textColor }}>
          © Copyright 2024 ExpertBuddy. All rights reserved.
        </p>
        <div className="legal-links">
          <Link href="/legal-center" passHref>
            <span style={{ color: textColor, cursor: "pointer" }}>
              Legal Center
            </span>
          </Link>
          <span className="divider" style={{ color: textColor }}>
            |
          </span>
          <Link href="/privacy-policy" passHref>
            <span style={{ color: textColor, cursor: "pointer" }}>
              Privacy Policy
            </span>
          </Link>
          <span className="divider" style={{ color: textColor }}>
            |
          </span>
          <Link href="/cookie-policy" passHref>
            <span style={{ color: textColor, cursor: "pointer" }}>
              Cookie Policy
            </span>
          </Link>
          <span className="divider" style={{ color: textColor }}>
            |
          </span>
          <Link href="/terms-and-conditions" passHref>
            <span style={{ color: textColor, cursor: "pointer" }}>
              Terms and Conditions
            </span>
          </Link>
          <span className="divider" style={{ color: textColor }}>
            |
          </span>
          <Link href="/refund-policy" passHref>
            <span style={{ color: textColor, cursor: "pointer" }}>
              Refund Policy
            </span>
          </Link>
          <span className="divider" style={{ color: textColor }}>
            |
          </span>
          <Link href="/external-legal-resource" passHref>
            <span style={{ color: textColor, cursor: "pointer" }}>
              External Legal Resource
            </span>
          </Link>
        </div>
      </div>
      <div className="w-full flex mt-7 justify-center">
        <Image src={ExpertBuddyBigLogo} alt="ExpertBuddyBigLogo" />
      </div>
    </footer>
  );
};

export default FooterSection;
