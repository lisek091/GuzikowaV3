import useScroll from '@/hooks/use-scroll';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
const MainNav = () => {
  const scrolled = useScroll(5);
  // zmienic na false jak skonczy sie to robic
  const [open,setOpen] = useState(true);

  const [hovered1,setHovered1] = useState(false)
  const [hovered2,setHovered2] = useState(false)
  
   const timeout1 = ()=>{
    setTimeout(function(){
      setHovered1(false);
    },300)
  }
  const timeout2 = ()=>{
    setTimeout(function(){
      setHovered2(false);
    },300)
  }
// i tutaj tez
  useEffect(()=>{
      if(hovered1 || hovered2)
        return setOpen(true)
      else
        return setOpen(true)
  },[hovered1,hovered2])

  const listOfCategory = ["Okna Aluminiowe","Okna PCV","Systemy przesuwne aluminiowe","Systemy przesuwne PCV","Drzwi aluminiowe"]
  return (
    <div className='block w-full fixed top-0 left-0 z-50 bg-slate-50' id="nav">
      <div className='flex justify-between p-4'>
        <ul className='border-2 hover:bg-slate-400 p-2 rounded-lg' onMouseEnter={()=>setHovered1(true)} onMouseLeave={()=>timeout1()}>
          COS TEKSTU
        </ul>
        <ul>COS TEKSTU</ul>
        <ul>COS TEKSTU</ul>
        <ul>COS TEKSTU</ul>
      </div>
      <div className={`h-[20rem] w-full flex justify-between ${open? "":"hidden"}`} id="submenu1" onMouseEnter={()=>setHovered2(true)} onMouseLeave={()=>timeout2()}>
        <div className='block border-r-2 border-blue-200 border-dashed m-2'>
          <ul className='ml-4 mt-4 p-2 text-lg '>
            {listOfCategory.map((category,index)=>{
              return <li id={index} className='p-2 uppercase underline-offset-2 hover:underline hover:cursor-pointer transition-transform ease-in-out transform hover:translate-x-2'>{category}</li>
            })}
          </ul>
        </div>
        <div className='border-2 border-black m-4 flex'>
          <div className='m-2 p-2'>pierwszy</div>
          <div className='m-2 p-2'>pierwszy</div>
          <div className='m-2 p-2'>pierwszy</div>
          <div className='m-2 p-2'>pierwszy</div>
          <div className='m-2 p-2'>moze wylacznik</div>
        </div>
      </div>
      <div className='hidden'>
        cokolwiek? 2
      </div>
      <div className='hidden'>
        cokolwiek? 3
      </div>
      <div className='hidden'>
        cokolwiek? 4
      </div>
    </div>
  );
};

export default MainNav;
