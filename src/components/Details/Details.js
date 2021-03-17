import React, { useEffect, useState } from 'react';
import './Details.scss';
import countries from '../countries';
import ImageGallery from 'react-image-gallery';


export default function Details(props){
    const id = props.match.params.id.slice(1,3);
    const currentCountry = countries.filter((item) => {
        return (item.id === id) ? true : false;
    });
    const country = currentCountry[0];
    const images = [];
    country.sights.forEach(sight => {
        images.push({
            original : sight.image,
            originalTitle : sight.place,
            description  : `${sight.place}. ${sight.description}`
        });
    })
    return(
        <div className='details'>
            <div className='content'>
                <article className="country">
                    <h2 className="country__name">{country.name}</h2>
                    <section class="country__info">{country.info}</section>
                    <ImageGallery items={images} showThumbnails={false} showBullets={true} />
                    <aside>
                    </aside>
                </article>
            </div>
        </div>
    )
}