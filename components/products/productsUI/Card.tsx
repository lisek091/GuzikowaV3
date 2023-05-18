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
      className={`bg-white rounded-lg shadow-lg transition-all duration-300 bg-bottom bg-contain bg-no-repeat cursor-pointer ${
        hovered ? 'w-full h-[32rem]' : 'w-96 h-64'
      }`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={cardStyle}
    >
      <div className="p-1">
        {children}
      </div>
    </div>
  );
};

export default Card;