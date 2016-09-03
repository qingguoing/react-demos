import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Demo7 extends Component {
    handleClick() {
        this.input.focus();
    }

    render() {
        return(
            <div>
                <input type="text" ref={ref => this.input = ref} />
                <input type="button" value="Focus the text input" onClick={() => this.handleClick()} />
            </div>
        )
    }
}

ReactDOM.render(<Demo7 />, document.getElementById('content'))
