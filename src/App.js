import './App.css';
import { lazy } from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route
} from "react-router-dom";

import Buy from './Components/Buy';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import Rent from './Components/Rent';
import Sell from './Components/Sell';
import Data from './Components/Data.json';
import AboutUs from './Components/AboutUs';
import Contact from './Components/Contact';
import Help from './Components/Help';
import Footer from './Footer';


function App() {
  return (
    <div className="App">
      <Router> {/* Wrap your components with the Router */}

      <NavBar />


        <Route exact path="/">
          <Home data={Data} />
        </Route>
        <Route path="/buy">
          <Buy data={Data} />
        </Route>
        <Route path="/rent">
          <Rent data={Data} />
        </Route>
        <Route path="/sell">
          <Sell data={Data}/>
        </Route>
        <Route path="/help">
          <Help/>
        </Route>
        <Route path="/about">
          <AboutUs/>
        </Route>
        <Route path="/contact">
          <Contact/>
        </Route>
 
 
      </Router>
      <Footer/>

    </div>
  );
}

export default App;
