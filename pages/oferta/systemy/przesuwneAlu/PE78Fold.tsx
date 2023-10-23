import Footer from '@/components/mainpage/Footer'
import Nav from '@/components/noweWersje/nav/Nav'
import React,{useState} from 'react'
const PE78Fold = () => {

  const [select,setSelect] = useState(true)
  const handleClick = () =>{
    setSelect(!select)
  }

  const backgroundImagePE78 = "/PE78N_FOLD.png"
  const cardStyle = {
    backgroundImage: `url(${backgroundImagePE78})`,
  };
  return (
    <div className='bg-slate-100 min-h-screen flex flex-col' >
            <Nav/>
        <div className='text-slate-100'>.</div> 
        <div className='text-white mt-10'>.</div>
      <p className='text-4xl justify-center flex'>PE78 FOLD - drzwi harmonijkowe</p>
      <div className='grid lg:grid-cols-2 grid-cols-1 gap-4 p-2'>
            <div style={cardStyle} className='w-full bg-contain bg-center bg-no-repeat h-96 sm:h-[32rem] mt-8'></div>
          <div>
            <div className='flex justify-center'>
              <button onClick={handleClick} className={`mx-8 my-2 ${select ? "underline font-semibold":""}`}>CHARAKTERYSTYKA</button>
              <button onClick={handleClick} className={`mx-8 my-2  ${select ? "":"underline font-semibold"}`}>PARAMETRY TECHNICZNE</button>
            </div>
            {select ? (<div className='text-lg px-4'>
                <p className='border-y-2 border-orange-700'>Idealne rozwiązanie do domów, restauracji czy kawiarni, które łączy przestrzeń wewnętrzną z zewnętrzną.</p>
                <ul className='list-disc'>
                  <li className='my-2'>możliwość wykonania wieloskrzydłowej konstrukcji otwieranej zarówno do wewnątrz, jak i na zewnątrz budynku</li>
                  <li className='border-y-2 border-orange-700 my-2'>trzykomorowa konstrukcja zapewnia wysoką wytrzymałość profili, umożliwiając wykonanie konstrukcji o dużych gabarytach (L ≤ 1200 mm lub H ≤ 3500 mm przy maksymalnej wadze skrzydła 120 kg)</li>
                  <li className='border-b-2 border-orange-700 my-2'>wysoką izolacyjność termiczną uzyskujemy dzięki zastosowaniu przekładek termicznych o jednakowej szerokości 34 mm zarówno dla ościeżnic, jak i skrzydeł</li>
                  <li className='border-b-2 border-orange-700 my-2'>specjalistyczne okucia zapewniają komfortowe funkcjonowanie</li>
                  <li className='border-b-2 border-orange-700 my-2'>duży zakres szklenia 22 - 60 mm umożliwia swobodę w zastosowaniu pakietów tradycyjnych, jak i specjalistycznych</li>
                  <li className='border-b-2 border-orange-700 my-2'>duża swoboda w wyborze rozwiązania progowego</li>
                  <li className='border-b-2 border-orange-700 my-2'>możliwość łączenia z innymi rozwiązaniami Ponzio PE78N­­­</li>
                  <li className='my-2'>dodatkowy profil kompensacyjny:
                    <p>- niweluje ewentualne niedokładności produkcji i montażu</p>
                    <p>- pozwala na regulację i redukcję naprężeń niezależnie od warunków zewnętrznych</p>
                    <p>- zakres regulacji 0-5 mm</p>
                    <p>- zalecany do bardzo szerokich konstrukcji</p>
                    </li>
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
                  <li className='border-b-2 border-orange-700'>Maksymalne wymiary skrzydła
                  <p className="font-light">L ≤ 1200 mm lub H ≤ 3500</p>
                  </li>
                  <li className='border-b-2 border-orange-700'>Maksymalna waga skrzydła
                  <p className="font-light">120 kg</p>
                  </li>
                  <li className='border-b-2 border-orange-700'>Wypełnienia
                  <p className="font-light">szyby zespolone o grubości: 22 - 60 mm</p>
                  </li>
                  <li className='border-b-2 border-orange-700'>Przepuszczalność powietrza
                  <p className="font-light">klasa 4</p>
                  </li>
                  <li className='border-b-2 border-orange-700'>Wodoszczelność
                  <p className="font-light">klasa 1200Pa</p>
                  </li>
                  <li className='border-b-2 border-orange-700'>Odporność na obciążenie wiatrem
                  <p className="font-light">klasa C3/B3</p>
                  </li>
                  <li className='border-b-2 border-orange-700'>Izolacyjność termiczna
                  <p className="font-light">Uf od 1,7 W/m2K, Uw = 1,0 W/m2K (L 2400 x H 2400 mm, Ug = 0,5 W/m2K, szyba dwukomorowa).</p>
                  </li>
                  <li className=''>Dopuszczenia i świadectwa jakości
                  <p className="font-light">Wstępne badania typu wg PN-EN 14351-1 + A2</p>
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

export default PE78Fold