"use client";
import TopBanner from "@/components/landingPage/Banner"; 
import Stats from "@/components/landingPage/Stats";
import MasterSubject from "@/components/landingPage/Master_Subject";
import Subjects_Tutors from "@/components/landingPage/Subjects_Tutors";
import ReasonsToChoose from "@/components/landingPage/ReasonsToChoose";
import BottomLandingPage from "../_components/BottomLandingPage";

const Home = () => {
  return (
    <div className="bg-[#F5F3EF] overflow-x-hidden">
      <TopBanner />
      <Stats />
      <MasterSubject />
      <Subjects_Tutors />
      <ReasonsToChoose />
      <BottomLandingPage />
    </div>
  );
};

export default Home;
