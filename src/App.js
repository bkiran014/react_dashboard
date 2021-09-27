import './App.css';
import Header from './components/layouts/Header';
import Menu from './components/layouts/Menu';
import Dashboard from './components/Dashboard';
import Contact from './components/Contact';
import Home from './components/Home';
import Footer from './components/layouts/Footer';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'; 

function App() {
  return (
    <div className="wrapper">
    <Router>
      <Header/>
      <Menu/>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/dashboard' component={Dashboard}/>
            <Route path='/contact' component={Contact}/>
          </Switch>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
