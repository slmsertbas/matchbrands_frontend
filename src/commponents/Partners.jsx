import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFonticons, faIntercom, faUnsplash } from '@fortawesome/free-brands-svg-icons';
import { faAudioDescription, faCoffee } from '@fortawesome/free-solid-svg-icons';

import unsplash from "../Assets/Unsplash.svg"
import notion from "../Assets/Notion.svg"
import intercom from "../Assets/intercom.svg"
import descript from "../Assets/Union.svg"
import grammarly from "../Assets/grammerly.svg"

function Partners() {
    return (
        <div className='container mt-5 pb-5'>
            <div>
                <h5 className='pt-5 fw-bold'>More than 25,000 teams use Collabs</h5>
                <ul className='partners-icons mt-5 d-flex flex-wrap gap-5'>
                    <li><img src={unsplash} alt='unsplash' /> Unsplash</li>
                    <li><img src={notion} alt='unsplash' /> Notion</li>
                    <li><img src={intercom} alt='unsplash' />INTERCOM</li>
                    <li><img src={descript} alt='unsplash' />descript</li>
                    <li><img src={grammarly} alt='unsplash' />Grammarly</li>
                </ul>
            </div>
        </div>
    )
}

export default Partners