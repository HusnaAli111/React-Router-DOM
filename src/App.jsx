import React from 'react'
import {Route,Routes} from 'react-router'
import Homepage from './pages/Homepage'
import ProductsDetails from './pages/ProductDetails'
import ProductsList from './pages/ProductList'
import CreateProduct from './pages/CreateProduct'
import NavBar from './components/NavBar/NavBar'


function App() {
  return (
    <div>
      
      home page
            <NavBar/>

      <Routes>
      <Route path='/' element={<Homepage/>} />
      <Route path='/products' element={<ProductsList/>} />
      <Route path='/new-product' element={<CreateProduct/>} />
      <Route path='/products/:productId' element={<ProductsDetails/>} />

        

      </Routes>
    </div>
  )
}

export default App
