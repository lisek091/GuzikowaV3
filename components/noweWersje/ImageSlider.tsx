import React,{useState} from 'react'
import Image from 'next/image';
import {AiOutlineArrowLeft,AiOutlineArrowRight} from 'react-icons/ai'
type ImageSliderProps = {
    imageUrls:string[]
}
const ImageSlider = ({imageUrls}:ImageSliderProps) => {

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
    <div className='w-full h-full relative'>
      <div className='w-full h-full overflow-hidden flex' style={{}}>
        {imageUrls.map(url=>(
          <Image key={url} style={{translate:`${-100 * imageIndex}%`}} src={imageUrls[imageIndex]} alt='' fill className='img-slider-img'></Image>

        ))}
      </div>
        <button onClick={showNextImage} className='img-slider-btn ' style={{left:0}}><AiOutlineArrowLeft color='white' size={30}/></button>
        <button onClick={showPrevImage} className='img-slider-btn ' style={{right:0}}><AiOutlineArrowRight color='white' size={30} /></button>
    </div>
  )
}

export default ImageSlider