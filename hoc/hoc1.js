import React, { Component } from 'react';
export default (WrappedComp) => {
    class Wrap extends Component {
        constructor(props) {
            super(props);
            this.timer = null;
        }

        componentWillMount() {
            this.timer = setInterval(() => console.log(this.props.hoc1), 1000);
        }

        componentWillUnMount() {
            if (this.timer) {
                clearInterval(this.timer);
                this.timer = null;
            }
        }

        render() {
            return <WrappedComp {...this.props} />;
        }
    }
    return Wrap;
}
