import React, { useState } from 'react'
import Card from '@/components/products/productsUI/Card'
import Nav from '@/components/noweWersje/nav/Nav';
import Pe78 from './okna/Pe78';
import Pe78nhl from './okna/Pe78nhl';
import Pe78nslim from './okna/Pe78nslim';
import Pe96 from './okna/Pe96';
import Footer from '@/components/mainpage/Footer';
import FooterContact from '@/components/mainpage/FooterContact';
//600x1200px rozmiar obrazu
const cardData = [
    {
      title: 'PE78N ',
      additionalText1: 'Okna o odporności na włamanie w klasie RC4',
      additionalText2: 'Posiada szereg zabezpieczeń utrudniających włamanie oraz wydłużających czas potrzebny do ich sforsowania',
      additionalText3: 'Wysoka izolacyjność termiczna Uw< 0,9 W/m2K',
      backgroundImage:`"/PE78N.png"`
    },
    {
      title: 'PE78NHI',
      additionalText1: 'Jest przeznaczony do konstrukcji okien o bardzo wysokich wymogach izolacyjności termicznejS',
      additionalText2: 'Wysoka izolacyjność termiczna dzięki zastosowaniu wielokomorowej przekładki termicznej 42 mm oraz dwukomponentowej uszczelki centralnej',
      additionalText3: '',
      backgroundImage:`"/PE78NHL.png"`
    },
    {
      title: 'PE96',
      additionalText1: 'System o trzykomorowej konstrukcji profili z rowkiem okuciowym w standardzie Euro.',
      additionalText2: 'Jest przeznaczony do konstrukcji okien o bardzo wysokich wymogach izolacyjności termicznej.',
      additionalText3: 'Możliwość wykonywania konstrukcji o dużych gabarytach',
      backgroundImage:`"/PE96.png"`
    },
    {
        title: 'PE78N - slim',
        additionalText1: 'PE78N slim zostały zaprojektowane z myślą o estetycznych wnętrzach z dużymi przeszkleniami',
        additionalText2: 'Słupek ruchomy o szerokości 90mm doskonale wpisuje się w charakter systemu',
        additionalText3: 'Różne warianty izolacyjności termicznej, w zależności od zastosowanych wkładów izolacyjnych: PE78N,PE78NHI',
        backgroundImage:`"/PE78SLIM.png"`
      },
  ];

const Okna = () => {
  return (
    <>
    <div className='bg-slate-100'>
    <Nav/>
    <div className='p-4'>
        <div className='text-white mt-20'>.</div>
            <Pe78/>
            <Pe78nhl/>
            <Pe78nslim/>
            <Pe96/>
    </div>
    <FooterContact/>
    <Footer/>
    </div>
    </>
  )
}

export default Okna

/*
<div className='hidden lg:block'>
            <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-1 mx-2 sm:mx-4 lg:mx-0 lg:ml-6 ">
            {cardData.map((card, index) => (
              <div className="max-h-[32rem] overflow-hidden mb-4" key={index}>
                <Card
                    backgroundImage={card.backgroundImage}
                    hovered={hoveredCard === index}
                    onMouseEnter={() => handleCardMouseEnter(index)}
                    onMouseLeave={handleCardMouseLeave}
                    >
                            <h2 className="text-lg font-bold">{card.title}</h2>
                            <div className='bg-center bg-contain bg-no-repeat h-48' style={{backgroundImage: `url(${card.backgroundImage})`}}></div>
                            {hoveredCard === index && (
                                
                                <ul className='list-disc text-sm'>
                                  <li className='pl-4'>{card.additionalText1}</li>
                                    <li className='pl-4'>{card.additionalText2}</li>
                                    <li className='pl-4'>{card.additionalText3}</li>
                                </ul>
                                
                                )}
                </Card>
                </div>
            ))}
        </div>
      </div>
      pozostalosc po eksperymencie 
*/