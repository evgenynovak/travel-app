import React from 'react';
import {Link, useHistory, useLocation} from 'react-router-dom';
import './Header.scss'

function SearchField(props){
    if(props.main) return (
        <div className='search'>
            <form>
                <input type='text' placeholder='Search'></input>
                <input type='submit'></input>
            </form>
        </div>
    )
}

export default function Header(props){
    let history = useHistory();
    let location = useLocation().pathname.split('/');
    function handleChange(value) {
        location[1] = value;
      history.push(location.join('/'));
    }

    return (
        <header>
            <div className='content' id='head'>
                <Link to="/">Главная</Link>
                <SearchField main={props.main} />
                <div className="lang">Язык:
                <select name='language' defaultValue='ru' onChange={event => handleChange(event.target.value)}>
                <option value='ru' >Русский</option>
                <option value='en' >English</option>
                </select>
                </div>
            </div>    
        </header>
    )
}