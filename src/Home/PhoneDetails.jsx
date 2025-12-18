import React from 'react'
import { useLoaderData } from 'react-router';

function PhoneDetails() {
  const {data}=useLoaderData()
  console.log(data,"single data")
  return (
    <>
    <h1>phone details {data.name}</h1>
    </>
  )
}

export default PhoneDetails;