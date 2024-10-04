import React, { useRef, useState, useEffect } from 'react';
import './Category.css';
import WhiteChair1 from '../../assets/WhiteChair1.jpg';
import WhiteChair7 from '../../assets/WhiteChair7.jpg';
import WhiteChair3 from '../../assets/WhiteChair3.jpg';
import WhiteChair4 from '../../assets/WhiteChair4.jpg';
import WhiteChair6 from '../../assets/WhiteChair6.jpg';
import BrownDining from '../../assets/BrownDining.jpg';

export default function Category() {
  const headingRef = useRef(null);
  const para2Ref = useRef(null);
  
  const [isHeadingVisible, setHeadingVisible] = useState(false);
  const [isPara2Visible, setPara2Visible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const headingElement = headingRef.current;
      const para2Element = para2Ref.current;
      
      if (headingElement) {
        const headingRect = headingElement.getBoundingClientRect();
        setHeadingVisible(headingRect.top <= window.innerHeight && headingRect.bottom >= 0);
      }

      if (para2Element) {
        const para2Rect = para2Element.getBoundingClientRect();
        setPara2Visible(para2Rect.top <= window.innerHeight && para2Rect.bottom >= 0);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className='Products'>
        <div className={`heading ${isHeadingVisible ? 'visible' : ''}`} ref={headingRef}>
          <h1>Experience custom made items</h1>
        </div>
        <div className='Product-container'>
          <span className="Product-collage">
            <img src={WhiteChair4} alt="" className="img5" />
            <img src={WhiteChair1} alt="" className="img1" />
            <img src={WhiteChair3} alt="" className="img3" />
            <img src={WhiteChair6} alt="" className="img2" />
            <img src={BrownDining} alt="" className="img4" />
            <img src={WhiteChair7} alt="" className="img6" />
          </span>
        </div> 
      </div>
      <div className={`para2 ${isPara2Visible ? 'visible' : ''}`} ref={para2Ref}>
        <p>
          "Transform your space with personalized furniture, crafted to fit your unique style and needs. 
          <br /> From materials to design, every piece is tailored just for you, ensuring a perfect blend of comfort and elegance."
        </p>
      </div>
    </>
  );
}
