import React from 'react'
import {BsFillTelephoneFill} from 'react-icons/bs'
const ContactBar = () => {
  return (
      <a className='px-2 2xl:block hidden hover:text-orange-700' href="tel:731185100">
        <p className='text-sm mx-4'>Masz pytania?</p>
        <div className='flex flex-row'>
        <BsFillTelephoneFill className='my-1 mx-1'/>
         <div className='text-lg'>731185100</div>
        </div>
    </a>
  )
}

export default ContactBar