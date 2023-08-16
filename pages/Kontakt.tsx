import React from 'react'
import Nav from '@/components/noweWersje/nav/Nav'
import ContactForm from '@/components/noweWersje/ContactForm'
import { AiOutlineMail, AiTwotonePhone } from 'react-icons/ai'
const Kontakt = () => {
  return (
    <div className='backgroundcoloraa -z-50'>
        <Nav/>
        <div className='h-16 text-opacity-0'>.</div>
        <div className='flex bg-gradient-to-r from-orange-300 to-white opacity-80 justify-center mt-2'>
            <div className='md:w-3/4 w-full border-2 border-black p-10 bg-slate-300'>
                <div className='text-center'>
                    <p className='text-2xl'>Formularz kontaktowy</p>
                    <p className='text-xl'>Wypełnij formularz i umów się na spotkanie z naszym doradcą. Otrzymasz wyczerpujące informacje na temat naszej oferty.</p>
                </div>
                <div className='block'>
                    <ContactForm/>
                </div>
                <div className='text-center text-xl flex mr-4'>
                    <p>Zachęcamy do kontaktu z Nami jeżeli jesteś zainteresowany współpracą lub w przypadku, 
                            gdy nasuwają Ci się dodatkowe pytania, na które nie uzyskałeś odpowiedzi odwiedzając Naszą stronę.</p>
                    <div className='text-left text-xl md:text-2xl w-6/12 lg:w-5/12 ml-4'>
                        <p className="">M&D.group Sp. z o.o.</p>
                        <p className=''>biuro@md1.pl</p>
                        <p className=''>731185100</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Kontakt

/*

<div className='lg:h-[36rem] flex h-[28rem] lg:p-0 px-4 pt-2 cardBackground1'>
            <div className='block h-[36rem] w-full'>
                <div className='opacity-80 lg:opacity-100 bg-gradient-to-r  from-orange-100 to-orange-700 h-[28rem] w-full flex'>
                    <div className='w-2 lg:w-1/12'></div>
                    <div className='text-left text-xl md:text-2xl mt-24 w-6/12 lg:w-5/12'>
                        <p className="ml-4">M&D.group Sp. z o.o.</p>
                        <p className="ml-4">Lędziny 43-143</p>
                        <p className="ml-4">ul. Gwarków 5</p>
                        <p className='flex'><AiOutlineMail className="text-orange-800" style={{marginRight:"5"}} size={35} />biuro@md1.pl</p>
                        <p className='flex'><AiTwotonePhone className="text-orange-800" style={{marginRight:"3"}} size={35} />731185100</p>
                    </div>
                    <div className='w-2 lg:w-1/12'></div>
                    <div className='text-left text-lg md:text-2xl mt-4 w-5/12'>
                        <p>Zachęcamy do kontaktu z Nami jeżeli jesteś zainteresowany współpracą lub w przypadku, 
                            gdy nasuwają Ci się dodatkowe pytania, na które nie uzyskałeś odpowiedzi odwiedzając Naszą stronę.</p>
                    </div>
                </div>
                <div className='bg-gradient-to-r from-orange-300 to-orange-50 h-[8rem] w-full hidden lg:block'>         
                </div>
            </div>
            <div className='cardBackground1 w-full h-full hidden lg:block'>
            </div>
        </div>

*/