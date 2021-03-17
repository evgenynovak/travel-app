import './App.scss';
import React, {useState} from 'react';
import {BrowserRouter as Router,
        Redirect,
        Switch,
        Route
        } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import Details from './components/Details/Details';
var id;

export default function App() {
  const [language, setLanguage] = useState('ru');
  return (
    <Router basename='travel-app'>
        <div className="App">
          <Header switchLang={setLanguage} main={true} />
          <Switch>
            <Route path='/:lang/details/:id' component={Details} />
            <Route path="/:lang" component={Main} />
            <Redirect from="/" to="/ru" />
          </Switch>
          <Footer />
        </div>
    </Router>
  );
}

