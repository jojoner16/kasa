import React from 'react';
import '../../styles/Components/tags.css';

function Tag({ tags }) {
  return (
    <div className="tagContainer">
      <span className="tagButton">{tags}</span>
    </div>
  );
}

export default Tag;
