import Footer from '@/components/Footer'
import Navbar from '@/components/navbar/Navbar'
import React from 'react'
import {GiWindow} from 'react-icons/gi'
import {BsHouseCheck,BsFillHouseHeartFill} from "react-icons/bs"
import {TbTriangleSquareCircle} from 'react-icons/tb'
import {MdRecycling} from 'react-icons/md'
import FooterContact from '@/components/FooterContact'
const Gealanlinear = () => {
    const backgroundImage = "/GEALAN-Linear2.png"
    const cardStyle = {
      backgroundImage: `url(${backgroundImage})`,
    };
  return (
    <>
    <div className='bg-slate-100'>
        <Navbar/>
        <div className='text-slate-100'>.</div> 
        <div className='text-white mt-10'>.</div>
        <p className='text-center text-3xl'>Zalety GEALAN-LINEAR®</p>
        <div className='grid grid-cols-1 xl:grid-cols-3 xl:mt-4 xl:px-16'>
            <div className='flex flex-col items-center text-center p-2'>
                    <TbTriangleSquareCircle size={"80px"} className='text-orange-700'/>
                    <p className='text-orange-700 text-xl xl:text-2xl'>Proste kontury</p>
                    <p className='text-sm mb-3 lg:text-lg'>Prosta, przejrzysta koncepcja projektowa, uwzględniająca trendy architektoniczne, w ramach których proponowane są okna o prostych, wyrazistych konturach.</p>
            </div>
            <div className='flex flex-col items-center text-center p-2'>
                    <BsFillHouseHeartFill size={"80px"} className='text-orange-700'/>
                    <p className='text-orange-700 text-xl xl:text-2xl'>Potencjał</p>
                    <p className='text-sm mb-3 lg:text-lg'>Innowacyjna konstrukcja systemu została ukierunkowana na spełnienie aktualnych i przyszłych oczekiwań rynku.</p>
            </div>
            <div className='flex flex-col items-center text-center p-2'>
                    <BsHouseCheck size={"80px"} className='text-orange-700'/>
                    <p className='text-orange-700 text-xl xl:text-2xl'>Doskonała izolacja termiczna i akustyczna</p>
                    <p className='text-sm mb-3 lg:text-lg'>Najwyższe parametry w segmencie systemów o głębokości 74 mm o wartości współczynnika przenikania ciepła Uf do 1,0 W/(m²K).</p>
            </div>
            <div className='flex flex-col items-center text-center p-2'>
                    <GiWindow size={"80px"} className='text-orange-700'/>
                    <p className='text-orange-700 text-xl xl:text-2xl'>Wysoka kompatybilność</p>
                    <p className='text-sm mb-3 lg:text-lg'>Zoptymalizowana konstrukcja profili zapewnia kompatybilność z innymi rozwiązaniami GEALAN.</p>
            </div>
            <div className='flex flex-col items-center text-center p-2'>
                    <MdRecycling size={"80px"} className='text-orange-700'/>
                    <p className='text-orange-700 text-xl xl:text-2xl'>Wszechstronność zastosowań</p>
                    <p className='text-sm mb-3 lg:text-lg '>Kompletny system przeznaczony do budowy okien, drzwi balkonowych i drzwi wejściowych.</p>
            </div>
        </div>
        <div className='p-2'>
            <p className='text-sm mb-3 xl:px-20 lg:text-lg'>System wykorzystuje koncepcję projektową opartą na prostych, wyrazistych konturach, które nadają ton współczesnej architekturze. Szeroki wybór dopasowanych listew przyszybowych stanowi kontynuację konsekwentnej stylistyki wyglądu zewnętrznego od strony pomieszczenia. Niska wysokość złożenia ościeżnicy i skrzydła zwiększa ilość światła dostającego się do wnętrza.</p>
            <div className='grid grid-cols-1 xl:grid-cols-2'>
                <div style={cardStyle} className='w-full h-80 bg-contain bg-center bg-no-repeat mb-2'></div>
                <div className='flex flex-col justify-center'>
                    <p className='text-sm mb-3 lg:text-lg'>GEALAN-LINEAR® może być zastosowany zarówno w obiektach nowobudowanych jak i tych poddanych renowacji. Uniwersalna przylga w skrzydle umożliwia zastosowanie klasycznego klockowania, szklenia statycznego na sucho STV® oraz klejenia na mokro.</p>
                    <p className='text-sm mb-3 lg:text-lg'>GEALAN-LINEAR® to kompletny system przeznaczony do budowy okien, drzwi balkonowych i wejściowych.</p>
                    <p className='text-sm mb-3 lg:text-lg'>GEALAN-LINEAR® cechuje wizualna perfekcja, proste, oszczędne kontury i bezkompromisowa nowoczesność. Smukłe, eleganckie profile robią niesamowite wrażenie. System idealnie wpisuje się w aktualne trendy. Zapewnia dokładnie taki efekt, jakiego oczekują inwestorzy - proste, minimalistyczne okna.</p>
                </div>
            </div>
        </div>
        <FooterContact/>
        <Footer/>
    </div>
    </>
  )
}

export default Gealanlinear