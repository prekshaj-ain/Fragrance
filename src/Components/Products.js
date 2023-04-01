import React, { useEffect } from 'react'
import { mistBody } from '../Constants'
import SingleProduct from './SingleProduct'
import { useParams, useSearchParams } from 'react-router-dom';
const Products = () => {
  const { Product } = useParams();
  const [searchParams] = useSearchParams();
  console.log(searchParams);
  useEffect(()=>{
    window.scrollTo(0,0);
  },[])
  return (

    <div className='flex flex-col items-center '>
        <h1 className='mt-5 text-[.7rem] font-semibold text-pink-800'>{Product}</h1>
        <div className='flex flex-wrap justify-center sm:gap-10 py-10'>
        { Product === "Mist-And-Body" ? (mistBody.map(product => (
            <SingleProduct key={product.id} value={product}/>
        ))):(
          <div className='text-3xl font-semibold animate-pulse'>Coming soon</div>
        )}
        </div>
    </div>
  )
}

export default Products