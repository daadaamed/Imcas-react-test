/** @format */

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './FeedbackPage.css'; // import the CSS styles
import axios from 'axios';

const FeedbackPage = () => {
  const [feedback, setFeedback] = useState('');
  const [author, setAuthor] = useState('');
  const [photoUrl, setPhotoUrl] = useState('');

  let feedId = useParams();
  let feedbackId = JSON.stringify(feedId.id);
  let feed2 = feedbackId.slice(1, -1);
  console.log(feedbackId, feed2);
  let url = `https://api.imcas.com/v1/feedbacks/${feed2}`;
  console.log(url);
  useEffect(() => {
    async function fetchData() {
      console.log(`${url}`);
      let request = await axios.get(url);
      console.log('1', request.data.translations[0].content);
      setFeedback(JSON.stringify(request.data.translations[0].content));
      console.log('photo is', request.data.user.picture_url);
      setPhotoUrl(JSON.stringify(request.data.user.picture_url));
      console.log(`feedback is ${feedback}`);
      setAuthor(JSON.stringify(request.data.user.fullname));

      return request;
    }
    console.log(`feedbacks after are ${feedback}`);
    //setFeedback((feedback) => []);
    fetchData();
  }, [url]);
  return (
    <div className="feedback">
      <div className="feedback-header">
        <img
          src={photoUrl.slice(1, -1)}
          alt="Profile"
          className="feedback-photo"
        />
        <p className="feedback-author">{author}</p>
      </div>
      <p className="feedback-text">{feedback}</p>
    </div>
  );
};

export default FeedbackPage;
