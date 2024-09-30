import React from 'react';
import Navbar from './components/Navbar';
import Products from './pages/Products';
import 'bootstrap/dist/css/bootstrap.min.css'
import Fotter from './components/Fotter';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Cart from './pages/Cart';


import SearchInput from './components/SearchInput';
import Login from './components/Login';
import Sinuppage from './components/Sinuppage';
import ShowItem from './components/ShowItem';
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Products/>}></Route>
        <Route path="/search" element={<SearchInput />} /> 
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/Login" element={<Login/>}></Route>
        <Route path="/singup" element={<Sinuppage/>}></Route>
        <Route path="/showproduct/:id" element={<ShowItem />} />
      </Routes>
  
      <Fotter/>
    </BrowserRouter>
  );
}

export default App;
