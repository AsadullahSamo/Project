import React, { useState, useEffect } from 'react';
import 'material-icons/iconfont/material-icons.css'
import style from './VerticalMenu.module.css';

export default function HorizontalMenu({ setActiveIndex, activeIndex, setMenuMargin }) {
  const [menuVisible, setMenuVisible] = useState(false);

  let liArray = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  const liTextArray = ["Rat Park", "The Non Pro", "Take Fountain", "Freaks of Industry", "Rat Parks Book", "Excerpts", "Podcast", "Rat Park Shirt", "Adam Novak"];

  
  const handleLiClick = (index) => {
    setActiveIndex(index);
  };

  const handleKeyUp = (event) => {
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
      if (event.key === 'ArrowLeft') {
        setActiveIndex((prevIndex) => Math.max(prevIndex - 1, 0));
      } else if (event.key === 'ArrowRight') {
        setActiveIndex((prevIndex) => Math.min(prevIndex + 1, liArray.length - 1));
      }
    }
  };

  useEffect(() => {
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return (
    // <div className='bg-white flex w-[100%] h-[35px] justify-center'>
      
      <ul
        className={`flex gap-[1px] justify-center bg-[#c5c1c1] text-black w-[100%]`}
      >
        {liArray.map((index) => (
          <li
            key={index}
            className={`px-[20px] py-[15px] hover:cursor-pointer hover:bg-gray-500 hover:text-white transition-all duration-500 
            ${ activeIndex === index ? style.activeVertical : '' } animate__animated text-[15px]`}
            onClick={() => handleLiClick(index)}
          >
            {liTextArray[index]}
          </li>
        ))}
      </ul>
    // </div>

  );
}
