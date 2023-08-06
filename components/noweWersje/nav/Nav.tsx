import React, { useState, useRef, useEffect } from 'react'
import {IoMdMenu} from 'react-icons/io'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import Link from 'next/link'
const Nav = () => {
    
    const linksMain =[
      {name:"Kontakt",link:"/Kontakt"},
      {name:"Przykładowe realizacje",link:"/"},
      {name:"Strona Główna ",link:"/"},
    ];
    const offersMain = [
        {name:"Stolarka PCV",link:"/"},
        {name:"Stolarka aluminiowa",link:"/"},
        {name:"Usługi budowlane",link:"/"},
    ];
    const [menuList,setMenuList] = useState(linksMain)
    const [menuOpen,setMenuOpen] = useState(true)
    const [open,setOpen]=useState(false);
    const navRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {

          if (open && navRef.current && !navRef.current.contains(event.target as Node)) {
            setOpen(false);
          }
        };
        document.addEventListener('click', handleOutsideClick);
        return () => {
          document.removeEventListener('click', handleOutsideClick);
        };
      }, [open]);

  return (
        <div className='shadow-md w-full fixed top-0 left-0 z-50' ref={navRef}>
            <div className='lg:flex items-center justify-between bg-white py-2 lg:px-10 px-4'>
                <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800'>
                    <Link  className='' href={"/"}>
                            <div className="h-14 w-48 mx-4 logoBackground"></div>
                    </Link>
                </div>
                
                <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer lg:hidden'>
                    <IoMdMenu/>
                </div>

                <ul className={`lg:hidden lg:items-center lg:pb-0 pb-1 absolute lg:static bg-white  left-0 w-full lg:w-auto lg:pl-0 pl-6 transition-all duration-600 ease-in ${open ? 'top-18 ':'top-[-490px]'}`}>
                    { menuOpen ?
                        <button onClick={()=>{setMenuList(offersMain); setMenuOpen(false)}} 
                        className='lg:ml-8 text-xl lg:my-0 text-gray-800 hover:text-gray-400 duration-500 flex pt-2'>
                            Oferta <AiOutlineArrowLeft className='ml-10 mt-1 rotate-180'/>
                        </button> : 
                        <button className='text-gray-800 hover:text-gray-400 duration-500 text-xl lg:my-0 flex pt-2' 
                        onClick={()=>{setMenuList(linksMain); setMenuOpen(true)}}>
                        Cofnij <AiOutlineArrowLeft className='ml-10 mt-1'/>
                        </button>
                    }
                    {
                    menuList.map((link)=>(
                        <Link key={link.name} href={link.link} className='lg:ml-8 text-xl lg:my-0 my-7'>
                            <div className='text-gray-800 hover:text-gray-400 duration-500  my-4'>{link.name}</div>
                        </Link>
                    ))
                    }
                </ul>
                <ul className={`hidden lg:flex items-center pb-0 static bg-white `}>
                    <Link href={"/"}><button className='px-2 hover:underline'>Stolarka PCV</button></Link>
                    <Link href={"/"}><button className='px-2 hover:underline'>Stolarka aluminiowa</button></Link>
                    <Link href={"/"}><button className='px-2 hover:underline'>Usługi budowlane</button></Link>
                    <Link href={"/Kontakt"}><button className='px-2 hover:underline'>Kontakt</button></Link>
                    <Link href={"/"}><button className='px-2 hover:underline'>Przykładowe realizacje</button></Link>
                    <Link href={"/"}><button className='px-2 hover:underline'>Strona Główna</button></Link>
                    {
                    // DODAC JESZCZE TEN ELEMNT Z TELEFONEM DLA XL
                    }
                </ul>
            </div>
        </div>
    )
    }

export default Nav