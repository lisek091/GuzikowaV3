import Footer from '@/components/mainpage/Footer'
import Nav from '@/components/noweWersje/nav/Nav'
import React,{useState} from 'react'
const Pe50 = () => {

  const [select,setSelect] = useState(true)
  const handleClick = () =>{
    setSelect(!select)
  }

  const backgroundImagePE78 = "/PE50.png"
  const cardStyle = {
    backgroundImage: `url(${backgroundImagePE78})`,
  };
  return (
    <div className='bg-slate-100 min-h-screen flex flex-col'>
      <Nav/>
        <div className='text-slate-100'>.</div> 
        <div className='text-white mt-10'>.</div>
      <p className='text-4xl justify-center flex'>Okna PE50</p>
      <div className='grid lg:grid-cols-2 grid-cols-1 gap-4 p-2'>
            <div style={cardStyle} className='w-full bg-contain bg-center bg-no-repeat h-96 sm:h-[32rem] mt-8'></div>
          <div>
            <div className='flex justify-center'>
              <button onClick={handleClick} className={`mx-8 my-2 ${select ? "underline font-semibold":""}`}>CHARAKTERYSTYKA</button>
              <button onClick={handleClick} className={`mx-8 my-2  ${select ? "":"underline font-semibold"}`}>PARAMETRY TECHNICZNE</button>
            </div>
            {select ? (<div className='text-lg px-4'>
                <p className='border-y-2 border-orange-700'>System profili aluminiowych bez izolacji termicznej przeznaczony do wykonywania konstrukcji wewnętrznych: lekkich ścianek i przeszkleń oraz okien otwieranych.</p>
                <ul className='list-disc'>
                  <li className='my-2'>głębokość konstrukcyjna wynosi 52 mm</li>
                  <li className='border-y-2 border-orange-700 my-2'>ściśle powiązany z innymi systemami Ponzio</li>
                  <li className='border-b-2 border-orange-700 my-2'>wysokość przylgi 10mm pozwala na zastosowanie okuć o zwiększonej wytrzymałości</li>
                  <li className='border-b-2 border-orange-700 my-2'>profile mogą być skręcane lub zagniatane</li>
                  <li className='border-b-2 border-orange-700 my-2'>listwy przyszybowe do rowka w standardzie euro</li>
                  <li className='border-b-2 border-orange-700 my-2'>możliwość zlicowania skrzydeł okiennych z ościeżnicą (jedna płaszczyzna po stronie zewnętrznej)</li>
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
                  <li className='border-b-2 border-orange-700'>Głębokość skrzydła
                  <p className="font-light">52 mm</p>
                  </li>
                  <li className='border-b-2 border-orange-700'>Wypełnienia
                  <p className="font-light">Szyby pojedyncze, zespolone lub panele nieprzezierne o grubości: 5 – 43 mm</p>
                  </li>
                  <li className='border-b-2 border-orange-700'>Dymoszczelność
                  <p className="font-light">klasa Sa i S200 wg PN-EN 13501-2:2016</p>
                  </li>
                  <li className='border-b-2 border-orange-700'>Sposoby wykończenia powierzchni
                  <p className="font-light">Malowanie proszkowe farbami poliestrowymi spełniające wymogi Qualicoat, do wyboru kolory z palety RAL; anodowanie naturalne i w kolorach - spełniające wymogi Qualanod; lakierowanie na „kolor” drewna - wykończenie powierzchni spełnia wysokie wymagania antykorozyjne.</p>
                  </li>
                  <li className=''>Dopuszczenia i świadectwa jakości
                  <p className="font-light">Krajowa Ocena Techniczna ITB-KOT-2018/0621</p>
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

export default Pe50