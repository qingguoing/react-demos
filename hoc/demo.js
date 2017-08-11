/**
 * Created by qingguoing on 16/9/8.
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import HOC from './hoc1.js';
import './style.scss';

class Demo extends Component {
    render() {
        return (
            <div className="test1">
                {this.props.children}
            </div>
        )
    }
}

Demo.propTypes = {
    test: PropTypes.object
};

const Wrap = HOC(Demo);

ReactDOM.render(
    <Wrap hoc1="qingguoing" test="name">
        <h2>title</h2>
        <div>content content content</div>
    </Wrap>,
    document.getElementById('content')
);
