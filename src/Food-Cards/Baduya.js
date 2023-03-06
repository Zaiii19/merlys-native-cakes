import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import './FoodCardsStyles.css';

import BBUTCHIE from '../Images/butchi.jpg'; 
import BUTCHIE from '../Images/butchi-piece.jpg';

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
          <img src={BBUTCHIE} alt='ALZ'className='foods'/>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title><h3><em>Butchi</em></h3></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='butchi-modal'>
          <img src={BUTCHIE} alt='ALz' className='butchi-img'></img>
            <h3>Butchi</h3>
            <p>CHeese filling.</p>
            <h5>Price: ₱ 5.00</h5>
          </div>

          <div className='butchi-modal'>
          <img src={BBUTCHIE} alt='ALz' className='butchi-img'></img>
            <h3>Butchi-Bucket</h3>
            <p>Available for customized filling.</p>
            <p><b>₱5.00</b> -> Regular</p>
            <p><b>₱10.00</b> -> Costumized</p>
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