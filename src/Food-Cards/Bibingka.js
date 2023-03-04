import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import './FoodCardsStyles.css';

import FOOD7 from '../Images/bibingka.jpg';

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
          <img src={FOOD7} alt='ALZ'className='foods'/>
      </button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title><h3><em>Bibingka</em></h3></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='bibingka-modal'>
          <img src={FOOD7} alt='ALz' className='bibingka-img'></img>
            <h3>Bibingka Diket</h3>
            <p><b>₱120.00</b> -> Whole</p>
            <p><b>₱60.00</b> -> Half</p>
          </div>

          <div className='bibingka-modal'>
          <img src={FOOD7} alt='ALz' className='bibingka-img'></img>
            <h3>Bibingka Kahoy</h3>
            <p><b>₱120.00</b> -> Whole</p>
            <p><b>₱60.00</b> -> Half</p>
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