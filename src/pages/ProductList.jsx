import axios from 'axios'
import { useState, useEffect } from 'react'
import {Link} from 'react-router'
function ProductList() {
    const [ products, setProducts ] = useState([])



    async function getAllProducts(){
        const response = await axios.get(import.meta.env.VITE_API_URL + '/products')
        setProducts(response.data)
        console.log(response.data)

    }

    useEffect(()=>{
        getAllProducts()
    },[])

    

    
  return (
    <div>
        <h1>Products List</h1>
        
        {products.map((oneProduct)=>
        <div key={oneProduct._id}>
            <p>Name:{oneProduct.title}</p>
              <Link to={`/products/${oneProduct._id}`}>Go to product Details</Link>

        </div>
        )}
    </div>
  )
}

export default ProductList