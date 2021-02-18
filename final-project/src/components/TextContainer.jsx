import React from 'react';
import './TextContainer.css';

const TextContainer = ({ users }) => (
  <div className="textContainer">
    {
      users
        ? (
          <div>
            <p className="online-typists-heading">{users.length} typists online</p>
            <div className="activeContainer">
              <p>
                {users.map(({name}) => (
                  <div key={name} className="activeItem">
                    <img className="onlineIcon" src="images/onlineIcon.png" alt="online icon" />
                    {name}
                  </div>
                ))}
              </p>
            </div>
          </div>
        )
        : null
    }
  </div>
);

export default TextContainer;