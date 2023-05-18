import React,{useState} from 'react'
const Pe78nhl = () => {

  const [select,setSelect] = useState(true)
  const handleClick = () =>{
    setSelect(!select)
  }

  const backgroundImagePE78 = "/PE78N_okno_RC4.jpg"
  const cardStyle = {
    backgroundImage: `url(${backgroundImagePE78})`,
  };
  return (
    <div id='wraper' >
      <div className='grid sm:grid-cols-2 grid-cols-1 gap-4 '>
            <div style={cardStyle} className='w-full bg-contain bg-center bg-no-repeat h-96 sm:h-auto mt-32'></div>
          <div>
            <div className='flex justify-center'>
              <button onClick={handleClick} className={`mx-8 my-2 ${select ? "underline font-semibold":""}`}>CHARAKTERYSTYKA</button>
              <button onClick={handleClick} className={`mx-8 my-2  ${select ? "":"underline font-semibold"}`}>PARAMETRY TECHNICZNE</button>
            </div>
            {select ? (<div className='text-lg px-4'>
                <p className='border-y-2 border-blue-300'>System o trzykomorowej konstrukcji przeznaczony do budowy ścianek stałych i okien o podwyższonej odporności na włamanie w klasie RC4.</p>
                <ul className='list-disc'>
                  <li className='my-2'>Posiada szereg zabezpieczeń utrudniających włamanie oraz wydłużających czas potrzebny do ich sforsowania m.in.:</li>
                  <li className='ml-6 font-light'>wzmocniona konstrukcja kształtowników</li>
                  <li className='ml-6 font-light'>wzmocnione listwy przyszybowe</li>
                  <li className='ml-6 font-light'>klamkę z kluczem</li>
                  <li className='ml-6 font-light'>zabezpieczenie przed rozwierceniem klamki i elementów napędowych okucia</li>
                  <li className='border-y-2 border-blue-300 my-2'>brak konieczności stosowania krat lub rolet antywłamaniowych</li>
                  <li className='border-b-2 border-blue-300 my-2'>wysokość przylgi 10mm pozwala na zastosowanie okuć o zwiększonej wytrzymałości</li>
                  <li className='border-b-2 border-blue-300 my-2'>zakres szklenia do 78mm pozwala na zastosowanie wytrzymałych pakietów szkła w klasie minimum P6B</li>
                  <li className='border-b-2 border-blue-300 my-2'>szyba nie jest klejona do profili, co zdecydowanie ułatwia i przyspiesza montaż konstrukcji</li>
                  <li className='border-b-2 border-blue-300 my-2'>wysoka izolacyjność termiczna Uw do 0,9 W/m2K</li>
                  <li className='my-2'>wizualnie okno nie różni się od okna bezklasowego, co korzystnie wpływa na estetykę wyglądu całego budynku</li>
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
                  <p className="font-light">PE68 - 96mm, PE78N - 106mm</p>
                  </li>
                  <li className='border-b-2 border-blue-300'>Głębokość skrzydła
                  <p className="font-light">PE68 - 106mm, PE78N - 116mm</p>
                  </li>
                  <li className='border-b-2 border-blue-300'>Maksymalne wymiary skrzydła
                  <p className="font-light">L 1400 x H 2200 mm</p>
                  </li>
                  <li className='border-b-2 border-blue-300'>Maksymalna waga skrzydła
                  <p className="font-light">170 kg</p>
                  </li>
                  <li className='border-b-2 border-blue-300'>Wypełnienia
                  <p className="font-light">szyby zespolone o grubości: ościeżnica: 41 - 68 mm, skrzydło: 51 - 78 mm</p>
                  </li>
                  <li className='border-b-2 border-blue-300'>Przepuszczalność powietrza
                  <p className="font-light">klasa 4</p>
                  </li>
                  <li className='border-b-2 border-blue-300'>Wodoszczelność
                  <p className="font-light">klasa E1500</p>
                  </li>
                  <li className='border-b-2 border-blue-300'>Odporność na obciążenie wiatrem
                  <p className="font-light">klasa C5</p>
                  </li>
                  <li className='border-b-2 border-blue-300'>Sposoby wykończenia powierzchni
                  <p className="font-light">Malowanie proszkowe farbami poliestrowymi spełniające wymogi Qualicoat, do wyboru kolory z palety RAL; anodowanie naturalne i w kolorach - spełniające wymogi Qualanod; lakierowanie na „kolor” drewna - wykończenie powierzchni spełnia wysokie wymagania antykorozyjne.</p>
                  </li>
                  <li className='border-b-2 border-blue-300'>Odporność na włamanie
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

export default Pe78nhl