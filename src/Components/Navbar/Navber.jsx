import React from 'react'
import { Link } from 'react-router'

function Navber() {
  return (
    <>
    <div className="navbar bg-base-200 flex justify-between shadow-sm">
  <Link to={"/"}>
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">Phone Store</a>
  </div></Link>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1 lg:flex gap-4 lg:gap-8">
  <Link to={"/"}> <li className='cursor-pointer text-xl'>Home</li></Link>
  <Link to={"/favourite"}> <li className='cursor-pointer text-xl'>favourits</li></Link>
  <Link to={"/contact"}> <li className='cursor-pointer text-xl mr-4'>contact</li></Link>
    </ul>
  </div>
</div>
    </>
  )
}

export default Navber