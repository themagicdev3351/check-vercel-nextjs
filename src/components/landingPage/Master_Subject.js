"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import "swiper/css/pagination";
import TutorCard from "@/components/landingPage/tutor-card";
import classNames from "classnames";
import { useMediaQuery } from "react-responsive";

const MasterSubject = () => {
  const items = [
    { title: "English Tutors", img: "/img-1.png", cost: "$250.00" },
    { title: "Math Tutors", img: "/img-1.png", cost: "$200.00" },
    { title: "Science Tutors", img: "/img-1.png", cost: "$180.00" },
    { title: "History Tutors", img: "/img-1.png", cost: "$220.00" },
    { title: "French Tutors", img: "/img-1.png", cost: "$240.00" },
    { title: "Japanese Tutors", img: "/img-1.png", cost: "$210.00" },
    { title: "Spanish Tutors", img: "/img-1.png", cost: "$230.00" },
    { title: "Korean Tutors", img: "/img-1.png", cost: "$190.00" },
    { title: "English Tutors", img: "/img-1.png", cost: "$250.00" },
    { title: "Math Tutors", img: "/img-1.png", cost: "$200.00" },
    { title: "Science Tutors", img: "/img-1.png", cost: "$180.00" },
    { title: "History Tutors", img: "/img-1.png", cost: "$220.00" },
    { title: "French Tutors", img: "/img-1.png", cost: "$240.00" },
    { title: "Japanese Tutors", img: "/img-1.png", cost: "$210.00" },
    { title: "Spanish Tutors", img: "/img-1.png", cost: "$230.00" },
    { title: "Korean Tutors", img: "/img-1.png", cost: "$190.00" },
  ];
  const isSmallScreen = useMediaQuery({ query: "(max-width: 500px)" });

  return (
    <>
      <div
        id="Trending Topics"
        className="relative flex flex-col items-center justify-center mb-32 mq:m-0">
        <div className="container mx-auto mt-6">
          <div>
            <Image
              src="/Ellipse3.png"
              height={135}
              width={150}
              alt="ellipse"
              className="absolute z-[-1] top-[8%] left-0 opacity-70"
            />
          </div>

          {/* Crown Image (Slightly to the Left for Large Screens) */}
          <div>
            <Image
              src="/landing-page/Vector1.svg"
              height={96}
              width={77}
              alt="crown"
              className="absolute z-[0] hidden md:block -top-3 left-[18%]"
            />
          </div>

          {/* Crown Image (Slightly to the Left for Small Screens) */}
          <div>
            <Image
              src="/crown.png"
              height={38}
              width={30}
              alt="small crown"
              className="absolute z-[0] block sm:hidden top-1 right-[85%]"
            />
          </div>

          {/* Responsive Text */}
          <div className="mb-10 flex flex-col items-center justify-center">
            <h3
              className=" font-bold lg:text-H3 text-[#16192C] text-[28px]
              leading-[33.6px] lg:leading-[50px] text-center">
              Master Any Subject or Language With <br />
              ExpertBuddy&apos;s 1-on-1 Tutors!
            </h3>
          </div>

          <div className="flex w-[100vw] text-[#6B7B93] justify-start sm:justify-center items-center gap-x-[10px] h-[50px] overflow-scroll scrollbar-hide mb-6">
            <p className="text-p2 lg:text-P1 text-[#16192C] py-[10px] border-b-2 border-black min-w-fit px-[20px] mq:px-[calc((30/1440)*100vw)] font-bold">
              Language
            </p>
            <p className="text-p2 lg:text-P1  py-[10px]  min-w-fit px-[20px] mq:px-[calc((30/1440)*100vw)]  ">
              K12 Education
            </p>
            <p className="text-p2 lg:text-P1  py-[10px]  min-w-fit px-[20px] mq:px-[calc((30/1440)*100vw)]  ">
              Academic
            </p>
            <p className="text-p2 lg:text-P1  py-[10px]  min-w-fit px-[20px] mq:px-[calc((30/1440)*100vw)]  ">
              Music
            </p>
            <p className="text-p2 lg:text-P1  py-[10px]  min-w-fit px-[20px] mq:px-[calc((30/1440)*100vw)]  ">
              Sport
            </p>
            <p className="text-p2 lg:text-P1 py-[10px]  min-w-fit px-[20px] mq:px-[calc((30/1440)*100vw)]">
              Lifestyle
            </p>
          </div>

          <Swiper
            className={classNames({ "swiper-small": isSmallScreen })}
            slidesPerView={4}
            slidesPerGroup={4}
            speed={1200}
            grid={{
              rows: 2,
              fill: "row",
            }}
            pagination={{
              clickable: true,
              el: ".custom-pagination2",
            }}
            spaceBetween={30}
            navigation={{
              nextEl: ".custom-nextSlide",
              prevEl: ".custom-prevSlide",
            }}
            modules={[Grid, Navigation, Pagination]}
            breakpoints={{
              200: {
                slidesPerView: 1,
                grid: {
                  rows: 2,
                },
                slidesPerGroup: 1,
              },
              400: {
                slidesPerView: 2,
                slidesPerGroup: 2,
              },
              504: {
                slidesPerView: 3,
                slidesPerGroup: 3,
              },
              768: {
                slidesPerView: 4,
              },
            }}
            style={{
              margin: isSmallScreen ? "18px" : "0 calc((135/1440)*100vw)",
              paddingBottom: isSmallScreen ? "30px" : "50px",
              gap: "8px",
            }}>
            {items?.map((item, index) => (
              <SwiperSlide key={index}>
                <TutorCard title={item.title} cost={item.cost} img={item.img} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="mq:hidden custom-pagination2 flex justify-center gap-[4px] mt-5 "></div>

          <Image
            src="./landing-page/arrow-left.svg"
            alt="Previous"
            height={45}
            width={45}
            className="custom-prevSlide absolute mq:left-[50px] mq:top-[62%] cursor-pointer -bottom-20 left-[38%] z-40"
          />
          <Image
            src="./landing-page/arrow-right.svg"
            alt="Next"
            height={45}
            width={45}
            className="custom-nextSlide absolute mq:right-[50px] mq:top-[62%] cursor-pointer -bottom-20 right-[38%] z-40"
          />
        </div>
      </div>
    </>
  );
};

export default MasterSubject;
