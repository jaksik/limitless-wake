import React, { Component } from 'react';
import { Collapse } from 'reactstrap';

class FaqItem extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      faqItemOpen: false,
      data: this.props
    };
  }

  toggle() {
    this.setState(state => ({ faqItemOpen: !state.faqItemOpen }));
  }

  render() {
    return (
      <div className="faqItem" onClick={this.toggle}>
        <div color="primary" style={{ marginBottom: '1rem' }}><strong>{this.state.data.question}</strong></div>
        <Collapse isOpen={this.state.faqItemOpen}>
          <div className="container">
            <p>{this.state.data.answer}</p>
          </div>
        </Collapse>
      </div>
    );
  }
}

export default FaqItem;