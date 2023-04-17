import React from 'react'
import {AiOutlineMail,AiTwotonePhone} from 'react-icons/ai'
import ContactForm from './ContactForm'
const ContactInfo = () => {
  return (
    <div className='m-8'>
      <div className='flex justify-center'>
        <div className='lewo info o firmie'>
          <h3 className='text-5xl'> Zapraszamy do kontaktu </h3>
          <div className='flex justify-center mt-4'>
            <p className='flex text-3xl mr-4'><AiOutlineMail style={{marginRight:"3"}} size={35} color='blue'/>biuro@md1.pl</p>
            <p className='flex text-3xl'><AiTwotonePhone style={{marginRight:"3"}} size={35} color='blue'/>731185100</p>
          </div>
          <div className='flex my-4'>
           <div className="logoBackground h-24 w-60 mx-4"/>
          <div>
            <p className='text-2xl'>M&D.group Sp. z o.o.</p>
            <p className='text-2xl'>Adres: ul. Gwarków 5, </p>
            <p className='text-2xl'>43-143 Lędziny </p>
          </div>
          </div>
        </div>
        <div className="border-2 border-blue-300 mx-8 my-2 sm:border-spacing-6 rounded-lg hidden xl:block"></div>
        <div className='hidden xl:block'>
        <ContactForm/>
        </div>
      </div>
    </div>
  )
}

export default ContactInfo