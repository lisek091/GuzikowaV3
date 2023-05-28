import React, { useState } from 'react';
import Input from './basic/Input'

const ContactForm = () => {

  const [name, setName] = useState('');
  const [secondname, setSecondname] = useState('');
  const [phoneNumber, setphoneNumber] = useState('');
  const [email, setemail] = useState('');


  return (
    <div className='flex'>
      <div className='mt-10'>
        <Input id='name' label='Imię' onChange={(e: any) => setName(e.target.value)} value={name} type='text' />
        <Input id='secondname' label='Nazwisko' onChange={(e: any) => setSecondname(e.target.value)} value={secondname} type='text' />
        <Input id='phone' label='Numer telefonu' onChange={(e: any) => setphoneNumber(e.target.value)} value={phoneNumber} type='tel' pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}' />
        <Input id='email' label='Email' onChange={(e: any) => setemail(e.target.value)} value={email} type='email' />
      </div>
      <div className='block mx-6 '>
        <textarea style={{resize:"none"}} id="opis" rows={8} cols={50} className='border-2 border-black mt-14 p-2 '/>
        <div className='flex'>
          <input type='checkbox' className='mr-3'></input>
          <p>Zgoda na otrzymanie wiadomości zwrotnej</p>
        </div>
        </div>
    </div>
  )
}

export default ContactForm