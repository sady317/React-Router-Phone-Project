import React from 'react'

function ProductCard({phone}) {
  return (
    <>
    <div className="card border border-y-indigo-400 p-8   flex flex-col text-center items-center  shadow-sm">
  <figure>
    <img
      src={phone?.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{phone.brand}</h2>
    <p>{phone.phone_name}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Details</button>
    </div>
  </div>
</div>
    </>
  )
}

export default ProductCard