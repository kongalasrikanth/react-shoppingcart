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
import Footer1 from './component/Navigation/Footer1';
import Footer2 from './component/Navigation/Footer2';
import Shipping from './component/Checkout/Shipping';
import Home from './component/Navigation/Home';
import CheckoutStage1 from './component/Checkout/CheckoutStage1';
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
  var [isFooter1Hidden, setIsFooter1Hidden] = useState(false);
  return (
    <>


      <Navbar countCartItems={cartItems.length} setCategory={setCategory} selectedCategory={category} />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/Mens' element={<Header  />} />
        <Route exact path='/about' element={<Detail />} />
        <Route exact path='/filter' element={<Filter />} />
        <Route exact path='/Productlist' element={<Productlist category="" />} />
        <Route exact path='/Checkout2' element={<Guestcheckout setFooter1={setIsFooter1Hidden}/>} />
        <Route exact path='/Checkout3' element={<Review setFooter1={setIsFooter1Hidden}/>} />
        <Route exact path='/Checkout4' element={<Checkout4 setFooter1={setIsFooter1Hidden}/>} />
        <Route exact path='/CheckoutStage1' element={<CheckoutStage1  />} />
        <Route exact path='/men' element={<Header category="men's clothing" />} />
        <Route exact path='/women' element={<Header category="women's clothing" />} />
        <Route exact path='/jewellery' element={<Header category="jewelery" />} />
        <Route exact path='/electronics' element={<Header category="electronics" />} />
        <Route exact path='/OrderSuccessful' element={<OrderSuccess setFooter1={setIsFooter1Hidden}/>} />
        <Route exact path='/products/:id' element={<Product onAdd={onAdd} />} />
        <Route exact path='/cart' element={<Chekout cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />} />
        <Route exact path='/Shipping' element={<Shipping cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />} />
      </Routes>
      
      {isFooter1Hidden ? null : <Footer1 />}
      <Footer2 />
    </>
  );
}

export default App;
