import React from 'react'

const SingleProduct = ({value}) => {
  return (
    <div className='flex flex-col gap-5 sm:gap-10 w-4/5 sm:flex-row'>
        <div className='w-full md:basis-1/3'>
            <img src={value.img} alt={value.name} className="object-fill"/>
        </div>
        <div className='my-10 md:basis-2/3'>
            <p className='text-[.7rem]'>VICTORIA'S SECRET</p>
            <h2 className='text-2xl font-semibold'>{value.name}</h2>
            <h4 className='text-gray-700 text-[.8rem] font-bold my-1'>Fragrance Description:  <span className='text-pink-900'>{value.description}</span></h4>
            <p className='text-[.7rem] my-4'>PRICE:  {value.price}</p>
            <a className='flex h-10 items-center gap-1 bg-green-500 w-fit px-3 rounded-lg text-white text-[.8rem]' aria-label="Order Now" href='https://wa.me/918860398634/'> <img className='w-5 h-5' alt="Order Now" src="/Assets/icons8-whatsapp.svg" /><span>Order Now</span> </a>
        </div>
    </div>
  )
}

export default SingleProduct