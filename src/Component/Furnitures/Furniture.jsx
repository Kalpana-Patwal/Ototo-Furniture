import React from 'react'
import './Furniture.css'
import Chair5 from '../../assets/WhiteChair5.webp'
import BrownChair1 from '../../assets/BrownChair1.jpg'
import BrownTable from '../../assets/BrownTable.webp'
import Combine from '../../assets/Combine.webp'
import furniture  from '../../assets/furniture.png'


const Furniture = () => {
  return (
    <div>
        <span className="furniture">
              <div className="shop">
                <h1>Shop </h1>
                <h3>by Categories</h3>
                <span>
                <img src={furniture} alt="" />
                100+
                <p>Unique Products</p>
                </span>
              </div>
              <div className="type-furni">
                <img src={Chair5} alt="" />
                <img src={BrownChair1} alt="" />
                <img src={BrownTable} alt="" />
                <img src={Combine} alt="" />
              </div>
            
        </span>  
      
    </div>
  )
}

export default Furniture
