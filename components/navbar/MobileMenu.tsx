import React from 'react';
import ProduktList from './ProduktList';
interface MobileMenuProps {
  visible?: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ visible }) => {
  if (!visible) {
    return null;
  }

  return (
    <div className="bg-slate-300 w-52 absolute top-8 left-0 py-5 flex-col border-2 flex opacity-90 border-zinc-800 rounded-3xl " id="mobile-menu">
      <div className="flex flex-col gap-4">
        <div className="px-3 text-center text-black hover:underline">
          Produkty
        </div>
        <div className="px-3 text-center text-black hover:underline">
        Usługi budowlane
        </div>
        <div className="px-3 text-center text-black hover:underline">
        Systemy
        </div>
        <div className="px-3 text-center text-black hover:underline">
        Przykładowe realizacje
        </div>
        <div className="px-3 text-center text-black hover:underline">
        Pomoc/kontakt
        </div>
      </div>
    </div>
  )
}

export default MobileMenu;
