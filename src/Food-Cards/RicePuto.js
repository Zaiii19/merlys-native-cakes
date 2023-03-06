import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import './FoodCardsStyles.css';

import FOOD8 from '../Images/rice-puto.jpg'; 
import PUTO10 from '../Images/rice-puto-5.jpg';

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
          <img src={FOOD8} alt='ALZ'className='foods'/>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title><h3><em>Rice Puto</em></h3></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='pitchie-modal'>
          <img src={PUTO10} alt='ALz' className='pitchie-img'></img>
            <h3>Rice Puto</h3>
            <p>5 pieces per bag</p>
            <p><b>₱10.00</b></p>
          </div>

          <div className='pitchie-modal'>
          <img src={FOOD8} alt='ALz' className='pitchie-img'></img>
            <h3>Rice Puto-Bucket</h3>
            <p><b>₱2.00</b> ->per piece</p>
            <h5>Minimum order of ₱100.00</h5>
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