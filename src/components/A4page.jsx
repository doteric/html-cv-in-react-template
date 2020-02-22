import React from 'react';
import './A4page.css';

const A4page = (props) => {
  return (
    <div className="page">
      {props.children}
    </div>
  )
};

export default A4page;
