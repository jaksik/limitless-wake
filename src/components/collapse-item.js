import React, { Component } from "react"
import './collapsible.css'

class Photography extends Component {
    constructor(props) {
        super(props);
        this.props = this.props;
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
            <div>
                <div>
                    <button className="collapsible" onClick={this.toggle}>{this.props.button}</button>
                    {/* <div className={(this.state.open ? 'change' : '')}>
                        <div className="bar1"></div>
                        <div className="bar2"></div>
                    </div> */}
                </div>
                <div className={'content ' + (this.state.open ? 'active' : '')}>
                    <p>{this.props.content}</p>
                </div>
            </div>
        )
    }
}

export default Photography