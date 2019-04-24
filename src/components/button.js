import React from 'react';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Example extends React.Component {

    contactPage() {
        console.log("clicked")
        window.location.href="/contact"
    }

    render() {
        return (
            <div>
                <Button color="primary" size="lg" style={{width: `55%`, margin: `0px auto` }} block onClick={() => this.contactPage()}>Book A Lesson</Button>
            </div>
        );
    }
}