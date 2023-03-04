import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import './FoodCardsStyles.css';

import FOOD5 from '../Images/baduya.jpg';

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
          <img src={FOOD5} alt='ALZ'className='foods'/>
      </button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title><h3><em>Baduya/Maruya</em></h3></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='baduya-modal'>
          <img src={FOOD5} alt='ALz' className='baduya-img'></img>
            <h3>Baduya</h3>
            <p></p>
            <h5>Price: ₱ 5.00</h5>
          </div>

          <div className='baduya-modal'>
          <img src={FOOD5} alt='ALz' className='baduya-img'></img>
            <h3>Baduya-Tray</h3>
            <p></p>
            <p><b>₱5.00</b> ->per piece</p>
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