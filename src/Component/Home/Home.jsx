import React from 'react'
import './Home.css'
import background5 from '../../assets/background5.jpg'

const Home = () => {
  return (
  <div className="Home">
    <img src={background5} alt="" />
    <div className="Heading">
      <h1>Ototo- Where Style Meets Comfort</h1>
      </div>
      <div className='para'>
      <p>Customizable options to suit </p><p>your specific needs and preferences</p>
      <button>Shop Now</button>
    </div>
    </div>
    
  )
}

export default Home;

