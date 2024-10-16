import React from 'react';
import './Categories.css';
import pic1 from './photo_2024-10-14_14-29-16.jpg';
import pic2 from './photo_2024-10-14_14-30-22.jpg';
import pic3 from './photo_2024-10-14_14-31-01.jpg';
import pic4 from './photo_2024-10-14_14-31-37.jpg';


export default function Categories() {
  return (
    <div className='container'>
      <div data-aos="fade-left"
      data-aos-offset="2000"
      data-aos-duration="2000"
       className='firstcard'>
        <img src={pic1}/>
        <h1>
            DIGITAL BUSINESS <br/>
            STRATEGY
         </h1>
        <p>
        Sample text. Click to select the text box. Click again or double <br/>
                         click to start editing the text.
        </p>
      </div>
      <div className='secondcard'>
        <img src={pic2}/>
        <h1>SOCIAL MEDIA MARKETING</h1> 
        <p>
        Sample text. Click to select the text box. Click again or <br/>
                double click to start editing the text.
        </p>
      </div>
      <div className='thirdcard'>
        <img src={pic3}/>
        <h1>ECOMMERCE STRATEGY</h1>
        <p>
            Sample text. Click to select the text box. Click again or <br/>
                    double click to start editing the text.
        </p>
      </div>
      <div data-aos="fade-right"
      data-aos-offset="2000"
      data-aos-duration="2000"
       className='fourthcard'>
        <img src={pic4}/>
        <h1>DIGITAL INSIGHTS & <br/>
                PLANNING 
        </h1>
        <p>
        Sample text. Click to select the text box. Click again or double <br/>
                         click to start editing the text.
        </p>
      </div>
    </div>
  )
}
