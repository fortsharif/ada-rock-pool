import logo from './logo.svg';
import './App.css';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import NavBar from './navbar/NavBar'
import Hero from './hero/Hero'
import About from './about/About'
import 'bootstrap/dist/css/bootstrap.min.css'
import Delegate from './delegate/Delegate';
import ScrollToTop from './ScrollToTop';


function App() {
  return <Router>
    <Route component={NavBar} />
    <ScrollToTop />
    <Switch>
      <Route exact path='/' component={Hero} />
      <Route exact path='/About' component={About} />
      <Route exact path='/Delegate' component={Delegate} />

    </Switch>
  </Router>
}



export default App;
