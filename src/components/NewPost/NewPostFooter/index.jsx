import React from 'react';
import './style.css';
const Footer = () => (
  <div>
  <div className="newPostFooter">

    <div className="foodOptions1">
      <input type="checkbox" name="check"/>
      <label className="foodOptionsName">Halal</label>
    </div>
    <div className="foodOptions2">
      <input type="checkbox" name="check1"/>
      <label className="foodOptionsName">Kosher</label>
    </div>
    <div className="foodOptions3">
      <input type="checkbox" label="asdsad" name="check2"/>
      <label className="foodOptionsName">Vegan</label>
    </div>
  </div>
  </div>
);

export default Footer;
