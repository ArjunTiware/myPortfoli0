import React, { useEffect } from 'react';
import styles from '../style';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Myeducation = () => {
  useEffect(()=>{
    Aos.init({
      once: true,
      mirror: false
    });
  },[]);
  return (
    <div id='myEducation' className={`sm:${styles.paddingX} py-1 relative`}>
      <h2 class="mt-5 text-2xl"data-aos='fade-left' >MY EDUCATION</h2>
      <div className='mt-2 lg:ml-[80px]'>
        <p data-aos='fade-left' data-aos-duration='200'><span>2020<br />HIGHSCHOOL</span>FROM<br />G.I.C BAJAUNIYA HALDU KOTABAGH NTL.</p><hr />
      </div>
      <div className='lg:ml-[80px]'>
        <p data-aos='fade-left' data-aos-duration='400'><span>2022<br />INTERMIDIET</span>FROM<br />M.S.G.I.C KOTABAGH NTL.</p><hr />
      </div>
      <div className='lg:ml-[80px]'>
        <p data-aos='fade-left' data-aos-duration='400'><span>2023</span><br />1 YEAR FULL STACK WEB DEVLOPMENT COURSE<br />FROM EXTRABYTE ACADEMY HLD. NTL.</p><hr />
      </div>
      <div className='lg:ml-[80px]'>
        <p data-aos='fade-left' data-aos-delay='400'><span>2023-2026</span><br />PURSUING B.C.A FROM I.G.N.O.U.</p><hr />
      </div>
    </div>
  )
}

export default Myeducation
