import React from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import './headerStyle.css'

function SearchField(props){
    if(props.main) return (
        <div className='search'>
            <form>
                <input type='text' placeholder='Search'></input>
            </form>
        </div>
    )
}

export default function Header(props){
    return (
        <header>
            <div className='content' id='head'>
                <Link to="/">Main page</Link>
                <SearchField main={props.main} />
                <div className="lang">Language:
                <select name='language'>
                <option value='ru' selected>Русский</option>
                <option value='en' selected>English</option>
                </select>
                </div>
            </div>    
        </header>
    )
}