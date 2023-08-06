import Footer from '@/components/mainpage/Footer'
import React from 'react'
import {CiSliderHorizontal} from 'react-icons/ci'
import {GiGreenhouse,GiHeatHaze} from 'react-icons/gi'
import {BsHouseCheck} from "react-icons/bs"
import {AiOutlineVerticalAlignMiddle} from 'react-icons/ai'
import FooterContact from '@/components/mainpage/FooterContact'
import Nav from '@/components/noweWersje/nav/Nav'
const Decco83 = () => {
    const backgroundImage = "/83.png"
    const cardStyle = {
      backgroundImage: `url(${backgroundImage})`,
    };
  return (
    <>
    <div className='bg-slate-100'>
        <Nav/>
        <div className='text-slate-100'>.</div> 
        <div className='text-white mt-10'>.</div>
        <p className='text-center text-3xl'>Zalety DECCO 83</p>
        <div className='grid grid-cols-1 xl:grid-cols-3 xl:mt-4 xl:px-16'>
            <div className='flex flex-col items-center text-center p-2'>
                    <CiSliderHorizontal size={"80px"} className='text-orange-700'/>
                    <p className='text-orange-700 text-xl xl:text-2xl'>Głębokie pakiety szybowe</p>
                    <p className='text-sm mb-3 lg:text-lg'>Możliwość zastosowania wielu rodzajów pakietów szybowych o grubości od 23 mm do 54,8 mm.</p>
            </div>
            <div className='flex flex-col items-center text-center p-2'>
                    <GiGreenhouse size={"80px"} className='text-orange-700'/>
                    <p className='text-orange-700 text-xl xl:text-2xl'>Pewna konstrukcja</p>
                    <p className='text-sm mb-3 lg:text-lg'>Poszerzone komory wzmocnień zwiększające sztywność okien i pozwalające na wykonanie wszystkich prawidłowo zaprojektowanych konstrukcji</p>
            </div>
            <div className='flex flex-col items-center text-center p-2'>
                    <GiHeatHaze size={"80px"} className='text-orange-700'/>
                    <p className='text-orange-700 text-xl xl:text-2xl'>Doskonała izolacja termiczna i akustyczna</p>
                    <p className='text-sm mb-3 lg:text-lg'>Doskonała izolacyjność cieplna Uw = 0,59 W/m2K okna referencyjnego szer. 1230 mm, wys. 1480 z pakietem szybowym 52 mm o budowie 4/12/4/12/4/12/4 z kryptonem o Ug=0,3 W/m2*K z ramką SWISSPACER ULTIMATE i przekładką termiczną w ościeżnicy</p>
            </div>
            <div className='flex flex-col items-center text-center p-2'>
                    <AiOutlineVerticalAlignMiddle size={"80px"} className='text-orange-700'/>
                    <p className='text-orange-700 text-xl xl:text-2xl'>Jaśniejsze pomieszczenia</p>
                    <p className='text-sm mb-3 lg:text-lg '>Optymalna wysokość złożenia profili dająca do 5 % więcej światła w porównaniu do innych systemów w swojej klasie (w oknie dwuskrzydłowym o wymiarach szer. 1465 mm wys. 1435 mm)</p>
            </div>
            <div className='flex flex-col items-center text-center p-2'>
                    <BsHouseCheck size={"80px"} className='text-orange-700'/>
                    <p className='text-orange-700 text-xl xl:text-2xl'>Szczelny system</p>
                    <p className='text-sm mb-3 lg:text-lg'>System 7-komorowy o szerokości zabudowy 81 mm z trzecią uszczelką – środkową</p>
            </div>
        </div>
        <div className='p-2'>
            <p className='text-sm mb-3 xl:px-20 lg:text-lg'>Profil w systemie DECCO 83 to profil o ekstremalnych parametrach termicznych. Trzecia uszczelka i szerokie pakiety szybowe z ciepłą ramką zapewniają parametry, jakich nie gwarantują inne profile.</p>
            <div className='grid grid-cols-1 xl:grid-cols-2'>
                <div style={cardStyle} className='w-full h-80 bg-contain bg-center bg-no-repeat mb-2'></div>
                <div className='flex flex-col justify-center'>
                    <p className='text-sm mb-3 lg:text-lg'>Zawiera profile przejściowe do dużych drzwi przesuwnych i balkonowych</p>
                    <p className='text-sm mb-3 lg:text-lg'>W tym systemie możliwe jest zastosowanie technologii wklejanych szyb, co zwiększa stabilność okien i umożliwia wykonanie większych konstrukcji</p>
                    <p className='text-sm mb-3 lg:text-lg'>Możliwość zastosowania wkładki termicznej</p>
                    <p className='text-sm mb-3 lg:text-lg'>Szeroka gama folii dekoracyjnych</p>
                </div>
            </div>
        </div>
        <FooterContact/>
        <Footer/>
    </div>
    </>
  )
}

export default Decco83