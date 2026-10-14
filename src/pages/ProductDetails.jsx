import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'

function ProductDetails() {
    const [product,setproduct]=useState(null)
    const {productId}=useParams()

    async function getProduct(){
        const response=await axios.get(`${import.meta.env.VITE_API_URL}/products/${productId}`)
        setproduct(response.data)
    }

    useEffect(()=>{
        getProduct()
    },[])
  return (
    <div>
      <h1>Product Details</h1>
      {product ? (<>
      <h2>Title:{product.title}</h2>
      <h2>description:{product.description}</h2>
      <h2>category:{product.category}</h2>
      <h2>price:{product.price}</h2>
      <h2>quantity:{product.quantity}</h2>
      <h2>createdAt:{product.createdAt}</h2>
      <h2>updatedAt:{product.updatedAt}</h2>

      </>): <h2>Loading...</h2>}
    </div>
  )
}

export default ProductDetails
