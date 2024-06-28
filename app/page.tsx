import Image from "next/image";
import Navbar from '../components/Navbar/page'
import Hero from './../components/Hero/page'
import Footer from './../components/Footer/page'
import styles from './main.module.css'
import Button from '../components/Button/page'

export default function Home() {
  return (
    <>
    <Navbar/>
      <Hero />
      <main>
        <div className={`w-full mt-3 ${styles.student_banner}`}>
        <img src="/student-banner-1.png" alt="collegestudent" width={100} height={100}/>
        <div className="my-6">
        <Button name="Shop" btnStyle="secondary"/>
        </div>
        </div>
        <div className={`${styles.phone_fam} text-center mt-3`}>
          <h3 className="text-3xl md:text-5xl font-bold pt-10">iPhone</h3>
          <h6 className="text-[18px] md:text-2xl font-normal">Our most powerful cameras yet. <br/> Ultrafast chips. And USB-C</h6>
          <div className='flex justify-center gap-4 mt-4'>
            <Button name="Learn more" btnStyle="primary"/>
            <Button name="Shop iPhone" btnStyle="secondary"/>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
