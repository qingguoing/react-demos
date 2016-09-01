import React from 'react';
import { render } from 'react-dom';

var arr = [
        <h1>Hello qingguoing!</h1>,
        <h2>React is awesome</h2>,
      ];

render(<div>{arr}</div>, document.getElementById('content'));
