import React, { Component } from "react"
import './collapsible.css'

class Photography extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.toggle = this.toggle.bind(this);
        this.state = {
            open: false
        }
    }

    toggle() {
        this.setState(state => ({ open: !state.open }));
    }

    render() {
        return (
            <div className="collapsible collapseBox" onClick={this.toggle}>
                    <strong>{this.props.button}</strong>
                <div className={'content ' + (this.state.open ? 'active' : '')}>
                    <p>{this.props.content}</p>
                </div>
            </div>
        )
    }
}

export default Photography