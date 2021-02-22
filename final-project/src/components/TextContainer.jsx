import React from 'react';

import './TextContainer.css';

export default function TextContainer({ users }) {
  return (
    <div className="outermost-container">
<<<<<<< HEAD
      <p className="number-online">{users.length}{users.length > 1 ? " typists online" : " typist online"}</p>
=======
      {/* <p className="number-online">{users.length} Typists Online</p> */}
      <p className="number-online">{users.length}{users.length > 1 ? " Typists Online" : " Typist Online"}</p>
>>>>>>> 2a8b7861a564e77e303e52581b78a25d91f3d094
      <div className="textContainer">
        {users.map(({ name }) => (
          <p key={name} className="each-online-user">
            <img className="onlineIcon" src="images/onlineIcon.png" alt="online icon" />
            {name}
          </p>
        ))}
      </div>
    </div>
  );
}