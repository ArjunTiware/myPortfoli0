import React from "react";
import { socialMedia } from "../constants";
import styles from "../style";
import { hero } from "../assets";

const Hero = () => {
  return (
    <section
      id="hero"
      className={`flex relative md:flex-row flex-col md:${styles.paddingX}`}
    >
      <div
        className={`flex-1 flex-col low:px-0 ${styles.flexStart} md:${styles.paddingX}`}
      >
        <p className={`text-gray-800 tracking-[10px] ${styles.bounceInLeft}`}>
          HI, I AM ARJUN
        </p>
        <h1
          className={`text-black text-4xl high:text-5xl font-semibold mt-2 leading-[50px] ${styles.zoomIn}`}
        >
          <span className="tracking-[10px]">Beginner</span>
          <br />
          <span className="tracking-[2px]">Web Devloper</span>
          <br />
          <span className="tracking-[8px] high:tracking-[14px]">based in RO</span>
        </h1>
        <p
          className={`text-gray-500 text-[18px] text-justify leading-[25px] mt-2 sm:text-xl ${styles.zoomIn}`}
        >
          I am dedicated web developer with 1+ years of experience. I have a
          <br className="flex low:hidden md:block" />
          passion for creating beautiful and functional websites. I am
          <br className="flex low:hidden md:block" />
          <span> currently</span> working with React, Node, and MongoDB.
        </p>
        <div className="button mt-5">
          <a href="#contact">
            <button
              className={`inline tracking-widest text-[18px] bg-black text-white px-2 py-1 rounded-[20px] ${styles.bounceInLeft}`}
            >
              Contact me
            </button>
          </a>
        </div>
        <div className="flex flex-row md:mt-0 sm:py-4 py-6">
          {socialMedia.map((social, index) => (
            <img
              key={social.id}
              src={social.icon}
              alt={social.id}
              className={`w-[25px] high:w-[30px] h-[25px] high:h-[30px] duration-300 rounded-full object-contain cursor-pointer ${
                styles.bounceInLeft
              } ${index !== socialMedia.length - 1 ? "mr-6" : "mr-0"}`}
              onClick={() => window.open(social.link)}
            />
          ))}
        </div>
      </div>
      <div>
        <img
          src={hero}
          alt="hero"
          className={`xl:w-[500px] hidden lg:block lg:right-[-30px] lg:w-[450px] lg:bottom-8 absolute xl:bottom-5 xl:right-20 ${styles.zoomIn}`}
        />
      </div>
    </section>
  );
};

export default Hero;
