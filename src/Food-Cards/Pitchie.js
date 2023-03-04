import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import './FoodCardsStyles.css';

import FOOD9 from '../Images/pitchie.jpg';

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
          <img src={FOOD9} alt='ALZ'className='foods'/>
      </button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title><h3><em>Pitchie</em></h3></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='pitchie-modal'>
          <img src={FOOD9} alt='ALz' className='pitchie-img'></img>
            <h3>Pitchie Cheese</h3>
            <p>Cheese toppings</p>
            <p><b>₱5.00</b></p>
          </div>

          <div className='pitchie-modal'>
          <img src={FOOD9} alt='ALz' className='pitchie-img'></img>
            <h3>Rice Puto-Bucket</h3>
            <p><b>₱5.00</b> ->per piece</p>
            <h5>Minimum order of ₱150.00</h5>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Back
          </Button>
          <Button variant="primary">Order Now</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Kutsinta;