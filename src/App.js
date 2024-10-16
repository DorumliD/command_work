import './App.css';
import Cart from './components/cart/cart';
import menyu1 from './assents/menyu.jpg';
import ximage from './assents/12520057.png'
import { useState } from 'react';

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
        style={{ left:"45%", position:"absolute",width: "50px", height: "50px", cursor: "pointer" }} 
        src={menyu1} 
        alt="Menyu"
      />
      </div>
      

      {isMenuVisible && (
        <div id='menyu' className='menyu' style={{ color:"white" , display: 'block', position: 'absolute', background: 'black', border: '1px solid #ccc', }}>
          <button style={{ marginTop:"50px",marginLeft:"400px",width:"50px", height:"50px"}} onClick={toggleMenu}><img  style={{width:"50px", height:"50px"}} src={ximage}></img></button>

          <p>Home</p>
          <p style={{marginTop:"10px"}}>About</p>
          <p style={{marginTop:"10px"}}>contact</p>

        </div>

        
      )}
      {isMenuVisible &&(
       <div  style={{display:"inline-list-item"}}  id='menyu2' className='menyu2'></div>



      )}

      <Cart />
    </div>
  );
}

export default App;
