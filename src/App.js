import './App.scss';
import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router,
        Switch,
        Route,
        Link} from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Main from './Components/Main';
import Details from './Components/Details';

export default function App() {
  const [language, setLanguage] = useState('ru');
  return (
    <Router>
        <div className="App">
          <Header switchLang={setLanguage} main={true} />
          <Footer />
          <Switch>
            <Route path="/details">
              <Details />
            </Route>
            <Route path="/">
              <Main />
            </Route>
          </Switch>  
        </div>
    </Router>
  );
}

