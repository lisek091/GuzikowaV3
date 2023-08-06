import React from 'react'
import {AiOutlineMail,AiTwotonePhone} from 'react-icons/ai'
const ContactInfo = () => {
  return (
    <div className='justify-center bg-white bg-opacity-70'>
      <div className=''>
        <div className='lewo info o firmie block sm:grid sm:grid-cols-2 '>
          <div>
          <div className='mt-4'></div>
            <h3 className='flex justify-center text-4xl text-center'> Zapraszamy do kontaktu</h3>
            <div className='mt-4'> 
              <p className='flex justify-center text-3xl mr-4'><AiOutlineMail className="text-orange-800" style={{marginRight:"5"}} size={35} />biuro@md1.pl</p>
              <div className='mt-4'></div>
              <p className='flex justify-center text-3xl mt-3 '><AiTwotonePhone className="text-orange-800" style={{marginRight:"3"}} size={35} />+48 731185100</p>
            </div>
          </div>
          <div className="sm:border-l-4 border-orange-400 border-spacing-6 xl:border-l-0">
            <div className='mt-4'>
                <div className='grid grid-cols-1 place-items-center'>
                  <div className="h-20 w-64 mx-4 logoBackground"></div>
                </div>
            </div>
            <p className='text-2xl flex justify-center'>M&D.group Sp. z o.o.</p>
            <p className='text-2xl flex justify-center'>Adres: ul. Gwarków 5, </p>
            <p className='text-2xl flex justify-center'>43-143 Lędziny </p>
          </div>
        </div>
      </div>
        <div className='hidden xl:block'>
        </div>
    </div>
  )
}

export default ContactInfo