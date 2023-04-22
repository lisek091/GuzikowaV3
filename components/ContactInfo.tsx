import React from 'react'
import {AiOutlineMail,AiTwotonePhone} from 'react-icons/ai'
import ContactForm from './ContactForm'
const ContactInfo = () => {
  return (
    <div className='m-8 xl:flex justify-center'>
      <div className=''>
        <div className='lewo info o firmie'>
          <h3 className='flex justify-center text-4xl'> Zapraszamy do</h3>
          <h3 className='flex justify-center text-4xl'>kontaktu </h3>
          <div className='mt-4'>
            <p className='flex justify-center text-3xl mr-4'><AiOutlineMail className="text-blue-900" style={{marginRight:"5"}} size={35} />biuro@md1.pl</p>
            <p className='flex justify-center text-3xl mt-3 '><AiTwotonePhone className="text-blue-900" style={{marginRight:"3"}} size={35} />+48 731185100</p>
          </div>
          <div className='my-4'>
            <div className='mb-2 grid grid-cols-1 place-items-center'>
              <div className="h-20 w-52 sm:h-24 sm:w-60 mx-4 logoBackground"></div>
            </div>
          <div>
            <p className='text-2xl flex justify-center'>M&D.group Sp. z o.o.</p>
            <p className='text-2xl flex justify-center'>Adres: ul. Gwarków 5, </p>
            <p className='text-2xl flex justify-center'>43-143 Lędziny </p>
          </div>
          </div>
        </div>
      </div>
        <div className="border-2 border-blue-300 mx-8 my-2 border-spacing-6 rounded-lg hidden xl:flex"></div>
        <div className='hidden xl:block'>
          <ContactForm/>
        </div>
    </div>
  )
}

export default ContactInfo