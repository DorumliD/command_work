
import './App.css';
import Cart from './components/cart/cart';
import Shein from'./components/shein/Shein.js';
import Design from './components/design/Design.js'



function App() {
  return (
    <div className="App">
       <i  style={{fontSize:"30px",marginTop:"20px",}} class="fa-solid fa-bars"></i>
       <Cart/>
       <Design/>
       <Shein/>
       
      

    </div>
  );
}

export default App;
