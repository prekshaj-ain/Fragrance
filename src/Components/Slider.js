import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material'
import React, { useState } from 'react'
import { slideData } from '../Constants'
import Slide from './Slide'

const Slider = () => {
    const [slideIndex,setSlideIndex] = useState(1);
    const [touchPosition,setTouchPosition] = useState(null);
    const length = 2;
    const handleClick = (direction)=>{
        if(direction === 'left'){
            setSlideIndex(slideIndex > 1 && slideIndex - 1)
        }else{
            setSlideIndex(slideIndex === 1  && slideIndex + 1)
        }
    }
    const goToSlide = (index)=>{
        setSlideIndex(index);
    }
    const onTouchStart = (e)=>{
        const touchDown = e.touches[0].clientX
        setTouchPosition(touchDown);
    }
    const onTouchMove = (e)=>{
        const touchDown = touchPosition;
        if(touchDown === null){
            return;
        }
        const currentTouch = e.touches[0].clientX;
        const diff = currentTouch - touchDown;
        if(diff > 5){
            if(slideIndex === 1){
                setTouchPosition(null);
                return;
            }
            setSlideIndex(slideIndex > 1 && slideIndex - 1)
        }
        if(diff < -5){
            if(slideIndex === length){
                setTouchPosition(null);
                return;
            }
            setSlideIndex(slideIndex === 1  && slideIndex + 1)
        }
        console.log('hello');
    }
  return (
    <div>
    <div className='w-full h-4/5 flex relative overflow-x-hidden' >
        {slideIndex === 2 && <div onClick={()=>handleClick("left")} className='hidden md:flex w-8 h-8 rounded-full bg-white justify-center items-center absolute top-0 bottom-0 m-auto opacity-60 cursor-pointer z-10'>
            <ArrowLeftOutlined/>
        </div>}
        <div className={`flex ${slideIndex - 1 === 0 ? '-translate-x-0' : '-translate-x-[100vw]'} transition-transform`} onTouchStart={onTouchStart} onTouchMove={onTouchMove}>
        {
            slideData.map(data => (
                <Slide key={data.id} value={data}/> 
            ))
        }   
        </div>
        {slideIndex === 1 && <div onClick={()=>handleClick("right")} className='hidden md:flex w-8 h-8 rounded-full bg-white justify-center items-center absolute top-0 bottom-0 right-0 m-auto opacity-60 cursor-pointer z-10'>
            <ArrowRightOutlined/>
        </div>}
    </div>
    <div className='flex md:hidden justify-center gap-3 mt-5'>
        {slideData.map(data => (
            <div key={data.id} className={`w-2 h-2 rounded-full border-[1px] cursor-pointer border-pink-800 ${slideIndex === data.id && '!bg-pink-800'}`} onClick={()=>goToSlide(data.id)}></div>
        ))}
    </div>
    </div>
  )
}

export default Slider