import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import './KutsintaStyles.css';

import FOOD1 from '../Images/kutsinta.jpg';

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
          <img src={FOOD1} alt='ALZ'className='foods'/>
      </button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Puto Kutsinta</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='kutsinta-modal'>
          <img src={FOOD1} className='kutsinta-img'></img>
            <h3>Kutsinta-Niyog</h3>
            <p>I will not close if you click outside me. Don't even try to press
          escape key.</p>
            <h5>Price: ₱ 5.00</h5>
          </div>

          <div className='kutsinta-modal'>
            <h3>Kutsinta-Cheese</h3>
            <p>I will not close if you click outside me. Don't even try to press
          escape key.</p>
            <h5>Price: ₱ 10.00</h5>
          </div>

          <div className='kutsinta-modal'>
            <h3>Kutsinta-Tray</h3>
            <p>I will not close if you click outside me. Don't even try to press
          escape key.</p>
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