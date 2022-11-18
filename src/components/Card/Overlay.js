import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

function Overlay(props)  {

  /**
   *  Returns string of ingredients seperated by comma (,)
   *  example: ['a','s','d'] => 'a, s, d'
   * @param {*} ingredients {'a':[], 's':[], 'd':[]}
   * @return {*} 'a, s, d'
   */
  
  const getTextFromObject = (ingredients) => {
    let text = `Ingredients: ${Object.keys(ingredients).join(', ')}`;
    return text;
  }

  /**
   * Checks if ingredients is not enpty object and returns the tooltip text
   *
   * @param {*} ingredients {'a':[], 's':[], 'd':[]}
   * @return {*} 'a, s, d'
   */
  const makeTooltipText = (ingredients) => {
    const text = ingredients && Object.keys(ingredients).length ? 
      getTextFromObject(ingredients) : 
      'Ingredients: N/A';
    return text;
  }

  /**
   * Simple component renderer function
   * 
   * @param {*} ingredients 
   * @returns Tooltip component on hover
   */
   const makeTooltip = (ingredients) => {
    return <Tooltip id="button-tooltip">{ makeTooltipText(ingredients) }</Tooltip>;
   }

  return (
   <OverlayTrigger placement="top" delay={{ show: 100, hide: 200 }} overlay={makeTooltip(props.ingredients)}>
      <img src={props.image_url} alt={props.image_url} className='beer__img' />
   </OverlayTrigger>
  )
}

export default Overlay;
