import React from "react";
import ReasonCard from "@/components/landingPage/ReasonCard";
import StepCard from "@/components/landingPage/StepCard";
import Testimonials from "@/components/landingPage/Testimonials";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

export default function ReasonsToChoose() {
  const reasons = [
    {
      imgSrc: "./landing-page/reasons/Frame.svg",
      title: "Learn On Your Terms",
      description:
        "Pay as you go with no long-term commitments—study when it fits your schedule.",
    },
    {
      imgSrc: "./landing-page/reasons/Frame1.svg",
      title: "Top-Tier Tutors",
      description:
        "Access the best tutors worldwide, carefully vetted to ensure exceptional teaching quality.",
    },
    {
      imgSrc: "./landing-page/reasons/Group.svg",
      title: "Seamless Scheduling",
      description:
        "Book, reschedule, and manage lessons effortlessly, giving you complete control over your learning.",
    },
    {
      imgSrc: "./landing-page/reasons/Frame2.svg",
      title: "Instant Help, 24/7 Support",
      description:
        "Our support team is available around the clock, ready to assist whenever you need it.",
    },
  ];

  const stepsData = [
    {
      step: "01",
      title: "Choose Your Perfect Tutor And Start Achieving Your Goals",
      description: [
        "Browse top tutors, review their qualifications, experience, and feedback, then connect to discuss your personalized learning goals.",
      ],
      image: [
        { leftImage: "./landing-page/getting-started/Frame.svg" },
        { rightImage: "./landing-page/getting-started/Frame.svg" },
      ],
      buttonLabel: "Get Started",
    },
    {
      step: "02",
      title: "Select A Time And Book A Class",
      description: [
        "Select a time slot, confirm your booking, and pay securely via Stripe or PayPal.",
        " You can cancel or reschedule up to 12 hours in advance.",
      ],
      buttonLabel: "Get Started",
      image: ["/landing-page/getting-started/datePickerPanel.png"],
    },
    {
      step: "03",
      title: "Join Your Lesson With A Single Tap–Right From Our App Or Website",
      description: [
        "Communicate with your tutor to address your needs, and don't forget to review and rate the session afterward.",
      ],
      buttonLabel: "Get Started",
      image: [
        "./landing-page/getting-started/image-1.svg",
        "./landing-page/getting-started/image-2.svg",
        "./landing-page/getting-started/image.svg",
      ],
    },
  ];

  return (
    <>
      <div className={`bg-[#F5F3EF] `}>
        {/* ******* Reasons To Choose ExpertBuddy ******* */}

        <div className={` pt-10`}>
          <div className="max-w-full mx-auto">
            {/* Heading */}
            <h2 className="text-center text-h5 lg:text-H3 font-bold tracking-[0] text-gray-900 mb-10 relative w-fit mx-auto">
              <img
                src="./landing-page/Vector1.svg"
                className={`absolute left-[53px] bottom-[45px] mq:left-[-40px] mq:bottom-[5px] w-[30px] h-[38px] mq:w-[calc((77.69/1440)*100vw)] mq:h-[calc((96.28/1440)*100vw)]`}
                alt="4 Reasons To Choose ExpertBuddy"
                role="presentation"
              ></img>
              4 Reasons To Choose ExpertBuddy
            </h2>
            {/* Reasons Grid */}
            <div className="flex flex-wrap px-[18px] gap-y-[50px] md:gap-x-[30px] justify-center items-center">
              {reasons.map((reason, index) => (
                <ReasonCard
                  key={index}
                  imgSrc={reason.imgSrc}
                  title={reason.title}
                  description={reason.description}
                />
              ))}
            </div>
            <div className="text-center mt-10">
              <Button
                className="bg-black text-white px-6 py-3 rounded-full shadow-md hover:bg-purple-700 transition"
                variant="black"
                aria-label="Start finding tutors"
              >
                Start finding tutors
              </Button>
            </div>
          </div>
        </div>

        {/* ***** Testimonials ***** */}

        <div id="Our Students" className="mt-[80px] flex flex-col gap-10">
          {/* ***** Heading ****** */}
          <div>
            <Image
              height={38}
              width={30}
              src="./landing-page/Vector.svg"
              className={`relative left-[92%] sm:left-[90%] md:left-[92%] lg:left-[90%] xl:left-[85%] top-8 xl:top-16 mq:w-[calc((77.69/1440)*100vw)] mq:h-[calc((96.28/1440)*100vw)]`}
              alt="Voices of Progress"
            />
            <p className="text-center lg:text-[44px] lg:leading-[55px] text-[#16192C] font-bold text-[28px] leading-[33px] mx-4">
              Voices of Progress: Tutor Testimonials That Inspire
            </p>
          </div>
          {/* ****** Content ****** */}
          <Testimonials />
        </div>

        {/* ****** Getting Started *******  */}

        <div id="How It Works">
          {/* Heading */}

          <h2 className="text-center text-h5 lg:text-H3 font-bold tracking-[0] text-gray-900 mb-10 relative w-fit mx-auto mt-[120px]">
            <img
              src="./landing-page/Vector1.svg"
              className={`absolute left-[30px] bottom-[45px] mq:left-[-40px] mq:bottom-[5px] w-[30px] h-[38px] mq:w-[calc((77.69/1440)*100vw)] mq:h-[calc((96.28/1440)*100vw)]`}
              alt="Getting Started In 3 Easy Steps"
            ></img>
            Getting Started In 3 Easy Steps
          </h2>

          {/* ****** Content ****** */}

          <div className="hidden sm:flex sm:flex-wrap justify-center items-center bg-gradient-to-r from-[#F5F3EF] to-[#F7F4F1] gap-y-[calc((50/1440)*100vw)]">
            {stepsData.map((step) => (
              <StepCard
                key={step.step}
                step={step.step}
                title={step.title}
                description={step.description}
                buttonLabel={step.buttonLabel}
                image={step.image}
              />
            ))}
          </div>

          <div className="flex sm:hidden justify-center items-center bg-gradient-to-r from-[#F5F3EF] to-[#F7F4F1] gap-y-[calc((50/1440)*100vw)]">
            <Swiper
              navigation={{
                nextEl: ".custom-next-slide",
                prevEl: ".custom-prev-slide",
              }}
              keyboard={{ enabled: true }}
              slidesPerView={1}
              modules={[Navigation]}
            >
              {stepsData.map((step) => (
                <SwiperSlide key={step.step}>
                  <StepCard
                    step={step.step}
                    title={step.title}
                    description={step.description}
                    buttonLabel={step.buttonLabel}
                    image={step.image}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="flex sm:hidden justify-center items-center gap-2 mt-7">
            <Image
              src="./landing-page/arrow-left.svg"
              alt="Previous"
              height={45}
              width={45}
              className="custom-prev-slide cursor-pointer z-40"
            />
            <Image
              src="./landing-page/arrow-right.svg"
              alt="Next"
              height={45}
              width={45}
              className="custom-next-slide  cursor-pointer z-40"
            />
          </div>
        </div>
      </div>
    </>
  );
}
