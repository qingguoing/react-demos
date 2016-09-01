import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'

const propTypes = {
    title: PropTypes.string.isRequired,
}

class Demo6 extends Component {
    render() {
        return <h1> {this.props.title} </h1>;
    }
}

Demo6.propTypes = propTypes;
ReactDOM.render(<Demo6 title={123}/>, document.getElementById('content'))
