import React from 'react'
import { Link } from "react-router-dom"
import NoItem from "../assets/noitem.webp"

const NoItemInCart = () => {
  return (
    <div className="flex flex-col justify-center items-center" >
      <div className="my-3"><img style={{ height: "280px", width: "300px"}} src={NoItem} /> </div>
      <div className="my-3">
        <h3 className="text-center my-2">Missing Cart items?</h3> 
        <h4>Login to see the items you added previously</h4>
      </div>
      <div><Link to="/"><button className="bg-orange-500 px-7 py-2 text-white">Login</button></Link></div>
    </div>
  )
}

export default NoItemInCart
