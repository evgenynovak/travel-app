import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import travelData from './travelData.js'; // данные для теста
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
        {/* 
          Компонент СountryList map-ит
            Компонент СountryCard

          СountryCard при клике на него переход на большую страницу страны, компонент Сountry
        */}

      <Footer />
    </div>
  );
}

function LocalizeApp() {
  return (
    <Router>
      <Switch>
        <Route path="/ru">
          <App lang="ru" />
        </Route>
        <Route path="/en">
          <App lang="en" />
        </Route>
        <Route path="/de">
          <App lang="de" />
        </Route>
        <Redirect from="/" to="/ru" />
      </Switch>
    </Router>
  );
}


export default LocalizeApp;

