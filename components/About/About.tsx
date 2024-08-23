import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useAnimate, useScroll } from "framer-motion";

import AboutBg from "../../assets/images/AboutBg.png";
import AboutBg2 from "../../assets/images/AboutBg2.png";
// import AboutImg1 from "../../assets/images/AboutImg1.png";
import AboutImg2 from "../../assets/images/AboutImg2.png";

export const About = () => {
  // const [scope,animate]  = useAnimate();
  // const targetDivRef = useRef<HTMLDivElement>(null);

  // const {scrollYProgress} = useScroll({
  //     target:targetDivRef,
  //     offset:['0 1','1.33 1'],
  // })

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 0.3,
          delay: 0.2,
          ease: "backInOut",
          delayChildren: 0.4,
        }}
        className="bg-[#FFF] w-full hidden h-screen relative snap-center flex-shrink-0 overflow-hidden md:hidden 2xl:flex xl:flex lg:landscape:flex lg:portrait:hidden"
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.8 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: "backInOut",
          }}
          className="absolute top-0 left-0 w-full h-full "
        >
          <Image fill src={AboutBg} alt="about-us-bg" className="" />
        </motion.div>
        <div className="flex justify-center items-center w-full h-full z-10 absolute top-0 left-0">
          <div className="w-[90%] h-[80%] flex justify-evenly 2xl:gap-5 gap-1 items-center ml-10 2xl:ml-0">
            <div className="w-[45%]  h-full flex flex-col gap-4 justify-center items-start">
              <div className="w-full flex justify-between items-center">
                <motion.h2
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{
                    duration: 1.5,
                    delay: 0.4,
                    ease: "backInOut",
                    staggerDirection: 0.3,
                  }}
                  className="AzonixFont font-[Azonix,Oxanium] font-[500] text-5xl lg:text-4xl"
                >
                  Who we are
                </motion.h2>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: [0, 0.2, 0.4, 0.6, 0.8, 1], y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 1.7,
                    times: [0, 0.2, 0.4, 0.6, 0.8, 1],
                    ease: "backInOut",
                  }}
                  className="h-[2px] bg-[#D9D9D9] w-[40%]"
                />
              </div>

              <motion.div
                initial={{ opacity: 0, height: "0%" }}
                whileInView={{
                  opacity: [0, 0.2, 0.4, 0.6, 0.8, 1],
                  height: ["0%", "75%"],
                }}
                transition={{ duration: 1.2, delay: 2, ease: "circInOut" }}
                className="relative w-full h-[75%]"
              >
                {/* <Image
                fill
                src={AboutImg1}
                className="object-cover"
                alt="aboutimg-one"
                loading="lazy"
              /> */}

                <video
                  className="object-cover w-full h-full "
                  muted
                  loop
                  controls={false}
                  autoPlay
                  playsInline
                >
                  <source src="/AboutusVideo.mp4"></source>
                </video>
              </motion.div>
            </div>

            <div className="w-[45%] h-full flex flex-col 2xl:gap-3 gap-2 justify-center items-start">
              <div className="">
                <motion.h2
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{
                    duration: 1.5,
                    delay: 0.4,
                    ease: "backInOut",
                    staggerDirection: 0.3,
                  }}
                  className="font-[Oxanium] font-[700] lg:text-4xl 2xl:text-5xl "
                >
                  KALTECH CONSULTANCY
                </motion.h2>
              </div>
              <motion.div
                initial={{ opacity: 0, height: "0%" }}
                whileInView={{
                  opacity: [0, 0.2, 0.4, 0.6, 0.8, 1],
                  height: ["0%", "75%"],
                }}
                transition={{ duration: 1.2, delay: 2, ease: "circInOut" }}
                className="w-full h-[75%]"
              >
                <div className="p-1 w-[80%] my-2">
                  <p className="font-[Oxanium] font-[400] 2xl:text-md text-base lg:text-sm">
                    is a powerhouse of digital creativity, equipped with a
                    talented team of designers, developers, consultants,
                    engineers, and strategists. Our edgy approach to branding
                    sets us apart, and our team of talented creatives are
                    dedicated to bringing your vision to life.
                  </p>
                </div>
                <button className="flex justify-center items-center gap-3 cursor-pointer bg-[#000] rounded-full 2xl:w-[30%] xl:w-[30%] lg:w-[50%] w-[40%] text-[#FFF] py-3 font-[Oxanium] font-[600] my-4 2xl:my-3 learMoreBTNcustomHoverEffect">
                  Learn more{" "}
                  {/* <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <circle
                      cx="6"
                      cy="6"
                      r="6"
                      fill="url(#paint0_linear_65_66)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_65_66"
                        x1="6"
                        y1="0"
                        x2="6"
                        y2="12"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#BB9406" />
                        <stop offset="1" stop-color="#433500" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span> */}
                </button>
                <div className="relative h-[57%] w-full">
                  {/* <Image
                    fill
                    src={AboutImg2}
                    className="object-cover"
                    alt="aboutimg-two"
                    loading="lazy"
                  /> */}
                  <video
                    className="object-cover w-full h-full "
                    muted
                    loop
                    controls={false}
                    autoPlay
                    playsInline
                  >
                    <source src="/AboutVideoImg.mp4"></source>
                  </video>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      <AboutTab />
      <AboutMob />
    </>
  );
};

