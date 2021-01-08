import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Components/Home/Home';
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
     </Switch>
     <Footer/>
    </div>
  );
}

export default App;
