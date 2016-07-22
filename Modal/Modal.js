import React, { Component, PropTypes } from 'react'

const defaultProps = {
    show: false,
    title: '',
    content: '',
    zIndex: 1000,
    onOk: () => {},
    onCancel: () => {},
}

const propTypes = {
    title: PropTypes.string,
    content: PropTypes.oneOf([
        PropTypes.element,
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.element)
    ]),
    zIndex: PropTypes.number,
    onOk: PropTypes.func,
    onCancel: PropTypes.func,
}

export default class Modal extends Component {
    constructor(props) {
        super(props)
        this.state = {show: props.show}
    }

    componentWillRecieveProps(nextProps) {
        this.setState({show: nextProps.show})
    }

    render() {
        const { title, zindex, onOk, onCancel } = this.props
        document.body.style = this.state.show ? 'overflow: hidden' : ''
        return (
            <div
                style={{
                    display: this.state.show ? null : 'none',
                }}
            >
                <div className="m-dialog-mask" style={{ zIndex: zindex - 1 }}></div>
                <div className="m-dialog" style={{ zIndex: zindex }}>
                    <div className="m-dialog-title">
                        <h4>{title}</h4>
                        <span className="btn">
                            <i className="iconfont" onClick={() => this.setState({ show: false })}>&#xf077;</i>
                        </span>
                    </div>
                    <div className="m-dialog-content">
                        {this.props.children}
                    </div>
                    <div className="m-dialog-foot">
                        <a href="#" className="m-dialog-btn" onClick={onCancel}>取消</a>
                        <a href="#" className="m-dialog-btn btns-ok" onClick={onOk}>确定</a>
                    </div>
                </div>
            </div>
        );
    }
}

Modal.defaultProps = defaultProps;
Modal.propTypes = propTypes;