const AboutTab = () => {
  return (
    <>
      <div className="h-screen hidden 2xl:hidden lg:landscape:hidden lg:portrait:flex md:flex">
        <div className="w-[90%] h-full mx-auto flex flex-col gap-4 justify-center items-center">
          <div className="flex flex-col justify-center items-center h-[25%] gap-4">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                duration: 1.5,
                delay: 0.4,
                ease: "backInOut",
                staggerDirection: 0.3,
              }}
              className="AzonixFont font-[Azonix,Oxanium] font-[500] text-5xl"
            >
              Who we are
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: [0, 0.2, 0.4, 0.6, 0.8, 1], y: 0 }}
              transition={{
                duration: 0.8,
                delay: 1.7,
                times: [0, 0.2, 0.4, 0.6, 0.8, 1],
                ease: "backInOut",
              }}
              className="w-[2px] bg-[#D9D9D9] h-[20%]"
            />

            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                duration: 1.5,
                delay: 0.4,
                ease: "backInOut",
                staggerDirection: 0.3,
              }}
              className="font-[Oxanium] font-[700] text-5xl "
            >
              KALTECH CONSULTANCY
            </motion.h2>
            <p className="font-[Oxanium] font-[400] text-lg text-center my-2">
              is a powerhouse of digital creativity, equipped with a talented
              team of designers, developers, consultants, engineers, and
              strategists. Our edgy approach to branding sets us apart, and our
              team of talented creatives are dedicated to bringing your vision
              to life.
            </p>
          </div>

          <div className="flex flex-col justify-center items-center gap-4 h-[60%]">
            <div className="h-[80%]">
              <video
                className="object-cover w-full h-full"
                muted
                loop
                controls={false}
                autoPlay
                playsInline
              >
                <source src="/AboutusVideo.mp4"></source>
              </video>
            </div>
            <button className="flex justify-center items-center gap-3 cursor-pointer bg-[#000] rounded-full w-full text-[#FFF] py-5 font-[Oxanium] font-[600] my-4 2xl:my-3 learMoreBTNcustomHoverEffect capitalize">
              Learn more{" "}
              {/* <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <circle
                      cx="6"
                      cy="6"
                      r="6"
                      fill="url(#paint0_linear_65_66)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_65_66"
                        x1="6"
                        y1="0"
                        x2="6"
                        y2="12"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#BB9406" />
                        <stop offset="1" stop-color="#433500" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span> */}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const AboutMob = () => {
  return (
    <>
      <div className="h-screen 2xl:hidden xl:hidden lg:hidden md:hidden relative overflow-hidden">

        <div>
          <Image src={AboutBg2} alt="bg-image" />
        </div>
        <div className="absolute w-full h-full top-0 left-0 flex  flex-col justify-center items-center">
          <div className="w-[90%] h-[95%] mx-auto flex flex-col justify-center items-center gap-3">
            <div className="flex flex-col justify-start items-start  gap-2 ">
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  duration: 1.5,
                  delay: 0.4,
                  ease: "backInOut",
                  staggerDirection: 0.3,
                }}
                className="AzonixFont font-[Azonix,Oxanium] font-[500] text-2xl"
              >
                Who we are
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: [0, 0.2, 0.4, 0.6, 0.8, 1], y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 1.7,
                  times: [0, 0.2, 0.4, 0.6, 0.8, 1],
                  ease: "backInOut",
                }}
                className="w-[2px] bg-[#D9D9D9] h-10"
              />

              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  duration: 1.5,
                  delay: 0.4,
                  ease: "backInOut",
                  staggerDirection: 0.3,
                }}
                className="font-[Oxanium] font-[700] text-3xl "
              >
                KALTECH CONSULTANCY
              </motion.h2>
              <p className="font-[Oxanium] font-[400] text-sm text-center my-1">
                is a powerhouse of digital creativity, equipped with a talented
                team of designers, developers, consultants, engineers, and
                strategists. Our edgy approach to branding sets us apart, and
                our team of talented creatives are dedicated to bringing your
                vision to life.
              </p>
            </div>

            <div className="flex flex-col justify-center items-center gap-2 h-[50%]">
            <div className="h-[90%]">
              <video
                className="object-cover w-full h-full"
                muted
                loop
                controls={false}
                autoPlay
                playsInline
              >
                <source src="/AboutusVideo.mp4"></source>
              </video>
            </div>
            <button className="flex justify-center items-center gap-3 cursor-pointer bg-[#000] rounded-full w-full text-[#FFF] py-2.5 font-[Oxanium] font-[600] mt-1  learMoreBTNcustomHoverEffect capitalize">
              Learn more{" "}
              {/* <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <circle
                      cx="6"
                      cy="6"
                      r="6"
                      fill="url(#paint0_linear_65_66)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_65_66"
                        x1="6"
                        y1="0"
                        x2="6"
                        y2="12"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#BB9406" />
                        <stop offset="1" stop-color="#433500" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span> */}
            </button>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};
