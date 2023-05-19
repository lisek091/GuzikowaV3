import React from 'react';
import ProduktList from './ProduktList';
import NavbarItem from './NavbarItem';
interface MobileMenuProps {
  visible?: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ visible }) => {
  if (!visible) {
    return null;
  }

  return (
    <div className="bg-slate-300 w-52 absolute top-8 left-0 py-5 flex-col border-2 flex opacity-90 border-zinc-800 rounded-3xl " id="mobile-menu">
      <div className="flex flex-col gap-4 text-center">
          <NavbarItem label="Strona główna" link='/'/>
          <NavbarItem label="Okna" link='/oferta/okna'/>
          <NavbarItem label="Usługi budowlane" link='/oferta/uslugibudowlane'/>
          <NavbarItem label="Systemy przesuwne" link='/oferta/systemy' />
          <NavbarItem label="Produkty" link='/oferta/uslugi'/>
          <NavbarItem label="Ochrona przeciwsloneczna" />
      </div>
    </div>
  )
}

export default MobileMenu;
