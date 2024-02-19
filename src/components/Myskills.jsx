import React, { useEffect } from 'react';
import styles from '../style';
import { code, css, expressJs, html, jquery, js, mysql, nodeJs, php } from '../assets';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Myskills = () => {
  useEffect(() => {
    Aos.init();
  },[]);
  return (
    <div id='mySkills' className={`${styles.paddingX} py-1 relative`}>
      <h2 class="mt-5 text-xl text-gray-800" data-aos='fade-left'>MY SKILLS</h2>
      <img src={code} class="absolute w-7 top-6 left-[120px] smII:left-[140px] xl:left-[160px]" data-aos='fade-left'/>
      <div className="mt-5 flex flex-wrap items-center justify-between">
        <img src={html} alt="html" class="inline-block w-[100px] m-2" data-aos='fade-left'/>
        <img src={css} alt="html" class="inline-block w-[100px] m-2" data-aos='fade-left' data-aos-duration='1000'/>
        <img src={js} alt="html" class="inline-block w-[100px] m-2" data-aos='fade-left' data-aos-duration='1400'/>
        <img src={mysql} alt="html" class="inline-block w-[100px] m-2" data-aos='fade-left' data-aos-duration='1800'/>
        <img src={php} alt="html" class="inline-block w-[100px] m-2" data-aos='fade-left' data-aos-duration='2200'/>
        <img src={nodeJs} alt="html" class="inline-block w-[100px] m-2" data-aos='fade-left' data-aos-duration='2500'/>
        <img src={expressJs} alt="html" class="inline-block w-[100px] m-2" data-aos='fade-left' data-aos-duration='2700'/>
        <img src={jquery} alt="html" class="inline-block w-[100px] m-2" data-aos='fade-left' data-aos-duration='3000'/>
      </div>
    </div>
  )
}

export default Myskills