import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';

import './FoodCardsStyles.css';

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
          <Modal.Title className=''><h3><em>Puto Kutsinta</em></h3></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
          <div className='kutsinta-modal col-lg-4'>
          <img src={FOOD1} alt='ALz' className='kutsinta-img'></img>
            <h3>Kutsinta Niyog Toppings</h3>
            <p>Order now and get extra pieces</p>
            <h5>Price: ₱ 5.00</h5>
          </div>

          <div className='kutsinta-modal col-lg-4'>
          <img src={FOOD1} alt='ALz' className='kutsinta-img'></img>
            <h3>Kutsinta Cheese Toppings</h3>
            <p>Order now and get extra pieces</p>
            <h5>Price: ₱ 10.00</h5>
          </div>

          <div className='kutsinta-modal col-lg-4'>
          <img src={FOOD1} alt='ALz' className='kutsinta-img'></img>
            <h3>Kutsinta Round</h3>
            <p>Order now and get extra pieces</p>
            <h5>Price: ₱ 25.00</h5>
          </div>
          </Row>

          <div className='kutsinta-modal'>
          <img src={FOOD1} alt='ALz' className='kutsinta-imgSpecial'></img>
          <img src={FOOD1} alt='ALz' className='kutsinta-imgSpecial'></img>
            <h3>Kutsinta in Tray</h3>
            <p><b>₱1.00</b> -> Niyog toppings</p>
            <p><b>₱2.00</b> -> Cheese toppings</p>
          <h5>Price: start at  ₱200.00</h5>
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