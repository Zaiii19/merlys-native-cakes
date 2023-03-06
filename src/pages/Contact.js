import Row from 'react-bootstrap/Row';

import './ContactStyle.css';

export default function Contact(){

    return(
        <>  
        <Row className='contact-main'>
            <div className='contact-left col-lg-6'>
            <div className='con-left'>
            <h1>Account</h1>
            </div>
            </div>

            <div className='contact-right col-lg-6'>
            <div className='con-right'>
                <h1>LOCATION</h1>
                <div className='map'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d523.3542119817928!2d121.60618580230047!3d18.068789121259922!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338f5637d0db08a9%3A0xcab00e902686ee!2sLasam%20Public%20Market!5e1!3m2!1sen!2sph!4v1678070824125!5m2!1sen!2sph"allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='g-map'></iframe>
                </div>
            </div>
            </div>
        </Row>
        </>

    );
};