import React from 'react';

function Vid(props) {
  return (
    <video controls autoPlay>
      <source src="./vid-1.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}

export default Vid;