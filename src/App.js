import NavBar from "./components/Navbar/NavBar"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./components/HomeComponent/Home";
import ContactUsComponent from "./components/ContactUsComponent/ContactUs"
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path= "/" exact>
            <Home />
          </Route>
          <Route path= "/contact">
            <ContactUsComponent />
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
