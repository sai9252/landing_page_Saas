"use client";
import ArrowRight from "@/assets/arrow-right.svg";
import starImage from "@/assets/star.png";
import springImage from "@/assets/spring.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";


export const CallToAction = () => {
  const sectionRef = useRef(null);
  const {scrollYProgress} = useScroll({
    target: sectionRef,
    offset:["start end","end start"],
  });

  const translteY = useTransform(scrollYProgress, [0,1], [150,-150]);

  return (
    <section className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="container">
        <div className="section-heading relative">
        <h2 className="section-title">Sign up for free</h2>
        <p className="section-info mt-5 ">
          Celebrate the joy of accomplishment with an app designed to track your
          progress and motivate your efforts.
        </p>
        <motion.img src={starImage.src} alt="Star Image" width={360} className="absolute  hidden md:block -left-[350px] -top-[137px]"
        style={{
          translateY: translteY,
        }}  />
        <motion.img src={springImage.src} alt="Spring Image" width={360} className="absolute  hidden md:block -right-[331px] -top-[19px]" 
        style={{
          translateY: translteY,
        }} />
        </div>
        <div className="flex gap-2 mt-10 justify-center">
          <button className="btn btn-primary">Learn for free</button>
          <button className="btn btn-text gap-1">
            <span>Learn more</span>
            <ArrowRight className="h-5 w-5"/>
          </button>
        </div>
      </div>
    </section>
  );
};
