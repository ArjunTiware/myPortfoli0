import React, { useEffect } from 'react';
import styles from '../style';
import { hero } from '../assets';
import Aos from 'aos';
import 'aos/dist/aos.css';


const About = () => {
  useEffect(() => {
    Aos.init();
  },[]);
  return (
    <section id='about' className={`flex md:flex-row flex-col -mx-6 sm:${styles.paddingX}`}>
      <div className='my-2 low:mx-2'>
        <h1 class='text-4xl text-black font-semibold' data-aos='fade-up'>ABOUT ME</h1>
        <div className='float-left'>
          <img src={hero}
            className='w-full md:w-[400px]'
            data-aos='fade-up'
          />
        </div>

        <div className='mt-5'>
          <p class="text-gray-500 text-lg text-justify" data-aos='fade-left'><span class="text-gray-800 text-[20px]">HI THERE, I AM
            ARJUN TIWARI,</span> a passionate and dedicated Web Developer and Frontend
            Developer with
            a strong commitment to crafting exceptional digital experiences. With a blend of creativity,
            technical expertise, and a deep understanding of modern web technologies, I thrive on
            transforming ideas into functional and user-friendly web applications.</p>
          <h4 class="text-xl mt-2" data-aos='fade-left' data-aos-duration="1200">Technical Expertise</h4>
          <p class="text-gray-500 text-lg text-justify" data-aos='fade-left' data-aos-duration="1700">As a Web Developer, I have honed my skills in
            front-end and back-end development, ensuring that
            the websites and applications I create are not only visually appealing but also perform
            seamlessly under the hood. My proficiency includes HTML, CSS, JavaScript,
            Reactjs, and more. I am well-versed in building responsive and mobile-friendly interfaces to
            provide users with a consistent experience across various devices.</p>
          <div className='mt-4'>
            <h4 class="text-xl" data-aos='fade-left' data-aos-duration="2200">Continuous Learning</h4>
            <p class="text-gray-500 text-lg text-justify" data-aos='fade-left' data-aos-duration="2400">Technology is constantly evolving, and I make it a
              priority to stay up-to-date with the latest
              trends and advancements in web development and API design. This continuous learning allows me to
              leverage cutting-edge tools and methodologies to deliver projects that are at the forefront of
              the industry.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
