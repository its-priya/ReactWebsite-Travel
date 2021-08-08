import React from 'react';
import { Link } from 'react-router-dom';
import img_9 from '../images/img-9.jpg';

function CardItem(props) {
    return (
        <>
            <li className='cards_item'>
                <Link className='cards_item_link' to='/services'>
                    <figure className='cards_item_image_wrap' data-category='Adventure'>
                        <img src={img_9} alt='travel' className='cards_item_image'/>
                    </figure> 
                    <div className='cards_item_info'>
                        <h5 className='cards_item_text'>Explore the hidden waterfall deep inside the amazon Jungle</h5>
                    </div>
                </Link>
            </li>
        </>
    )
}
export default CardItem
