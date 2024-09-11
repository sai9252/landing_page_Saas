"use client";
import acmelogo from "@/assets/logo-acme.png";
import quantumlogo from "@/assets/logo-quantum.png";
import echologo from "@/assets/logo-echo.png";
import celestiallogo from "@/assets/logo-celestial.png";
import pulselogo from "@/assets/logo-pulse.png";
import apexlogo from "@/assets/logo-apex.png";
import Image from "next/image";
import { motion } from "framer-motion";



export const LogoTicker = () => {
  return (
    <div className="py-8 md:py-12 bg-white">
      <div className="container">
        <div className=" flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div
          className="flex gap-14 flex-none pr-14"
          animate = {{
            translateX: '-50%',
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
            repeatType: "loop",
          }}
          >
            <Image src={acmelogo} alt="Acme logo" className="logo-ticker-image" />
            <Image src={quantumlogo} alt="Quantum logo" className="logo-ticker-image" />
            <Image src={echologo} alt="Echo logo" className="logo-ticker-image" />
            <Image src={celestiallogo} alt="Celestial logo" className="logo-ticker-image" />
            <Image src={pulselogo} alt="Pulse logo" className="logo-ticker-image" />
            <Image src={apexlogo} alt="Apex logo" className="logo-ticker-image" />

            {/*second set of images */}

            <Image src={acmelogo} alt="Acme logo" className="logo-ticker-image" />
            <Image src={quantumlogo} alt="Quantum logo" className="logo-ticker-image" />
            <Image src={echologo} alt="Echo logo" className="logo-ticker-image" />
            <Image src={celestiallogo} alt="Celestial logo" className="logo-ticker-image" />
            <Image src={pulselogo} alt="Pulse logo" className="logo-ticker-image" />
            <Image src={apexlogo} alt="Apex logo" className="logo-ticker-image" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
