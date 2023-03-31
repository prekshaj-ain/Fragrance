import React from 'react'
import { data } from '../Constants'
import SingleProduct from './SingleProduct'
const Products = () => {
  return (
    <div className='flex flex-wrap justify-center sm:gap-10 py-10'>
        {data.map(product => (
            <SingleProduct key={product.id} value={product}/>
        ))}
    </div>
  )
}

export default Products