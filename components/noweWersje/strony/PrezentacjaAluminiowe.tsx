import ImageSlider from '../ImageSlider';
import React,{useState} from 'react';
import Image from 'next/image';
import Link from 'next/link'


const images = ["/static/images/P1080114.jpg","/static/images/P1080033.jpg","/static/images/P1080050.jpg","/static/images/P1080073.jpg","/static/images/P1080108.jpg"]
const imageUrls = ["/static/images/PE68.png","/static/images/PE78N.png"]
const opisy = ["System o trzykomorowej konstrukcji profili z rowkiem okuciowym w standardzie Euro.",
"Zaawansowany system o trzykomorowej konstrukcji profili o bardzo dobrych właściwościach izolacyjnych."]
const PrezentacjaAluminiowe = () => {
const nazwy = ["PE68","PE78"]
  const [imageIndex,setImageIndex] = useState(0);
  function showNextImage(){
    setImageIndex(index =>{
      if(index===imageUrls.length-1) return 0
      return index +1
    })
  }
  function showPrevImage(){
    setImageIndex(index =>{
      if(index===0) return imageUrls.length - 1
      return index -1
    })
  }



  return (
    <div className='w-full px-1 lg:px-6 pt-4'>
      <div className="w-full border-2 rounded-xl lg:flex">
        <div className='w-full hidden lg:block lg:w-1/2 lg:min-h-[40rem]' style={{position:"relative"}}>
            <ImageSlider imageUrls={images}/>
        </div>

        <div className="lg:w-1/2 p-4">
          <h1 className="p-6 text-4xl font-bold mb-4 text-[#848789]">Okna aluminiowe</h1>
            <p className='p-6 text-lg'>
                Nowoczesny design i wytrzymałość: Okna aluminiowe to synonim elegancji i trwałości.
                Ich lekka konstrukcja pozwala na tworzenie dużych przeszkleń, co wprowadza do wnętrza więcej naturalnego światła i przestrzeni.
                Nasze okna aluminiowe wyróżniają się minimalistycznym designem, który pasuje zarówno do nowoczesnych, jak i klasycznych wnętrz.
            </p>
            <div className='flex justify-center w-full '>
              <div className='w-4/5 xl:3/5 h-40 border-2 rounded-xl my-8 hover:bg-slate-200 cursor-pointer'>
              <Link href={"./oferta/okna/Pe68"}>
                <div className='w-full h-full relative flex'>
                  <Image src="/PE68.png" alt='pe68' width={200} height={150} className='p-2'/>
                  <div className='block'>
                      <p className='text-xl md:text-2xl p-2'>Pe68</p>
                      <p className='text-sm xl:text-lg p-2'>System o trzykomorowej konstrukcji profili z rowkiem okuciowym w standardzie Euro.</p>
                  </div>
                </div>
              </Link>
              </div>
            </div>
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