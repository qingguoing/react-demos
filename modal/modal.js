import React, { Component, PropTypes } from 'react'

const defaultProps = {
    show: false,
    title: '',
    zIndex: 1000,
    onOk: () => {},
    onCancel: () => {},
}

const propTypes = {
    title: PropTypes.string,
    zIndex: PropTypes.number,
    onOk: PropTypes.func,
    onCancel: PropTypes.func,
}

export default class Modal extends Component {
    constructor(props) {
        super(props)
        this.state = {show: props.show}
    }

    componentWillReceiveProps(nextProps) {
        this.setState({show: nextProps.show})
    }

    render() {
        const { title, zIndex, onOk, onCancel } = this.props
        document.body.style = this.state.show ? 'overflow: hidden' : ''
        return (
            <div
                style={{
                    display: this.state.show ? null : 'none',
                }}
            >
                <div className="m-mask" style={{ zIndex: zIndex - 1 }}></div>
                <div className="m-dialog" style={{ zIndex: zIndex }}>
                    <div className="md-dialog">
                        <div className="md-dialog-title">
                            <h4>{title}</h4>
                            <span className="btn">
                                <i className="iconfont" onClick={() => this.setState({ show: false })}>&times;</i>
                            </span>
                        </div>
                        <div className="md-dialog-content">
                            {this.props.children}
                        </div>
                        <div className="md-dialog-foot">
                            <a href="#" className="btns" onClick={onCancel.bind(this)}>取消</a>
                            <a href="#" className="btns btns-blue" onClick={onOk.bind(this)}>确定</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Modal.defaultProps = defaultProps
Modal.propTypes = propTypes
