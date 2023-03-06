import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import './FoodCardsStyles.css';

import FOOD4 from '../Images/tinudok.jpg';

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
          <img src={FOOD4} alt='ALZ'className='foods'/>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title><h3><em>Tinudok/Carioca</em></h3></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='tinudok-modal'>
          <img src={FOOD4} alt='ALz' className='tinudok-img'></img>
            <h3>Tinudok</h3>
            <p>2 pieces per turok.</p>
            <h5>Price: ₱ 10.00</h5>
          </div>

          <div className='tinudok-modal'>
          <img src={FOOD4} alt='ALz' className='tinudok-img'></img>
            <h3>Tinudok-Tray</h3>
            <p>minimum order will have 20 pieces </p>
          <h5>Minimum order of ₱ 100.00</h5>
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