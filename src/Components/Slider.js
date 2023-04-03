import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material'
import React, { useState } from 'react'
import { slideData } from '../Constants'
import Slide from './Slide'

const Slider = () => {
    const [slideIndex,setSlideIndex] = useState(0);
    const handleClick = (direction)=>{
        if(direction === 'left'){
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 1)
        }else{
            setSlideIndex(slideIndex === 0  ? slideIndex + 1 : 0)
        }
    }
    const goToSlide = (index)=>{
        setSlideIndex(index);
    }
  return (
    <div>
    <div className='w-full h-4/5 flex relative overflow-x-scroll scrollbar-hide scroll-smooth'>
        {slideIndex === 1 && <div onClick={()=>handleClick("left")} className='hidden md:flex w-8 h-8 rounded-full bg-white justify-center items-center absolute top-0 bottom-0 m-auto opacity-60 cursor-pointer z-10'>
            <ArrowLeftOutlined/>
        </div>}
        <div className={`flex ${slideIndex === 0 ? '-translate-x-0' : '-translate-x-[100vw]'} transition-transform`}>
        {
            slideData.map(data => (
                <Slide key={data.id} value={data}/> 
            ))
        }   
        </div>
        {slideIndex === 0 && <div onClick={()=>handleClick("right")} className='hidden md:flex w-8 h-8 rounded-full bg-white justify-center items-center absolute top-0 bottom-0 right-0 m-auto opacity-60 cursor-pointer z-10'>
            <ArrowRightOutlined/>
        </div>}
    </div>
    <div className='flex md:hidden justify-center gap-3 mt-5'>
        {slideData.map(data => (
            <div key={data.id} className={`w-2 h-2 rounded-full border-[1px] cursor-pointer border-pink-800 ${slideIndex + 1 === data.id && '!bg-pink-800'}`} onClick={()=>goToSlide(data.id - 1)}></div>
        ))}
    </div>
    </div>
  )
}

export default Slider