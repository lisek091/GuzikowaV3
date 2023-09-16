import Nav from '@/components/noweWersje/nav/Nav'
import React,{useState} from 'react'
const Pe96HLPlaszczowe = () => {

  const [select,setSelect] = useState(true)
  const handleClick = () =>{
    setSelect(!select)
  }

  const backgroundImagePE78 = "/PE50.png"
  const cardStyle = {
    backgroundImage: `url(${backgroundImagePE78})`,
  };
  return (
    <div className='bg-slate-100'>
      <Nav/>
        <div className='text-slate-100'>.</div> 
        <div className='text-white mt-10'>.</div>
      <p className='text-4xl justify-center flex'>PE96HI - drzwi płaszczowe</p>
      <div className='grid lg:grid-cols-2 grid-cols-1 gap-4 p-2'>
            <div style={cardStyle} className='w-full bg-contain bg-center bg-no-repeat h-96 sm:h-[32rem] mt-8'></div>
          <div>
            <div className='flex justify-center'>
              <button onClick={handleClick} className={`mx-8 my-2 ${select ? "underline font-semibold":""}`}>CHARAKTERYSTYKA</button>
              <button onClick={handleClick} className={`mx-8 my-2  ${select ? "":"underline font-semibold"}`}>PARAMETRY TECHNICZNE</button>
            </div>
            {select ? (<div className='text-lg px-4'>
                <p className='border-y-2 border-orange-700'>System dla najbardziej wymagających użytkowników, charakteryzujący się bardzo wysoką izolacyjnością termiczną</p>
                <ul className='list-disc'>
                  <li className='my-2'>bardzo dobre parametry izolacyjne dzięki zastosowaniu przekładek termicznych o szerokości 50 mm</li>
                  <li className='border-y-2 border-orange-700 my-2'>redukcja odkształceń skrzydła podczas zmian temperatury dzięki panelowi pływającemu, który oddzielono od komory zewnętrznej skrzydła drzwiowego za pomocą specjalnych punktowych izolatorów termicznych</li>
                  <li className='border-b-2 border-orange-700 my-2'>bardzo wysoka izolacyjność termiczna Uf od 1,2 W/(m2K)</li>
                  <li className='border-b-2 border-orange-700 my-2'>ukryte odwodnienia skrzydła drzwiowego</li>
                  <li className='border-b-2 border-orange-700 my-2'>wypełnienie panelowe dwustronne o grubości 96 mm z blachami aluminiowymi o grubości 3 mm</li>
                  <li className='border-b-2 border-orange-700 my-2'>nowa uszczelka domykowa posiada duży zakres pracy, niweluje błędy wykonawcze i montażowe</li>
                  <li className='border-b-2 border-orange-700 my-2'>dzięki zastosowaniu uszczelki centralnej, uzyskujemy bardzo dobre parametry wodoszczelności oraz infiltracji powietrza</li>
                  <li className='border-b-2 border-orange-700 my-2'>możliwość wykonania niewidocznych odwodnień skrzydła drzwiowego</li>
                  <li className='border-b-2 border-orange-700 my-2'>dekoracyjne wykończenie zależy od rodzaju wybranego panelu</li>
                  <li className='border-b-2 border-orange-700 my-2'>zamki i blachy zaczepowe montowane w przekładce termicznej zlicowane z uszczelką centralną</li>
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
                  <p className="font-light">96 mm</p>
                  </li>
                  <li className='border-b-2 border-orange-700'>Głębokość skrzydła
                  <p className="font-light">96 mm</p>
                  </li>
                  <li className='border-b-2 border-orange-700'>Maksymalne wymiary skrzydła
                  <p className="font-light">L 1400 x H 2500 mm</p>
                  </li>
                  <li className='border-b-2 border-orange-700'>Maksymalna waga skrzydła
                  <p className="font-light">200 kg</p>
                  </li>
                  <li className='border-b-2 border-orange-700'>Wypełnienia
                  <p className="font-light">Panel izolacyjny dwustronny o grubości: 96 mm</p>
                  </li>
                  <li className='border-b-2 border-orange-700'>Przepuszczalność powietrza
                  <p className="font-light ">4</p>
                  </li>
                  <li className='border-b-2 border-orange-700'>Wodoszczelność
                  <p className="font-light">E750</p>
                  </li>
                  <li className='border-b-2 border-orange-700'>Odporność na obciążenie wiatrem
                  <p className="font-light">C2/B2</p>
                  </li>
                  <li className='border-b-2 border-orange-700'>Izolacyjność termiczna
                  <p className="font-light">Uf od 1,2 W/m2K, Ud = 0,67 W/m2K (obliczono dla drzwi: L 1230 x H 2180 mm, Ug = 0,45 W/m2K, panel izolacyjny).</p>
                  </li>
                  <li className='border-b-2 border-orange-700'>Sposoby wykończenia powierzchni
                  <p className="font-light">Malowanie proszkowe farbami poliestrowymi spełniające wymogi Qualicoat, do wyboru kolory z palety RAL; anodowanie naturalne i w kolorach - spełniające wymogi Qualanod; lakierowanie na „kolor” drewna - wykończenie powierzchni spełnia wysokie wymagania antykorozyjne.</p>
                  </li>
                  <li className=''>Dopuszczenia i świadectwa jakości
                  <p className="font-light">badania typu wg PN-EN 14351-1 + A2</p>
                  </li>
                </ul>
            </div>)}
          </div>
      </div>
    </div>
  )
}

export default Pe96HLPlaszczowe