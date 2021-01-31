import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Service from './Components/Service/Service';
import News from "./Components/Blog/Blog";
import BlogPostDetails from "./Components/Blog/BlogPostDetails";
import Header from './Components/Header';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import Footer from './Footer';
import {AppProvider} from './Context';

function App() {
  return (
    <AppProvider>
    <div className="App">
    <Header/>
     <Switch>
      <Route component ={Home} exact path ="/"/>
      <Route component ={About} exact path ="/about"/>
      <Route component ={Service} exact path ="/service"/>
      <Route path="/news" exact component={News} />
      <Route exact path="/news/:id" component={BlogPostDetails} />
     </Switch>
     <Footer/>
    </div>
    </AppProvider>
  );
}

export default App;
