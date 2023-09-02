import React, { useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Hamburger({ setActiveIndex, activeIndex }) {

      let liArray = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div>
      <div className="mb-10">
        <ul className="flex flex-col gap-2"> 
          <li className="bg-red-500 w-8 h-1 "></li>
          <li className="bg-red-500 w-8 h-1 "></li>
          <li className="bg-red-500 w-8 h-1 "></li>
        </ul>
      </div>

    <div className='bg-white flex flex-col w-[100%] h-[350px] items-center'>
       <span className='text-red-500 text-3xl float-right'> &#x2715; </span>
       <ul className='flex flex-col gap-[15px]'>
        {liArray.map((index) => (
            <li
                key={index}
                className={`hover:cursor-pointer ${styles.round} ${
                activeIndex === index ? styles.active : ''
                } animate__animated ${
                activeIndex === index ? 'animate__bounce' : '' // Change 'animate__bounce' to your preferred animation class
                }`}
                onClick={() => handleLiClick(index)}
            ></li>
            ))}
        </ul>
    </div>
    
    </div>
  )
}
