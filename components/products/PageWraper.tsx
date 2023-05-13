import React,{useState,createContext} from 'react'
import Navbar from '@/components/navbar/Navbar'
import Produkt from './productsUI/Produkt'
import ProductMenu from './ProductMenu'

const ProductContext = createContext("");

const PageWraper = () => {

  return (
<>
    <Navbar theme=''/>
      <div className=''>
        <div className="bg-slate-100 dark:bg-gray-900">
        <div className='h-20 text-white'>.</div>
        <div className='h-32 border-t-2 border-b-2 border-blue-500 text-3xl flex justify-start'>
          <div className='w-1/6'></div>
          <div className='grid grid-cols-1 items-center font-semibold underline underline-offset-8'>Oferta naszej firmy</div>
        </div>
        <div className='mt-8'></div>
        <div className='grid grid-cols-2 mx-6' >
            <ProductMenu/>
            <Produkt ProductName=''/>
        </div>
        <div className='mt-36'>x</div>
        <div className='mt-36'>x</div>
        <div className='mt-36'>x</div>
        </div>
      </div>
</>
  )
}
// za duzo wartsw zeny robic po useState trzeba dac  globalne usecontext
export default PageWraper