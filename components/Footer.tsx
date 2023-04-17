import React from 'react'
import {BsFacebook} from 'react-icons/bs'
const Footer = () => {
  return (
    <div className='flex justify-center bg-zinc-800 text-white'>
        <div className=''>
            <p className="text-3xl mr-6">KRS  0000543766</p>
            <p className="text-3xl mr-6">NIP: 2220898659 REGON: 360781694</p>
        </div>
        <div className='w-60'></div>
        <div className='flex mt-4'>
            <p className="text-3xl mr-6">Znajdziesz nas na:</p> 
            <BsFacebook size={36} color='blue' cursor={"pointer"}/>
        </div>
    </div>
  )
}

export default Footer