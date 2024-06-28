import React from 'react'
import Image from 'next/image'
import { FaSearch,FaShoppingBag,FaApple   } from "react-icons/fa";

const page = () => {
  return (
    <nav className='bg-black/75 text-slate-200 p-4 flex justify-between md:justify-center gap-8 items-center sticky top-0'>
        <div className="left">
            <FaApple className='text-slate-100'/>
        </div>
        <div className="menu hidden md:flex gap-8 items-center text-[12px]">
            <a href="">Store</a>
            <a href="">Mac</a>
            <a href="">iPad</a>
            <a href="">iPhone</a>
            <a href="">Watch</a>
            <a href="">Vision</a>
            <a href="">AirPods</a>
            <a href="">TV & Home</a>
            <a href="">Entertainment</a>
            <a href="">Accessories</a>
            <a href="">Support</a>
        </div>
        <div className="right flex gap-8 items-center">
        <FaSearch className='text-slate-100 text-[14px]'/>
        <FaShoppingBag className='text-slate-100 text-[14px]'/>
        </div>
    </nav>
  )
}

export default page