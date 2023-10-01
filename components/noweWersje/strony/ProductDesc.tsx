import React from 'react';
import Link from 'next/link'

interface ProductDescProps{
  title:string,
  text:string,
  buttonText:string,
  link:string
  image:string
}

const ProductDesc:React.FC<ProductDescProps> = ({title,text,buttonText,link,image}) => {
  return (
    <div className='w-full px-6 pt-4'>
      <div className="w-full border-2 rounded-xl lg:flex">
        <div
          className={`lg:w-1/2 h-96 lg:h-[40rem] bg-cover bg-no-repeat`}
          style={{
            backgroundImage: `url(${image})`,
          }}
          >
        </div>

        <div className="lg:w-1/2 p-4">
          <h1 className="p-6 text-4xl font-bold mb-4 text-[#848789]">{title}</h1>
          <p className='p-6 text-lg'>{text}</p>
          <div className="mt-4 p-6">
            <Link href={link} className='flex justify-center'>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                {buttonText}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDesc;
/*

<div className="col-span-2 w-full h-auto ">
            <img src="/P1080114.JPG" alt="Tlo" className='w-full h-auto rounded-xl'/>
         </div>
        <div className='col-span-2'>
            <h1 className='text-[#848789] font-mono text-4xl text-center mt-4'>Okna aluminiowe</h1>
            <p className='p-6 text-lg'>Nowoczesny design i wytrzymałość: Okna aluminiowe to synonim elegancji i trwałości.
              Ich lekka konstrukcja pozwala na tworzenie dużych przeszkleń, co wprowadza do wnętrza więcej naturalnego światła i przestrzeni.
              Nasze okna aluminiowe wyróżniają się minimalistycznym designem, który pasuje zarówno do nowoczesnych, jak i klasycznych wnętrz.</p>
              <div className='w-full h-44 border-2 border-black my-4 p-2'>
                <div className="overflow-x-scroll flex">
                  <div className="w-96">
                    <img src="https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
                  </div>
                  <div className="w-96">
                    <img src="https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
                  </div>
                  <div className="w-96">
                    <img src="https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
                  </div>
                  <div className="w-96">
                    <img src="https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
                  </div>
                </div>
              </div>
              <div className='flex justify-center mt-6'>
                <button className='bg-blue-300 p-2 rounded-xl border-solid border-2 border-blue-700 hover:bg-blue-500'>Poznaj naszą oferte!</button>
              </div>
        </div>


        */