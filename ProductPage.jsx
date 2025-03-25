import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function ProductPage() {
  const [count, setCount] = useState(0)

        return (
          <>
             <div className="product-page-container">
      <h2 className="product-page-heading">Products</h2>
      <div className="product-list">
        <div className="product-item">
          <img src="https://tse3.mm.bing.net/th?id=OIP.LLmBb1FYjjw2dLKKHNK4rgHaEz&pid=Api&P=0&h=180" alt="Mobiles" className="product-image" />
          <h3 className="product-title">Mobiles</h3>
          <p className="product-description">This is a brief description of the product.</p>
          <span className="product-price">1000/rs</span>
          <button className="add-to-cart-button">Add to Cart</button>
        </div>
      </div>
    </div>
          </>
        )
      }
      
      

export default ProductPage
