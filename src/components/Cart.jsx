import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Image1 from "../assets/image1.webp"
import Logo1 from "../assets/logo1.png"
import db from "../../db.json"
import { useSelector, useDispatch } from 'react-redux'
import NoItemInCart from './NoItemInCart.jsx'
import { incrementQuantity, decrementQuantity } from '../redux/items.js'


const Cart = () => {
    const dispatch = useDispatch()
    const { items, price } = useSelector(state => state.items)

    if(items.length == 0){
        return (
            <NoItemInCart />
        )
    }

    console.log(items)

  return (
       <div>
            <div className="h-[500px] flex gap-10 bg-[#f1f3f6]">
                  <div className="flex-8/12 p-6">
                {items.map((item, item_index) => (<div key={`ITEMS-${item_index}`} className="flex p-4 my-4 gap-4 bg-white">
                          <div>
                              <img className="h-32 w-32" src={item.img} />
                          </div>
                          <div className="flex flex-col gap-3">
                              <h3>{item.title}</h3>
                              <h4>{item.size}</h4>
                              <div className="flex gap-2">
                                  <h5>Seller:RetailNet</h5>
                                  <img className="h-6 w-16" src={Logo1} />
                              </div>
                              <div className="flex gap-2">
                                  <h4 className="line-through font-medium">  {item.rate.strike_rate}</h4>
                                  <h3 className="font-bold">{item.rate.original_rate}</h3>
                                  <h3 className="text-green-600">{item.rate.off}</h3>
                              </div>
                              <div className="flex items-center gap-2">
                                <button onClick={() => dispatch(incrementQuantity(item_index))} className="border-2 p-2 rounded-full">+</button>
                                <div>{item.quantity}</div>
                                <button onClick={() => dispatch(decrementQuantity(item_index))} className="border-2 p-2 rounded-full">-</button>
                              </div>
                          </div>
                          <div>
                              Delivery by Tue Aug 20 | <span className="text-green-600">Free</span>
                          </div>
                      </div>)) }   
                  </div>
      
                  <div className="flex-4/12 p-6">
                      <div className="flex flex-col gap-5 bg-white p-4 h-[300px] w-[350px]">
                          <h3>PRICE DETAILS</h3>
                          <div className="border-b"></div>
      
                          <div className="flex justify-between">
                              <div>Price ({items.length} item)</div>
                              <div>₹1900</div>
                          </div>
      
                          <div className="flex justify-between">
                              <div>Discount</div>
                              <div className="text-green-600">− ₹5,200</div>
                          </div>
      
                          <div className="flex justify-between">
                              <div>Delivery Charges</div>
                              <div className="text-green-600">Free</div>
                          </div>
                          <div className="border-b"></div>
                          <div className="flex justify-between">
                              <div className="text-xl font-bold">Total Amount</div>
                              <div className="">₹1,299</div>
                          </div>
                          <div className="border-b"></div>
                      </div>
                  </div>
            </div>
          </div>
    
  )
}

export default Cart
