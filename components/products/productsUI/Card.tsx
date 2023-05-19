import React from 'react';

interface CardProps {
  hovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  backgroundImage: string | undefined;
  children:any;
}

const Card: React.FC<CardProps> = ({ children, hovered, onMouseEnter, onMouseLeave, backgroundImage }) => {
  const cardStyle = {
    backgroundImage: `url(${backgroundImage})`,
  };

  return (
    <div
      className={`bg-transparent rounded-lg shadow-2xl transition-all duration-300 cursor-pointer w-full ${
        hovered ? 'h-96' : 'h-64'
      }`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="p-6">
        {children}
      </div>
    </div>
  );
};

export default Card;