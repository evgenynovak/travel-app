import React, {useEffect} from 'react';

export default function Main(){
    function moveTo(country){

    };
    // useEffect(() => {
    //     document.querySelector('.gallery').addEventListener('click', (event)=>{
    //         moveTo(event.target.id);
    //     });
    //     return ()=>{
    //         document.querySelector('.gallery').removeEventListener('click', (event)=>{
    //             moveTo(event.target.id);
    //         })
    //     }
    // })
    const pictures = "object of country's pictures";
    return(
        <div className='main'>
            <div className='content'>
                <div className='gallery'>
                    {/* {pictures.map((img) => {
                        return (
                            <div key={img.country} id={img.country}>
                                <img src={img.src} alt={img.country} />
                            </div>
                        )
                    })} */}
                </div>
            </div>
        </div>
    )
}