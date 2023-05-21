import React from 'react'
import {BsFillTelephoneFill} from 'react-icons/bs'
const ContactBar = () => {
  return (
      <div className='px-6 block' >
        <p className='text-sm mx-6'>Masz pytania?</p>
        <div className='flex flex-row'>
        <BsFillTelephoneFill className='my-1 mx-1'/>
         <a href="tel:731185100" className='text-lg'>731185100</a>
        </div>
    </div>
  )
}

export default ContactBar