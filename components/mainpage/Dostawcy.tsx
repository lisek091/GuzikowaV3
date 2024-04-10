import React from 'react'

const Dostawcy = () => {
  return (
    <div className='max-w-screen-xl mx-auto px-4 md:px-8 pb-4'>
        <p className="text-gray-800 text-3xl font-semibold sm:text-4xl pb-8">
           Nasi dostawcy systemów
        </p>
        <div className='grid grid-cols-1 gap-20 place-items-center lg:flex lg:justify-center'>
        <a href='https://gealan.pl/' target='_blank'>
            <div className="supply1 h-24 w-60 mx-4 hover:cursor-pointer"/>
        </a>
            <a href='https://www.decco.eu/' target='_blank'>
            <div className="supply2 h-24 w-60 mx-4 hover:cursor-pointer"/>
            </a>
               <a href='https://www.ponzio.pl/' target='_blank'>
            <div className="supply3 h-20 w-60 mx-4 hover:cursor-pointer"/>
               </a>
        </div>
    </div>
  )
}

export default Dostawcy
