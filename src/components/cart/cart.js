import React from 'react'
import './cart.css'

export default function Cart() {
    
    window.onload = () => {
        const div = document.getElementById('animatedDiv');
        div.style.top = '400px'; 
    }
    
  return (
    <div className='cart'>
        <div className='box'>


            <div className='h1'>
                <h1 style={{marginTop:"70px"}}>Digital marketing that delivers results</h1>
            </div>
            <div className='lorem'>
                <p>We work by a set of key values which has naturally produced an amazing environment for talent to flourish and for our clients to get the best work from us.</p>
            </div>
            <div className='button'>
                <button style={{width:"220px",height:"65px,",border:"none",borderRadius:"22px",color:"white",fontSize:"16px"}}><a style={{textDecoration:"none",color:"white"}} href='https://website1284624.nicepage.io/Home.html?version=71b9431f-2f21-406e-9ba8-cad91144db95#'>CONTACT US</a></button>
            </div>


        </div>
        <div className='box1'>
            <div id="animatedDiv" className='img'></div>
            <div className='text'>
                <p style={{marginLeft:"25%",fontSize:"20px"}}>Image from <span style={{color:"rgb(71, 201, 86)"}}>Freepik</span></p>
            </div>
           

        </div>


        


      
    </div>
  )
}
