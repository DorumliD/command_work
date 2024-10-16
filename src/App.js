import './App.css';
import Cart from './components/cart/cart';

import menyu1 from './assents/menyu.jpg';
import ximage from './assents/12520057.png'
import { useState } from 'react'
import Shein from'./components/shein/Shein.js';
import Design from './components/design/Design.js'
import Footer from './components/footer/Footer.js';
import Bold from './components/bold/Bold.js';

function App() {
  const [isMenuVisible, setMenuVisible] = useState(false); 

  function toggleMenu() {
    setMenuVisible(prevState => !prevState); 
  }
  window.onload = () => {
    const div = document.getElementById('animatedDiv');
    div.style.top = '400px'; 
}

  return (
    <div className="App">
      <div className='border'>
      <img 
        onClick={toggleMenu} 
        style={{borderRadius:"100px" ,marginLeft:"50%", position:"absolute",width: "50px", height: "50px", cursor: "pointer" }} 
        src={menyu1} 
        alt="Menyu"
      />
      </div>
       <Cart/>
       <Bold/>
       <Design/>
       <Shein/>
       <Footer/>
       
      

      {isMenuVisible && (
        <div id='menyu' className='menyu' style={{ color:"white" , display: 'block', position: 'absolute', background: 'black', border: '1px solid #ccc', }}>
          <button style={{ marginTop:"50px",marginLeft:"400px",width:"50px", height:"50px"}} onClick={toggleMenu}><img  style={{width:"50px", height:"50px"}} src={ximage}></img></button>

          <p><a style={{textDecoration:"none",color:"white",fontSize:"19px"}} href='https://website1284624.nicepage.io/Home.html'>Home</a></p>
          <p style={{marginTop:"15px",}}> <a style={{textDecoration:"none",fontSize:"19px", color:"white"}} href='https://website1284624.nicepage.io/About.html'>About</a></p>
          <p style={{marginTop:"15px",}}> <a style={{ textDecoration:"none", fontSize:"19px",color:"white"}} href='https://website1284624.nicepage.io/Contact.html'>Contact</a></p>

        </div>

        
      )}
      {isMenuVisible &&(
       <div  style={{display:"inline-list-item"}}  id='menyu2' className='menyu2'></div>



      )}

    </div>
  );
}

export default App;
