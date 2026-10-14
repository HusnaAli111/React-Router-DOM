import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router'

function CreateProduct() {
    const [ formData, setFormData ] = useState({
        title:'',
        description:'',
        category:'',
        price:" ",
        quantity:" ",
        createdAt:" ",
        updatedAt:" "
    })
        const navigate=useNavigate()
    function handleChange(event){
        setFormData({...formData,[event.target.id]:event.target.value})
    }

    async function handleSubmit(event){
        event.preventDefault()

        const response = await axios.post(`${import.meta.env.VITE_API_URL}/products`, formData)
        navigate('/products')
    }

  return (
    <div>
      <h1>CreateProduct</h1>
      <form onSubmit={handleSubmit}>

            <label htmlFor="title">title:</label>
            <input 
            type="text" 
            value={formData.title}
            onChange={handleChange}
            name='title'
            id='title'
            />
            
            <label htmlFor="description">description:</label>
            <input 
            type="text"
            value={formData.description}
            onChange={handleChange}
            name='description'
            id='description'
             />

            <label htmlFor="category">category:</label>
            <input 
            type="text" 
            name='category'
            id='category'
            value={formData.category}
            onChange={handleChange}
            />

            <label htmlFor="price">price:</label>
            <input 
            type="text" 
            name='price'
            id='price'
            value={formData.price}
            onChange={handleChange}
            />

            <label htmlFor="quantity">quantity:</label>
            <input 
            type="text" 
            name='quantity'
            id='quantity'
            value={formData.quantity}
            onChange={handleChange}
            />

            <button>Create Product</button>
        </form>
    </div>
  )
}

export default CreateProduct

  