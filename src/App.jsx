import styles from './style';
import 'animate.css';

import { Navbar, Hero, About, Projects, Gallery, Contact, Footer, Myskills, Workingon, Myeducation, BackToTop } from './components';

const App = () => (
  <div className='w-full overflow-hidden scroll-smooth'>
    <div className='bg-slate-200 rounded-[20px] m-2'>
      <div className={`!px-0 ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`mt-10 lg:mt-20 ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
    </div>

    <div className={`${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <div className='bg-slate-200 m-2 rounded-[20px]'><About /></div>
        <div className='bg-slate-200 m-2 rounded-[20px]'><Myskills /> <Workingon /></div>
        <div className='bg-slate-200 m-2 rounded-[20px]'><Myeducation /></div>
        <div className='bg-slate-200 m-2 rounded-[20px]'><Projects /></div>
        <div className='bg-slate-200 m-2 rounded-[20px]'><Gallery /></div>
        <div className='bg-slate-200 m-2 rounded-[20px]'><Contact /></div>
        <div className='bg-slate-200'><Footer /></div>
        <div className='fixed w-12 h-12 bottom-2 right-7'>< BackToTop /></div>
      </div>
    </div>

  </div>
)

export default App
