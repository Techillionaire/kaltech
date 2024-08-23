import React from "react";
import { Footer } from "@/components/common/Footers/Footer";
import { Navbar } from "@/components/common/Navbar";
import { useParams } from "next/navigation";

import { motion } from "framer-motion";

import BlogImg3 from "../../assets/images/BlogImg3.png";
import BlogImg4 from "../../assets/images/BlogImg4.png";
import Image from "next/image";
import Head from "next/head";

const BlogID = () => {
  const params = useParams<{ id: string }>();
  console.log(params?.id);
  return (
    <>
      <Head>
        <link rel="icon" href="/KaltechFavIcon.png" />
        <title>Kaltech Consultancy - {params?.id}</title>
      </Head>
      <Navbar />
      <div className="">
        <div className="h-screen flex justify-center items-center">
          <div className="w-[80%] h-[90%] flex flex-col justify-center items-center">
            <motion.h1
              initial={{ x: "-100%" }}
              whileInView={{ x: "0%" }}
              transition={{ duration: 0.6, ease: "circInOut", delay: 0.1 }}
              className="uppercase AzonixFont text-center font-[Azonix,Oxanium] font-[400] text-7xl"
            >
              informative blogs for our digital creatives.
            </motion.h1>
            <motion.div
              initial={{ x: "-100%" }}
              whileInView={{ x: "0%" }}
              transition={{ duration: 0.6, ease: "circInOut", delay: 0.1 }}
              className="flex justify-center items-center gap-3 w-[40%] mx-auto my-6"
            >
              <h4 className="  text-center font-[Oxanium] font-[600] text-lg text-[#000000]/60">
                May 02,2024
              </h4>
              <span className="h-1 w-[5%] bg-[#000000]/60 rounded-full" />
              <h4 className="  text-center font-[Oxanium] font-[600] text-lg text-[#000000]/60">
                By David Chappel
              </h4>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: "60%" }}
              whileInView={{ opacity: 1, y: "0%" }}
              transition={{ duration: 0.5, ease: "backInOut" }}
              className="h-[60%] relative w-full"
            >
              <Image src={BlogImg3} fill loading="lazy" alt="blog-img" />
            </motion.div>
          </div>
        </div>

        <div className=" flex justify-center items-center">
          <div className="w-[80%]">
            <h4 className="font-[Oxanium] font-[700] text-3xl text-[#000000] my-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis nulla, explicabo temporibus rerum laborum laudantium
              quam aperiam accusantium minus nostrum voluptatibus sapiente,
              sequi officia quod unde cumque, odio nisi accusamus?
            </h4>

            <p className="text-lg font-[Oxanium] font-[400] my-5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non
              culpa tempore voluptas et dolor facere possimus temporibus dolorem
              iusto fugiat earum, error amet perspiciatis assumenda! Doloribus
              dignissimos iste harum corporis? Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Non culpa tempore voluptas et dolor
              facere possimus temporibus dolorem iusto fugiat earum, error amet
              perspiciatis assumenda! Doloribus dignissimos iste harum corporis?
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non
              culpa tempore voluptas et dolor facere possimus temporibus dolorem
              iusto fugiat earum, error amet perspiciatis assumenda! Doloribus
              dignissimos iste harum corporis? Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Non culpa tempore voluptas et dolor
              facere possimus temporibus dolorem iusto fugiat earum, error amet
              perspiciatis assumenda! Doloribus dignissimos iste harum corporis?
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non
              culpa tempore voluptas et dolor facere possimus temporibus dolorem
              iusto fugiat earum, error amet perspiciatis assumenda! Doloribus
              dignissimos iste harum corporis?
            </p>

            <motion.div
              initial={{ opacity: 0, y: "60%" }}
              whileInView={{ opacity: 1, y: "0%" }}
              transition={{ duration: 0.5, ease: "backInOut" }}
              className="h-[500px] relative w-full"
            >
              <Image src={BlogImg4} fill loading="lazy" alt="blog-img" />
            </motion.div>

            <h4 className="font-[Oxanium] font-[700] text-3xl text-[#000000] my-4">
              Lorem, ipsum dolor sit
            </h4>

            <p className="text-lg font-[Oxanium] font-[400] my-5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non
              culpa tempore voluptas et dolor facere possimus temporibus dolorem
              iusto fugiat earum, error amet perspiciatis assumenda! Doloribus
              dignissimos iste harum corporis? Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Non culpa tempore voluptas et dolor
              facere possimus temporibus dolorem iusto fugiat earum, error amet
              perspiciatis assumenda! Doloribus dignissimos iste harum corporis?
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non
              culpa tempore voluptas et dolor facere possimus temporibus dolorem
              iusto fugiat earum, error amet perspiciatis assumenda! Doloribus
              dignissimos iste harum corporis? Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Non culpa tempore voluptas et dolor
              facere possimus temporibus dolorem iusto fugiat earum, error amet
              perspiciatis assumenda! Doloribus dignissimos iste harum corporis?
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non
              culpa tempore voluptas et dolor facere possimus temporibus dolorem
              iusto fugiat earum, error amet perspiciatis assumenda! Doloribus
              dignissimos iste harum corporis?
            </p>
            <p className="text-lg font-[Oxanium] font-[400] my-5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non
              culpa tempore voluptas et dolor facere possimus temporibus dolorem
              iusto fugiat earum, error amet perspiciatis assumenda! Doloribus
              dignissimos iste harum corporis? Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Non culpa tempore voluptas et dolor
              facere possimus temporibus dolorem iusto fugiat earum, error amet
              perspiciatis assumenda! Doloribus dignissimos iste harum corporis?
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non
              culpa tempore voluptas et dolor facere possimus temporibus dolorem
              iusto fugiat earum, error amet perspiciatis assumenda! Doloribus
              dignissimos iste harum corporis? Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Non culpa tempore voluptas et dolor
              facere possimus temporibus dolorem iusto fugiat earum, error amet
              perspiciatis assumenda! Doloribus dignissimos iste harum corporis?
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non
              culpa tempore voluptas et dolor facere possimus temporibus dolorem
              iusto fugiat earum, error amet perspiciatis assumenda! Doloribus
              dignissimos iste harum corporis?
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogID;
