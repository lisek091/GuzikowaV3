import ImageSlider from '../ImageSlider';
import React from 'react';
import Link from 'next/link'
import img1 from '../../../public/wallpapper1.jpg'
import img2 from '../../../public/wallpapper2.jpg'
import img3 from '../../../public/wallpapper3.jpg'

const images = [img1.src,img2.src,img3.src]

const PrezentacjaAluminiowe = () => {
  return (
    <div className='w-full px-6 pt-4'>
      <div className="w-full border-2 rounded-xl lg:flex">
        <div className='w-full lg:w-1/2 relative min-h-[20rem]'>
            <ImageSlider imageUrls={images}/>
        </div>

        <div className="lg:w-1/2 p-4">
          <h1 className="p-6 text-4xl font-bold mb-4 text-[#848789]">Okna aluminiowe</h1>
            <p className='p-6 text-lg'>
                Nowoczesny design i wytrzymałość: Okna aluminiowe to synonim elegancji i trwałości.
                Ich lekka konstrukcja pozwala na tworzenie dużych przeszkleń, co wprowadza do wnętrza więcej naturalnego światła i przestrzeni.
                Nasze okna aluminiowe wyróżniają się minimalistycznym designem, który pasuje zarówno do nowoczesnych, jak i klasycznych wnętrz.
            </p>
          <div className="mt-4 p-6">
            <Link href={"/oferta/okna"} className='flex justify-center'>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                Dowiedz się więcej
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PrezentacjaAluminiowe

/*

        <div
          className={`lg:w-1/2 h-96 lg:h-[40rem] bg-cover bg-no-repeat`}
          style={{
            backgroundImage: `url("/Fotka.jpg")`,
          }}
          >
        </div>

        */