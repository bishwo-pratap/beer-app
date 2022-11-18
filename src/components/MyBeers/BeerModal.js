import React from 'react';
import { Modal, Button, Form, InputGroup, Col, Row } from 'react-bootstrap';
import BeerImage from '../../images/houzz-beer.png'

/**
 *  Renders a pop-up modal while clicking on "Add a New Beer"
 * 
 * @param {*} props parent props
 * @returns 
 */
function BeerModal(props) {
  return (
    <Modal
      show={props.showModal}
      onHide={() => props.resetForm()}
      size='md'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Body>
        <h4>Add a New Beer</h4>
        <Form noValidate validated={props.validated}>
          {/* <Row>
            <Col lg={2} className='mb-2 beer-display'>
            </Col>
          </Row> */}
          <div className='mb-2 beer-display d-inline-block p-2'>
            <img src={BeerImage} alt={BeerImage} className='beer__img' />
          </div>
          <Form.Group className='mb-3'>
            <InputGroup hasValidation>
              <Form.Control 
                type='text' 
                placeholder='Beer name*' 
                name='beer-name' 
                required 
                onChange={props.formChange} 
              />
              <Form.Control.Feedback type='invalid'>Please enter beer name.</Form.Control.Feedback>
            </InputGroup>
          </Form.Group>

          <Form.Group className='mb-3'>
            <Form.Control type='text' placeholder='Genre*' required name='tagline' onChange={props.formChange} />
            <Form.Control.Feedback type='invalid'>
                Please enter beer genre.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className='mb-3'>
            <Form.Control 
              placeholder='Description*'
              name='description'
              as='textarea' 
              rows={3}
              required
              onChange={props.formChange}
            />
            <Form.Control.Feedback type='invalid'>
                Please enter a short description.
            </Form.Control.Feedback>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
          <Button onClick={props.resetForm} variant="light">Close</Button>
          <Button onClick={props.formSubmit}>Save</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default BeerModal;
