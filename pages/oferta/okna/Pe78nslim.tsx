import Footer from '@/components/mainpage/Footer'
import Nav from '@/components/noweWersje/nav/Nav'
import React,{useState} from 'react'
const Pe78nslim = () => {

  const [select,setSelect] = useState(true)
  const handleClick = () =>{
    setSelect(!select)
  }

  const backgroundImagePE78 = "/PE78SLIM.png"
  const cardStyle = {
    backgroundImage: `url(${backgroundImagePE78})`,
  };
  return (
    <div className='bg-slate-100 min-h-screen flex flex-col' >
      <Nav/>
        <div className='text-slate-100'>.</div> 
        <div className='text-white mt-10'>.</div>
      <p className='text-4xl justify-center flex'>Okna PE78 Slim</p>
      <div className='grid lg:grid-cols-2 grid-cols-1 gap-4 p-2'>
            <div style={cardStyle} className='w-full bg-contain bg-center bg-no-repeat h-96 sm:h-[32rem] mt-8'></div>
          <div>
            <div className='flex justify-center'>
              <button onClick={handleClick} className={`mx-8 my-2 ${select ? "underline font-semibold":""}`}>CHARAKTERYSTYKA</button>
              <button onClick={handleClick} className={`mx-8 my-2  ${select ? "":"underline font-semibold"}`}>PARAMETRY TECHNICZNE</button>
            </div>
            {select ? (<div className='text-lg px-4'>
                <p className='border-y-2 border-orange-700'>System o trzykomorowej konstrukcji z rowkiem okuciowym w standardzie euro.</p>
                <ul className='list-disc'>
                  <li className='my-2'>smukłe profile systemu PE78N slim zostały zaprojektowane z myślą o estetycznych wnętrzach z dużymi przeszkleniami</li>
                  <li className='border-y-2 border-orange-700 my-2'>słupek ruchomy o szerokości 90mm doskonale wpisuje się w charakter systemu</li>
                  <li className='border-b-2 border-orange-700 my-2'>możliwość zlicowania skrzydeł okien z ościeżnicą (jedna płaszczyzna po stronie zewnętrznej)</li>
                  <li className='my-2'>różne warianty izolacyjności termicznej, w zależności od zastosowanych wkładów izolacyjnych: PE78N, PE78N+, PE78NHI</li>
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
                  <p className="font-light">78 mm</p>
                  </li>
                  <li className='border-b-2 border-orange-700'>Głębokość skrzydła
                  <p className="font-light">86 mm</p>
                  </li>
                  <li className='border-b-2 border-orange-700'>Maksymalne wymiary skrzydła
                  <p className="font-light">L 1000 x H 3000 mm, L 1500 x H 1700 mm</p>
                  </li>
                  <li className='border-b-2 border-orange-700'>Maksymalna waga skrzydła
                  <p className="font-light">180 kg</p>
                  </li>
                  <li className='border-b-2 border-orange-700'>Wypełnienia
                  <p className="font-light">Szyby pojedyncze, zespolone lub panele nieprzezierne o grubości: ościeżnica: 17 - 61 mm, skrzydło: 26 - 62 mm</p>
                  </li>
                  <li className='border-b-2 border-orange-700'>Przepuszczalność powietrza
                  <p className="font-light">klasa 4</p>
                  </li>
                  <li className='border-b-2 border-orange-700'>Wodoszczelność
                  <p className="font-light">klasa E1500</p>
                  </li>
                  <li className='border-b-2 border-orange-700'>Odporność na obciążenie wiatrem
                  <p className="font-light">klasa C5</p>
                  </li>
                  <li className='border-b-2 border-orange-700'>Izolacyjność termiczna
                  <p className="font-light">Uf od 1,9 W/m2K, Uw = 0,80 W/m2K (obliczono dla okna: L 1480 x H 2180 mm, Ug = 0,5 W/m2K, szyba dwukomorowa).</p>
                  </li>
                  <li className='border-b-2 border-orange-700'>Sposoby wykończenia powierzchni
                  <p className="font-light">Malowanie proszkowe farbami poliestrowymi spełniające wymogi Qualicoat, do wyboru kolory z palety RAL; anodowanie naturalne i w kolorach - spełniające wymogi Qualanod; lakierowanie na „kolor” drewna - wykończenie powierzchni spełnia wysokie wymagania antykorozyjne.</p>
                  </li>
                  <li className='border-b-2 border-orange-700'>Odporność na włamanie
                  <p className="font-light">Klasa RC4 wg PN-EN 1627</p>
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

export default Pe78nslim