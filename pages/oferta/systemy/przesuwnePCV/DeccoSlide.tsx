import Nav from '@/components/noweWersje/nav/Nav'
import React,{useState} from 'react'
const DeccoSlide = () => {

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
      <p className='text-4xl justify-center flex'>Decco Slide</p>
      <div className='grid lg:grid-cols-2 grid-cols-1 gap-4 p-2'>
            <div style={cardStyle} className='w-full bg-contain bg-center bg-no-repeat h-96 sm:h-[32rem] mt-8'></div>
          <div>
            <div className='flex justify-center'>
              <button onClick={handleClick} className={`mx-8 my-2 ${select ? "underline font-semibold":""}`}>CHARAKTERYSTYKA</button>
              <button onClick={handleClick} className={`mx-8 my-2  ${select ? "":"underline font-semibold"}`}>PARAMETRY TECHNICZNE</button>
            </div>
            {select ? (<div className='text-lg px-4'>
                <p className='border-y-2 border-orange-700'>Przedstawiamy system Decco SLIDE. To nowe, alternatywne rozwiązanie w segmencie drzwi i okien przesuwnych.</p>
                <ul className='list-disc'>
                  <li className='my-2'>Stanowi doskonałą alternatywę dla drzwi tarasowych typu PSK czy HST.</li>
                  <li className='border-y-2 border-orange-700 my-2'>System SLIDE świetnie sprawdzi się w budownictwie jednorodzinnym, jak również w obiektach użyteczności publicznej.</li>
                  <li className='my-2'>Jego ogromny atut to szczelność, niezawodność i łatwość obsługi.</li>
                </ul>
                <div className='mt-28'></div>
            </div>) :  (<div className='px-4'>
                <ul className='list-disc text-lg font-semibold '>
                  <li className='border-y-2 border-orange-700'>Izolacyjność termiczna
                  <p className="font-light">Uw = 0,69 [W/m2K] dla okna referencyjnego 4000 x 2200 z pakietem szybowym 48 mm/Ug=0,5 W/m2K i ramką dystansową Swisspacer V Ultimate</p>
                  </li>
                  <li className='border-b-2 border-orange-700'>Głębokość zabudowy skrzydeł
                  <p className="font-light">81 mm</p>
                  </li>
                  <li className='border-b-2 border-orange-700'>Głębokość zabudowy ramy
                  <p className="font-light"> 157,5 mm</p>
                  </li>
                  <li className='border-b-2 border-orange-700'>Możliwość szklenia pakietami
                  <p className="font-light">do 52 mm</p>
                  </li>
                  <li className='border-b-2 border-orange-700'>Wzmocnienia o dużej sztywności w skrzydłach
                  </li>
                  <li className='border-b-2 border-orange-700'>Dwa rodzaje słupka stałego od systemu Decco 82 (szeroki statyczny i standardowy).
                  </li>
                  <li className='border-b-2 border-orange-700'>Zaprojektowany do współpracy z okuciami Roto i Hautau
                  </li>
                  <li className='border-b-2 border-orange-700'>Możliwość prefabrykacji przez systemodawcę
                  </li>
                </ul>
            </div>)}
          </div>
      </div>
    </div>
  )
}

export default DeccoSlide