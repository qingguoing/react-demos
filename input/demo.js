/**
 * Created by qingguoing on 16/9/8.
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Input from './input.js';
class Demo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: props.value
        }
    }

    onChange(value) {
        value = value.toString().replace(/\D/g, '');
        value = value > 100 ? 100 : value;
        this.setState({
            value,
        })
    }

    render() {
        return (
            <Input value={this.state.value} onChange={val => this.onChange(val)}/>
        )
    }
}
ReactDOM.render(<Demo value='99'/>, document.getElementById('content'))