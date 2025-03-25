import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './components/SignUp';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import SignIn from './components/SignIn';
import GetProducts from './components/GetProducts';
import AddProduct from './components/AddProduct';
import Navbar from './components/Navbar';
import  Cart  from './components/Cart';
import SingleProduct from './components/SingleProduct';
import PaymentMethods from './components/PaymentMethods';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import "bootstrap-icons/font/bootstrap-icons.min.css"

function App() {
  return (
      <Router>
        <Navbar />
        <br/><br/>
        <br/><br/>
        <div>
          <img src='/images/100008150.webp' alt='my image'/>
        </div>
        <br/><br/>
        <div className="App">
          <header className='App-header'>
            <h2>Welcome to Primrose Tech</h2>
          </header>
          <Routes>
            <Route path='/signup' element={<SignUp />} />
            <Route path='/signin' element={<SignIn />} />
            <Route path='/' element={<GetProducts />} />
            <Route path='/addproduct' element={<AddProduct />} />
            <Route path='/cart' element={<Cart/>}/>
            <Route path="/singleproduct" element={<SingleProduct/>}/>
            <Route path="/aboutus" element={<AboutUs/>}/>
          </Routes>
        </div>

        <PaymentMethods/>
        <Footer/>
      </Router>
  );
}

export default App;
