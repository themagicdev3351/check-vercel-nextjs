"use client";
import { RiSearch2Line } from "react-icons/ri";
import Searchbarcomponent from "./SearchBarComponent";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import SidebarMenu from "./SideBarMenu";
import Image from "next/image";

const TopBanner = () => {
  return (
    <div
      id="Expert Tutoring"
      className={
        "h-[800px] mq:h-[calc((800/1440)*100vw)] w-full bg-cover bg-center bg-[#A414D5] flex items-center justify-center relative"
      }
      style={{
        backgroundImage: "url('/images/banner/top-banner.jpeg')",
      }}
    >
      <div className="container banner h-fit w-[100vw]  flex flex-col-reverse mq:flex-row items-center justify-center text-white ml-[18px]">
        {/* Left Side Content */}

        <div className="flex flex-col items-start">
          <h1 className="text-h4 mq:text-H1 font-bold">
            Instant Access <br />
            to Expert <br />
            1-on-1 Tutors
          </h1>
          <h4 className="mq:text-H4 font-bold mt-4">
            All Subjects, Anytime, Anywhere!
          </h4>
          <DropdownMenu modal={false}>
            <DropdownMenuTrigger
              className="outline-none"
              aria-label="Search objectives"
            >
              <div className="mt-8 w-[calc((394/480)*100vw)] h-[55px] flex items-center bg-background px-2 lg:p-2 rounded-[500px] mq:w-[calc((650/1440)*100vw)] mq:h-[calc((80/1440)*100vw)] z-8">
                <div
                  role="button"
                  aria-label="Search"
                  tabIndex={0}
                  className="p-2 rounded-r-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={() =>
                    document.getElementById("search-input").focus()
                  }
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      document.getElementById("search-input").focus();
                    }
                  }}
                >
                  <RiSearch2Line />
                </div>
                <input
                  id="search-input"
                  type="text"
                  role="combobox"
                  aria-expanded="false"
                  aria-controls="search-listbox"
                  aria-activedescendant=""
                  aria-label="Search learning objectives"
                  placeholder="What are your objectives for learning?"
                  className="w-full text-p3 mq:text-P1 z-10 outline-none bg-transparent text-[#6B7B93] focus:ring-2 focus:ring-purple-500"
                  onKeyDown={(e) => {
                    if (e.key === "Escape") {
                      e.currentTarget.blur();
                    }
                  }}
                />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              role="listbox"
              id="search-listbox"
              className="z-[999]"
              style={{
                maxHeight: "300px",
                width: "400px",
                position: "absolute", // Ensures dropdown stays relative to its trigger
              }}
              side="bottom"
              align="start"
            >
              <Searchbarcomponent />
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="relative">
          <Image
            src="/images/banner/call-right.svg"
            alt="Banner Image"
            width={350}
            height={441}
            priority={true}
            className="w-[350px] h-[441px] lg:w-[calc((576.12/1440)*100vw)] lg:h-[calc((675/1440)*100vw)]"
          />
          <SidebarMenu />
        </div>
      </div>
      <Image
        src="./landing-page/Rectangle.svg"
        height={1140}
        width={620}
        loading="lazy"
        aria-hidden="true"
        className="absolute top-[963px] -left-80 lg:left-[-475px] w-[620px] h-[1140px]"
        alt="Rectangle"
      />
      <Image
        src="./landing-page/Rectangle.svg"
        height={540}
        width={820}
        loading="lazy"
        aria-hidden="true"
        className="absolute top-[2200px] lg:top-[1800px] -right-80 lg:right-[-650px]"
        alt="Rectangle"
      />
    </div>
  );
};

export default TopBanner;
