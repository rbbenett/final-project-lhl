import React from 'react';

import './InfoBar.css';

const InfoBar = () => (
  <div className="infoBar">
    <div className="leftInnerContainer">
      <img className="onlineIcon" src="images/onlineIcon.png" alt="online icon" />
      <p className="title">Typecraft Live Chat</p>
    </div>
    <div className="rightInnerContainer">
      <a href="/">
        <img src="images/closeIcon.png" alt="close icon" />
        </a>
    </div>
  </div>
);

export default InfoBar;