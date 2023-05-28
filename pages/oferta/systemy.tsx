import Footer from '@/components/Footer'
import Navbar from '@/components/navbar/Navbar'
import React from 'react'
import Link from 'next/link'

const systemy = () => {
  const backgroundImage = "/S9000entry.jpg"
  const cardStyle = {
    backgroundImage: `url(${backgroundImage})`,
  };
  return (
    <>
    <div className='bg-slate-100'>
      <Navbar/>
      <div className='text-slate-100'>.</div> 
      <div className='text-white mt-10'>.</div>
      <Link href={"/oferta/systemy/S9000"}>

      <div style={cardStyle} className='w-full bg-cover bg-center bg-no-repeat xl:h-[36rem] lg:h-[32rem] h-96 cursor-pointer'>
        <div className='grid grid-cols-2 h-full'>
          <div className='flex flex-col justify-end'>
            <div className='bg-orange-800 sm:p-3 p-1 bg-opacity-80 sm:rounded-r-full rounded-r-3xl hover:bg-opacity-100'>
              <p className='lg:text-4xl text-xl font-bold text-slate-100'>Innowacyjny system S9000</p>
              <div className='mt-3'></div>
              <p className='lg:text-xl text-sm text-slate-100 font-semibold'>S 9000 to wszechstronny, nowoczesny system dedykowany dla okien, drzwi oraz drzwi podnoszono-przesuwnych, oferujący dwa lub trzy poziomy uszczelnienia.</p>
            </div>
            <div className='sm:h-10 h-2'></div>
          </div>
          <div className='grid grid-cols-3 h-full'>
            <div className=''></div>
            <div className='flex flex-col justify-end sm:text-center sm:col-span-2 col-span-3'>
              <p className='md:text-xl text-sm text-slate-100 md:font-semibold bg-orange-800 sm:p-3 p-1 bg-opacity-80 mb-2 sm:rounded-l-full rounded-l-2xl hover:bg-opacity-100'>Doskonała izolacja termiczna i akustyczna</p>
              <p className='md:text-xl text-sm text-slate-100 md:font-semibold bg-orange-800 sm:p-3 p-1 bg-opacity-80 mb-2 sm:rounded-l-full rounded-l-2xl hover:bg-opacity-100'>3 płaszczyzny uszczelnienia</p>
              <p className='md:text-xl text-sm text-slate-100 md:font-semibold bg-orange-800 sm:p-3 p-1 bg-opacity-80 mb-2 sm:rounded-l-full rounded-l-2xl hover:bg-opacity-100'>Zoptymalizowany do zastosowania STV</p>
              <div className='sm:h-10 h-2' style={{ gridColumn: '2' }}></div>
            </div>
          </div>
        </div>
      </div>
      </Link>
      <div className='text-white mt-20'>.</div>
    <Footer/>
    </div>
    </>
  )
}

export default systemy