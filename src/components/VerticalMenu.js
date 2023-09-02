import React from 'react'
import styles from '../styles/Home.module.css'
import { useEffect } from 'react';
export default function VerticalMenu({ setActiveIndex, activeIndex }) {

    let liArray = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    const handleLiClick = (index) => {
        setActiveIndex(index);
    };

    const handleKeyUp = (event) => {
    // Check if the event key matches a specific key you want to handle
    
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
      
      // Handle the keyUp event, e.g., change the active index
      if (event.key === 'ArrowLeft') {
        setActiveIndex((prevIndex) => Math.max(prevIndex - 1, 0));
      } else if (event.key === 'ArrowRight') {
        setActiveIndex((prevIndex) => Math.min(prevIndex + 1, liArray.length - 1));
      }
    }
    }
   useEffect(() => {
    // Attach the event listeners when the component mounts
    window.addEventListener('keyup', handleKeyUp);

    window.addEventListener("keyup", (e) => {
      e.preventDefault();
    })

    window.addEventListener("keydown", (e) => {
      e.preventDefault();
    })
    // Remove the event listeners when the component unmounts
    return () => {
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []); // The empty dependency array ensures this effect runs only once

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
