import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { Row, Col } from 'reactstrap';

export default class Lightbox extends Component {
  static propTypes = {
    carImages: PropTypes.array.isRequired,
  }

  render() {
    const { carImages } = this.props;
    return (
      <div>
        <Row>
        {carImages.map(image => (
            <Col xs="12" sm="6" md="4">
              <div style={{ maxWidth: `300px`, maxHeight: `300px`, margin: `10px` }}>
                <Img
                  key={image.node.childImageSharp.fluid.src}
                  fluid={image.node.childImageSharp.fluid}
                />
              </div>
            </Col>
        ))}
        </Row>
      </div>
    );
  }
}