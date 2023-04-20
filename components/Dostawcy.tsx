import React from 'react'

const Dostawcy = () => {
  return (
    <div className='my-6'>
        <div className='flex justify-center text-4xl my-4'>
            Nasi dostawcy usług
        </div>
        <div className='grid grid-cols-1 gap-4 place-items-center lg:flex lg:justify-center'>
            <div className="supply1 h-24 w-60 mx-4"/>
            <div className="supply2 h-24 w-60 mx-4"/>
            <div className="supply3 h-20 w-60 mx-4"/>
        </div>
    </div>
  )
}

export default Dostawcy