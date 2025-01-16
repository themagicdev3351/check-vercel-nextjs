import FooterSection from "../../global/Footer";
import HiringProcess from "./C1";
import { RatingCarousel } from "./C2";
import FAQs from "./C3";
import TutorBanner from "./TwoGirlLearning";

const BottomLandingPage = () => {
  return (
    <div
      className=" pt-9 gap-9 text-black min-h-screen flex flex-col items-center justify-center"
      role="main">
      <HiringProcess />

      <RatingCarousel />
      <FAQs />

      <div className=" relative w-full mt-[32rem]">
        <FooterSection />
        <div className="absolute w-full left-[50%] -top-[30rem] sm:-top-[32rem] transform -translate-x-1/2">
          <TutorBanner />
        </div>
      </div>
    </div>
  );
};

export default BottomLandingPage;
