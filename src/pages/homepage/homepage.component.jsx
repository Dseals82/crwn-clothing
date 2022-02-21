import React from 'react';
import Directory from '../../components/directory/directory.component';
import './homepage.styles.scss';
import { Link, useLocation, useNavigate, useParams} from 'react-router-dom';


const HomePage = () => {
    let location = useLocation();
    let navigation = useNavigate();
    let params = useParams();
    console.log('homepage: ', params)
   

    console.log(navigation)
    
    console.log(location)
   
    return (
        
    <div className='homepage'>
    <button onClick={() => navigation('/test')} >Test Page</button>
    <Link to ='/test'>
    
    <h1>Test Page</h1>
    </Link>
    
        <Directory />
    </div>
    )
    
    };
    

export default HomePage;