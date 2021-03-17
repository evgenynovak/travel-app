import React, { useEffect, useState } from 'react';
import {Link, useParams} from 'react-router-dom';
import './Details.scss';
import countries from '../countries';
import ImageGallery from 'react-image-gallery';


export default function Details(props){
    const lang = props.match.params.leng;
    const id = props.match.params.id.slice(1,3);
    const currentCountry = countries.filter((item) => {
        return (item.id === id) ? true : false;
    });
    const country = currentCountry[0];
    const images = [];
    const iconClass = ['owf'];
    country.sights.forEach(sight => {
        images.push({
            original : sight.image,
            originalTitle : sight.place,
            description  : `${sight.place}. ${sight.description}`
        });
    })
    useEffect(async()=>{
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${country.capitalen}&lang=${lang}&appid=4ecbcc47cf223a32117b4ef59cbe227c&units=metric`;
        const res = await fetch(url);
        const data = await res.json();
        console.log(data)
        document.querySelector('.weatherInfo').textContent = `${data.weather[0].description.toUpperCase()} `;
        document.querySelector('.temperature').textContent = `${data.main.temp}°C`;
    },[])
    return(
        <div className='details'>
            <div className='content'>
                <article className="country">
                    <h2 className="country__name">{country.name}</h2>
                    <section class="country__info">{country.info}</section>
                    <div className='country__media'>
                        <ImageGallery items={images} showThumbnails={false} showBullets={true} />
                        <div className='capital'>
                        <h3 className="capital__name">{country.capital}</h3>
                        <div className="capital__weather">
                        <p className="weatherInfo"></p>
                        <p className="temperature"></p>
                        </div>
                </div>
                    </div>
                    
                </article>

            </div>
        </div>
    )
}