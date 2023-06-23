import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import '../../styles/Components/rate.css';

function Rate({ rating }) {
  const score = rating;
  const notes = [1, 2, 3, 4, 5];
  return (
    <div className="rateContainer">
      {notes.map((note) => (
        <FontAwesomeIcon
          key={note.toString()}
          className={note <= score ? 'star' : 'starEmpty'}
          icon={faStar}
        />
      ))}
    </div>
  );
}

export default Rate;
