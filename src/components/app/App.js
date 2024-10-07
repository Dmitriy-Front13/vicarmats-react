import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Footer from '../footer/Footer';
import Header from '../header/Header';
import MainPage from '../../pages/MainPage';
import Delivery from '../../pages/Delivery';
import Warranty from '../../pages/Warranty';
import AboutUs from '../../pages/AboutUs';
import AboutProduct from '../../pages/AboutProduct';
import OrderPage from '../../pages/Order';
import Checkout from '../../pages/Checkout';


function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<MainPage />}/>
        <Route path='/about-product' element={<AboutProduct />}/>
        <Route path='/warranty' element={<Warranty />}/>
        <Route path='/delivery' element={<Delivery />}/>
        <Route path='/about-us' element={<AboutUs />}/>
        <Route path='/order' element={<OrderPage/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
