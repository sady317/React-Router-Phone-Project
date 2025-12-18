import React from 'react'
import Navber from '../Components/Navbar/Navber'
import Footer from '../Components/Footer/Footer'
import { Outlet } from 'react-router'

function Root() {
  return (
<>
   <div>
     <Navber/>
   </div>
 <div>
       <Outlet/>
 </div>
   <div>
     <Footer/>
   </div>
</>
  )
}

export default Root