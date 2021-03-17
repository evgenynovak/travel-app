import './App.scss';
import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router,
        Switch,
        Route,
        Link} from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import Details from './components/Details/Details';
var id;

export default function App() {
  const [language, setLanguage] = useState('ru');
  return (
    <Router>
        <div className="App">
          <Header switchLang={setLanguage} main={true} />
          <Switch>
            <Route path='/details/:id' component={Details} />
            <Route exact path="/" component={Main} />
          </Switch>
          <Footer />
        </div>
    </Router>
  );
}

