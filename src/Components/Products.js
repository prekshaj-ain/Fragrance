import React, { useEffect } from "react";
import { Accessories, eyes, face, hair, lips, mistBody, nails, skincare } from "../Constants";
import SingleProduct from "./SingleProduct";
import { useParams, useSearchParams } from "react-router-dom";
const Products = () => {
  const { Product } = useParams();
  const [searchParams] = useSearchParams();
  const query = searchParams.get("filter");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  if (!query) {
    return (
      <div className="flex flex-col items-center ">
        <h1 className="mt-5 text-[.7rem] font-semibold text-pink-800">
          {Product}
        </h1>
        <div className="flex flex-wrap justify-center gap-10 py-10">
          {Product === "Mist-And-Body" &&
            mistBody.map((product) => (
              <SingleProduct
                key={product.id}
                value={product}
                brand="VICTORIA'S SECRET"
              />
            ))}
          {Product === "Accessories" &&
            Accessories.map((item) => (
              <SingleProduct key={item.id} value={item} />
            ))}
          {Product === "Skincare" &&
            skincare.map((item) => (
              <SingleProduct key={item.id} value={item} />
            ))}
          {Product === "Hair" &&
            hair.map((item) => (
              <SingleProduct key={item.id} value={item} />
            ))}
          {Product === "Nails" &&
            nails.map((item) => (
              <SingleProduct key={item.id} value={item} />
            ))}
          {Product === "Face" &&
            face.map((item) => (
              <SingleProduct key={item.id} value={item} />
            ))}
          {Product === "Eyes" &&
            eyes.map((item) => (
              <SingleProduct key={item.id} value={item} />
            ))}
          {Product === "Lips" &&
            lips.map((item) => (
              <SingleProduct key={item.id} value={item} />
            ))}
        </div>
      </div>
    );
  } else {
    let filteredArray;
    if(Product === 'Mist-And-Body'){
      filteredArray = mistBody.filter((item) => {
        return item.type === query;
      });
    }
    else if(Product === 'Skincare'){
      filteredArray = skincare.filter((item) => {
        return item.type === query;
      });
    }
    else if(Product === 'Face'){
      filteredArray = face.filter((item) => {
        return item.type === query;
      });
    }
    else if(Product === 'Eyes'){
      filteredArray = eyes.filter((item) => {
        return item.type === query;
      });
    }
    else if(Product === 'Lips'){
      filteredArray = lips.filter((item) => {
        return item.type === query;
      });
    }
    return (
      <div className="flex flex-col items-center ">
        <h1 className="mt-5 text-[.7rem] font-semibold text-pink-800">
          {Product} / {query}
        </h1>
        <div className="flex flex-wrap justify-center gap-10 py-10">
          {Product === "Mist-And-Body" &&
            filteredArray.map((product) => (
              <SingleProduct
                key={product.id}
                value={product}
                brand="VICTORIA'S SECRET"
              />
            ))}
            {
              (Product === 'Skincare' || Product === 'Face' || Product === 'Eyes' || Product === 'Lips' )&&
              filteredArray.map((product) => (
              <SingleProduct
                key={product.id}
                value={product}
              />
            )) 
            }
            
        </div>
      </div>
    );
  }
};

export default Products;
