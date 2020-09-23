import React from "react";
import Header from "./components/header/Header.jsx";
import Special from "./components/special/Special.jsx";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contact from "./components/contact/Contact.jsx";
// import HomePage from "./components/homePage/HomePage.jsx";
import ShopPhotos from "./components/shopPhotos/ShopPhotos.jsx";
// import ShopPage from "./pages/shop/ShopPage.jsx";
import GridPhotos from "./components/gridList/GridPhotos.jsx";
import "./App.css";

function App() {
  return (
    <div>
      <Router>
        <div className="App">
          <Header />
          <ShopPhotos />
          <Switch>
            {/* <Route exact path="/" component={GridPhotos} /> */}
            <Route path="/special" component={Special} />
            <Route path="/contact" component={Contact} />
            <Route path="/shop" component={GridPhotos} />
          </Switch>
        </div>
      </Router>
      <div className="directory">
        <h1>SPECIAL</h1>
        <img src="https://i.imgur.com/2LDBmGG.jpg" alt="" />
        <h1>Aboriginal & Boomerang</h1>
        <img src="https://i.imgur.com/Ad1Lhor.jpg" alt="" />
        <h1>Pencil Cases & Coin Purses</h1>
        <img src="https://i.imgur.com/Qd9kDCq.jpg" alt="" />
        <h1>Shopping Bags & Backpacks</h1>
        <img src="https://i.imgur.com/amB6aWj.jpg" alt="" />
        <h1>Keychains & Magnets</h1>
        <img src="https://i.imgur.com/uGuUiFb.jpg" alt="" />
        <h1>Souvenirs Collections</h1>
        <img src="https://i.imgur.com/XylTbwr.jpg" alt="" />
      </div>
    </div>
  );
}

export default App;
