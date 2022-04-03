import React, { useState } from 'react'
import './Accordion.css';
const Accordion = ({ accordionData }) => {
    const [isActive, setIsActive] = useState(false);
  return (
      <>
      <h1>Frequently Asked Questions</h1>
      <div>
        {accordionData.map((data) => {
            const { title, content } = data;
            return(
                
                    
                    <div className="accordion-item">
                    <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
                        <p>{title}</p>
                        <div className='button'>{isActive ? '-' : '+'}</div>
                    </div>
                    {isActive && <div className="accordion-content">{content}</div>}
                    </div>
             
            )
        }
          )
}
        </div>
        </>
        )
}
export default Accordion