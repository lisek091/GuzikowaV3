import { useState, useEffect } from 'react';

interface ServiceCardProps {
    Przycisk:string;
    Background:string;
    Tytul?:string;
    Opis?:string;
}

const ServiceCard:React.FC<ServiceCardProps> = ({Przycisk,Tytul,Opis,Background}) => {

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow   my-4">
    <div className={`rounded-t-lg cardBackground1 h-56 ${Background}` }/>
    <div className="p-5">
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 ">{Tytul}</h5>
        <p className="mb-3 font-normal text-gray-700 ">{Opis}</p>
        <button className='bg-orange-700 text-white w-32 h-8 rounded-xl'>{Przycisk}</button>
    </div>
</div>
  );
}

export default ServiceCard