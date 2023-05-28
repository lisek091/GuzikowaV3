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
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow my-4 h-[28rem]">
      <div className={`rounded-t-lg cardBackground1 h-56 ${Background}` }/>
      <div className="p-5">
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 ">{Tytul}</h5>
          <p className="font-normal text-gray-700 h-28">{Opis}</p>
            <Link href={link} className=''>
              <button className='bg-orange-700 text-white w-52 h-8 rounded-full'>{Przycisk}</button>
            </Link>
      </div>
    </div>
  );
}

export default ServiceCard