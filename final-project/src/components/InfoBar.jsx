import React from 'react';
import './InfoBar.css';

export default function InfoBar() {
  return (
    <div className="infoBar">
      <div className="leftInnerContainer">
        <img className="onlineIcon" src="images/onlineIcon.png" alt="online icon" />
        <p className="title">TypeCraft Live Chat</p>
      </div>
    </div>
  );
}