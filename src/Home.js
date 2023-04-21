/** @format */

import React from 'react';
import './Home.css';
import Nav from './Nav';
import './Home.css';
function Home() {
  // header of the page containing two photos
  // nav component contains the list of feedbacks
  return (
    <div>
      <header
        className="header"
        style={{
          backgroundSize: 'cover',
          backgroundImage: `url("https://www.esthetique-corniglion.com/wp-content/uploads/2018/10/chirurgie-esthetique-visage-lyon-dr-corniglion-01.jpg")`,
          backgroundPosition: 'center center',
        }}
      >
        <div className="header__contents">
          <img
            className="header__logo"
            src={'imcas-logo.png'}
            alt="isee logo"
          />
        </div>
      </header>
      <Nav />
    </div>
  );
}

export default Home;
