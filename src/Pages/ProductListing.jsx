import React from 'react'
import Image1 from "../assets/image1.webp"
import Logo1 from "../assets/logo1.png"
import Products from "../../db.json"
import { useNavigate } from "react-router-dom";

const ProductListing = () => {
    const navigate = useNavigate();

    const handleClick = (product) => {
            navigate(`/product/${product.id}`)
    }
  return (
    <div className="grid grid-cols-4 p-8">
        {Products["productListing"].map((product, index) => <div key={`Product-${index}`} className="mb-56 w-[300px] h-[300px] bg-white">
        <img className="cursor-pointer" onClick={() => handleClick(product)} height="200px" width="230px" src={product.img} />
        <div className="bg-white w-[230px] h[300px] p-4 hover:-translate-y-10 ease-in-out duration-300">
            <h3 className="text-ellipsis overflow-hidden w-[240px] my-2">{product.title} </h3>
            <h4 className="font-thin">{product.size}</h4>
            <img className="my-2" height="20px" width="70px" src={Logo1} />

            <div className="flex gap-3">
                <div><h3 className="">{product.rate.original_rate}</h3></div>
               <div><h3 className="line-through font-thin">{product.rate.strike_rate}</h3></div> 
                <div><h3 className="text-green-700" >{product.rate.off}</h3></div>
            </div>

            <h3>Upto ₹300 Off on Exchange</h3>
        </div>
      </div>)}
      
    </div>
  )
}

export default ProductListing
