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
  return (
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
  )
}

export default Slider