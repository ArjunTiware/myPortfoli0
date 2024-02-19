import React, { useEffect } from 'react';
import styles from '../style';
import { mongodb, nextJs, radix, reactJs, tailwindCss, vite } from '../assets';
import Aos from 'aos';
 import 'aos/dist/aos.css';



const Workingon = () => {
  useEffect(() => {
    Aos.init();
  },[]);
  return (
    <div id='workingOn' className={`${styles.paddingX} py-1 relative`}>
      <h2 class="mt-5 text-2xl text-gray-800">Wonking on...</h2>
      <div className="mt-5 flex flex-wrap items-center">
        <img src={reactJs} alt="html" class="inline-block m-2 w-[100px] high:w-[120px]" data-aos='fade-left' />
        <img src={nextJs} alt="html" class="inline-block m-2 w-[100px] high:w-[120px]" data-aos='fade-left' data-aos-duration='1000'/>
        <img src={tailwindCss} alt="html" class="inline-block m-2 w-[100px] high:w-[120px]" data-aos='fade-left' data-aos-duration='1400'/>
        <img src={mongodb} alt="html" class="inline-block m-2 w-[100px] high:w-[120px]" data-aos='fade-left' data-aos-duration='1800'/>
        <img src={radix} alt="html" class="inline-block m-2 w-[100px] high:w-[120px]" data-aos='fade-left' data-aos-duration='2200'/>
        <img src={vite} alt="html" class="inline-block m-2 w-[100px] high:w-[120px]" data-aos='fade-left' data-aos-duration='2600'/>
      </div>
    </div>
  )
}

export default Workingon