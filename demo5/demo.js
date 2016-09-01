import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Demo5 extends Component {
    render() {
        return (
            <ol>
              {
                this.props.children.map((child, i)=>{
                    return <li key={i}>{child}</li>;
                })
              }
            </ol>
        )
    }
}

ReactDOM.render(
    <Demo5>
        <span>Hello</span>
        <span>qingguoing</span>
    </Demo5>,
    document.getElementById('content')
)
