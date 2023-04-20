import React from 'react';

interface NavbarItemProps {
  label: string;
  active?: boolean;
}

const NavbarItem: React.FC<NavbarItemProps> = ({ label, active }) => {
  return (
    <div className={active ? 'text-black cursor-default' : 'text-black-900 hover:underline cursor-pointer transition'}>
      {label}
    </div>
  )
}

export default NavbarItem;