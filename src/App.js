import React from "react";
import "./App.css";
import Header from './components/header/header.component';
import HomePage from "./pages/homepage/homepage.component";
import Shop from './pages/shop/shop.component';
import SignInUp from './pages/sign-in-up/sign-in-up.component';
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/shop" component={Shop}/>
      <Route exact path="/signinup" component={SignInUp}/>
      </Switch>
    </div>
  );
}

export default App;
