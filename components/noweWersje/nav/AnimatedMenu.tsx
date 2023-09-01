import Link from 'next/link';
import React, { useState } from 'react';
import {AiOutlineArrowLeft} from 'react-icons/ai'

const AnimatedMenu = ({name,children}:any) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isMenuItemHovered, setIsMenuItemHovered] = useState(false);

  const handleMenuItemHover = () => {
    setIsMenuVisible(true);
    setIsMenuItemHovered(true);
  };

  const handleMenuHover = () => {
    setIsMenuVisible(true);
    setIsMenuItemHovered(false);
  };

  const handleMenuLeave = () => {
    if (!isMenuItemHovered) {
      setIsMenuVisible(false);
    }
  };

  return (
    <div
      className="relative "
      onMouseEnter={handleMenuHover}
      onMouseLeave={handleMenuLeave}
    >
      <button
        className="py-2 px-8 flex"
      >
        {name} <span className={`ml-2 mt-1 ${isMenuVisible ? "rotate-0":"rotate-180"}`}><AiOutlineArrowLeft className='rotate-90' /></span> 
      </button>
      {isMenuVisible && (
        <div className="absolute top-full left-0 mt-0 p-2 bg-white border border-gray-300 rounded shadow">
            {children}
        </div>
      )}
    </div>
  );
};

export default AnimatedMenu;
// DODAC DO DZIECI WYSYLANYCH
//transition-opacity duration-500 delay-300 opacity-100 hover:opacity-100