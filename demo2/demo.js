import React, { Component } from 'react';
import { render } from 'react-dom';

const names = ['Alice', 'Emily', 'Kate'];

render(
    <div>{
        names.map((name, i) => {
            return <div>Hello, {name}!</div>
        })
    }</div>,
    document.getElementById('content')
);
