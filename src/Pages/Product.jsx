import React, {useState, useEffect} from 'react'
import Image1 from "../assets/image1.webp"
import { useParams, Link } from 'react-router-dom';
import db from "../../db.json"
import Logo1 from "../assets/logo1.png"
import Tag from "../assets/tag.webp"

import { FaCartShopping } from "react-icons/fa6";
import { AiFillThunderbolt } from "react-icons/ai";
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/items';


const Product = () => {
    const [item, setItem] = useState(null)
    let {id} = useParams()
    const dispatch = useDispatch()

    const getItemFromId = () => {
        const products = db["productListing"]

        let product = products.filter((product) => id == product.id)

        setItem(product[0])
    }

    useEffect(() => {
        getItemFromId()
    }, [])

  return (
    <div className="flex gap-2">
        <div className="flex-4/6 p-5">
            <img style={{ height: "500px", width:"500px"}} src={item && item.img} />
        </div>
        <div className="flex-2/6 my-3">
        <div className="text-xl font-semibold m-2">
            {item && item.title}
        </div>
        <div className="flex gap-2 font-medium my-3">
            <div className="block border h-7 w-9 rounded bg-green-600 text-white text-center">
                {item && item.rating}
            </div>
            <div>{item && item.detail_rating}</div>
            <img className="w-20 h-6 " src={Logo1} />
        </div>

        <div className="flex items-center gap-2 my-3">
            <h3 className="text-xl">{item && item.rate.original_rate}</h3>
            <h3 className="line-through font-thin">{item && item.rate.strike_rate}</h3>
            <h3>{item && item.rate.off}</h3>
        </div>

        <div>
            <h3 className="font-semibold my-5">Available Offers</h3>

            <p className="flex items-center gap-2"><img className="h-5 w-5 my-2" src={Tag} /> {item && item.available_offers.first}</p>
            <p className="flex items-center gap-2"><img className="h-5 w-5 my-2" src={Tag} /> {item && item.available_offers.second}</p>
            <p className="flex items-center gap-2"><img className="h-5 w-5 my-2" src={Tag} /> {item && item.available_offers.third}</p>
            <p className="flex items-center gap-2"><img className="h-5 w-5 my-2" src={Tag} /> {item && item.available_offers.fourth}</p>
        </div>

        <div className="my-10 flex gap-4">
           <Link to="/cart"><button onClick={() => dispatch(addItem(item))} className="flex gap-2 rounded items-center px-4 py-3 bg-yellow-500 text-white"> <FaCartShopping/> Add to Cart</button></Link> 
            <button className="flex gap-2 rounded items-center px-4 py-3 bg-orange-500 text-white"> <AiFillThunderbolt/> Buy Now</button>
        </div>
            
        </div>
    </div>
  )
}

export default Product
