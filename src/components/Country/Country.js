import React from 'react';
import './Country.scss';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
  Link,
} from 'react-router-dom';

function Country(props)  {
  let {data,match} = props;
  const id = match.params.id;
  let cnt = data.filter(i => i.id = id);
  return (
    <div>
      <div>{cnt[0].id}</div>
      <div></div>
    </div>
  );
}

export default Country