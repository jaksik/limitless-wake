import React, { Component } from 'react';
import { Collapse } from 'reactstrap';

class FaqItem extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      one: false,
      data: this.props
    };
  }

  toggle() {
    this.setState(state => ({ one: !state.one }));
  }

  render() {
    return (
      <div className="faqItem" onClick={this.toggle}>
        <div color="primary" style={{ marginBottom: '1rem' }}><strong>{this.state.data.question}</strong></div>
        <Collapse isOpen={this.state.one}>
          <div className="container">
            <p>{this.state.data.answer}</p>
          </div>
        </Collapse>
      </div>
    );
  }
}

export default FaqItem;