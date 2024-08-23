import React from "react";
import Image from "next/image";

import { motion, useAnimate } from "framer-motion";

import BlogBg from "../../../assets/images/OurBlogBg.png";
import BlogBg2 from "../../../assets/images/OurBlogBg2.png";
import BlogHeroImg1 from "../../../assets/images/BlogHeroImg1.png";
import BlogHeroImg2 from "../../../assets/images/TrendIngBlogImg2.png";
import BlogHeroImg3 from "../../../assets/images/TrendingBlogImg3.png";
import { useRouter } from "next/router";
export const TrendingBlog = () => {
  const [scope, animate] = useAnimate();
  const router = useRouter();

  /**
   * The `handleAnimation` function animates the resizing and styling of blog elements based on
   * specified blog IDs.
   * @param {any} blogIdToIncrease - The `blogIdToIncrease` parameter is the ID of the blog element that
   * you want to increase in size and show additional information for.
   * @param {any} blogIdToDecrease - The `blogIdToDecrease` parameter in the `handleAnimation` function
   * is used to specify the ID of the blog element that will be decreased in size and have certain
   * elements hidden during the animation.
   * @param {any} blogIdToDecrease2 - The `blogIdToDecrease2` parameter in the `handleAnimation`
   * function is used to specify the ID of a blog element that will undergo a decrease in size and other
   * animations as part of the animation sequence.
   */
  const handleAnimation = async (
    blogIdToIncrease: any,
    blogIdToDecrease: any,
    blogIdToDecrease2: any
  ) => {
    animate(
      `#${blogIdToDecrease} .blogHeading`,
      { fontSize: "20px" },
      { duration: 0.4, ease: "backInOut" }
    );
    animate(
      `#${blogIdToDecrease} .smallInfo`,
      { display: "none" },
      { duration: 0.2, ease: "backInOut" }
    );
    animate(
      `#${blogIdToDecrease} #readMoreBTN`,
      { display: "none" },
      { duration: 0.2, ease: "backInOut" }
    );

    animate(
      `#${blogIdToDecrease}`,
      { width: "25%" },
      { duration: 0.8, ease: "backInOut" }
    );

    animate(
      `#${blogIdToDecrease2} .blogHeading`,
      { fontSize: "20px" },
      { duration: 0.4, ease: "backInOut" }
    );
    animate(
      `#${blogIdToDecrease2} .smallInfo`,
      { display: "none" },
      { duration: 0.2, ease: "backInOut" }
    );
    animate(
      `#${blogIdToDecrease2} #readMoreBTN`,
      { display: "none" },
      { duration: 0.2, ease: "backInOut" }
    );

    animate(
      `#${blogIdToDecrease2}`,
      { width: "25%" },
      { duration: 0.8, ease: "backInOut" }
    );

    animate(
      `#${blogIdToIncrease}`,
      { width: "50%" },
      { duration: 0.8, ease: "backInOut", delay: 0.3 }
    );

    animate(
      `#${blogIdToIncrease} .blogHeading`,
      { fontSize: "24px" },
      { duration: 0.4, ease: "backInOut", delay: 0.5 }
    );
    animate(
      `#${blogIdToIncrease} .smallInfo`,
      { display: "inline" },
      { duration: 0.2, ease: "backInOut", delay: 0.5 }
    );
    animate(
      `#${blogIdToIncrease} #readMoreBTN`,
      { display: "flex" },
      { duration: 0.2, ease: "backInOut", delay: 0.5 }
    );
  };

  return (
    <>
      <div className="h-screen hidden relative overflow-hidden md:hidden 2xl:flex xl:flex lg:landscape:flex lg:portrait:hidden">
        <div className="absolute w-full h-full top-0 left-0">
          <Image fill src={BlogBg} alt="trending-blog-bg" loading="lazy" />
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "circInOut", delay: 0.2 }}
          className="flex justify-center items-center absolute top-0 left-0 w-full h-full"
        >
          <div className="w-[80%] h-[85%] mt-16 flex flex-col justify-between items-center">
            <motion.h3
              initial={{ y: "50%", opacity: 0 }}
              whileInView={{ y: "0%", opacity: 1 }}
              transition={{ duration: 0.6, ease: "backInOut", delay: 0.7 }}
              className="AzonixFont font-[Azonix,Oxanium] text-6xl font-[400] uppercase text-center my-[2%]"
            >
              Trending blogs
            </motion.h3>

            <motion.div
              ref={scope}
              initial={{ y: "80%", opacity: 0 }}
              whileInView={{ y: "0%", opacity: 1 }}
              transition={{ duration: 0.6, ease: "backInOut", delay: 1.2 }}
              className="h-[75%] w-full flex justify-center items-center gap-5"
            >
              <div
                id="blogBox1"
                onClick={() =>
                  handleAnimation("blogBox1", "blogBox2", "blogBox3")
                }
                className="relative h-full w-[50%]"
              >
                <Image
                  src={BlogHeroImg1}
                  fill
                  alt="trending-blog"
                  loading="lazy"
                  className="object-cover"
                />
                <div className="absolute w-full h-full top-0 left-0 bg-transparent flex justify-end items-end">
                  <div className=" h-[50%] w-full px-4 py-3 trendingBlogBg flex flex-col justify-end items-start">
                    <h3
                      id="blogHeading"
                      className="font-[Oxanium] blogHeading font-[700] text-2xl text-[#FFF]"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                    </h3>
                    <p
                      id="smallInfo"
                      className="font-[Oxanium] smallInfo font-[400] text-md my-2 text-[#FFF]"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vestibulum turpis justo, dapibus sed lorem sed, dictum
                      facilisis sem. Curabitur congue orci ipsum, ac viverra
                      lectus maximus vitae.
                    </p>
                    <motion.button
                      id="readMoreBTN"
                      initial={{ y: "60%", opacity: 0 }}
                      whileInView={{ y: "0%", opacity: 1 }}
                      onClick={() => router.push(`blog/1`)}
                      transition={{ duration: 0.6, ease: "circInOut" }}
                      className="flex justify-center items-center gap-3 cursor-pointer bg-[#000] rounded-full w-[30%] text-[#FFF] py-3 font-[Oxanium] font-[600] mt-2 "
                    >
                      Read more{" "}
                      <span>
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
                      </span>
                    </motion.button>
                  </div>
                </div>
              </div>

              <motion.div
                id="blogBox2"
                onClick={() =>
                  handleAnimation("blogBox2", "blogBox1", "blogBox3")
                }
                initial={{ width: "25%" }}
                whileTap={{ width: "50%" }}
                transition={{ duration: 0.8, ease: "backInOut" }}
                className="relative h-full w-[25%]"
              >
                <Image
                  src={BlogHeroImg2}
                  fill
                  alt="trending-blog"
                  loading="lazy"
                  className="object-cover"
                />
                <div className="absolute w-full h-full top-0 left-0 bg-transparent flex justify-end items-end">
                  <div className=" h-[50%] w-full px-4 py-3 trendingBlogBg flex flex-col justify-end items-start">
                    <h3 className="font-[Oxanium] blogHeading font-[700] text-xl text-[#FFF] ">
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                    </h3>
                    <p className="font-[Oxanium] smallInfo font-[400] text-md my-2 text-[#FFF] hidden">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vestibulum turpis justo, dapibus sed lorem sed, dictum
                      facilisis sem. Curabitur congue orci ipsum, ac viverra
                      lectus maximus vitae.
                    </p>
                    <motion.button
                      id="readMoreBTN"
                      initial={{ y: "60%", opacity: 0 }}
                      whileInView={{ y: "0%", opacity: 1 }}
                      onClick={() => router.push(`blog/2`)}
                      transition={{ duration: 0.6, ease: "circInOut" }}
                      className=" justify-center items-center gap-3 cursor-pointer bg-[#000] rounded-full w-[30%] text-[#FFF] py-3 font-[Oxanium] font-[600] mt-2 hidden"
                    >
                      Read more{" "}
                      <span>
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
                      </span>
                    </motion.button>
                  </div>
                </div>
              </motion.div>

              <div
                onClick={() =>
                  handleAnimation("blogBox3", "blogBox1", "blogBox2")
                }
                id="blogBox3"
                className="relative h-full w-[25%]"
              >
                <Image
                  src={BlogHeroImg3}
                  fill
                  alt="trending-blog"
                  loading="lazy"
                  className="object-cover"
                />
                <div className="absolute w-full h-full top-0 left-0 bg-transparent flex justify-end items-end">
                  <div className=" h-[50%] w-full px-4 py-3 trendingBlogBg flex flex-col justify-end items-start">
                    <h3 className="font-[Oxanium] blogHeading font-[700] text-xl text-[#FFF]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                    </h3>
                    <p className="font-[Oxanium] smallInfo font-[400] text-md my-2 text-[#FFF] hidden">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vestibulum turpis justo, dapibus sed lorem sed, dictum
                      facilisis sem. Curabitur congue orci ipsum, ac viverra
                      lectus maximus vitae.
                    </p>
                    <motion.button
                      id="readMoreBTN"
                      initial={{ y: "60%", opacity: 0 }}
                      whileInView={{ y: "0%", opacity: 1 }}
                      onClick={() => router.push(`blog/3`)}
                      transition={{ duration: 0.6, ease: "circInOut" }}
                      className="hidden justify-center items-center gap-3 cursor-pointer bg-[#000] rounded-full w-[30%] text-[#FFF] py-3 font-[Oxanium] font-[600] mt-2 "
                    >
                      Read more{" "}
                      <span>
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
                      </span>
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      <TrendingBlogTab />
      <TrendingBlogMob />
    </>
  );
};

