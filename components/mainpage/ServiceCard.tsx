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
    <div className="w-full sm:min-w-sm md:w-11/12 bg-white border border-gray-300 rounded-3xl my-1 h-[26rem] md:mx-4 bg-opacity-70">
      <div className={`rounded-t-3xl cardBackground1 h-56 ${Background}` }/>
      <div className="p-4">
          <h5 className="mb-2 text-2xl font-bold text-gray-900 text-center ">{Tytul}</h5>
          <p className="font-normal text-gray-700 h-26 text-center text-lg">{Opis}</p>
            <Link href={link} className='flex justify-center'>
              <button className='bg-orange-700 text-white w-3/4 h-8 rounded-full'>{Przycisk}</button>
            </Link>
      </div>
    </div>
  );
}

export default ServiceCard