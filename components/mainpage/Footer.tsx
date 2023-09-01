import React from 'react'
import {BsFacebook} from 'react-icons/bs'
const Footer = () => {
  return (
    <div className='flex justify-center bg-zinc-800 text-white border-4 border-zinc-800 bg-opacity-70'>
        <div className='w-1/2 lg:flex'>
            <p className="text-lg lg:ml-3">KRS 0000543766</p>
            <p className="text-lg lg:ml-3">NIP: 2220898659</p>
            <p className="text-lg lg:ml-3">REGON: 360781694</p>
        </div>
        <div className='flex mt-4 lg:mt-0 w-1/2 justify-center'>
          <a href='https://www.facebook.com/profile.php?id=100064168894499' target='_blank'>
          <div className='lg:flex'>
            <p className="text-xl mr-2">Znajdziesz</p>
            <p className="text-xl mr-2 flex justify-center">nas na:</p>  
            <BsFacebook size={40} color='#1194F5' cursor={"pointer"} className='p-2'/>
          </div>
          </a>
        </div>
    </div>
  )
}

export default Footer