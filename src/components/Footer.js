import React from 'react';
import rslogo from '../assets/images/rs_school_js.svg'

export default function Footer(){
    return(
        <footer>
            <div className='content'>
                <ul className='git'>
                    <li>
                        <a href='https://github.com/Elwa36s'>Dmitry Dolgopol
                        </a>
                    </li>
                    <li>
                        <a href='https://github.com/evgenynovak'>Evgeniy Novak
                        </a>
                    </li>
                </ul>
                <p>2021</p>
                <div className='logo' style={{width:'100px',height:'100px'}}>
                    <a href='https://rs.school/js/'>
                        <img src={rslogo} alt='RSSchool logo' />
                    </a>
                </div>
            </div>
        </footer>
    );
}