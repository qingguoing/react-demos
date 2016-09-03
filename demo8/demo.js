import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Demo8 extends Component {
    constructor() {
        super();
        this.state = {
            like: true
        };
    }

    handleClick() {
        this.setState({
            like: !this.state.like
        });
    }

    render() {
        const text = this.state.like ? 'like' : 'haven\'t liked';
        return (
          <p onClick={()=>this.handleClick()}>
            You {text} this. Click to toggle.
          </p>
        );
    }
}

ReactDOM.render(<Demo8 />, document.getElementById('content'))
