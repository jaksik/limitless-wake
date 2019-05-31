import React from 'react';
import { Button } from 'reactstrap';
import "./style.css"

export default class BookButton extends React.Component {

    contactPage() {
        console.log("clicked")
        window.location.href="/contact"
    }

    render() {
        return (
            <div>
                <Button color="primary" size="lg" style={{width: `55%`, margin: `0px auto` }} block onClick={() => this.contactPage()} id="cover-button">Book A Lesson</Button>
            </div>
        );
    }
}