import Row from 'react-bootstrap/Row';
import './HomeStyle.css';


import MERLY from '../Images/merlys-native-cakes.png';

import FOOD2 from '../Images/maja-blanca.png';
import FOOD3 from '../Images/puff-ball.png';
import FOOD4 from '../Images/tinudok.jpg';
import FOOD5 from '../Images/baduya.jpg';
import FOOD6 from '../Images/butchi.jpg';

import Kutsinta from '../Food-Cards/Kutsinta';

function Home () {

    return(
        <>
        <Row className='row-div'>
        <div className='left-div col-lg-3'>
        <img src={MERLY} alt='ALZ' className='image-merly'></img>
        </div>
        
        <div className='right-div col-lg-9'>
        {/* <img src={MERLY} alt='ALZ' className='image-right'></img> */}
            {/* <ol>
                <li className='foods-li'><h3>Kutsinta</h3></li>
                <li className='foods-li'><h3>Maja Blanca</h3></li>
                <li className='foods-li'><h3>Puff Ball</h3></li>
            </ol> */}
        <Row className='row-1'>
            <div className='food-item1 col-lg-4'>
           
            <h5>Kutsinta</h5>
            <Kutsinta/>

            </div>

            <div className='food-item1 col-lg-4'>
            <h5>Maja Blanca</h5>
            <img src={FOOD2} alt='ALZ'className='foods'></img>
            </div>

            <div className='food-item1 col-lg-4'>
            <h5>Puff Ball</h5>
            <img src={FOOD3} alt='ALZ'className='foods'></img>
            </div>
        </Row>

        <Row className='row-2'>
            <div className='food-item1 col-lg-4'>
            <h5>Tinudok</h5>
            <img src={FOOD4} alt='ALZ'className='foods'></img>
            </div>

            <div className='food-item1 col-lg-4'>
            <h5>Butchi</h5>
            <img src={FOOD5} alt='ALZ'className='foods'></img>
            </div>

            <div className='food-item1 col-lg-4'>
            <h5>Baduyu</h5>
            <img src={FOOD6} alt='ALZ'className='foods'></img>
            </div>
        </Row>
        </div>
        </Row>

        {/* <div className='foods-div'>
           <ol className='foods-ol'>
            <li className='foods-li'><a href='kutsinta'>| Kutsinta | </a></li>
            <li className='foods-li'><a href='maja'>| Maja-Blanca | </a></li>
            <li className='foods-li'><a href='butchi'>| Butchi |</a></li>
            <li className='foods-li'><a href='baduya'>| Baduya | </a></li>
            <li className='foods-li'><a href='puff-ball'>| Puff-Ball | </a></li>
            <li className='foods-li'><a href='tinudok'>| Tinudok | </a></li>
            <li className='foods-li'><a href='puto'>| Puto | </a></li>
           </ol>
        </div> */}


        

        </>
    );
};
export default Home;