import Modal from './modal'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './style.scss'

export default class extends Component {
    appendMaskIntoDoc() {
        ReactDOM.unstable_renderSubtreeIntoContainer(
            this,
            <Modal {...this.props}>
                {this.props.children}
            </Modal>,
            this.container
        )
    }

    componentDidMount() {
        this.container = document.createElement('div')
        document.body.appendChild(this.container)
        this.appendMaskIntoDoc()
    }

    componentDidUpdate() {
        this.appendMaskIntoDoc()
    }

    componentWillUnmount() {
        document.body.removeChild(this.container)
    }

    render() {
        return null
    }
}
