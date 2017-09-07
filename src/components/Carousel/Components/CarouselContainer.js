import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';

/**
  setting for the slider
 */

const settings = {
  className: 'center',
  centerMode: true,
  infinite: false,
  centerPadding: '60px',
  slidesToShow: 4,
  speed: 500,
};

/**
 * CarouselContainer
 * @param {element} children CarouselItem
*/

const CarouselContainer = ({ children }) => <Slider {...settings}>{children}</Slider>;

CarouselContainer.propTypes = {
  /**
 * List of CarouselItems
 * @type {node}
 */
  children: PropTypes.node.isRequired,
};

export default CarouselContainer;
