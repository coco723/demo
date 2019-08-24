import React from 'react';
import ReactDOM from 'react-dom';
import 'demo/style/component.css';// eslint-disable-line
import Block from 'demo/src'; // eslint-disable-line

ReactDOM.render(
  <div className="component-template">
    <Block />
  </div>,
  document.getElementById('example'),
);
