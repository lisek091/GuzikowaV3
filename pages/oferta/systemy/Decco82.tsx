import React from 'react'
import Nav from '@/components/noweWersje/nav/Nav'
import FooterContact from '@/components/mainpage/FooterContact'
import Footer from '@/components/mainpage/Footer'
import {CiSliderHorizontal} from 'react-icons/ci'
import {GiGreenhouse,GiHeatHaze} from 'react-icons/gi'
import {BsHouseCheck} from "react-icons/bs"
import {AiOutlineVerticalAlignMiddle} from 'react-icons/ai'
const Decco82 = () => {
    const backgroundImage = "/decco82.png"
    const cardStyle = {
      backgroundImage: `url(${backgroundImage})`,
    };
    const Reuse = ({text1,text2,children}:any) => {
      return(
        <div className='flex flex-col items-center text-center p-2'>
            {children}
           <p className='text-orange-700 text-xl xl:text-2xl'>{text1}</p>
           <p className='text-sm mb-3 lg:text-lg'>{text2}</p>
        </div>
        )
    }
  return (
    <>
    <div className='bg-slate-100'>
        <Nav/>
        <div className='text-slate-100'>.</div> 
        <div className='text-white mt-10'>.</div>
        <p className='text-center text-3xl'>Zalety DECCO 82</p>
        <div className='grid grid-cols-1 xl:grid-cols-3 xl:mt-4 xl:px-16'>
            <Reuse text1="Głębokie pakiety szybowe" text2="Możliwość zastosowania wielu rodzajów pakietów szybowych o grubości od 23 mm do 54,8 mm." ><CiSliderHorizontal size={"80px"} className='text-orange-700'/></Reuse>
            <Reuse text1="Pewna konstrukcja" text2="Poszerzone komory wzmocnień zwiększające sztywność okien i pozwalające na wykonanie wszystkich prawidłowo zaprojektowanych konstrukcji." ><GiGreenhouse size={"80px"} className='text-orange-700'/></Reuse>
            <Reuse text1="Doskonała izolacja termiczna i akustyczna" text2="Doskonała izolacyjność cieplna. Uw = 0,76 W/m2K okna referencyjnego szer. 1230 mm, wys. 1480 z pakietem szybowym 48 mm i ramką dystansową Swisspacer V." ><GiHeatHaze size={"80px"} className='text-orange-700'/></Reuse>
            <Reuse text1="Jaśniejsze pomieszczenia" text2="Optymalna wysokość złożenia profili dająca do 5 % więcej światła w porównaniu do innych systemów w swojej klasie (w oknie dwuskrzydłowym o wymiarach szer. 1465 mm wys. 1435 mm)" ><AiOutlineVerticalAlignMiddle size={"80px"} className='text-orange-700'/></Reuse>
            <Reuse text1="Uniwersalność" text2="W tym systemie możliwe jest zastosowanie technologii wklejanych szyb, co umożliwia stworzenie ponadgabarytowych konstrukcji." ><BsHouseCheck size={"80px"} className='text-orange-700'/></Reuse>
        </div>
        <div className='p-2'>
            <p className='text-sm mb-3 xl:px-20 lg:text-lg'>Profil w systemie DECCO 82 to idealny wybór dla tych, którzy poszukują najwyższych parametrów termicznych spełniających nowe wymagania budowlane, znakomitego designu przy zachowaniu rozsądnej ceny.</p>
            <div className='grid grid-cols-1 xl:grid-cols-2'>
                <div style={cardStyle} className='w-full h-80 bg-contain bg-center bg-no-repeat mb-2'></div>
                <div className='flex flex-col justify-center text-sm lg:text-lg p-2 text-center'>
                    <p className=''>System 6-komorowy o szerokości zabudowy 81 mm</p>
                    <p className=''>Możliwość zastosowania wkładki styropianowej</p>
                    <p className=''>Zawiera pełen system drzwiowy</p>
                    <p className=''>Szeroka gama folii dekoracyjnych</p>
                </div>
            </div>
        </div>
        <FooterContact/>
        <Footer/>
    </div>
    </>
  )
}

export default Decco82

