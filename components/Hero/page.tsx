import React from 'react'
import styles from './hero.module.css'
import Button from '../Button/page'

const page = () => {
  return (
    <header className={styles.background_img}>
       <div className='text-white text-center'>
       <h1 className='text-[2.1rem] md:text-[3.5rem] font-bold pt-[3.2rem] leading-10'>iPad Pro</h1>
       <h3 className='text-[1.1rem] md:text-[1.8rem] font-normal mt-2'>Unbeleivably thin. Incredibly powerful</h3>
       <div className='flex justify-center gap-4 mt-4'>
        <Button name="Learn more" btnStyle="primary"/>
        <Button name="Buy" btnStyle="secondary"/>
       </div>
       </div>
        
    </header>
  )
}

export default page