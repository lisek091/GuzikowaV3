import React,{useState,createContext} from 'react'
import Navbar from '@/components/navbar/Navbar'
import Produkt from './productsUI/Produkt'
import ProductMenu from './ProductMenu'
import VerticalMenu from './VerticalMenu';
import ProductProvider from './productsUI/ProductProvider';
import Product from './productsUI/Product';


const PageWraper = () => {

  const menuItems = [
    {
      label: 'Okna',
      subMenu: [
        {
          label: 'PE78',
          product: {
            name: 'PPE78',
            description: 'This is Product 1-1',
            image: '/path/to/product1-1-image.jpg',
          },
        },
        {
          label: 'PE78N',
          product: {
            name: 'PE78N',
            description: 'This is Product 1-2',
            image: '/path/to/product1-1-image.jpg',
          },
        },
        {
          label: 'PE78NHL',
          product: {
            name: 'PE78NHL',
            description: 'This is Product 1-2',
            image: '/path/to/product1-1-image.jpg',
          },
        },
        {
          label: 'PE96',
          product: {
            name: 'PE96',
            description: 'This is Product 1-2',
            image: '/path/to/product1-1-image.jpg',
          },
        },
      ],
      
    },
    {
      label: 'Systemy przesuwne',
      subMenu: [
        {
          label: 'Subcategory 2-1',
          product: {
            name: 'Product 2-1',
            description: 'This is Product 2-1',
            image: '/path/to/product1-1-image.jpg',
          },
        },
        {
          label: 'Subcategory 2-2',
          product: {
            name: 'Product 2-2',
            description: 'This is Product 2-2',
            image: '/path/to/product1-1-image.jpg',
          },
        },
      ],
      
    },
    {
      label: 'Drzwi',
      subMenu: [
        {
          label: 'Subcategory 2-1',
          product: {
            name: 'Product 2-1',
            description: 'This is Product 2-1',
            image: '/path/to/product1-1-image.jpg',
          },
        },
        {
          label: 'Subcategory 2-2',
          product: {
            name: 'Product 2-2',
            description: 'This is Product 2-2',
            image: '/path/to/product1-1-image.jpg',
          },
        },
      ],
      
    },
    {
      label: 'Ochrona przeciwsloneczna',
      subMenu: [
        {
          label: 'Subcategory 2-1',
          product: {
            name: 'Product 2-1',
            description: 'This is Product 2-1',
            image: '/path/to/product1-1-image.jpg',
          },
        },
        {
          label: 'Subcategory 2-2',
          product: {
            name: 'Product 2-2',
            description: 'This is Product 2-2',
            image: '/path/to/product1-1-image.jpg',
          },
        },
      ],
      
    },
  ];

  return (
<>
<ProductProvider>
    <Navbar theme=''/>
      <div className=''>
        <div className="bg-slate-100 dark:bg-gray-900">
        <div className='h-20 text-white'>.</div>
        <div className='h-32 border-t-2 border-b-2 border-blue-500 text-3xl flex justify-start'>
          <div className='w-1/6'></div>
          <div className='grid grid-cols-1 items-center font-semibold underline underline-offset-8'>Oferta naszej firmy</div>
        </div>
        <div className='mt-8'></div>
        <div className="flex">
        <div className="w-1/4">
          <VerticalMenu menuItems={menuItems} />
        </div>
        <div className="w-3/4">
          <Product/>
        </div>
      </div>
        <div className='mt-36'>x</div>
        <div className='mt-36'>x</div>
        <div className='mt-36'>x</div>
        </div>
      </div>
      </ProductProvider>
</>
  )
}
// za duzo wartsw zeny robic po useState trzeba dac  globalne usecontext
export default PageWraper