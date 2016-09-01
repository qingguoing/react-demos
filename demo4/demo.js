import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class Demo4 extends Component {
    render() {
        return (
            <h1>Hello {this.props.name}</h1>
        )
    }
}

ReactDOM.render(<Demo4 name="qingguoing"/>, document.getElementById('content'))
