import Footer from '@/components/mainpage/Footer'
import Nav from '@/components/noweWersje/nav/Nav'
import React,{useState} from 'react'
const PE68PE78N = () => {

  const [select,setSelect] = useState(true)
  const handleClick = () =>{
    setSelect(!select)
  }

  const backgroundImagePE78 = "/PRZESUWNEPE78N.png"
  const cardStyle = {
    backgroundImage: `url(${backgroundImagePE78})`,
  };
  return (
    <div className='bg-slate-100 min-h-screen flex flex-col' >
      <Nav/>
        <div className='text-slate-100'>.</div> 
        <div className='text-white mt-10'>.</div>
      <p className='text-4xl justify-center flex'>PE68/PE78N - drzwi płaszczowe</p>
      <div className='grid lg:grid-cols-2 grid-cols-1 gap-4 p-2'>
            <div style={cardStyle} className='w-full bg-contain bg-center bg-no-repeat h-96 sm:h-[32rem] mt-8'></div>
          <div>
            <div className='flex justify-center'>
              <button onClick={handleClick} className={`mx-8 my-2 ${select ? "underline font-semibold":""}`}>CHARAKTERYSTYKA</button>
              <button onClick={handleClick} className={`mx-8 my-2  ${select ? "":"underline font-semibold"}`}>PARAMETRY TECHNICZNE</button>
            </div>
            {select ? (<div className='text-lg px-4'>
                <p className='border-y-2 border-orange-700'>Rozwiązanie przeznaczone do wykonywania drzwi o specjalnej konstrukcji, która pozwala na uzyskanie jednolitej płaszczyzny skrzydła drzwiowego i ościeżnicy.</p>
                <ul className='list-disc'>
                  <li className='my-2'>system wzbogacony o dodatkowe uszczelki centralne, dzięki którym osiąga jeszcze lepsze parametry fizyczne</li>
                  <li className='border-y-2 border-orange-700 my-2'>lekka i sztywna konstrukcja drzwi</li>
                  <li className='border-b-2 border-orange-700 my-2'>bogata paleta wzorów paneli</li>
                  <li className='border-b-2 border-orange-700 my-2'>jednolity kształt drzwi</li>
                  <li className='border-b-2 border-orange-700 my-2'>niewidoczne elementy konstrukcji</li>
                  <li className='border-b-2 border-orange-700 my-2'>estetyczny wygląd, nowoczesny design</li>
                  <li className='border-b-2 border-orange-700 my-2'>możliwość zastosowania zawiasów: nawierzchniowych, ukrytych lub rolkowych</li>
                  <li className='my-2'>możliwość zastosowania systemów wspomagających użytkowanie, takie jak czytnik linii papilarnych, klawiatury kodowe, specjalne systemy otwierania i zamykania oraz wiele innych</li>
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
                  <p className="font-light">L 1350 x H 2500 mm</p>
                  </li>
                  <li className='border-b-2 border-orange-700'>Maksymalna waga skrzydła
                  <p className="font-light">210 kg</p>
                  </li>
                  <li className='border-b-2 border-orange-700'>Wypełnienia
                  <p className="font-light">Panel izolacyjny 30 - 78 mm</p>
                  </li>
                  <li className='border-b-2 border-orange-700'>Przepuszczalność powietrza
                  <p className="font-light">klasa 4</p>
                  </li>
                  <li className='border-b-2 border-orange-700'>Wodoszczelność
                  <p className="font-light">1050 Pa</p>
                  </li>
                  <li className='border-b-2 border-orange-700'>Odporność na obciążenie wiatrem
                  <p className="font-light">klasa C5</p>
                  </li>
                  <li className='border-b-2 border-orange-700'>Izolacyjność termiczna
                  <p className="font-light">Uf ab 1,7 W/m2K, Ud = 0,79 W/m2K (obliczono dla drzwi: L 1230 x H 2180 mm, Ug = 0,45 W/m2K, panel izolacyjny).</p>
                  </li>
                  <li className='border-b-2 border-orange-700'>Sposoby wykończenia powierzchni
                  <p className="font-light">Malowanie proszkowe farbami poliestrowymi spełniające wymogi Qualicoat, do wyboru kolory z palety RAL; anodowanie naturalne i w kolorach - spełniające wymogi Qualanod; lakierowanie na „kolor” drewna - wykończenie powierzchni spełnia wysokie wymagania antykorozyjne.</p>
                  </li>
                  <li className='border-b-2 border-orange-700'>Odporność na włamanie
                  <p className="font-light">Klasa RC4 wg PN-EN 1627</p>
                  </li>
                  <li className=''>Dopuszczenia i świadectwa jakości
                  <p className="font-light">Badania typu wg PN-EN 14351-1 + A1</p>
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

export default PE68PE78N