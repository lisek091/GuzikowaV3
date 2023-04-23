import ServiceCard from '@/components/ServiceCard'
import Produkt from '@/components/basic/Produkt'
import Navbar from '@/components/navbar/Navbar'

import React,{useState} from 'react'

const uslugi = () => {
  const [vision,setvision] = useState("")
  const ProductShow = () =>{
    if(vision==="" || vision==="Okna" || vision===undefined){
      return <Produkt ProductName='Ponzio PE78N / PE78NHI' ProductDescription='System o trzykomorowej konstrukcji profili z rowkiem okuciowym w standardzie Euro oraz rowkiem okuciowym stosowanym w oknach i drzwiach balkonowych z profili PVC lub drewnianych. Jest przeznaczony do konstrukcji okien o bardzo wysokich wymogach izolacyjności termicznej.' ImageClass='produktOkno1'/>
    }
    if(vision==="Systemy przesuwne"){
      return <Produkt ProductName='Ponzio SL1600TTHI' ProductDescription='Wariant systemu podnoszono-przesuwnego SL1600tt przeznaczony do wykonywania konstrukcji o szczególnie wysokich wymaganiach dotyczących izolacyjności termicznej.' ImageClass='produktSystemprzesuwny1'/>
    }
  }
  return (
    <>
      <Navbar/>
      <div className='h-20 text-white'>.</div>
      <div className='h-56 border-t-2 border-b-2 border-blue-500 text-3xl flex justify-start'>
        <div className='w-1/4'></div>
        <div className='grid grid-cols-1 items-center font-semibold underline underline-offset-8'>Oferta naszej firmy</div>
      </div>
      <div className='grid grid-cols-2 place-items-center mx-6' >
        <div>
          <div className='text-2xl font-semibold'>Produkty</div>
          <br/>
          <p className='hover:underline hover:cursor-pointer text-xl' onClick={()=>setvision("Okna")}>Okna</p>
          <p className='hover:underline hover:cursor-pointer text-xl'onClick={()=>setvision("Systemy przesuwne")}>Systemy przesuwne</p>
          <p className='hover:underline hover:cursor-pointer text-xl'>Drzwi</p>
          <p className='hover:underline hover:cursor-pointer text-xl'>Ochrona przeciwsloneczna</p>
        </div>
        <div className='w-full mt-36'>
          <ProductShow/>
        </div>
      </div>
    </>
  )
}

export default uslugi