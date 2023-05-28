import React,{useState} from 'react'
const Pe96 = () => {

  const [select,setSelect] = useState(true)
  const handleClick = () =>{
    setSelect(!select)
  }

  const backgroundImagePE78 = "/PE96.png"
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
                <p className='border-y-2 border-orange-700'>System o trzykomorowej konstrukcji profili z rowkiem okuciowym w standardzie Euro. Jest przeznaczony do konstrukcji okien o bardzo wysokich wymogach izolacyjności termicznej.</p>
                <ul className='list-disc'>
                  <li className='my-2'>wysoką izolacyjność termiczną gwarantują wielokomorowe przekładki termiczne o szerokości 62 mm oraz dwukomponentowa uszczelka centralna</li>
                  <li className='border-y-2 border-orange-700 my-2'>możliwość wykonywania konstrukcji o dużych gabarytach</li>
                  <li className='border-b-2 border-orange-700 my-2'>możliwość zlicowania skrzydeł okien z ościeżnicą (jedna płaszczyzna po stronie zewnętrznej)</li>
                  <li className='border-b-2 border-orange-700 my-2'>wiele sposobów połączeń narożnych</li>
                  <li className='my-2'>listwy przyszybowe o wysokości 22 mm i 28 mm</li>
                </ul>
                <div className='mt-28'></div>
            </div>) :  (<div className='px-4'>
                <ul className='list-disc text-lg font-semibold '>
                  <li className='border-y-2 border-orange-700'>Kształtowniki aluminiowe
                  <p className="font-light">wykonane ze stopu aluminium EN AW-6060 PN-EN 573-3 stan T66 wg PN-EN 515 i spełniają wymaganie PN-EN 12020-1</p>
                  </li>
                  <li className='border-b-2 border-orange-700'>Uszczelki
                  <p className="font-light">z kauczuku syntetycznego EPDM wg normy PN-EN 12365-1 oraz z TPE wg DIN 16941R3</p>
                  </li>
                  <li className='border-b-2 border-orange-700'>Głębokość ościeżnicy
                  <p className="font-light">96 mm</p>
                  </li>
                  <li className='border-b-2 border-orange-700'>Głębokość skrzydła
                  <p className="font-light">106 mm</p>
                  </li>
                  <li className='border-b-2 border-orange-700'>Maksymalne wymiary skrzydła
                  <p className="font-light">L 1700 x H 2300 mm, L1400 x H 2800 mm</p>
                  </li>
                  <li className='border-b-2 border-orange-700'>Maksymalna waga skrzydła
                  <p className="font-light">180 kg</p>
                  </li>
                  <li className='border-b-2 border-orange-700'>Wypełnienia
                  <p className="font-light">Szyby pojedyncze, zespolone lub panele nieprzezierne o grubość: ościeżnica: 39 - 62 mm, skrzydło: 39 - 74 mm</p>
                  </li>
                  <li className='border-b-2 border-orange-700'>Przepuszczalność powietrza
                  <p className="font-light">klasa 4</p>
                  </li>
                  <li className='border-b-2 border-orange-700'>Wodoszczelność
                  <p className="font-light">klasa E1950</p>
                  </li>
                  <li className='border-b-2 border-orange-700'>Odporność na obciążenie wiatrem
                  <p className="font-light">klasa C5</p>
                  </li>
                  <li className='border-b-2 border-orange-700'>Izolacyjność termiczna
                  <p className="font-light">Uf od 0,82 W/m2K, Uw = 0,66 W/m2K (obliczono dla okna: L 1480 x H 2180 mm, Ug = 0,5 W/m2K, szyba dwukomorowa).</p>
                  </li>
                  <li className='border-b-2 border-orange-700'>Sposoby wykończenia powierzchni
                  <p className="font-light">Malowanie proszkowe farbami poliestrowymi spełniające wymogi Qualicoat, do wyboru kolory z palety RAL; anodowanie naturalne i w kolorach - spełniające wymogi Qualanod; lakierowanie na „kolor” drewna - wykończenie powierzchni spełnia wysokie wymagania antykorozyjne.</p>
                  </li>
                  <li className='border-b-2 border-orange-700'>Odporność na włamanie
                  <p className="font-light">Klasa RC4 wg PN-EN 1627</p>
                  </li>
                  <li className=''>Dopuszczenia i świadectwa jakości
                  <p className="font-light">Wstępne badania typu wg PN-EN 14351-1 + A2</p>
                  </li>
                </ul>
            </div>)}
          </div>
      </div>
    </div>
  )
}

export default Pe96