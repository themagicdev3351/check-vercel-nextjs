"use client";
import Image from "next/image";
import { Button } from "../ui/button";
import PropTypes from "prop-types";

const StepCard = ({ step, title, description, buttonLabel, image }) => {
  if (!Array.isArray(image)) {
    console.error("StepCard: image prop must be an array");
    return null;
  }
  return (
    <div className="z-20 flex justify-center items-center w-fit mx-[18px] flex-col mq:flex-row mq:w-[calc((1170/1440)*100vw)] mq:h-[calc((500/1440)*100vw)] bg-[#FFFFFF] shadow-lg rounded-[25px] mq:rounded-[30px] p-[20px] gap-[20px] mq:px-[calc((60/1440)*100vw)]  mq:gap-[calc((30/1440)*100vw)] border-solid border border-b-[11px] border-[#16192C1A] h-[666px]">
      {/* Left Section */}
      <div className="flex flex-col justify-center mq:w-[calc((550/1440)*100vw)] mq:h-[calc((318/1440)*100vw)]">
        <div className="flex justify-center items-center bg-gradient-to-r p-[3px] mq:p-[5px] from-[#AF32D9] to-[#BE5BDE] w-fit rounded-full step">
          <span className=" w-fit text-h6 mq:text-H6 font-bold text-[#16192C]  bg-white rounded-full px-[20px] py-[4px]">
            Step – {step}
          </span>
        </div>
        <h2 className="mq:text-H4 text-h6 font-bold text-[#16192C] my-[12px] step-title">
          {title}
        </h2>
        {description.map((x, idx) => (
          <ul key={idx}>
            <li className="flex items-start mq:text-P1 text-[#6B7B93] mb-2 ">
              <span className="min-w-[5px] min-h-[5px] rounded-full bg-gray-600 mt-2 mx-2 text-p2"></span>
              <span>{x}</span>
            </li>
          </ul>
        ))}
        <Button
          variant="default"
          className="px-[30px] mq:mt-4 py-6 bg-gray-900 text-p1 mq:text-P1 text-white font-bold rounded-full w-fit getting-started"
        >
          {buttonLabel}
        </Button>
        {/* <button>{buttonLabel}</button> */}
      </div>

      {/* Right Section */}
      {image.length === 2 ? (
        <div className="flex-1 relative">
          <Image
            src={image[0].leftImage}
            height={240.64}
            width={287.15}
            quality={85}
            loading="eager"
            sizes="(max-width: 768px) 100vw, (max-width: 1440px) 50vw"
            className="z-10 relative left-[-35px] bottom-[-20px] mq:bottom-10 mq:left-[20px] h-[240.64px] w-[287.15px] mq:w-[calc((356.15/1440)*100vw)] mq:h-[calc((298.46/1440)*100vw)]"
            alt="Left Section"
          />
          <Image
            src={image[1].rightImage}
            height={240.64}
            width={287.15}
            quality={85}
            loading="eager"
            sizes="(max-width: 768px) 100vw, (max-width: 1440px) 50vw"
            className="absolute z-0 bottom-0 right-[-30px] mq:bottom-[-20px] mq:right-0 mq:w-[calc((356.15/1440)*100vw)] mq:h-[calc((298.46/1440)*100vw)]"
            alt="Right Section"
          />
        </div>
      ) : image.length === 1 ? (
        <Image
          src={image[0]}
          height={287}
          width={354}
          className=" w-[354px] h-[287px] mq:w-[calc((563/1440)*100vw)] mq:h-[calc((374/1440)*100vw)] mix-blend-multiply"
          alt="Step illustration"
        ></Image>
      ) : (
        <div className="w-[344.13px] h-[264px] relative mq:w-[calc((503/1440)*100vw)] mq:h-[calc((374/1440)*100vw)]">
          <Image
            src={image[2]}
            height={195}
            width={157}
            className="h-[195px] w-[157px] mq:w-[calc((216/1440)*100vw)] mq:h-[calc((267/1440)*100vw)] absolute z-10 mq:left-12 mq:top-[-10px]"
            alt="Step illustration - primary view"
          ></Image>
          <Image
            src={image[1]}
            height={176.25}
            width={141.27}
            className="h-[176.25px] w-[141.27px] mq:w-[calc((216/1440)*100vw)] mq:h-[calc((267/1440)*100vw)] absolute z-20 bottom-[-20px] right-24 step-image"
            alt="Step illustration - secondary view"
          ></Image>
          <Image
            src={image[0]}
            height={159.34}
            width={128.13}
            className="h-[159.34px] w-[128.13px] mq:w-[calc((166/1440)*100vw)] mq:h-[calc((204/1440)*100vw)] absolute z-10 top-10 right-0"
            alt="Step illustration - tertiary view"
          ></Image>
        </div>
      )}
    </div>
  );
};

StepCard.propTypes = {
  step: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.arrayOf(PropTypes.string).isRequired,
  buttonLabel: PropTypes.string.isRequired,
  image: PropTypes.array.isRequired,
};

export default StepCard;
