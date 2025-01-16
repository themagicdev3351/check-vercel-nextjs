"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";

const Testimonials = () => {
  const testimonialsData = [
    {
      id: 1,
      image: "./landing-page/Rectangle2.svg",
      title: "Lorem ipsum dolor sit amet consectetur.",
      description:
        "Lorem ipsum dolor sit amet consectetur. Accumsan morbi fames amet semper ornare purus posuere malesuada.",
      name: "Kianna Dias",
      role: "English Learner on ExpertBuddy",
    },
    {
      id: 2,
      image: "./landing-page/Rectangle2.svg",
      title: "Another testimonial title",
      description: "Another testimonial description goes here.",
      name: "John Doe",
      role: "Mathematics Learner on ExpertBuddy",
    },
    {
      id: 3,
      image: "./landing-page/Rectangle2.svg",
      title: "Yet another testimonial title",
      description: "Yet another testimonial description goes here.",
      name: "Jane Smith",
      role: "Science Learner on ExpertBuddy",
    },
  ];
  const swiperRef = useRef(null);
  const handleSwiper = (swiper) => {
    swiperRef.current = swiper;
  };
  return (
    <div className="flex flex-wrap items-center justify-center relative">
      {/* Background Images */}
      <Image
        src="./landing-page/Rectangle.svg"
        height={1140}
        width={620}
        alt="Background decoration"
        priority={true}
        className="absolute -left-80 sm:left-[-480px] lg:left-[-475px] top-[500px] lg:top-[350px] w-[620px] h-[1140px] z-10"
      />
      <Image
        src="./landing-page/Rectangle.svg"
        height={540}
        width={820}
        alt="Background decoration"
        priority={true}
        className="absolute top-[660vh]  lg:top-[1800px] -right-80 lg:right-[-650px]"
      />
      <div className="relative  w-full slider-container">
        {/* Slider */}
        <Swiper
          slidesPerView={1}
          speed={1200}
          onSwiper={handleSwiper}
          modules={[Navigation]}
        >
          {testimonialsData.map((testimonial, idx) => (
            <SwiperSlide key={idx}>
              <Testimonial swiperRef={swiperRef} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

const Testimonial = ({ swiperRef }) => {
  const handlePrev = () => {
    if (swiperRef.current) swiperRef.current.slidePrev();
  };

  const handleNext = () => {
    if (swiperRef.current) swiperRef.current.slideNext();
  };
  return (
    <>
      <div className="flex flex-wrap items-center justify-center relative">
        <div
          className=" w-[394px] h-[500px] mq:w-[calc((470/1440)*100vw)] mq:h-[calc((597/1440)*100vw)] bg-center bg-cover rounded-[calc((40/1440)*100vw)] rounded-br-none z-10"
          style={{
            backgroundImage: "url(./landing-page/Rectangle2.svg)",
          }}
        ></div>
        <Image
          height={340}
          width={620}
          src="./landing-page/Rectangle.svg"
          className="absolute top-[-50px] left-[30px] w-[620px] h-[340px] mq:w-[calc((690/1440)*100vw)] mq:h-[calc((720/1440)*100vw)] fade-effect"
          alt="Background decoration"
        ></Image>

        <div className="flex flex-col ml-[calc((50/1440)*100vw)]">
          <div className="flex flex-col mq:w-[calc((650/1440)*100vw)] mq:h-[calc((380/1440)*100vw)]">
            <h4 className="font-[700] mq:text-H4 mb-[12px] text-[#16192C]">
              Lorem ipsum dolor sit amet consectetur.
            </h4>
            <h6 className="mq:text-H6 mb-[40px] font-[400] text-[#6B7B93]">
              Lorem ipsum dolor sit amet consectetur. Accumsan morbi fames amet
              semper ornare purus posuere malesuada. A a eget etiam at velit.
              Sit proin eleifend hendrerit fringilla aenean pellentesque vitae
              diam. Tristique amet eu dolor facilisi. Quam sit sed massa elit
              etiam ipsum. Nunc ut volutpat condimentum mauris consequat vitae
              habitasse.
            </h6>
            <div>
              <div className="h-[4px] w-[100px] bg-[#640D51]"></div>
              <h4 className="mq:text-H4 my-[6px] text-[#A414D5] font-bold">
                Kianna Dias
              </h4>
              <p className="mq:text-P1 text-[#16192C]">
                English Lerner on ExpertBuddy
              </p>
            </div>
          </div>
          <div className="mt-[calc((110/1440)*100vw)] flex gap-[20px] z-20">
            <button
              onClick={handlePrev}
              className=" focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-full"
              aria-label="Previous slide"
            >
              <Image
                src="./landing-page/arrow-left.svg"
                alt=""
                height={45}
                width={45}
                className="cursor-pointer"
              />
            </button>
            <button
              onClick={handleNext}
              className=" focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-full"
              aria-label="Next slide"
            >
              <Image
                src="./landing-page/arrow-right.svg"
                alt=""
                height={45}
                width={45}
                className="cursor-pointer"
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
