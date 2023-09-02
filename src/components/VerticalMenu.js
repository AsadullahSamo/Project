import React from 'react'
import styles from '../styles/Home.module.css'
export default function VerticalMenu({ setActiveIndex, activeIndex }) {

    let liArray = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    const handleLiClick = (index) => {
        setActiveIndex(index);
    };

  return (
    
    <div className='bg-white flex flex-col w-[100%] h-[35px] items-center'>
    <ul className='flex gap-[15px]'>
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
  )
}
