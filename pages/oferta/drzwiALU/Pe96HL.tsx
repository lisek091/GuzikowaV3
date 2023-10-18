import Footer from '@/components/mainpage/Footer'
import Nav from '@/components/noweWersje/nav/Nav'
import React,{useState} from 'react'
const Pe96HL = () => {

  const [select,setSelect] = useState(true)
  const handleClick = () =>{
    setSelect(!select)
  }

  const backgroundImagePE78 = "/PRZESUWNEPE96.png"
  const cardStyle = {
    backgroundImage: `url(${backgroundImagePE78})`,
  };
  return (
    <div className='bg-slate-100 min-h-screen flex flex-col' >
            <Nav/>
        <div className='text-slate-100'>.</div> 
        <div className='text-white mt-10'>.</div>
      <p className='text-4xl justify-center flex'>PE96HI - drzwi</p>
      <div className='grid lg:grid-cols-2 grid-cols-1 gap-4 p-2'>
            <div style={cardStyle} className='w-full bg-contain bg-center bg-no-repeat h-96 sm:h-[32rem] mt-8'></div>
          <div>
            <div className='flex justify-center'>
              <button onClick={handleClick} className={`mx-8 my-2 ${select ? "underline font-semibold":""}`}>CHARAKTERYSTYKA</button>
              <button onClick={handleClick} className={`mx-8 my-2  ${select ? "":"underline font-semibold"}`}>PARAMETRY TECHNICZNE</button>
            </div>
            {select ? (<div className='text-lg px-4'>
                <p className='border-y-2 border-orange-700'>Symetryczny system o bardzo wysokiej izolacyjności termicznej przeznaczony do wykonywania konstrukcji drzwiowych.</p>
                <ul className='list-disc'>
                  <li className='my-2'>konstrukcja profili współpłaszczyznowych (luz wrębowy - 18 mm)</li>
                  <li className='border-y-2 border-orange-700 my-2'>jedna ościeżnica zarówno do drzwi otwieranych do wewnątrz, jak i na zewnątrz</li>
                  <li className='border-b-2 border-orange-700 my-2'>zastosowane profilowane przekładki termiczne o szerokości 50 mm pozwoliły na uzyskanie bardzo wysokiej izolacyjności termicznej od Uf = 1,2W/(m2K)</li>
                  <li className='border-b-2 border-orange-700 my-2'>bardzo dobre parametry fizyczne nowego systemu potwierdzają raporty uzyskane w instytucie IFT ROSENHEIM</li>
                  <li className='border-b-2 border-orange-700 my-2'>dzięki zastosowaniu uszczelki centralnej uzyskujemy bardzo dobre parametry wodoszczelności oraz infiltracji powietrza</li>
                  <li className='border-b-2 border-orange-700 my-2'>skrzydła drzwi zlicowane z ościeżnicą</li>
                  <li className='border-b-2 border-orange-700 my-2'>możliwość wykonywania konstrukcji o dużych gabarytach</li>
                  <li className='border-b-2 border-orange-700 my-2'>wiele połączeń narożnych</li>
                  <li className='border-b-2 border-orange-700 my-2'>nowa uszczelka domykowa posiada duży zakres pracy, niweluje błędy wykonawcze i montażowe</li>
                  <li className='my-2'>możliwość wykonania niewidocznych odwodnień skrzydła</li>
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
                  <li className='border-b-2 border-orange-700'>Wypełnienia
                  <p className="font-light">szyby pojedyncze, zespolone lub panele nieprzezierne o grubości: skrzydło: 31 - 66 mm</p>
                  </li>
                  <li className='border-b-2 border-orange-700'>Przepuszczalność powietrza
                  <p className="font-light">klasa 4 wg. EN 12207:2016-12</p>
                  </li>
                  <li className='border-b-2 border-orange-700'>Wodoszczelność
                  <p className="font-light">klasa E750 wg. EN 12208:1999-11</p>
                  </li>
                  <li className='border-b-2 border-orange-700'>Izolacyjność termiczna
                  <p className="font-light">Uf od 1,2 W/m2K, Ud = 0,8 W/m2K (obliczono dla drzwi: L 1230 x H 2180 mm, Ug = 0,5 W/m2K, szyba dwukomorowa).</p>
                  </li>
                  <li className=''>Dopuszczenia i świadectwa jakości
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

export default Pe96HL