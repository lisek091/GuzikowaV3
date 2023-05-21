import React,{useState} from 'react'
const Pe78nhl = () => {

  const [select,setSelect] = useState(true)
  const handleClick = () =>{
    setSelect(!select)
  }

  const backgroundImagePE78 = "/PE78NHL.png"
  const cardStyle = {
    backgroundImage: `url(${backgroundImagePE78})`,
  };
  return (
    <div id='wraper' >
      <div className='grid lg:grid-cols-2 grid-cols-1 gap-4 '>
            <div style={cardStyle} className='w-full bg-contain bg-center bg-no-repeat h-96 sm:h-[32rem] mt-8'></div>
          <div>
            <div className='flex justify-center'>
              <button onClick={handleClick} className={`mx-8 my-2 ${select ? "underline font-semibold":""}`}>CHARAKTERYSTYKA</button>
              <button onClick={handleClick} className={`mx-8 my-2  ${select ? "":"underline font-semibold"}`}>PARAMETRY TECHNICZNE</button>
            </div>
            {select ? (<div className='text-lg px-4'>
                <p className='border-y-2 border-blue-300'>System o trzykomorowej konstrukcji profili z rowkiem okuciowym w standardzie Euro oraz rowkiem okuciowym stosowanym w oknach i drzwiach balkonowych z profili PVC lub drewnianych. Jest przeznaczony do konstrukcji okien o bardzo wysokich wymogach izolacyjności termicznej.</p>
                <ul className='list-disc'>
                  <li className='border-b-2 border-blue-300 my-2'>wysoka izolacyjność termiczna - dzięki zastosowaniu wielokomorowej przekładki termicznej 42 mm oraz dwukomponentowej uszczelki centralnej</li>
                  <li className='border-b-2 border-blue-300 my-2'>możliwość wykonywania konstrukcji o dużych gabarytach</li>
                  <li className='border-b-2 border-blue-300 my-2'>duża swoboda w doborze różnego rodzaju okuć</li>
                  <li className='border-b-2 border-blue-300 my-2'>możliwość zlicowania skrzydeł okien z ościeżnicą (jedna płaszczyzna po stronie zewnętrznej)</li>
                  <li className='border-b-2 border-blue-300 my-2'>możliwość gięcia profili</li>
                  <li className='border-b-2 border-blue-300 my-2'>wiele sposobów połączeń narożnych</li>
                  <li className='border-b-2 border-blue-300 my-2'>różne warianty izolacyjności termicznej, w zależności od zastosowanych wkładów izolacyjnych: PE78N+, PE78NHI, PE78NHI+</li>
                  <li className='border-b-2 border-blue-300 my-2'>w wersji najcieplejszej PE78NHI+ z zamknięciem komory podszybowej i wkładem izolacyjnym z aerożelu, współczynnik przenikania ciepła Uf od 0,7 W/m2K</li>
                  <li className='my-2'>możliwość tworzenia wielu wariantów okien np. rozwierano-uchylne, otwierane na zewnątrz, ukryte skrzydło itp.</li>
                </ul>
                <div className='mt-28'></div>
            </div>) :  (<div className='px-4'>
                <ul className='list-disc text-lg font-semibold '>
                  <li className='border-y-2 border-blue-300'>Kształtowniki aluminiowe
                  <p className="font-light">wykonane ze stopu aluminium EN AW-6060 PN-EN 573-3 stan T66 wg PN-EN 515 i spełniają wymaganie PN-EN 12020-1</p>
                  </li>
                  <li className='border-b-2 border-blue-300'>Uszczelki
                  <p className="font-light">z kauczuku syntetycznego EPDM wg normy PN-EN 12365-1 oraz z TPE wg DIN 16941R3</p>
                  </li>
                  <li className='border-b-2 border-blue-300'>Głębokość ościeżnicy
                  <p className="font-light">78 mm</p>
                  </li>
                  <li className='border-b-2 border-blue-300'>Głębokość skrzydła
                  <p className="font-light">86 mm</p>
                  </li>
                  <li className='border-b-2 border-blue-300'>Maksymalne wymiary skrzydła
                  <p className="font-light">L 1300 x H 3000 mm</p>
                  </li>
                  <li className='border-b-2 border-blue-300'>Maksymalna waga skrzydła
                  <p className="font-light">200 kg</p>
                  </li>
                  <li className='border-b-2 border-blue-300'>Wypełnienia
                  <p className="font-light">Szyby pojedyncze, zespolone lub panele nieprzezierne o grubość: ościeżnica: 17-61 mm, skrzydło: 17-69 mm</p>
                  </li>
                  <li className='border-b-2 border-blue-300'>Przepuszczalność powietrza
                  <p className="font-light">klasa 4</p>
                  </li>
                  <li className='border-b-2 border-blue-300'>Wodoszczelność
                  <p className="font-light">klasa E1650</p>
                  </li>
                  <li className='border-b-2 border-blue-300'>Odporność na obciążenie wiatrem
                  <p className="font-light">klasa C5</p>
                  </li>
                  <li className='border-b-2 border-blue-300'>Izolacyjność termiczna
                  <p className="font-light">Uf od 0,9 W/m2K, Uw = 0,74 W/m2K (obliczono dla okna: L 1480 x H 2180 mm, Ug = 0,5 W/m2K, szyba dwukomorowa).</p>
                  </li>
                  <li className='border-b-2 border-blue-300'>Sposoby wykończenia powierzchni
                  <p className="font-light">Malowanie proszkowe farbami poliestrowymi spełniające wymogi Qualicoat, do wyboru kolory z palety RAL; anodowanie naturalne i w kolorach - spełniające wymogi Qualanod; lakierowanie na „kolor” drewna - wykończenie powierzchni spełnia wysokie wymagania antykorozyjne.</p>
                  </li>
                  <li className='border-b-2 border-blue-300'>Odporność na włamanie
                  <p className="font-light">klasa RC2, RC3 wg PN - EN 1627</p>
                  </li>
                  <li className=''>Dopuszczenia i świadectwa jakości
                  <p className="font-light">Wstępne badania typu wg PN-EN 14351-1 + A1.</p>
                  </li>
                </ul>
            </div>)}
          </div>
      </div>
    </div>
  )
}

export default Pe78nhl