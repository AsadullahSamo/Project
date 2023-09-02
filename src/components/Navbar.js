import React from 'react';
import styles from '../styles/Home.module.css';
import { useState, useEffect } from 'react';
import 'animate.css';

export default function Navbar({ setActiveIndex, activeIndex }) {

  
  const handleLiClick = (index) => {
    setActiveIndex(index);
  };

  const handleKeyUp = (event) => {
    // Check if the event key matches a specific key you want to handle
    
    if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
      
      // Handle the keyUp event, e.g., change the active index
      if (event.key === 'ArrowUp') {
        setActiveIndex((prevIndex) => Math.max(prevIndex - 1, 0));
      } else if (event.key === 'ArrowDown') {
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


  let liArray = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  // fixed top-0 right-5 
  return (
    <span className='fixed top-0 right-5  h-full flex flex-col justify-center'>
      <ul className={`mt-[20%] -mr-5 bg-white w-10 h-64 flex items-center gap-[15px] flex-col justify-center`}>
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
    </span>
  );
}
