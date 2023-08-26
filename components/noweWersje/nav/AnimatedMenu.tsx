import Link from 'next/link';
import React, { useState } from 'react';

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
        className="py-2 px-8"
      >
        {name}
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