import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
      <form
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        style={{ borderStyle: `ridge`, borderRadius: `25px` }}
      >
        <h5>Lesson Booking Form</h5>
        <div style={{ padding: `5px`, textAlign: `left` }}>
          <FormGroup>
            <Label for="exampleEmail">Your Name:</Label>
            <Input type="text" name="email" id="exampleEmail" placeholder="First and Last" />
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail">Email:</Label>
            <Input type="email" name="email" id="exampleEmail" placeholder="" />
          </FormGroup>
          <FormGroup>
            <Label for="phone">Phone Number:</Label>
            <Input type="number" name="phone" id="phone" placeholder="" />
          </FormGroup>
          <FormGroup>
            <Label for="exampleSelect">Select a Lake for your Lesson</Label>
            <Input type="select" name="select" id="exampleSelect">
              <option> </option>
              <option>Lake Austin</option>
              <option>Lake Travis</option>
              <option>Lake LBJ</option>
              <option>Canyon Lake</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="meeting-time">Preffered lesson day and time:</Label>
            <Input 
              type="datetime-local"
              id="meeting-time"
              name="meeting-time"
              />
          </FormGroup>
          <FormGroup>
            <Label for="exampleSelect">Your current experience level:</Label>
            <Input type="select" name="select" id="exampleSelect">
              <option> </option>
              <option>1. Have never successfully stood up</option>
              <option>2. Can stand up, little or basic maneuvering</option>
              <option>3. Comfortable manurvering, ready for advanced practice</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="exampleText">Additional Notes</Label>
            <Input type="textarea" name="text" id="exampleText" placeholder="Any thing else we should know before your lesson?" />
          </FormGroup>
        </div>
        <Button onClick={this.toggle}>Submit</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader style={{ textAlign:`center`}} toggle={this.toggle}>Thank You</ModalHeader>
          <ModalBody>
          Thank you for contacting Limitless Wake. We are reviewing your submission and will get back to you as soon as possible.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Okay</Button>{' '}
          </ModalFooter>
        </Modal>
      </form>
    );
  }
}