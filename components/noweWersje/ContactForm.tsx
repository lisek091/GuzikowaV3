import React, { useState } from 'react'
import Input from '../basic/Input'
const ContactForm = () => {
    const [form,setForm] = useState({
        name:"",
        sname:"",
        email:"",
        phonenumber:"",
        formarea:"",
    }
 )
    const change = (e:any) =>{
        setForm(form => ({
            ...form,
            [e.target.id]:e.target.value
        }))
    }
    const sendForm = (e:any)=>{
        e.preventDefault();
        alert("Ta funckja jeszcze nie działa. Zapraszamy 15.08.23")
    }
  return (
    <form onSubmit={sendForm} className='p-4 md:p-20'>
        <div className='w-full md:w-96'>
            <Input id='name' label='Imie*' onChange={change} value={form.name} required={true}/>
            <Input id='sname' label='Nazwisko*' onChange={change} value={form.sname} required={true}/>
            <Input id='email' label='Email*' onChange={change} value={form.email} type='email' required={true}/>
            <Input id='phonenumber' label='Numer telefonu' onChange={change} value={form.phonenumber} type='tel' pattern="[0-9]{9}" />
        </div>
        <textarea 
            className='w-full min-h-36 rounded-md my-2 px-6 pt-1 pb-1 text-xl text-black bg-neutral-200 appearance-none ocus:outline-none focus:ring-0 peer invalid:border-b-1'
            rows={4} cols={4} required={true} onChange={change} value={form.formarea} id="formarea"
            />
        <label className='flex bg-white opacity-80'>
            <input id='permision' type='checkbox' required={true} className='w-3 mr-4 ml-1'/>
            <p>*Wyrażam zgodę na wykorzystywanie moich danych osobowych podanych w formularzu w celu kontaktu z przedstawicielem handlowym.</p>
        </label>
        <p className='p-2 bg-white opacity-80'>* - Wymagane</p>
        <button type='submit' className='border-2 border-orange-900 bg-orange-600 w-28 h-16 ml-4 mt-4 hover:bg-orange-400'>Wyślij</button>
    </form>
  )
}

export default ContactForm