import React from 'react';
import './TextContainer.css';

const TextContainer = ({ users }) => (
  <div className="outermost-container">
    <p className="number-online">{users.length} typists online</p>
    <div className="textContainer">
      {users.map(({name}) => (
        <p key={name} className="each-online-user">
          <img className="onlineIcon" src="images/onlineIcon.png" alt="online icon" />
          {name}
        </p>
      ))}
    </div>
  </div>



  // <div className="textContainer">
  //   {
  //     users
  //       ? (
  //         <div>
  //           <p className="online-typists-heading">{users.length} typists online</p>
  //           <div className="activeContainer">
  //             <span>
  //               {users.map(({name}) => (
  //                 <span key={name} className="activeItem">
  //                   <img className="onlineIcon" src="images/onlineIcon.png" alt="online icon" />
  //                   {name}
  //                 </span>
  //               ))}
  //             </span>
  //           </div>
  //         </div>
  //       )
  //       : null
  //   }
  // </div>
);

export default TextContainer;