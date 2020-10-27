import './App.css';
import Header from './components/layout/Header';
import {BrowserRouter as Router ,Route} from 'react-router-dom';
import  About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import PortFolio from './components/PortFolio';
import Profile from './components/Profile';
import Skills from './components/Skills';
import Login from './components/login';


function App() {
  return (
    <Router>
    <Route exact path='/'></Route>
    <Route path="/login" component={Login}></Route>
    <Route path="/about" component={About}></Route>
    <Route path="/education" component={Education}></Route>
    <Route path="/experience" component={Experience} ></Route>
    <Route path="/portfolio" component={PortFolio}></Route>
    <Route path="/profile" component={Profile}></Route>
    <Route path="/skills" component={Skills} ></Route>
    <div className="App">
    <Header></Header>
    
   </div>
    </Router>
   
  );
}

export default App;