const TrendingBlogTab = () => {
  const [scope, animate] = useAnimate();
  const router = useRouter()

  /**
   * The `handleAnimation` function animates the resizing and styling of blog elements based on
   * specified blog IDs.
   * @param {any} blogIdToIncrease - The `blogIdToIncrease` parameter is the ID of the blog element that
   * you want to increase in size and show additional information for.
   * @param {any} blogIdToDecrease - The `blogIdToDecrease` parameter in the `handleAnimation` function
   * is used to specify the ID of the blog element that will be decreased in size and have certain
   * elements hidden during the animation.
   * @param {any} blogIdToDecrease2 - The `blogIdToDecrease2` parameter in the `handleAnimation`
   * function is used to specify the ID of a blog element that will undergo a decrease in size and other
   * animations as part of the animation sequence.
   */
  const handleAnimation = async (
    blogIdToIncrease: any,
    blogIdToDecrease: any,
    blogIdToDecrease2: any
  ) => {
    animate(
      `#${blogIdToDecrease} .blogHeading`,
      { fontSize: "20px" },
      { duration: 0.4, ease: "backInOut" }
    );
    animate(
      `#${blogIdToDecrease} .smallInfo`,
      { display: "none" },
      { duration: 0.2, ease: "backInOut" }
    );
    animate(
      `#${blogIdToDecrease} #readMoreBTN`,
      { display: "none" },
      { duration: 0.2, ease: "backInOut" }
    );

    animate(
      `#${blogIdToDecrease}`,
      { height: "25%" },
      { duration: 0.8, ease: "backInOut" }
    );

    animate(
      `#${blogIdToDecrease2} .blogHeading`,
      { fontSize: "20px" },
      { duration: 0.4, ease: "backInOut" }
    );
    animate(
      `#${blogIdToDecrease2} .smallInfo`,
      { display: "none" },
      { duration: 0.2, ease: "backInOut" }
    );
    animate(
      `#${blogIdToDecrease2} #readMoreBTN`,
      { display: "none" },
      { duration: 0.2, ease: "backInOut" }
    );

    animate(
      `#${blogIdToDecrease2}`,
      { height: "25%" },
      { duration: 0.8, ease: "backInOut" }
    );

    animate(
      `#${blogIdToIncrease}`,
      { height: "50%" },
      { duration: 0.8, ease: "backInOut", delay: 0.3 }
    );

    animate(
      `#${blogIdToIncrease} .blogHeading`,
      { fontSize: "24px" },
      { duration: 0.4, ease: "backInOut", delay: 0.5 }
    );
    animate(
      `#${blogIdToIncrease} .smallInfo`,
      { display: "inline" },
      { duration: 0.2, ease: "backInOut", delay: 0.5 }
    );
    animate(
      `#${blogIdToIncrease} #readMoreBTN`,
      { display: "flex" },
      { duration: 0.2, ease: "backInOut", delay: 0.5 }
    );
  };
  return (
    <>
      <div className="h-screen hidden md:flex 2xl:hidden xl:hidden lg:landscape:hidden lg:portrait:flex overflow-x-hidden relative">
        <div className="absolute w-full h-full top-0 left-0">
          <Image fill src={BlogBg2} alt="trending-blog-bg" loading="lazy" />
        </div>
        <div className="absolute top-0 left-0  w-full h-full ">
          <div className="w-[90%] h-full mx-auto flex flex-col justify-center items-center">
            <motion.h3
              initial={{ y: "50%", opacity: 0 }}
              whileInView={{ y: "0%", opacity: 1 }}
              transition={{ duration: 0.6, ease: "backInOut", delay: 0.7 }}
              className="AzonixFont font-[Azonix,Oxanium]  text-6xl font-[400] uppercase text-center my-[6%]"
            >
              Trending blogs
            </motion.h3>

            <motion.div
              ref={scope}
              initial={{ y: "80%", opacity: 0 }}
              whileInView={{ y: "0%", opacity: 1 }}
              transition={{ duration: 0.6, ease: "backInOut", delay: 1.2 }}
              className="h-[70%] w-full flex flex-col justify-center items-center gap-5"
            >
              <div
                id="blogBox1"
                onClick={() =>
                  handleAnimation("blogBox1", "blogBox2", "blogBox3")
                }
                className="relative h-[50%] w-full"
              >
                <Image
                  src={BlogHeroImg1}
                  fill
                  alt="trending-blog"
                  loading="lazy"
                  className="object-cover"
                />
                <div className="absolute w-full h-full top-0 left-0 bg-transparent flex justify-end items-end">
                  <div className=" h-[50%] w-full px-4 py-3 trendingBlogBg flex flex-col justify-end items-start">
                    <h3
                      id="blogHeading"
                      className="font-[Oxanium] blogHeading font-[700] text-2xl text-[#FFF]"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                    </h3>
                    <p
                      id="smallInfo"
                      className="font-[Oxanium] smallInfo font-[400] text-md my-2 text-[#FFF]"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vestibulum turpis justo, dapibus sed lorem sed, dictum
                      facilisis sem. Curabitur congue orci ipsum, ac viverra
                      lectus maximus vitae.
                    </p>
                    <motion.button
                      id="readMoreBTN"
                      onClick={() => router.push(`blog/1`)}
                      initial={{ y: "60%", opacity: 0 }}
                      whileInView={{ y: "0%", opacity: 1 }}
                      transition={{ duration: 0.6, ease: "circInOut" }}
                      className="flex justify-center items-center gap-3 cursor-pointer bg-[#000] rounded-full w-[30%] text-[#FFF] py-3 font-[Oxanium] font-[600] mt-2 "
                    >
                      Read more{" "}
                      <span>
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
                      </span>
                    </motion.button>
                  </div>
                </div>
              </div>

              <motion.div
                id="blogBox2"
                onClick={() =>
                  handleAnimation("blogBox2", "blogBox1", "blogBox3")
                }
                // initial={{ width: "100%" }}
                // whileTap={{ width: "50%" }}
                // transition={{ duration: 0.8, ease: "backInOut" }}
                className="relative h-[25%] w-full"
              >
                <Image
                  src={BlogHeroImg2}
                  fill
                  alt="trending-blog"
                  loading="lazy"
                  className="object-cover"
                />
                <div className="absolute w-full h-full top-0 left-0 bg-transparent flex justify-end items-end">
                  <div className=" h-[50%] w-full px-4 py-3 trendingBlogBg flex flex-col justify-end items-start">
                    <h3 className="font-[Oxanium] blogHeading font-[700] text-xl text-[#FFF] ">
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                    </h3>
                    <p className="font-[Oxanium] smallInfo font-[400] text-md my-2 text-[#FFF] hidden">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vestibulum turpis justo, dapibus sed lorem sed, dictum
                      facilisis sem. Curabitur congue orci ipsum, ac viverra
                      lectus maximus vitae.
                    </p>
                    <motion.button
                      id="readMoreBTN"
                      initial={{ y: "60%", opacity: 0 }}
                      whileInView={{ y: "0%", opacity: 1 }}
                      onClick={() => router.push(`blog/1`)}
                      transition={{ duration: 0.6, ease: "circInOut" }}
                      className=" justify-center items-center gap-3 cursor-pointer bg-[#000] rounded-full w-[30%] text-[#FFF] py-3 font-[Oxanium] font-[600] mt-2 hidden"
                    >
                      Read more{" "}
                      <span>
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
                      </span>
                    </motion.button>
                  </div>
                </div>
              </motion.div>

              <div
                onClick={() =>
                  handleAnimation("blogBox3", "blogBox1", "blogBox2")
                }
                id="blogBox3"
                className="relative h-[25%] w-full"
              >
                <Image
                  src={BlogHeroImg3}
                  fill
                  alt="trending-blog"
                  loading="lazy"
                  className="object-cover"
                />
                <div className="absolute w-full h-full top-0 left-0 bg-transparent flex justify-end items-end">
                  <div className=" h-[50%] w-full px-4 py-3 trendingBlogBg flex flex-col justify-end items-start">
                    <h3 className="font-[Oxanium] blogHeading font-[700] text-xl text-[#FFF]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                    </h3>
                    <p className="font-[Oxanium] smallInfo font-[400] text-md my-2 text-[#FFF] hidden">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vestibulum turpis justo, dapibus sed lorem sed, dictum
                      facilisis sem. Curabitur congue orci ipsum, ac viverra
                      lectus maximus vitae.
                    </p>
                    <motion.button
                      id="readMoreBTN"
                      initial={{ y: "60%", opacity: 0 }}
                      whileInView={{ y: "0%", opacity: 1 }}
                      onClick={() => router.push(`blog/1`)}
                      transition={{ duration: 0.6, ease: "circInOut" }}
                      className="hidden justify-center items-center gap-3 cursor-pointer bg-[#000] rounded-full w-[30%] text-[#FFF] py-3 font-[Oxanium] font-[600] mt-2 "
                    >
                      Read more{" "}
                      <span>
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
                      </span>
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

const TrendingBlogMob = () => {
  const [scope, animate] = useAnimate();
  const router = useRouter();

  /**
   * The `handleAnimation` function animates the resizing and styling of blog elements based on
   * specified blog IDs.
   * @param {any} blogIdToIncrease - The `blogIdToIncrease` parameter is the ID of the blog element that
   * you want to increase in size and show additional information for.
   * @param {any} blogIdToDecrease - The `blogIdToDecrease` parameter in the `handleAnimation` function
   * is used to specify the ID of the blog element that will be decreased in size and have certain
   * elements hidden during the animation.
   * @param {any} blogIdToDecrease2 - The `blogIdToDecrease2` parameter in the `handleAnimation`
   * function is used to specify the ID of a blog element that will undergo a decrease in size and other
   * animations as part of the animation sequence.
   */
  const handleAnimation = async (
    blogIdToIncrease: any,
    blogIdToDecrease: any,
    blogIdToDecrease2: any
  ) => {
    animate(
      `#${blogIdToDecrease} .blogHeading`,
      { fontSize: "20px" },
      { duration: 0.4, ease: "backInOut" }
    );
    animate(
      `#${blogIdToDecrease} .smallInfo`,
      { display: "none" },
      { duration: 0.2, ease: "backInOut" }
    );
    animate(
      `#${blogIdToDecrease} #readMoreBTN`,
      { display: "none" },
      { duration: 0.2, ease: "backInOut" }
    );

    animate(
      `#${blogIdToDecrease}`,
      { height: "20%" },
      { duration: 0.8, ease: "backInOut" }
    );

    animate(
      `#${blogIdToDecrease2} .blogHeading`,
      { fontSize: "16px" },
      { duration: 0.4, ease: "backInOut" }
    );
    animate(
      `#${blogIdToDecrease2} .smallInfo`,
      { display: "none" },
      { duration: 0.2, ease: "backInOut" }
    );
    animate(
      `#${blogIdToDecrease2} #readMoreBTN`,
      { display: "none" },
      { duration: 0.2, ease: "backInOut" }
    );

    animate(
      `#${blogIdToDecrease2}`,
      { height: "20%" },
      { duration: 0.8, ease: "backInOut" }
    );

    animate(
      `#${blogIdToIncrease}`,
      { height: "60%" },
      { duration: 0.8, ease: "backInOut", delay: 0.3 }
    );

    animate(
      `#${blogIdToIncrease} .blogHeading`,
      { fontSize: "20px" },
      { duration: 0.4, ease: "backInOut", delay: 0.5 }
    );
    animate(
      `#${blogIdToIncrease} .smallInfo`,
      { display: "inline" },
      { duration: 0.2, ease: "backInOut", delay: 0.5 }
    );
    animate(
      `#${blogIdToIncrease} #readMoreBTN`,
      { display: "flex" },
      { duration: 0.2, ease: "backInOut", delay: 0.5 }
    );
  };
  return (
    <>
      <div className="relative h-screen overflow-hidden flex justify-center items-center md:hidden lg:hidden xl:hidden 2xl:hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <Image fill src={BlogBg2} alt="blog-bg" />
        </div>
        <div className=" w-full flex justify-center items-center absolute top-0 left-0 h-full z-10">
          <div className="w-[90%] h-full flex flex-col justify-center items-center ">
            <motion.h3
              initial={{ y: "50%", opacity: 0 }}
              whileInView={{ y: "0%", opacity: 1 }}
              transition={{ duration: 0.6, ease: "backInOut", delay: 0.7 }}
              className="AzonixFont font-[Azonix,Oxanium]  text-4xl font-[400] uppercase text-center my-[6%]"
            >
              Trending blogs
            </motion.h3>

            <motion.div
              ref={scope}
              initial={{ y: "80%", opacity: 0 }}
              whileInView={{ y: "0%", opacity: 1 }}
              transition={{ duration: 0.6, ease: "backInOut", delay: 1.2 }}
              className="h-[80%] w-full flex flex-col justify-center items-center gap-2.5"
            >
              <div
                id="blogBox1"
                onClick={() =>
                  handleAnimation("blogBox1", "blogBox2", "blogBox3")
                }
                className="relative h-[60%] w-full"
              >
                <Image
                  src={BlogHeroImg1}
                  fill
                  alt="trending-blog"
                  loading="lazy"
                  className="object-cover"
                />
                <div className="absolute w-full h-full top-0 left-0 bg-transparent flex justify-end items-end">
                  <div className=" h-[50%] w-full px-2 py-3 trendingBlogBg flex flex-col justify-end items-start">
                    <h3
                      id="blogHeading"
                      className="font-[Oxanium] blogHeading font-[700] text-base text-[#FFF]"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                    </h3>
                    <p
                      id="smallInfo"
                      className="font-[Oxanium] smallInfo font-[400] text-sm my-1 text-[#FFF]"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vestibulum turpis justo, dapibus sed lorem sed, dictum
                      facilisis sem. Curabitur congue orci ipsum, ac viverra
                      lectus maximus vitae.
                    </p>
                    <motion.button
                      id="readMoreBTN"
                      onClick={() => router.push(`blog/1`)}
                      initial={{ y: "60%", opacity: 0 }}
                      whileInView={{ y: "0%", opacity: 1 }}
                      transition={{ duration: 0.6, ease: "circInOut" }}
                      className="flex justify-center items-center gap-3 cursor-pointer bg-[#000] rounded-full w-[50%] text-[#FFF] py-3 font-[Oxanium] font-[600] mt-1 "
                    >
                      Read more{" "}
                      <span>
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
                      </span>
                    </motion.button>
                  </div>
                </div>
              </div>

              <motion.div
                id="blogBox2"
                onClick={() =>
                  handleAnimation("blogBox2", "blogBox1", "blogBox3")
                }
                // initial={{ width: "100%" }}
                // whileTap={{ width: "50%" }}
                // transition={{ duration: 0.8, ease: "backInOut" }}
                className="relative h-[20%] w-full"
              >
                <Image
                  src={BlogHeroImg2}
                  fill
                  alt="trending-blog"
                  loading="lazy"
                  className="object-cover"
                />
                <div className="absolute w-full h-full top-0 left-0 bg-transparent flex justify-end items-end">
                  <div className=" h-[50%] w-full px-2 py-3 trendingBlogBg flex flex-col justify-end items-start">
                    <h3 className="font-[Oxanium] blogHeading font-[700] text-base text-[#FFF] ">
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                    </h3>
                    <p className="font-[Oxanium] smallInfo font-[400] text-sm my-1 text-[#FFF] hidden">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vestibulum turpis justo, dapibus sed lorem sed, dictum
                      facilisis sem. Curabitur congue orci ipsum, ac viverra
                      lectus maximus vitae.
                    </p>
                    <motion.button
                      id="readMoreBTN"
                      onClick={() => router.push(`blog/2`)}
                      initial={{ y: "60%", opacity: 0 }}
                      whileInView={{ y: "0%", opacity: 1 }}
                      transition={{ duration: 0.6, ease: "circInOut" }}
                      className=" justify-center items-center gap-3 cursor-pointer bg-[#000] rounded-full w-[50%] text-[#FFF] py-3 font-[Oxanium] font-[600] mt-1 hidden"
                    >
                      Read more{" "}
                      <span>
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
                      </span>
                    </motion.button>
                  </div>
                </div>
              </motion.div>

              <div
                onClick={() =>
                  handleAnimation("blogBox3", "blogBox1", "blogBox2")
                }
                id="blogBox3"
                className="relative h-[20%] w-full"
              >
                <Image
                  src={BlogHeroImg3}
                  fill
                  alt="trending-blog"
                  loading="lazy"
                  className="object-cover"
                />
                <div className="absolute w-full h-full top-0 left-0 bg-transparent flex justify-end items-end">
                  <div className=" h-[50%] w-full px-2 py-3 trendingBlogBg flex flex-col justify-end items-start">
                    <h3 className="font-[Oxanium] blogHeading font-[700] text-base text-[#FFF]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                    </h3>
                    <p className="font-[Oxanium] smallInfo font-[400] text-sm my-1 text-[#FFF] hidden">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vestibulum turpis justo, dapibus sed lorem sed, dictum
                      facilisis sem. Curabitur congue orci ipsum, ac viverra
                      lectus maximus vitae.
                    </p>
                    <motion.button
                      id="readMoreBTN"
                      onClick={() => router.push(`blog/3`)}
                      initial={{ y: "60%", opacity: 0 }}
                      whileInView={{ y: "0%", opacity: 1 }}
                      transition={{ duration: 0.6, ease: "circInOut" }}
                      className="hidden justify-center items-center gap-3 cursor-pointer bg-[#000] rounded-full w-[50%] text-[#FFF] py-3 font-[Oxanium] font-[600] mt-1 "
                    >
                      Read more{" "}
                      <span>
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
                      </span>
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};
