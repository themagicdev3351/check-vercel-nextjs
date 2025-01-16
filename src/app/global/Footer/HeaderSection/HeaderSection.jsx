import * as React from 'react'
import Logo1 from "../assets/Logo1.svg";
import Logo2 from "../assets/Logo2.svg";
import Logo3 from "../assets/Logo3.svg";
import Logo4 from "../assets/Logo4.svg";
import Logo5 from "../assets/Logo5.svg";
import Logo6 from "../assets/Logo6.svg";
import Logo7 from "../assets/Logo7.svg";
import './HeaderSection.css';
import Image from 'next/image';
import CrownIcon from "../assets/CrownIcon.svg"

const HeaderSection = ({ title = "As Seen In" }) => {
  const logos = [
    { src: Logo1, width: 220, height: 40 },
    { src: Logo2, width: 174, height: 39 },
    { src: Logo3, width: 176, height: 40 },
    { src: Logo4, width: 202, height: 40 },
    { src: Logo5, width: 169, height: 40 },
    { src: Logo6, width: 186, height: 41 },
    { src: Logo7, width: 218, height: 40 }
  ];
  

  return (
    <div className="header-section">
      <h1 className=" relative header-title">{title}
        <Image
        src={CrownIcon}
        alt='CrownIcon'
        className="absolute max-sm:w-[40px] ml-2 max-sm:-left-6 max-sm:-top-5 -left-9 -top-7"
        />
      </h1>
      <div className="logo-container">
        {logos.map((logo, index) => (
          <Image
            key={index}
            src={logo.src}
            alt={`Logo ${index + 1}`}
            width={logo.width}
            height={logo.height}
            loading="lazy"
            className="logo-image"
          />
        ))}
      </div>
    </div>
  );
};

export default HeaderSection;

