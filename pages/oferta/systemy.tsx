import Footer from '@/components/Footer'
import Nav from '@/components/noweWersje/nav/Nav';
import React from 'react'
import Link from 'next/link'

const systemy = () => {
  const backgroundImage1 = "/S9000entry.jpg"
  const cardStyle1 = {
    backgroundImage: `url(${backgroundImage1})`,
  };
  const backgroundImage2 = "/gealanlinear.jpg"
  const cardStyle2 = {
    backgroundImage: `url(${backgroundImage2})`,
  };
  const backgroundImage3 = "/decco82back.png"
  const cardStyle3 = {
    backgroundImage: `url(${backgroundImage3})`,
  };
  const backgroundImage4 = "/decco83.png"
  const cardStyle4 = {
    backgroundImage: `url(${backgroundImage4})`,
  };
  return (
    <>
    <div className='bg-slate-100'>
      <Nav/>
      <div className='text-slate-100'>.</div> 
      <div className='text-white mt-10'>.</div>
      <Link href={"/oferta/systemy/S9000"}>
        <div style={cardStyle1} className='w-full bg-cover bg-center bg-no-repeat xl:h-[36rem] lg:h-[32rem] h-96 cursor-pointer mb-2'>
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
      <Link href={"/oferta/systemy/Gealanlinear"}>
        <div style={cardStyle2} className='w-full bg-cover bg-center bg-no-repeat xl:h-[36rem] lg:h-[32rem] h-96 cursor-pointer mb-2'>
          <div className='grid grid-cols-2 h-full'>
            <div className='flex flex-col justify-end'>
              <div className='bg-orange-800 sm:p-3 p-1 bg-opacity-80 sm:rounded-r-full rounded-r-3xl hover:bg-opacity-100'>
                <p className='lg:text-4xl text-xl font-bold text-slate-100'>GEALAN-LINEAR</p>
                <div className='mt-3'></div>
                <p className='lg:text-xl text-sm text-slate-100 font-semibold'>System GEALAN-LINEAR® cechuje minimalizm i wizualna perfekcja. System bazuje na prostych konturach będących wiodącym trendem we współczesnej architekturze.</p>
              </div>
              <div className='sm:h-10 h-2'></div>
            </div>
            <div className='grid grid-cols-3 h-full'>
              <div className=''></div>
              <div className='flex flex-col justify-end sm:text-center sm:col-span-2 col-span-3'>
                <p className='md:text-xl text-sm text-slate-100 md:font-semibold bg-orange-800 sm:p-3 p-1 bg-opacity-80 mb-2 sm:rounded-l-full rounded-l-2xl hover:bg-opacity-100'>Minimalistyczny design</p>
                <p className='md:text-xl text-sm text-slate-100 md:font-semibold bg-orange-800 sm:p-3 p-1 bg-opacity-80 mb-2 sm:rounded-l-full rounded-l-2xl hover:bg-opacity-100'>Synergia współczesnych trendów i ponadczasowego stylu</p>
                <p className='md:text-xl text-sm text-slate-100 md:font-semibold bg-orange-800 sm:p-3 p-1 bg-opacity-80 mb-2 sm:rounded-l-full rounded-l-2xl hover:bg-opacity-100'>Wysoka kompatybilność</p>
                <div className='sm:h-10 h-2' style={{ gridColumn: '2' }}></div>
              </div>
            </div>
          </div>
        </div>
      </Link>
      <Link href={"/oferta/systemy/Decco82"}>
        <div style={cardStyle3} className='w-full bg-cover bg-center bg-no-repeat xl:h-[36rem] lg:h-[32rem] h-96 cursor-pointer mb-2'>
          <div className='grid grid-cols-2 h-full'>
            <div className='flex flex-col justify-end'>
              <div className='bg-orange-800 sm:p-3 p-1 bg-opacity-80 sm:rounded-r-full rounded-r-3xl hover:bg-opacity-100'>
                <p className='lg:text-4xl text-xl font-bold text-slate-100'>DECCO 82</p>
                <div className='mt-3'></div>
                <p className='lg:text-xl text-sm text-slate-100 font-semibold'>Profil w systemie DECCO 82 to idealny wybór dla tych, którzy poszukują najwyższych parametrów termicznych spełniających nowe wymagania budowlane, znakomitego designu przy zachowaniu rozsądnej ceny.</p>
              </div>
              <div className='sm:h-10 h-2'></div>
            </div>
            <div className='grid grid-cols-3 h-full'>
              <div className=''></div>
              <div className='flex flex-col justify-end sm:text-center sm:col-span-2 col-span-3'>
                <p className='md:text-xl text-sm text-slate-100 md:font-semibold bg-orange-800 sm:p-3 p-1 bg-opacity-80 mb-2 sm:rounded-l-full rounded-l-2xl hover:bg-opacity-100'>System 6-komorowy o szerokości zabudowy 81 mm</p>
                <p className='md:text-xl text-sm text-slate-100 md:font-semibold bg-orange-800 sm:p-3 p-1 bg-opacity-80 mb-2 sm:rounded-l-full rounded-l-2xl hover:bg-opacity-100'>Możliwe jest zastosowanie technologii wklejanych szyb</p>
                <p className='md:text-xl text-sm text-slate-100 md:font-semibold bg-orange-800 sm:p-3 p-1 bg-opacity-80 mb-2 sm:rounded-l-full rounded-l-2xl hover:bg-opacity-100'>Szeroka gama folii dekoracyjnych</p>
                <div className='sm:h-10 h-2' style={{ gridColumn: '2' }}></div>
              </div>
            </div>
          </div>
        </div>
      </Link>
      <Link href={"/oferta/systemy/Decco83"}>
        <div style={cardStyle4} className='w-full bg-cover bg-center bg-no-repeat xl:h-[36rem] lg:h-[32rem] h-96 cursor-pointer mb-2'>
          <div className='grid grid-cols-2 h-full'>
            <div className='flex flex-col justify-end'>
              <div className='bg-orange-800 sm:p-3 p-1 bg-opacity-80 sm:rounded-r-full rounded-r-3xl hover:bg-opacity-100'>
                <p className='lg:text-4xl text-xl font-bold text-slate-100'>Decco 83</p>
                <div className='mt-3'></div>
                <p className='lg:text-xl text-sm text-slate-100 font-semibold'>Profil w systemie DECCO 83 to profil o ekstremalnych parametrach termicznych. Trzecia uszczelka i szerokie pakiety szybowe z ciepłą ramką zapewniają parametry, jakich nie gwarantują inne profile.</p>
              </div>
              <div className='sm:h-10 h-2'></div>
            </div>
            <div className='grid grid-cols-3 h-full'>
              <div className=''></div>
              <div className='flex flex-col justify-end sm:text-center sm:col-span-2 col-span-3'>
                <p className='md:text-lg text-sm text-slate-100 md:font-semibold bg-orange-800 sm:p-3 p-1 bg-opacity-80 mb-2 sm:rounded-l-full rounded-l-2xl hover:bg-opacity-100'>System 7-komorowy o szerokości zabudowy 81 mm z trzecią uszczelką – środkową</p>
                <p className='md:text-lg text-sm text-slate-100 md:font-semibold bg-orange-800 sm:p-3 p-1 bg-opacity-80 mb-2 sm:rounded-l-full rounded-l-2xl hover:bg-opacity-100'>Zawiera profile przejściowe do dużych drzwi przesuwnych i balkonowych</p>
                <p className='md:text-lg text-sm text-slate-100 md:font-semibold bg-orange-800 sm:p-3 p-1 bg-opacity-80 mb-2 sm:rounded-l-full rounded-l-2xl hover:bg-opacity-100'>Możliwość zastosowania wielu rodzajów pakietów szybowych od 23 mm do 54,8 mm</p>
                <div className='sm:h-10 h-2' style={{ gridColumn: '2' }}></div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    <Footer/>
    </div>
    </>
  )
}

export default systemy