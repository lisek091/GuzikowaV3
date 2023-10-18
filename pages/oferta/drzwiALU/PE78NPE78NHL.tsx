import Footer from '@/components/mainpage/Footer'
import Nav from '@/components/noweWersje/nav/Nav'
import React,{useState} from 'react'
const PE78NPE78NHL = () => {

  const [select,setSelect] = useState(true)
  const handleClick = () =>{
    setSelect(!select)
  }
// TUTAJ BEDA 2 ZDJECIA !!!!

  const backgroundImagePE78 = "/PRZESUWNEPE78NHI_.png"
  const cardStyle = {
    backgroundImage: `url(${backgroundImagePE78})`,
  };
  return (
    <div className='bg-slate-100 min-h-screen flex flex-col ' >
            <Nav/>
        <div className='text-slate-100'>.</div> 
        <div className='text-white mt-10'>.</div>
      <p className='text-4xl justify-center flex'>PE78N/PE78NHI - drzwi</p>
      <div className='grid lg:grid-cols-2 grid-cols-1 gap-4 p-2'>
            <div style={cardStyle} className='w-full bg-contain bg-center bg-no-repeat h-96 sm:h-[32rem] mt-8'></div>
          <div>
            <div className='flex justify-center'>
              <button onClick={handleClick} className={`mx-8 my-2 ${select ? "underline font-semibold":""}`}>CHARAKTERYSTYKA</button>
              <button onClick={handleClick} className={`mx-8 my-2  ${select ? "":"underline font-semibold"}`}>PARAMETRY TECHNICZNE</button>
            </div>
            {select ? (<div className='text-lg px-4'>
                <p className='border-y-2 border-orange-700'>Trzykomorowy system izolowany termicznie przeznaczony do wykonywania konstrukcji drzwiowych.</p>
                <ul className='list-disc'>
                  <li className='my-2'>konstrukcja profili współpłaszczyznowych (luz wrębowy - 18 mm)</li>
                  <li className='border-y-2 border-orange-700 my-2'>listwy przyszybowe do rowka w standardzie Euro</li>
                  <li className='border-b-2 border-orange-700 my-2'>profilowane przekładki termiczne o szerokości 34 mm</li>
                  <li className='border-b-2 border-orange-700 my-2'>łatwe połączenie drzwi z witryną za pomocą specjalnie zaprojektowanych, kompatybilnych profili</li>
                  <li className='border-b-2 border-orange-700 my-2'>skrzydła drzwi zlicowane z ościeżnicą</li>
                  <li className='border-b-2 border-orange-700 my-2'>możliwość wykonywania konstrukcji o dużych gabarytach</li>
                  <li className='border-b-2 border-orange-700 my-2'>wiele połączeń narożnych</li>
                  <li className='border-b-2 border-orange-700 my-2'>duża swoboda w doborze różnego rodzaju okuć</li>
                  <li className='my-2'>różne warianty izolacyjności termicznej, w zależności od zastosowanych wkładów izolacyjnych: PE78N+, PE78NHI, PE78NHI+</li>
                </ul>
                <div className='mt-28'></div>
            </div>) :  (<div className='px-4'>
                <ul className='list-disc text-lg font-semibold '>
                  <li className='border-y-2 border-orange-700'>Kształtowniki aluminiowe
                  <p className="font-light">EN AW-6060 T66 wg PN-EN 573-3 stan T66 wg PN-EN 515 Al Mg Si 0,5 F22 wg norm DIN 1725 T1, DIN 17615 T1</p>
                  </li>
                  <li className='border-b-2 border-orange-700'>Uszczelki
                  <p className="font-light">Z kauczuku syntetycznego EPDM wg normy 7863 i normy wykonawczej wg ISO 3302-01, E2</p>
                  </li>
                  <li className='border-b-2 border-orange-700'>Głębokość ościeżnicy
                  <p className="font-light">78 mm</p>
                  </li>
                  <li className='border-b-2 border-orange-700'>Głębokość skrzydła
                  <p className="font-light">78 mm</p>
                  </li>
                  <li className='border-b-2 border-orange-700'>Maksymalne wymiary skrzydła
                  <p className="font-light">L 1400 x H 3000 mm</p>
                  </li>
                  <li className='border-b-2 border-orange-700'>Maksymalna waga skrzydła
                  <p className="font-light">280 kg</p>
                  </li>
                  <li className='border-b-2 border-orange-700'>Wypełnienia
                  <p className="font-light">Szyby pojedyncze, zespolone lub panele nieprzezierne o grubości: 17 - 61 mm</p>
                  </li>
                  <li className='border-b-2 border-orange-700'>Przepuszczalność powietrza
                  <p className="font-light">klasa 4</p>
                  </li>
                  <li className='border-b-2 border-orange-700'>Wodoszczelność
                  <p className="font-light">1050Pa</p>
                  </li>
                  <li className='border-b-2 border-orange-700'>Odporność na obciążenie wiatrem
                  <p className="font-light">klasa C2/B3</p>
                  </li>
                  <li className='border-b-2 border-orange-700'>Izolacyjność termiczna
                  <p className="font-light">dla PE78N: Uf od 2,1 W/m2K, Ud od 1,1 W/m2K (obliczono dla drzwi: L 1230 x H 2180 mm, Ug = 0,5 W/m2K, szyba dwukomorowa)<br/> dla PE78NHI: Uf od 1,5 W/m2K, Ud = 0,93 W/m2K (obliczono dla drzwi: L 1230 x H 2180 mm, Ug = 0,5 W/m2K, szyba dwukomorowa)</p>
                  </li>
                  <li className='border-b-2 border-orange-700'>Sposoby wykończenia powierzchni
                  <p className="font-light">Malowanie proszkowe farbami poliestrowymi spełniające wymogi Qualicoat, do wyboru kolory z palety RAL; anodowanie naturalne i w kolorach - spełniające wymogi Qualanod; lakierowanie na „kolor” drewna - wykończenie powierzchni spełnia wysokie wymagania antykorozyjne.</p>
                  </li>
                  <li className='border-b-2 border-orange-700'>Odporność na włamanie
                  <p className="font-light">klasa RC2, RC3 wg PN - EN 1627</p>
                  </li>
                  <li className=''>Dopuszczenia i świadectwa jakości
                  <p className="font-light">Wstępne badania typu wg PN-EN 14351-1 + A2</p>
                  <p className="font-light">Produkt posiada certyfikat Bronze Cradle to Cradle Certified Version 3.1</p>
                  <p className='text-xs font-light'>(Cradle to Cradle Certified® jest zastrzeżonym znakiem towarowym produktów Cradle to Cradle Products Innovation Institute)</p>
                  </li>
                </ul>
            </div>)}
          </div>
      </div>
      <div className='mt-auto w-full'>
          <Footer/>
      </div>
    </div>
  )
}

export default PE78NPE78NHL