import React from 'react';
import Link from 'next/link'
interface NavbarItemProps {
  label: string;
  active?: boolean;
  link?:string;
}

const NavbarItem: React.FC<NavbarItemProps> = ({ label, active, link }) => {

  if(link===undefined){
    link=""
  }

  return (
    <Link href={link}>
      <div className={active ? 'text-black cursor-default' : 'text-black-900 hover:underline cursor-pointer transition'}>
        {label}
      </div>
    </Link>
  )
}

export default NavbarItem;
