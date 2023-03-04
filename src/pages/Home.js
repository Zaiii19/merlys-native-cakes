import Row from 'react-bootstrap/Row';
import './HomeStyle.css';


import MERLY from '../Images/merlys-native-cakes.png';

import Kutsinta from '../Food-Cards/Kutsinta';
import Majablanca from '../Food-Cards/Maja-blanca';
import Puffball from '../Food-Cards/Puff-ball';
import Tinudok from '../Food-Cards/Tinudok';
import Butchi from '../Food-Cards/Butchi';
import Baduya from '../Food-Cards/Baduya';
import Bibingka from '../Food-Cards/Bibingka';
import RicePuto from '../Food-Cards/RicePuto';
import Pitchie from '../Food-Cards/Pitchie';

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
            <Kutsinta/>
            <h5>Kutsinta</h5>
            </div>

            <div className='food-item1 col-lg-4'>
            <Majablanca/>
            <h5>Maja Blanca</h5>
            </div>

            <div className='food-item1 col-lg-4'>
            <Puffball/>
            <h5>Puff Ball</h5>
            </div>
        </Row>

        <Row className='row-2'>
            <div className='food-item1 col-lg-4'>
            <Tinudok/>
            <h5>Tinudok/Carioca</h5>
            </div>

            <div className='food-item1 col-lg-4'>
            <Butchi/>
            <h5>Baduya/Maruya</h5>
            </div>

            <div className='food-item1 col-lg-4'>
            <Baduya/>
            <h5>Butchi</h5>
            </div>
        </Row>

        <Row className='row-2'>
            <div className='food-item1 col-lg-4'>
            <Bibingka/>
            <h5>Bibingka</h5>
            </div>

            <div className='food-item1 col-lg-4'>
            <RicePuto/>
            <h5>Butchi</h5>
            </div>

            <div className='food-item1 col-lg-4'>
            <Pitchie/>
            <h5>Pitchie</h5>
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