import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Components/Home/Home';
// import About from './Components/About/About';
import Service from './Components/Service/Service';
import Header from './Components/Header';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import Footer from './Footer'

function App() {
  return (
    <div className="App">
    <Header/>
     <Switch>
      <Route component ={Home} exact path ="/"/>
      {/* <Route component ={About} exact path ="/about"/> */}
      <Route component ={Service} exact path ="/service"/>
     </Switch>
     <Footer/>
    </div>
  );
}

export default App;
