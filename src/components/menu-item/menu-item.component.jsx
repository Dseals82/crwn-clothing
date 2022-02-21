import React from 'react';
import './menu-item.styles.scss';
import { useLocation, useNavigate } from 'react-router-dom';

const MenuItem = ({title, imageUrl, size, linkUrl}) => {
    
    const location = useLocation();
    let navigate = useNavigate();
    console.log('Locate:', location.pathname)
    const url = location.pathname
    console.log(url)

    return (
        <div className={`${size} menu-item`} onClick={() => navigate(`${url}${linkUrl}`)} >
            <div 
                className='background-image' 
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
            <div className='content'>
                <h1 className='title'>{title}</h1>
                <span className='subtitle'>Shop Now</span>
            </div>
        </div>
    );
    
};

export default MenuItem;