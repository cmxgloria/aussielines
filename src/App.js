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
import Directory from "./components/directory/directory.jsx";
import "./App.css";

function App() {
  return (
    <div>
      <Router>
        <div className="App">
          <Header />
          <ShopPhotos />
          <Switch>
            <Route exact path="/" component={Directory} />
            <Route exact path="/special" component={Special} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/shop" component={GridPhotos} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
