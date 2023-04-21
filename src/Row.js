/** @format */

import React, { useState } from 'react';
import './Row.css';
function Row({ feedback }) {
  // the component of each square in nav
  // take the feedback prop from Nav component
  const feedbacked = JSON.stringify(feedback.user.fullname);
  let imageUrl = JSON.stringify(feedback.user.picture_url);
  console.log(`feedback image in row is ${imageUrl}`);
  const feedbackId = JSON.stringify(feedback.id);
  console.log(`feedbackId in row is ${feedbackId}`);
  console.log(imageUrl);
  console.log(`feedback  in row is ${feedbacked}`);
  const [fullName, setFullName] = useState(feedbacked);
  console.log(`fullname in row is ${fullName}`);

  //setFullName(feedback.user); //data.user.fullname

  return (
    // decide the properties in each square of the home page
    <div>
      <div className={'Row'}>
        <a href={`/feedback/${feedbackId}`}>
          <img src={imageUrl.slice(1, -1)} alt="Dr photo" />
          {/* <p>feedback</p> */}
        </a>
        <h3 className="Row__title">{fullName}</h3>
      </div>
    </div>
  );
}

export default Row;
