import React, { useCallback, useEffect, useState } from 'react';
import { BsBell, BsSearch, BsChevronDown } from 'react-icons/bs';

import MobileMenu from './MobileMenu';
import NavbarItem from './NavbarItem';
import ContactBar from './ContactBar';

const TOP_OFFSET = 66;
const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {

      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true)
      } else {
        setShowBackground(false)
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setShowMobileMenu((current) => !current);
  }, []);

  return (
    <nav className="w-full fixed z-40 xl:flex xl:justify-center">
      <div className={`px-4 md:px-16 py-6 flex flex-row items-center transition duration-500 ${showBackground ? 'bg-zinc-200 bg-opacity-90' : ''}`}>
        <div onClick={toggleMobileMenu} className="lg:hidden flex flex-row items-center gap-2 ml-4 cursor-pointer relative">
          <p className="text-black text-sm">Przeglądaj</p>
          <BsChevronDown className={`w-4 text-black fill-black transition ${showMobileMenu ? 'rotate-180' : 'rotate-0'}`} />
          <MobileMenu visible={showMobileMenu}  />
        </div>
        <div className="h-4 lg:h-7 ml-8 logoBackground"/>
        <div className="flex-row ml-8 gap-7 hidden lg:flex">
          <NavbarItem label="MD1"  />
          <NavbarItem label="Produkcja stolarki" />
          <NavbarItem label="Usługi budowlane" />
          <NavbarItem label="Systemy" />
          <NavbarItem label="Przykładowe realizacje" />
          <NavbarItem label="Pomoc/kontakt" />
        </div>
        <ContactBar/>
      </div>
    </nav>
  )
}

export default Navbar;
