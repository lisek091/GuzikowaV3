import Nav from '@/components/noweWersje/nav/Nav'
import React,{useState} from 'react'
const PE78NHLPlywajace = () => {

  const [select,setSelect] = useState(true)
  const handleClick = () =>{
    setSelect(!select)
  }

  const backgroundImagePE78 = "/PE96.png"
  const cardStyle = {
    backgroundImage: `url(${backgroundImagePE78})`,
  };
  return (
    <div className='bg-slate-100' >
            <Nav/>
        <div className='text-slate-100'>.</div> 
        <div className='text-white mt-10'>.</div>
      <p className='text-4xl justify-center flex'>PE78NHI - drzwi z płaszczem pływającym</p>
      <div className='grid lg:grid-cols-2 grid-cols-1 gap-4 p-2'>
            <div style={cardStyle} className='w-full bg-contain bg-center bg-no-repeat h-96 sm:h-[32rem] mt-8'></div>
          <div>
            <div className='flex justify-center'>
              <button onClick={handleClick} className={`mx-8 my-2 ${select ? "underline font-semibold":""}`}>CHARAKTERYSTYKA</button>
              <button onClick={handleClick} className={`mx-8 my-2  ${select ? "":"underline font-semibold"}`}>PARAMETRY TECHNICZNE</button>
            </div>
            {select ? (<div className='text-lg px-4'>
                <p className='border-y-2 border-orange-700'>Wariant systemu PE78NHI przeznaczony do wykonywania drzwi o specjalnej konstrukcji, która pozwala na uzyskanie jednolitej płaszczyzny skrzydła drzwiowego.</p>
                <ul className='list-disc'>
                  <li className='my-2'>bardzo dobre właściwości izolacyjne dzięki panelowi pływającemu umieszczonemu od strony zewnętrznej w trzykomorowej konstrukcji profili</li>
                  <li className='border-y-2 border-orange-700 my-2'>redukcja odkształceń skrzydła podczas zmian temperatury</li>
                  <li className='border-b-2 border-orange-700 my-2'>różne warianty izolacyjności termicznej, w zależności od zastosowanych wkładów izolacyjnych: Ponzio PE78n, PE78N+, PE78NHI</li>
                  <li className='border-b-2 border-orange-700 my-2'>możliwość wykonywania konstrukcji o dużych gabarytach</li>
                  <li className='border-b-2 border-orange-700 my-2'>profilowane przekładki termiczne</li>
                  <li className='border-b-2 border-orange-700 my-2'>skrzydła drzwi zlicowane z ościeżnicą</li>
                  <li className='border-b-2 border-orange-700 my-2'>specjalnie zaprojektowane kompatybilne profile umożliwiające połączenie drzwi z witryną</li>
                  <li className='border-b-2 border-orange-700 my-2'>wiele sposobów połączeń narożnych</li>
                  <li className='border-b-2 border-orange-700 my-2'>szeroka gama pochwytów</li>
                  <li className='my-2'>możliwości zastosowania nowoczesnych systemów kontroli dostępu</li>
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
                  <p className="font-light">L1400 x H 2500 mm</p>
                  </li>
                  <li className='border-b-2 border-orange-700'>Maksymalna waga skrzydła
                  <p className="font-light">210 kg</p>
                  </li>
                  <li className='border-b-2 border-orange-700'>Wypełnienia
                  <p className="font-light">Panel 75 lub 78 mm</p>
                  </li>
                  <li className='border-b-2 border-orange-700'>Przepuszczalność powietrza
                  <p className="font-light">klasa 3</p>
                  </li>
                  <li className='border-b-2 border-orange-700'>Wodoszczelność
                  <p className="font-light">klasa 9A</p>
                  </li>
                  <li className='border-b-2 border-orange-700'>Odporność na obciążenie wiatrem
                  <p className="font-light">klasa C2/B3</p>
                  </li>
                  <li className='border-b-2 border-orange-700'>Izolacyjność termiczna
                  <p className="font-light">Ud = 0,82 W/m2K (obliczono dla drzwi: L 1230 x H 2180 mm, Up = 0,45 W/m2K, panel izolacyjny).</p>
                  </li>
                  <li className='border-b-2 border-orange-700'>Sposoby wykończenia powierzchni
                  <p className="font-light">Malowanie proszkowe farbami poliestrowymi spełniające wymogi Qualicoat, do wyboru kolory z palety RAL; anodowanie naturalne i w kolorach - spełniające wymogi Qualanod; lakierowanie na „kolor” drewna - wykończenie powierzchni spełnia wysokie wymagania antykorozyjne.</p>
                  </li>
                  <li className='border-b-2 border-orange-700'>Odporność na włamanie
                  <p className="font-light">Klasa RC2 wg PN-EN 1627</p>
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
    </div>
  )
}

export default PE78NHLPlywajace