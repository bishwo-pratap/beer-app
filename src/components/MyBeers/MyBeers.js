import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import Card from '../Card/Card';
import BeerModal from './BeerModal';
import BeerImage from '../../images/houzz-beer.png'

/**
 * returns custom beers list component when user enters a new beer
 * @returns Custom Beers List Component
 */
function MyBeers() {
  const [myBeers, setMyBeers] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [tagline, setTagline] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [validated, setValidated] = useState(false);
  const handleShowModal = () => setShowModal(true);
  
  const STORAGE_KEY = 'myBeers'

  /**
   * Adds user's beer to presistant storage
   * 
   * @param {*} event is the current element that user is interacting with.
   */
  const addBeer = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);

    if(name.length && description.length && tagline.length){
      const newMyBeers = [...myBeers, { id: myBeers.length+1, name, description, tagline, image_url: BeerImage }]
      setMyBeers(newMyBeers);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newMyBeers))
      resetForm();
    }
  }

  /**
   *  resets form
   */
  const resetForm = () => {
      setShowModal(false)
      setDescription('')
      setName('')
      setTagline('')
      setValidated(false);
  }

  /**
   *  Call fetchBeers on load
   */
   useEffect(()=>{
    const myStoredBeers = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (myStoredBeers) {
      setMyBeers(myStoredBeers)
    } 
  },[]);

  const formChange = (e) => {
    const { 
      target: { name, value },
    } = e;
    if(name === 'beer-name'){
      setName(value)
    } else if(name === 'description') {
      setDescription(value)
    } else if(name === 'tagline') {
      setTagline(value)
    }
  }

  return (
    <>
      <div className='d-grid gap-2 d-md-flex mb-2 justify-content-md-end'>
        <Button className='btn' onClick={handleShowModal}>Add a New Beer</Button>
      </div>

      <div className='my-beers-list row'>
        {myBeers && myBeers.length === 0 && ( // show message area with clickable innput if no beer 
          <div className='my-beers d-flex align-items-center justify-content-center'>
            <div className='text-center'>
              Nothing to see yet. <br />
              <span className='chev' onClick={handleShowModal}>
                Click here
              </span>{' '}
              to add your first beer!
            </div>
          </div>
        )}
        {myBeers && myBeers.length > 0 && myBeers.map((beer) => ( // render beer cards
              <div key={beer.name}>
                <Card beer={beer} />
              </div>
            )
          ) 
        }
        <BeerModal 
          showModal={showModal} 
          formSubmit={addBeer} 
          formChange={formChange}
          validated={validated}
          resetForm={resetForm}
        />
      </div>
    </>
  );
}

export default MyBeers;
