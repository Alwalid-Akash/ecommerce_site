import React from 'react'

const HomeItem = () => {
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={product.image}
          className="card-img-top"
          alt={product.title}
          style={{ height: "200px", objectFit: "cover" }}
        />
        <div className="card-body text-center">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">${product.price}</p>
          <button className="btn btn-primary">Add to Cart</button>
        </div>
      </div>

    </>
  )
}
export default HomeItem