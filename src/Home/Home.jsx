import React, { useEffect, useState } from 'react'
import { data } from 'react-router'
import ProductCard from './ProductCard'

function Home() {
    const[data,setData]=useState([])
// console.log(data)
    useEffect(()=>{
        fetch("https://openapi.programming-hero.com/api/phones?search=a")
        .then(res=>res.json())
        .then((data)=>setData(data.data))
    },[])
  return (
    <>
   <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-4 space-y-4 my-10'>
     {data?.map((phone)=>(

    <ProductCard phone={phone} key={phone?.phone_name}/>
    ))}
   </div>
    </>
  )
}

export default Home;