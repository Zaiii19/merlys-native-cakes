import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import './FoodCardsStyles.css';

import FOOD3 from '../Images/puff-ball.png';

function Kutsinta() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch static backdrop modal
      </Button> */}

      <button onClick={handleShow}>
          <img src={FOOD3} alt='ALZ'className='foods'/>
      </button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title><h3><em>Puff Ball</em></h3></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='puff-ball-modal'>
          <img src={FOOD3} alt='ALz' className='puffB-img'></img>
            <h3>Puff Ball</h3>
            <p>5 pieces in a bag</p>
            <h5>Price: ₱ 10.00</h5>
          </div>

          <div className='puff-ball-modal'>
          <img src={FOOD3} alt='ALz' className='puffB-img'></img>
            <h3>Puff Ball Bucket</h3>
            <p><b>₱2.00</b> -> per piece</p>
          <h5>Minimum order of ₱ 100.00</h5>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Kutsinta;