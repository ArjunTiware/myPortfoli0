import React from "react";
import { socialMedia } from "../constants";
import styles from "../style";
import { hero } from "../assets";

const Hero = () => {
  return (
    <section
      id="hero"
      className={`flex relative md:flex-row flex-col ${styles.paddingX}`}
    >
      <div
        className={`flex-1 flex-col low:px-0 ${styles.flexStart} ${styles.paddingX}`}
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
          <span className="tracking-[8px] high:tracking-[14px]">
            based in RO
          </span>
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

        <div className="flex flex-row md:mt-0 sm:py-4 py-6">
          <ul class="wrapper">
            <a href="https://github.com/ArjunTiware" target="_blank">
              <li class="icon github">
                <span class="tooltip">Github</span>
                <span>
                  <i class="fa-brands fa-github"></i>
                </span>
              </li>
            </a>
            <a href="https://www.linkedin.com/in/tiwariarjun/" target="_blank">
              <li class="icon linkedin">
                <span class="tooltip">Linkedin</span>
                <span>
                  <i class="fa-brands fa-linkedin-in"></i>
                </span>
              </li>
            </a>
            <a href="https://codepen.io/Arjun-" target="_blank">
              <li class="icon codepen">
                <span class="tooltip">Codepen</span>
                <span>
                  <i class="fa-brands fa-codepen"></i>
                </span>
              </li>
            </a>
            <a
              href="https://api.whatsapp.com/send/?phone=7579294829&text&type=phone_number&app_absent=0"
              target="_blank"
            >
              <li class="icon whatsapp">
                <span class="tooltip">Whatsapp</span>
                <span>
                  <i class="fa-brands fa-whatsapp"></i>
                </span>
              </li>
            </a>
            <a href="mailto:at8949681@gmail.com" target="_blank">
              <li class="icon mail">
                <span class="tooltip">Mail</span>
                <span>
                  <i class="fa-solid fa-envelope"></i>
                </span>
              </li>
            </a>
          </ul>
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
