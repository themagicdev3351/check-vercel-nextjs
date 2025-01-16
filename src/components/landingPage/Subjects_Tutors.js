import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import "swiper/css/pagination";
import classNames from "classnames";
import { useMediaQuery } from "react-responsive";

const Subjects_Tutors = () => {
  const items = [
    "ACT Tutors",
    "AP Tutors",
    "Algebra Tutors",
    "Biology Tutors",
    "Calculus Tutors",
    "Chemistry Tutors",
    "Coding Tutors",
    "Computer Science Tutors",
    "Elementary Tutors",
    "French Tutors",
    "Geometry Tutors",
    "Writing Tutor",
    "German Tutors",
    "GMAT Tutors",
    "Grammar Tutors",
    "Grammar Tutors",
    "Elementary Tutors",
    "French Tutors",
    "Geometry Tutors",
    "Writing Tutor",
    "German Tutors",
    "GMAT Tutors",
    "Grammar Tutors",
    "Grammar Tutors",

    "ACT Tutors",
    "AP Tutors",
    "Algebra Tutors",
    "Biology Tutors",
    "Calculus Tutors",
    "Chemistry Tutors",
    "Coding Tutors",
    "Computer Science Tutors",
    "Elementary Tutors",
    "French Tutors",
    "Geometry Tutors",
    "Writing Tutor",
    "German Tutors",
    "GMAT Tutors",
    "Grammar Tutors",
    "Grammar Tutors",
    "Elementary Tutors",
    "French Tutors",
    "Geometry Tutors",
    "Writing Tutor",
    "German Tutors",
    "GMAT Tutors",
    "Grammar Tutors",
    "Grammar Tutors",

    "ACT Tutors",
    "AP Tutors",
    "Algebra Tutors",
    "Biology Tutors",
    "Calculus Tutors",
    "Chemistry Tutors",
    "Coding Tutors",
    "Computer Science Tutors",
    "Elementary Tutors",
    "French Tutors",
    "Geometry Tutors",
    "Writing Tutor",
    "German Tutors",
    "GMAT Tutors",
    "Grammar Tutors",
    "Grammar Tutors",
    "Elementary Tutors",
    "French Tutors",
    "Geometry Tutors",
    "Writing Tutor",
    "German Tutors",
    "GMAT Tutors",
    "Grammar Tutors",
    "Grammar Tutors",
  ];
  const isSmallScreen = useMediaQuery({ query: "(max-width: 500px)" });
  return (
    <div className="text-center my-10 lg:m-0 px-4 flex-col relative">
      <div className="container mx-auto">
        <h1 className="relative text-[#16192C] text-h5 lg:text-H4 font-bold text-center mb-6">
          150+ Subjects, One Platform-Math, Science, Languages, And More! <br />
          <Image
            src="/landing-page/Vector.svg"
            alt="CrownIcon"
            width={40}
            height={40}
            className="absolute -top-4 right-7 sm:-top-4 sm:-right-4 md:-top-9 md:right-16 w-10 h-10 md:w-16 md:h-[4.5rem]"
          />
        </h1>
        {/* <Carousel /> */}
        <div>
          <Swiper
            className={classNames({ "swiper-small": isSmallScreen })}
            slidesPerView={4}
            slidesPerGroup={4}
            grid={{
              rows: 4,
              fill: "row",
            }}
            spaceBetween={15}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            pagination={{
              clickable: true,
              el: ".custom-pagination",
            }}
            modules={[Grid, Navigation, Pagination]}
            breakpoints={{
              200: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                pagination: false,
              },
              640: {
                slidesPerView: 2,
                slidesPerGroup: 2,
              },
              768: {
                slidesPerView: 3,
                slidesPerGroup: 3,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
            speed={1200}
            style={{
              margin: isSmallScreen ? "0" : "0 calc((135/1440)*100vw)",
              paddingBottom: isSmallScreen ? "30px" : "50px",
              gap: "8px",
            }}>
            {items.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="min-h-[60px] min-w-[193px] h-full text-[#16192C] bg-white rounded-[20px] font-bold text-center flex items-center justify-center">
                  {item}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <Image
            src="./landing-page/arrow-left.svg"
            alt="Previous"
            height={45}
            width={45}
            aria-label="Previous slide"
            role="button"
            className="custom-prev absolute lg:left-[50px] lg:top-[44%] cursor-pointer -bottom-8 left-[38%] sm:left-[43%] z-40"
          />
          <Image
            src="./landing-page/arrow-right.svg"
            alt="Next"
            height={45}
            width={45}
            aria-label="Next slide"
            role="button"
            className="custom-next absolute lg:right-[50px] lg:top-[44%] cursor-pointer -bottom-8 right-[38%] sm:right-[43%] z-40"
          />
          <div className="custom-pagination flex justify-center gap-[5px]"></div>
        </div>
      </div>
    </div>
  );
};

export default Subjects_Tutors;
