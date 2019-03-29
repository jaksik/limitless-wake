import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
      <Form
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        style={{ borderStyle: `ridge`, borderRadius: `25px` }}
      >
        <h5>Evaluation Form</h5>
        <div style={{ padding: `5px`, textAlign: `left` }}>
          <FormGroup>
            <Label for="exampleEmail">Your Name:</Label>
            <Input type="email" name="email" id="exampleEmail" placeholder="First and Last" />
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
            <Input type="datetime-local"
              id="meeting-time"
              name="meeting-time" value=""
              min="2019-01-03T00:00"
              max="2020-31-31T00:00" />
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
        <Button>Submit</Button>
      </Form>
    );
  }
}