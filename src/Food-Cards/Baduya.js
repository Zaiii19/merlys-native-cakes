import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import './FoodCardsStyles.css';

import FOOD6 from '../Images/butchi.jpg';

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
          <img src={FOOD6} alt='ALZ'className='foods'/>
      </button>

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
          <img src={FOOD6} alt='ALz' className='butchi-img'></img>
            <h3>Butchi</h3>
            <p>CHeese filling.</p>
            <h5>Price: ₱ 5.00</h5>
          </div>

          <div className='butchi-modal'>
          <img src={FOOD6} alt='ALz' className='butchi-img'></img>
            <h3>Butchi-Bucket</h3>
            <p>Available for customized filling.</p>
            <p><b>₱5.00</b> -> Regular</p>
            <p><b>₱10.00</b> -> Costumized</p>
          <h5>Price: ₱ 250.00</h5>
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