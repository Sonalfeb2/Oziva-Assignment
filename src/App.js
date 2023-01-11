import React,{useState} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductListing from "./containers/ProductListing";
import Header from "./containers/Header";
import "./App.css";
import CartDetails from "./containers/CartDetails";

function App() {
  const cart =JSON.parse(localStorage.getItem("cart"))
  const[cartLength, setCartLength] = useState(cart?cart.length:[])
  const handleCartValue = () =>{
    setCartLength(JSON.parse(localStorage.getItem("cart")).length)
  }
  return (
    <div className="App">
      <Router>
        <Header cartLength={cartLength}/>
        <Switch>
          <Route path="/" exact  >
            <ProductListing handleCartValue={handleCartValue}/>
            </Route>
          <Route path="/cart" component={CartDetails} />
          <Route>404 Not Found!</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
