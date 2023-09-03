import React, { useState, useEffect } from 'react';
import 'material-icons/iconfont/material-icons.css'
import style from './VerticalMenu.module.css';

export default function VerticalMenu({ setActiveIndex, activeIndex, setMenuMargin }) {
  const [menuVisible, setMenuVisible] = useState(false);

  let liArray = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  const liTextArray = ["Rat Park", "The Non Pro", "Take Fountain", "Freaks of The Industry", "Rat Parks Audio Book", "Excerpts", "Podcast", "Rat Park Shirt-", "Adam Novak"];

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
    if (menuVisible) {
      setMenuMargin('100px');
    } else {
      setMenuMargin('500px');
    }
  };

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
    <div className='bg-white flex flex-col w-[100%] h-[35px] items-center'>
      <button
        className={`bg-[#49a6e9] text-black px-2 py-1 rounded-full absolute top-2 right-2 md:hidden focus:outline-none`}
        onClick={toggleMenu}
      >
        {menuVisible ? (
          <i className="material-icons">close</i>
        ) : (
          <i className="material-icons">menu</i>
        )}
      </button>

      <ul
        className={`${
          menuVisible ? 'block' : 'hidden'
        } md:flex flex-col gap-[15px] items-center bg-[#49a6e9] text-black w-[100%]`}
      >
        {liArray.map((index) => (
          <li
            key={index}
            className={`px-[20px] py-[10px] hover:cursor-pointer w-[100%] ${
              activeIndex === index ? style.activeVertical : ''
            } animate__animated ${
              activeIndex === index ? 'animate__bounce' : ''
            }`}
            onClick={() => handleLiClick(index)}
          >
            {liTextArray[index]}
          </li>
        ))}
      </ul>
    </div>
  );
}
