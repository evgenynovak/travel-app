import React, {useEffect} from 'react';
import countries from '../countries';
import {Link, useParams} from 'react-router-dom';
import './Main.scss'

export default function Main(props){
  let { lang } = useParams();

    // useEffect(() => {
    //     document.querySelector('.gallery').addEventListener('click', (event)=>{
            
    //         console.log(event.target.closest('div').id)
    //       //  moveTo(event.target.id);
    //     });
    //     return ()=>{
    //         document.querySelector('.gallery').removeEventListener('click', (event)=>{
    //            // moveTo(event.target.id);
    //         })
    //     }
    // })
    return(
        <div className='main'>
            <div className='content'>
                <div className='gallery'>
                    { countries.map((country, index) => {
                        return (
                            <Link key={index} to={`/${lang}/details/:${country.id}`}>
                            <div id={country.id} className="gallery__card card">
                                <img src={country.prev} alt={country.name} className="card__image" />
                                <h4 className="card__title">{country.name}</h4>
                                <p className="card__info">{country[`capital${lang}`]}</p>
                            </div>
                            </Link>
                        )
                    }) }
                </div>
            </div>
        </div>
    )
}