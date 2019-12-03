import React, { Component } from "react"
import Img from 'gatsby-image'
import "./style.css"

class ScrollAnimate extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.handleScroll = this.handleScroll.bind(this);
        this.state = {
            animate: null,
        }
    }

    componentDidMount() {
        console.log("Scrolling")

        window.addEventListener('scroll', e => this.handleScroll(e));
    }

    handleScroll = (e) => {
        this.state.animate = this.refs.animate
        let xPosition = (String(e.currentTarget.scrollY / 7) + "px")
        if (this.state.animate) {
            this.state.animate.style.right = xPosition
        }
    }

    render() {

        return (
            <div style={{ position: `relative` }} >
                <div className="cover-wrapper">
                    <Img fluid={this.props.data.coverImage.childImageSharp.fluid} style={{ position: `absolute`, width: `100%`, height: `100%`, zIndex: `1` }} />
                    <div className="cover-container">
                        <h1 className="cover-title">Learn<br />To<br />Ride</h1>
                        <br/>
                        <p className="cover-subtitle">Wakeboard and Wakesuft lessons by Chandler Crouch in Austin, Texas.</p>
                    </div>
                    <div className="wave animate" ref="animate"></div>
                </div>
            </div>
        )
    }
}

export default ScrollAnimate;