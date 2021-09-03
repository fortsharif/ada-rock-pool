import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavBar from './navbar/NavBar'
import Hero from './pageone/Hero'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return <Router>
    <Route component={NavBar} />
    <Switch>
      <Route component={Hero} />
    </Switch>
  </Router>
}

export default App;
