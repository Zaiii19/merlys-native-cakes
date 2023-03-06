import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import './FoodCardsStyles.css';

import FOOD2 from '../Images/maja-blanca.jpg';

function Kutsinta() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch static backdrop modal
      </Button> */}

      <div onClick={handleShow}>
          <img src={FOOD2} alt='ALZ'className='foods'/>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title><h3><em>Maja Blanca</em></h3></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='maja-blanca-modal'>
          <img src={FOOD2} alt='ALz' className='majaB-img'></img>
            <h3>Maja Blanca</h3>
            <p>Cheese toppings.</p>
            <h5>Price: ₱ 10.00</h5>
          </div>

          <div className='maja-blanca-modal'>
          <img src={FOOD2} alt='ALz' className='majaB-img'></img>
            <h3>Maja Blanca-Tray</h3>
            <p><b>₱200.00</b> -> Regular</p>
            <p><b>₱250.00</b> -> Special</p>
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