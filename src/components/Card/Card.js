import React from 'react';
import Overlay from './Overlay'
import { Col, Row } from 'react-bootstrap';

/**
 * Renders Card component with beer informations
 * 
 * @param {*} props parent props
 * @returns Card component
 */
function Card(props) {
  const beer = props.beer;
  return (
    <div className='shadow p-3 mb-4 beer-list' key={beer.id}>
      <Row sm='6'>
        <Col lg='2' sm='3' xs='4' className='text-center'>
          <Overlay ingredients={beer.ingredients} image_url={beer.image_url} />
        </Col>
        <Col lg='10' sm='9' xs='8'>
          <h4>{beer.name}</h4>
          <span className='text-warning'>{beer.tagline}</span>
          <p className='description'>
            {beer.description}
          </p>
          </Col>
      </Row>
    </div>
  )
}

export default Card;
