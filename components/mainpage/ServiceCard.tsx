import Link from 'next/link'

interface ServiceCardProps {
    Przycisk:string;
    Background:string;
    Tytul?:string;
    Opis?:string;
    link:any;
}

const ServiceCard:React.FC<ServiceCardProps> = ({Przycisk,Tytul,Opis,Background,link}) => {

  return (
    <div className="w-full bg-white border border-gray-300 rounded-3xl my-1 h-[40rem] md:h-[30rem] lg:h-[28rem] md:mx-4 bg-opacity-70">
      <div className={`rounded-t-3xl cardBackground1 h-60 ${Background}` }/>
      <div className="p-4">
          <h5 className="mb-2 text-2xl font-bold text-gray-900 text-center ">{Tytul}</h5>
          <p className="font-normal text-gray-700 h-26 text-center text-lg">{Opis}</p>
      </div>
      <Link href={link} className='flex justify-center'>
              <button className='bg-orange-700 text-white w-40 h-8 rounded-full'>{Przycisk}</button>
      </Link>
    </div>
  );
}

export default ServiceCard