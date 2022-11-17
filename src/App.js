import React, {useEffect, useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import './App.css';

import Home from './components/Home';
import Search from './components/Search';
import WishList from './components/WishList';

function App(effect, deps) {

  const [userName,setUserName] = useState("")
  const [ProductsState,setProductsState] = useState([])
  const [Wishlist,setWishlist] = useState([])
  const products = ["lorem", "ipsum","4090 RTX", "Hadar", "Nir", "Matan","aviv"]
  const [SV, setSV] = useState("")


  const useFetch = () => {

      fetch("https://www.googleapis.com/books/v1/volumes?q=" + SV)
          .then((res)=> res.json())
          .then((productArray) => {
            console.log(productArray)
            setProductsState(productArray.items)

          })

  }


  // const hasProducts = ProductsState.length > 0

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/search" element={<Search username={userName} search={ProductsState} SV={SV} setSV={setSV} useFetch={useFetch}/>}>
          </Route>

          <Route path="/wishlist" element={<WishList/>}>
          </Route>
          <Route path="/" element={<Home username={userName} setUsername={setUserName}/>}>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
