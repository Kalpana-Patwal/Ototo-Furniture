import React from 'react'
import './Furniture.css'
import Chair5 from '../../assets/WhiteChair5.webp'
import BrownChair1 from '../../assets/BrownChair1.jpg'
import BrownTable from '../../assets/BrownTable.webp'
import Combine from '../../assets/Combine.webp'


const Furniture = () => {
  return (
    <div>
        <div className="furniture">
            <div className="type-furni">
              <img src={Chair5} alt="" />
              <img src={BrownChair1} alt="" />
              <img src={BrownTable} alt="" />
              <img src={Combine} alt="" />
            </div>
            
        </div>  
      
    </div>
  )
}

export default Furniture
