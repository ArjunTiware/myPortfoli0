import React from 'react';
import styles from '../style';
import { arrowUpRight, projectI, projectII, projectIII } from '../assets';

const Projects = () => {
  return (
    <section id='projects' className={`${styles.paddingX}`}>
      <div id="projects" class="py-2">
        <div class="max-w-screen-lg mx-auto py-2 flex flex-col justify-center w-full">
          <div>
            <h1 class="text-4xl font-semibold py-2">MY PROJECTS</h1>
          </div>
          <div class="w-full grid grid-cols-1 sm:grid-cols-3 gap-8 text-center py-12 sm:px-0 mt-6">
            <div class="block rounded-lg bg-white shadow-2xl" data-aos='zoom-in' data-aos-duration='1000'>
              <img class="rounded-t-lg h-36 w-full object-cover" src={projectI} alt="" />
              <div class="p-4">
                <h5 class="mb-2 text-lg font-medium leading-tight text-black">Hoo Bank</h5>
                <p class="mb-2 text-sm text-gray-800">Hoo Bank is only a template to know how banking website look like and this is made by reactjs, tailwind css & vite.</p>
                <a href="https://hoo-bankk.netlify.app/" target='_blank'>
                  <button type="button"
                    class="text-white bg-gradient-to-r focus:outline-none bg-black font-medium rounded-lg text-sm px-4 py-2 w-[100px] text-left relative"> Visit Site <img src={arrowUpRight} className='absolute bottom-[10px] right-3' /></button>
                </a>
              </div>
            </div>
            <div class="block rounded-lg bg-white shadow-2xl" data-aos='zoom-in' data-aos-duration='2000'>
              <img class="rounded-t-lg h-36 w-full object-cover" src={projectII} alt="" />
              <div class="p-4">
                <h5 class="mb-2 text-lg font-medium leading-tight text-black">My Portfolio</h5>
                <p class="mb-2 text-sm text-gray-800">My second project personal portfolio website based on reactjs, tailwind CSS & vite consist basic information about me.</p>
                <a href="/" target='_blank'>
                  <button type="button"
                    class="text-white bg-gradient-to-r focus:outline-none bg-black font-medium rounded-lg text-sm px-4 py-2 w-[100px] text-left relative"> Visit Site <img src={arrowUpRight} className='absolute bottom-[10px] right-3' /></button>
                </a>
              </div>
            </div>
            <div class="block rounded-lg bg-white shadow-2xl" data-aos='zoom-in' data-aos-duration='3000'>
              <img class="rounded-t-lg h-36 w-full object-cover" src={projectIII} alt="" />
              <div class="p-4">
                <h5 class="mb-2 text-lg font-medium leading-tight text-black">Weather App</h5>
                <p class="mb-2 text-sm text-gray-800">My third project is Weather webAPP based on HTML, CSS & JavaScript. It made by openWeather API.</p>
                <a href="https://weather-by-f.netlify.app/" target='_blank'>
                  <button type="button"
                    class="text-white bg-gradient-to-r focus:outline-none bg-black font-medium rounded-lg text-sm px-4 py-2 w-[100px] text-left relative"> Visit Site <img src={arrowUpRight} className='absolute bottom-[10px] right-3' /></button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
