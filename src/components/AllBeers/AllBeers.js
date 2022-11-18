import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'react-bootstrap-icons';

import axios from 'axios';
import Card from '../Card/Card';

const BASE_PATH = 'https://api.punkapi.com/v2/';
const PER_PAGE = 10;

function List() {
  const [beerList, setBeerList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  
  /**
   *  Calls PunkAPI to fetch beers.
   *  
   * @param {*} currentPage defaults to 1.
   */
  const fetchBeers = async (currentPage = 1) => {
    setCurrentPage(currentPage);
    const url = BASE_PATH  + `beers?page=${currentPage}&per_page=${PER_PAGE}`;
    const response = await axios.get(url);
    setBeerList([...beerList, ...response.data]);
  }

  /**
   *  Increases `currentPage` by one and calls API
   */
  const fetchMoreBeers = async () =>{
    await fetchBeers(currentPage + 1);
  }

  /**
   *  Call fetchBeers on load
   */
  useEffect(()=>{
    fetchBeers();
  },[]);

  const listNotEmpty = beerList && beerList.length;
  return (
    <>
      { listNotEmpty && beerList.map((beer) => ( <Card beer={beer} key={beer.name} /> ))}
      { listNotEmpty && (
        <div className="pagination row">
          <span className="text-center chev" onClick={fetchMoreBeers}> 
            Load More <ChevronDown width="1em" height="1em"/> 
          </span>
        </div>
        )
      }
    </>
  );
}

export default List;
