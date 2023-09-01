import React, { useState, useRef, useEffect } from 'react'
import {IoMdMenu} from 'react-icons/io'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import Link from 'next/link'
import ContactBar from './ContactBar'
import AnimatedMenu from './AnimatedMenu'
const Nav = () => {
    
    const linksMain =[
      {name:"Kontakt",link:"/Kontakt"},
      {name:"Przykładowe realizacje",link:"/Realizacje"},
      {name:"Strona Główna ",link:"/"},
    ];
    const offersMain = [
        {name:"Okna PCV",link:"/",button:"PCVList"},
        {name:"Okna aluminiowe",link:"/",button:"ALUList"},
        {name:"Katalog",link:"/oferta/okna"},
    ];
    const PCVList = [
        {name:"DECCO 82",link:"/oferta/systemy/Decco82"},
        {name:"DECCO 83",link:"/oferta/systemy/Decco83"},
        {name:"GEALAN LINEAR",link:"/oferta/systemy/Gealanlinear"},
        {name:"GEALAN S 9000",link:"/oferta/systemy/S9000"},
    ]
    const ALUList = [
        {name:"PE50",link:"/oferta/okna/Pe50"},
        {name:"PE68/PE68HI",link:"/oferta/okna/Pe68"},
        {name:"PE78NHI OKNA UCHYLNO-PRZESUWNE",link:"/oferta/okna/Pe78nhl"},
        {name:"PE78N OKNA INDUSTRIAL",link:"/oferta/okna/Pe78industrial"},
        {name:"PE78N OKNA SLIM",link:"/oferta/okna/Pe78nslim"},
        {name:"PE78N/PE78NHI",link:"/oferta/okna/Pe78"},
        {name:"PE96 PASSIVE",link:"/oferta/okna/Pe96"},
    ]
    const [menuList,setMenuList] = useState(linksMain)
    const [menuOpen,setMenuOpen] = useState(true)
    const [open,setOpen] = useState(false);
    const navRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            const clickedElement = event.target as HTMLElement;
            setOpen(prevOpen => {
                if (
                    prevOpen &&
                    navRef.current &&
                    !navRef.current.contains(event.target as Node) &&
                    clickedElement.closest(".submenu") === null
                ) {
                    return false; 
                }
                return prevOpen; 
            });
        };
    
        document.addEventListener('click', handleOutsideClick);
    }, [menuList]); 

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

                <ul id="submenu" className={`lg:hidden lg:items-center lg:pb-0 pb-1 absolute lg:static bg-white  left-0 w-full lg:w-auto lg:pl-0 pl-6 transition-all duration-600 ease-in ${open ? 'top-18 ':'top-[-490px]'}`}>
                    { menuOpen ?
                        <button onClick={()=>{setMenuList(offersMain); setMenuOpen(false)}} 
                        className='lg:ml-8 text-xl lg:my-0 text-gray-800 hover:text-gray-400 duration-500 flex pt-2'>
                            Produkty <AiOutlineArrowLeft className='ml-10 mt-1 rotate-180'/>
                        </button> : 
                        <button className='text-gray-800 hover:text-gray-400 duration-500 text-xl lg:my-0 flex pt-2' 
                        onClick={()=>{setMenuList(linksMain); setMenuOpen(true)}}>
                        Cofnij <AiOutlineArrowLeft className='ml-10 mt-1'/>
                        </button>
                    }
                    {
                    menuList.map((link:any,key=link.name)=>(
                        link.button ?
                        <button  key={key} onClick={() => {
                                if (link.button === "PCVList") {
                                    setMenuList(PCVList);
                                    setOpen(true);
                                } else if (link.button === "ALUList") {
                                    setMenuList(ALUList);
                                    setOpen(true);
                                }
                                //setMenuOpen(false);
                            }}
                            className='lg:ml-8 text-xl lg:my-0 text-gray-800 hover:text-gray-400 duration-500 flex pt-2 submenu mt-4'
                        >
                            {link.name} <AiOutlineArrowLeft className='ml-10 mt-1 rotate-180' />
                            
                        </button>
                        :
                          <Link key={key} href={link.link} className='lg:ml-8 text-xl lg:my-0 my-7'>
                            <div className='text-gray-800 hover:text-gray-400 duration-500  my-4'>{link.name}</div>
                          </Link>
                    ))
                    
                    }
                </ul>
                <ul className={`hidden lg:flex items-center pb-0 static bg-white `}>
                    <AnimatedMenu name="Okna PCV">
                        <p className='transition-opacity duration-500 delay-300 opacity-100 hover:opacity-100 py-2 hover:underline'>
                            <Link  href={"/oferta/systemy/Decco82"}>DECCO 82 </Link>
                        </p>
                        <p className='transition-opacity duration-500 delay-300 opacity-100 hover:opacity-100 py-2 hover:underline'>
                            <Link href={"/oferta/systemy/Decco83"}>DECCO 83 </Link>
                        </p>
                        <p className='transition-opacity duration-500 delay-300 opacity-100 hover:opacity-100 py-2 hover:underline'>
                            <Link href={"/oferta/systemy/Gealanlinear"}>GEALAN LINEAR </Link>
                        </p>
                        <p className='transition-opacity duration-500 delay-300 opacity-100 hover:opacity-100 py-2 hover:underline'>
                            <Link href={"/oferta/systemy/S9000"}>GEALAN S 9000 </Link>
                        </p>
                    </AnimatedMenu>
                    <AnimatedMenu name="Okna aluminiowe">
                        <p className='transition-opacity duration-500 delay-300 opacity-100 hover:opacity-100 py-2 hover:underline'>
                            <Link  href={"/oferta/okna/Pe50"}>PE50 </Link>
                        </p>
                        <p className='transition-opacity duration-500 delay-300 opacity-100 hover:opacity-100 py-2 hover:underline'>
                            <Link  href={"/oferta/okna/Pe68"}>PE68/PE68HI </Link>
                        </p>
                        <p className='transition-opacity duration-500 delay-300 opacity-100 hover:opacity-100 py-2 hover:underline'>
                            <Link  href={"/oferta/okna/Pe78nhl"}>PE78NHI OKNA UCHYLNO PRZESUWNE </Link>
                        </p>
                        <p className='transition-opacity duration-500 delay-300 opacity-100 hover:opacity-100 py-2 hover:underline'>
                          <Link  href={"/oferta/okna/Pe78industrial"}>PE78N OKNA INDUSTRIAL </Link>
                        </p>
                        <p className='transition-opacity duration-500 delay-300 opacity-100 hover:opacity-100 py-2 hover:underline'>
                            <Link  href={"/oferta/okna/Pe78nslim"}>PE78N OKNA SLIM </Link>
                        </p>
                        <p className='transition-opacity duration-500 delay-300 opacity-100 hover:opacity-100 py-2 hover:underline'>
                          <Link  href={"/oferta/okna/Pe78"}>PE78N/PE78NHI </Link>
                        </p>
                        <p className='transition-opacity duration-500 delay-300 opacity-100 hover:opacity-100 py-2 hover:underline'>
                          <Link  href={"/oferta/okna/Pe96"}>PE96 PASSIVE </Link>
                        </p>
                    </AnimatedMenu>
                    <Link href={"/oferta/okna"} ><button className='px-8 hover:underline'>Katalog</button></Link>
                    <Link href={"/Kontakt"}><button className='px-8 hover:underline'>Kontakt</button></Link>
                    <Link href={"/Realizacje"}><button className='px-8 hover:underline'>Przykładowe realizacje</button></Link>
                    <ContactBar/>
                </ul>
            </div>
        </div>
    )
    }

export default Nav