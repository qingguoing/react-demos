import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Demo10 extends Component {
    constructor() {
        super();
        this.state = {
            opacity: 1.0
        }
        this.interval = null;
    }

    componentDidMount() {
        this.interval = setInterval(()=> {
            let opacity = this.state.opacity
            opacity -= 0.05
            if (opacity < 0.1) {
                opacity = 1.0
            }
            this.setState({
                opacity
            })
        }, 100)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render() {
        return (
            <div style={{opacity: this.state.opacity}}>
                <p>Hello {this.props.name}</p>
            </div>
        )
    }
}

ReactDOM.render(<Demo10 name='qingguoing' />, document.getElementById('content'))
