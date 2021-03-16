import React from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import './header.scss'

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
    return (
        <header>
            <div className='content' id='head'>
                <Link to="/">Главная</Link>
                <SearchField main={props.main} />
                <div className="lang">Язык:
                <select name='language' defaultValue='ru'>
                <option value='ru' >Русский</option>
                <option value='en' >English</option>
                </select>
                </div>
            </div>    
        </header>
    )
}