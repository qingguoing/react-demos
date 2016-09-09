/**
 * Created by qingguoing on 16/9/9.
 */
import React, { Component } from 'react';

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            value: nextProps.value
        })
    }

    handleChange(e) {
        this.props.onChange(e.target.value)
    }

    plus() {
        const value = ++this.input.value
        this.props.onChange(value)
    }

    render() {
        return (
            <div>
                <input
                    value={this.state.value}
                    onChange={e => this.handleChange(e)}
                    ref={ref => this.input = ref}
                />
                <button onClick={() => this.plus()}>+</button>
            </div>
        )
    }
}