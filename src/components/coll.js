import React, { Component } from 'react';
import { Collapse } from 'reactstrap';
import './coll.css'

class FaqItem extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.props= props;
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
        <div color="primary" style={{ marginBottom: '1rem' }}><strong>{this.props.button}</strong></div>
        <Collapse isOpen={this.state.faqItemOpen}>
          <div className="container">
            <p className="collapse-content">{this.props.content}</p>
          </div>
        </Collapse>
      </div>
    );
  }
}

export default FaqItem;