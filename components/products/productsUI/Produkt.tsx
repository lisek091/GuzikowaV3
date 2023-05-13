import React from 'react'

interface ProduktProps {
    ProductName:string;
    ProductDescription?:string;
    ImageClass?:string;
}

const Produkt:React.FC<ProduktProps> = ({ProductName,ProductDescription,ImageClass}) => {
  return (
    <div className='w-3/4'>
        <div className={`${ImageClass} w-2/3 h-96`}></div>
        <h1 className='text-center mt-4'>
            {ProductName}
        </h1>
        <p className='mt-2 text-left'>
            {ProductDescription}
        </p>
    </div>
  )
}

export default Produkt   