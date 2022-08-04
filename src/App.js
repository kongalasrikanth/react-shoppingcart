import './App.scss';
import Header from './component/Navigation/Mens';
import Navbar from './component/Navigation/Navbar';
import { Routes, Route } from 'react-router-dom';
import Productlist from './component/Products/Productlist';
import Product from './component/Products/Product';
import Chekout from './component/Checkout/Chekout';
import { useEffect, useState } from 'react';
import Detail from './component/Navigation/Detail';
import Review from './component/Checkout/CheckoutStage3';
import Filter from './component/Products/Filter';
import Footer from './component/Navigation/Footer';
import Shipping from './component/Checkout/Shipping';
import Home from './component/Navigation/Home';
import Checkout from './component/Checkout/CheckoutStage1';
import Guestcheckout from './component/Checkout/CheckoutStage2';
import Checkout4 from './component/Checkout/CheckoutStage4';
import OrderSuccess from './component/Checkout/OrderSuccessful';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [category, setCategory] = useState("");
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  const getCategory = () => category;
  return (
    <>


      <Navbar countCartItems={cartItems.length} setCategory={setCategory} selectedCategory={category} />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/Mens' element={<Header category={category} />} />
        <Route exact path='/about' element={<Detail />} />
        <Route exact path='/filter' element={<Filter />} />
        <Route exact path='/Productlist' element={<Productlist category="" />} />
        <Route exact path='/Checkout2' element={<Guestcheckout />} />
        <Route exact path='/Checkout3' element={<Review />} />
        <Route exact path='/Checkout4' element={<Checkout4 />} />
        <Route exact path='/Checkout1' element={<Checkout />} />
        <Route exact path='/OrderSuccessful' element={<OrderSuccess />} />
        <Route exact path='/products/:id' element={<Product onAdd={onAdd} />} />
        <Route exact path='/cart' element={<Chekout cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />} />
        <Route exact path='/Shipping' element={<Shipping cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
