import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Dialog from '../modal/'
import Confirm from '../modal/confirm'

class ModalDemo extends Component {
    constructor(props) {
        super(props)
        this.state = { show: false }
    }

    onOk() {
        console.log('ok')
        this.setState({ show:false })
    }

    onCancel() {
        console.log('cancel')
        this.setState({ show:false })
    }

    render() {
        return (
            <div>
                <input type="button" value="demo1" className="demo" onClick={()=>this.setState({show:true})}/>
                <Dialog show={this.state.show} title="title" onOk={()=>{console.log('ok'); this.setState({show: false})}} onCancel={this.onCancel}>
                    <p>看我随手一打就是标准十五字</p>
                    <p>看我随手一打就是标准十五字</p>
                    <p>看我随手一打就是标准十五字</p>
                </Dialog>
            </div>
        )
    }
}

ReactDOM.render(<ModalDemo />, document.getElementById('content'))

document.getElementById('demo-btn').addEventListener('click', function() {
    Confirm({
        title: 'confirm title',
        content: <p>看我随手一打又是十五字</p>,
        onOk() {
            return new Promise(resolve => setTimeout(resolve, 1000))
        },
        onCancel() {}
    })
}, false)
