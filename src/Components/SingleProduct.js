import React, { useState } from 'react'

const SingleProduct = ({value,brand}) => {
  const [product,setProduct] = useState(0);
  if(value.extend){
    const chooseProduct = (index)=>{
      setProduct(index);
    }
    return (
      <div className='flex flex-col gap-10 w-4/5 sm:flex-row'>
        <div className='w-full md:basis-1/3'>
            <img src={value.img[product]} alt={value.name} className="h-full w-full object-fill"/>
        </div>
        <div className=' md:basis-2/3'>
            <p className='text-[.7rem]'>{brand}</p>
            <h2 className='text-2xl font-semibold'>{value.name}</h2>
            {value?.description && <h4 className='text-gray-700 text-[.8rem] font-bold my-1'>Description:  <span className='text-pink-900'>{value.description}</span></h4>}
            <p className='text-[.7rem] my-4'>PRICE:  &#8377;{value.price}</p>
            {value?.shade && <p className='text-[.7rem] my-4'>SHADE:  {value?.shade[product]}</p>}
            <div className='flex gap-2 mb-4'>
            {
              value?.color?.map((item,index)=>{
                return <div className='w-7 h-7 p-1 border border-black cursor-pointer rounded-lg' style={{backgroundColor : `${item}`}} onClick={()=>chooseProduct(index)}></div>
              })
            }
            {
              value?.menu?.map((item,index)=>{
                return <div className={` p-1 border border-black cursor-pointer rounded-lg ${index === product && 'bg-gray-100'}`} onClick={()=>chooseProduct(index)}>{item}</div>
              })
            }
            </div>
            <a className='flex h-10 items-center gap-1 bg-green-500 w-fit px-3 rounded-lg text-white text-[.8rem]' aria-label="Order Now" href='https://wa.me/918860398634/'> <img className='w-5 h-5' alt="Order Now" src="/Assets/icons8-whatsapp.svg" /><span>Order Now</span> </a>
        </div>
    </div>
    )
  }
  return (
    <div className='flex flex-col gap-10 w-4/5 sm:flex-row'>
        <div className='w-full md:basis-1/3'>
            <img src={value.img} alt={value.name} className="h-full w-full object-fill"/>
        </div>
        <div className=' md:basis-2/3'>
            <p className='text-[.7rem]'>{brand}</p>
            <h2 className='text-2xl font-semibold'>{value.name}</h2>
            {value?.description && <h4 className='text-gray-700 text-[.8rem] font-bold my-1'>Description:  <span className='text-pink-900'>{value.description}</span></h4>}
            <p className='text-[.7rem] my-4'>PRICE:  &#8377;{value.price}</p>
            <a className='flex h-10 items-center gap-1 bg-green-500 w-fit px-3 rounded-lg text-white text-[.8rem]' aria-label="Order Now" href='https://wa.me/918860398634/'> <img className='w-5 h-5' alt="Order Now" src="/Assets/icons8-whatsapp.svg" /><span>Order Now</span> </a>
        </div>
    </div>
  )
}

export default SingleProduct