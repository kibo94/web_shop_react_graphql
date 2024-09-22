import React, { useContext, useEffect } from 'react';
import Login from "./containers/Auth/Login/Login"
import Register from "./containers/Auth/Register/Register"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Layout/Header/Header"
import Footer from "./components/Layout/Footer/Footer"
import Parlax from "./components/Layout/Parlax/Parlax"
import User from "./components/User/User"
import Cart from "./components/Cart/Cart"
import axios from 'axios';
import { DataContext, DataProvider } from "./context"
import {
  Route,
  Switch
} from "react-router-dom";
import Products from './components/Items/Products';
import Product from './components/Items/Product';
import Orders from './components/Odrers/Orders';
import ProductMenager from './components/Admin/ProductMenager';
function App() {

  return (
    <DataProvider>
      <div className="App">

        <Header />
        <Route exact path="/" >
          <Parlax />
          <div id="items">
            <Products type="home" />
          </div>
        </Route>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/cart" component={Cart} />
        <Route path="/user" component={User} />
        <Switch>
          <Route path="/:rout/:name" component={Product} />
          <Route path="/laptopovi" component={() => <Products type="lap" />} />
          <Route path="/mobilni" component={() => <Products type="mob" />} />
          <Route path="/televizori" component={() => <Products type="tv" />} />
          <Route path="/orders" component={() => <Orders />} />
          <Route path="/product-menager" component={() => <ProductMenager />} />

        </Switch>

        <Footer />
      </div>
    </DataProvider>
  );
}

export default App;
