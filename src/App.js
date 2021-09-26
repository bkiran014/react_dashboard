import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'; 
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import Contact from './components/Contact';
import "./App.css";

function App() {
  return (
    <div>
      
      <Router>
        <Header/>
          <Switch>
            <Route exact path='/'component={Home}/>
            <Route path='/dashboard' component={Dashboard}/>
            <Route path='/contact' component={Contact}/>
          </Switch>
        <Footer/>
      </Router>
      
    </div>
  );
}

export default App;
