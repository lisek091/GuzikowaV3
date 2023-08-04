import Footer from '@/components/Footer'
import React from 'react'
import {CiSliderHorizontal} from 'react-icons/ci'
import {GiGreenhouse,GiHeatHaze} from 'react-icons/gi'
import {BsHouseCheck} from "react-icons/bs"
import {AiOutlineVerticalAlignMiddle} from 'react-icons/ai'
import FooterContact from '@/components/FooterContact'
import Nav from '@/components/noweWersje/nav/Nav'
const S9000 = () => {
    const backgroundImage = "/gealan-futura.png"
    const cardStyle = {
      backgroundImage: `url(${backgroundImage})`,
    };
  return (
    <>
    <div className='bg-slate-100'>
        <Nav/>
        <div className='text-slate-100'>.</div> 
        <div className='text-white mt-10'>.</div>
        <p className='text-center text-3xl'>Zalety systemu S 9000</p>
        <div className='grid grid-cols-1 xl:grid-cols-3 xl:mt-4 xl:px-16'>
            <div className='flex flex-col items-center text-center p-2'>
                    <CiSliderHorizontal size={"80px"} className='text-orange-700'/>
                    <p className='text-orange-700 text-xl xl:text-2xl'>Głębokie pakiety szybowe</p>
                    <p className='text-sm mb-3 lg:text-lg'>Możliwość stosowania pakietów 3-szybowych o głębokości do 54 mm.</p>
            </div>
            <div className='flex flex-col items-center text-center p-2'>
                    <GiGreenhouse size={"80px"} className='text-orange-700'/>
                    <p className='text-orange-700 text-xl xl:text-2xl'>3 płaszczyzny uszczelnienia</p>
                    <p className='text-sm mb-3 lg:text-lg'>Spójny system rozmieszczenia uszczelek w trzech płaszczyznach.</p>
            </div>
            <div className='flex flex-col items-center text-center p-2'>
                    <GiHeatHaze size={"80px"} className='text-orange-700'/>
                    <p className='text-orange-700 text-xl xl:text-2xl'>Doskonała izolacja termiczna i akustyczna</p>
                    <p className='text-sm mb-3 lg:text-lg'>Doskonała izolacja termiczna i akustyczna dzięki sześciokomorowej budowie oraz zwiększonej głębokości ościeżnicy i skrzydła.</p>
            </div>
            <div className='flex flex-col items-center text-center p-2'>
                    <AiOutlineVerticalAlignMiddle size={"80px"} className='text-orange-700'/>
                    <p className='text-orange-700 text-xl xl:text-2xl'>Niskie profile</p>
                    <p className='text-sm mb-3 lg:text-lg '>Niskie profile i designerskie nachylenie przylg pod kątem 15°.</p>
            </div>
            <div className='flex flex-col items-center text-center p-2'>
                    <BsHouseCheck size={"80px"} className='text-orange-700'/>
                    <p className='text-orange-700 text-xl xl:text-2xl'>Doskonała izolacja termiczna i akustyczna</p>
                    <p className='text-sm mb-3 lg:text-lg'>Zoptymalizowany do zastosowania technologii STV® (klejenie szyby na sucho).</p>
            </div>
        </div>
        <div className='p-2'>
            <p className='text-sm mb-3 xl:px-20 lg:text-lg'>Doskonała izolacja termiczna systemu S 9000 nie jest dziełem przypadku, ale rezultatem celowych prac badawczych i rozwojowych. 
                Wyniki mówią same za siebie. Liczne wyliczenia dowiodły osiągnięcia znakomitych parametrów izolacji termicznej. 
                Od początku celem projektu było osiągnięcie Uf = 0,92 W/m²K przy zastosowaniu standardowych wzmocnień stalowych i tym samym spełnienie standardu pasywnego. 
                Udało się to dzięki synergii innowacyjnych detali zastosowanych przy projektowaniu tego systemu.</p>
            <div className='grid grid-cols-1 xl:grid-cols-2'>
                <div style={cardStyle} className='w-full h-80 bg-contain bg-center bg-no-repeat mb-2'></div>
                <div className='flex flex-col justify-center'>
                    <p className='text-sm mb-3 lg:text-lg'>Głębsze osadzenie szyby dzięki podwyższonej listwie przyszybowej o wysokości 26 mm i 
                        wyższej przyldze eliminuje powstawanie mostków termicznych na brzegu pakietu szybowego i korzystnie wpływa na izolację cieplną.</p>
                    <p className='text-sm mb-3 lg:text-lg'>Idealanie dopasowana stal zapewnia optymalną równowagę między statyką i izolacją cieplną.</p>
                    <p className='text-sm mb-3 lg:text-lg'>6-cio komorowa budowa ramy i skrzydła dba o dobrą izolację cieplną i akustyczną.</p>
                </div>
            </div>
        </div>
        <FooterContact/>
        <Footer/>
    </div>
    </>
  )
}

export default S9000