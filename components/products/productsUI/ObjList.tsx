import { useState } from 'react';
import { useRouter } from 'next/router';
import { BsChevronDown } from 'react-icons/bs';
import Link from 'next/link';
type MenuItem = {
    label: string;
    subMenu?: MenuItem[];
    href?: string;
  };
  
  type VerticalMenuItemProps = {
    menuItem: MenuItem;
  };

  const VerticalMenuItem: React.FC<VerticalMenuItemProps> = ({ menuItem }) => {
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  
    const handleSubMenuClick = (e: React.MouseEvent) => {
      e.preventDefault();
      setIsSubMenuOpen(!isSubMenuOpen);
    };
  
    const subMenuItems = menuItem.subMenu || [];
  
    return (
      <>
        <li>
          <Link href={menuItem.href || '#'}>
            <div
              className="flex items-center justify-between py-2 px-4 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              onClick={handleSubMenuClick}
            >
              {menuItem.label}
              {subMenuItems.length > 0 && (
                <BsChevronDown className={`w-4 text-black fill-black transition ${isSubMenuOpen ? 'rotate-180' : 'rotate-0'}`} />
              )}
            </div>
          </Link>
          {subMenuItems.length > 0 && isSubMenuOpen && (
            <ul className="pl-4">
              {subMenuItems.map((subMenuItem) => (
                <VerticalMenuItem
                  key={subMenuItem.label}
                  menuItem={subMenuItem}
                />
              ))}
            </ul>
          )}
        </li>
      </>
    );
  };
  
  type VerticalMenuProps = {
    menuItems: MenuItem[];
  };

  const ObjList: React.FC<VerticalMenuProps> = ({ menuItems }) => {
    return (
      <nav className="w-full max-w-xs bg-white border-r border-gray-200">
        <ul className="divide-y divide-gray-200">
          {menuItems.map((menuItem) => (
            <VerticalMenuItem key={menuItem.label} menuItem={menuItem} />
          ))}
        </ul>
      </nav>
    );
  };

  export default ObjList