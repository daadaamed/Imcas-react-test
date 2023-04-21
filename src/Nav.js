/** @format */

import React, { useState, useEffect } from 'react';
import Row from './Row';
import axios from './axios';
import './Nav.css';

function Nav() {
  const [feedbacks, setFeedbacks] = useState([]);

  let url = `https://api.imcas.com/v1/feedbacks/`;
  useEffect(() => {
    async function fetchData() {
      console.log(`${url}`);
      let request = await axios.get(url);
      setFeedbacks(request.data.data);
      console.log('1', request.data.data);
      console.log('2', feedbacks);

      return request;
    }
    setFeedbacks((feedbacks) => []);
    fetchData();
    console.log(`feedbacks are ${feedbacks}`);
  }, []);
  return (
    <div>
      <div className="nav">
        <h2>
          {' '}
          Welcome to Imcas feedbacks.
          <br /> Click to see the feedbacks of our dear doctors
          <p>scroll right to see more feedbacks.</p>
        </h2>
        <div className="nav__posters">
          {feedbacks.map((feedback) => (
            // map objects from the API accessed with axios to display them
            <Row feedback={feedback} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Nav;
