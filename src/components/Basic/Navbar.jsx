import React from 'react'
import Flip from "../../assets/flipkart-plus.png"
import { FaCartShopping } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="py-2 bg-blue-500 text-white flex justify-center items-center gap-10">
      <div>
       <Link to="/"> <img className="h-6 w-15" src={Flip} /></Link>
        <p>Explore <span className="text-yellow-300">Plus</span></p>
      </div>
      <div>
        <input className="w-[400px] h-[30px] focus:ring-0 p-2" placeholder='Search for Produts, brands and more'/>
      </div>
      <button className="border border-black bg-white text-blue-700 font-bold px-6 py-1">Login</button>

      <div className="flex items-center gap-2">
            <FaCartShopping />
           <Link to="/cart"> <h3 className="font-semibold">Cart</h3></Link>
      </div>
    </div>
  )
}

export default Navbar
