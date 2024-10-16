
import './App.css';
import Cart from './components/cart/cart';
import Categories from './components/categories/Categories';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
function App() {
  return (
    <div className="App">
       <i  style={{fontSize:"30px",marginTop:"20px",}} class="fa-solid fa-bars"></i>
       <Cart/>
       <Categories/>

    </div>
  );
}

export default App;
