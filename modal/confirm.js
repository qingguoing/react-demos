import Dialog from './'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

let that = null
const container = document.createElement('div')
document.body.appendChild(container)

class ConfirmReact extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
            title: '',
            content: '',
            onOk: () => {},
            onCancel: () => {},
            zIndex: 1000,
        }
        that = this
    }

    componentWillUnmount() {
        document.removeChild(container)
    }

    render() {
        const { show, title, content, onOk, onCancel, zIndex } = this.state
        return (
            <Dialog
                show={show}
                title={title}
                onOk={onOk}
                onCancel={onCancel}
                zIndex={zIndex}
            >
                {content}
            </Dialog>
        )
    }
}

ReactDOM.render(<ConfirmReact />, container)

function transFn(fn) {
  const regExp = /new\s+Promise/g;
  const str = fn.toString();

  return regExp.test(str) ?
        () => fn().then(() => that.setState({ show: false }))
        : () => { fn(); that.setState({ show: false }); return null; };
}

export default function Confirm({
  title,
  content,
  onOk,
  onCancel,
  zIndex = 1000,
}) {
  that.setState({
    show: true,
    title: title,
    content: content,
    onOk: transFn(onOk),
    onCancel: transFn(onCancel),
    zIndex: 1000,
  });
}
