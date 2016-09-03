import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class Demo9 extends Component {
    constructor() {
        super()
        this.state = {
            value: 'hello'
        }
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        })
    }

    render() {
        const value = this.state.value;
        return (
            <div>
                <input type="text" value={value} onChange={e=>this.handleChange(e)} />
                <p>{value}</p>
            </div>
        );
    }
}

ReactDOM.render(<Demo9 />, document.getElementById('content'))
