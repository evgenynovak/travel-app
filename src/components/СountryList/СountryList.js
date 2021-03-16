import React from 'react';
import './CountryList.scss';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
  Link,
} from 'react-router-dom';

function CountryList(props)  {
  let {data,match} = props;
  return (
    <div>
      <div>CountryList</div>
      {data.map(country=> (
        <div> 
          <Link to={`${match.path}/${country.id}`}>{country.name}</Link>
        </div>
      ))}
    </div>
  );
}

export default CountryList