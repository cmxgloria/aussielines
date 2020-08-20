import React from "react";
import Header from "./components/header/Header.jsx";
import Special from "./components/special/Special.jsx";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Contact from "./components/contact/Contact.jsx";
import HomePage from "./components/homePage/HomePage.jsx";
// import ShopPage from "./pages/shop/ShopPage.jsx";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <Switch>
          <Route exact path="/" component={HomePage} />
          {/* <Route path="/shop" component={ShopPage} /> */}
          <Route path="/special" component={Special} />
          <Route path="/contact" component={Contact} />
          {/* <Route path="/handmade-art" component={HandmadeArt} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
