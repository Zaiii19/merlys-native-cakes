import Row from 'react-bootstrap/Row';

import './ContactStyle.css';

import LOCATION from '../Images/location-icon.png'; 
import AHEAD from '../Images/accont-head.png';

import FB from '../Images/facebook.png';
import GMAIL from '../Images/gmail.png';
import NUM from '../Images/phone-num.png';

export default function Contact(){

    return(
        <>  
        <Row className='contact-main'>
            <div className='contact-left col-lg-6'>
            <div className='con-left'>
            <h1 className='con-left-h1 '>Acc<img src={AHEAD} alt='ALz'/>unt</h1>
            <div className='con-left-fb'>
            <a href='https://www.facebook.com/eloisahidalgo.mendoza/'><img src={FB} alt='ALz' className='con-icon'/>Facebook</a>
            </div>
          
            <div className='con-left-email'>
            <a href='https://mail.google.com/mail/u/0/#inbox' target='_blank'><img src={GMAIL} alt='ALz' className='con-icon'/>E-Mail</a>
            </div>
            <div className='con-left-phone'>
            <img src={NUM} alt='ALz' className='con-icon'/>
            <h6 >
                TM/GLOBE : <span class="highlight">   09975260332</span>
                </h6>
                <h6>
                SMART/TNT : <span class="highlight1">09975260332</span>
            </h6>
            </div>
            </div>
            <div className='con-left-text'>
                <h1>Feel free to contact us for your orders anytime and anywhere.</h1>
            </div>
            </div>

            <div className='contact-right col-lg-6'>
            <div className='con-right'>
                <h1 className='contact-h1'>L
                <img src={LOCATION} alt='ALz'/>CATION</h1>
                <div className='map'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d523.3542119817928!2d121.60618580230047!3d18.068789121259922!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338f5637d0db08a9%3A0xcab00e902686ee!2sLasam%20Public%20Market!5e1!3m2!1sen!2sph!4v1678070824125!5m2!1sen!2sph"allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='g-map'></iframe>
                </div>
            </div>
            </div>
        </Row>
        </>

    );
};