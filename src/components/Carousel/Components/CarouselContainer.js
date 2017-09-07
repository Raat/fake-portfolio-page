import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';

/**
  setting for the slider
 */

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 1,
  centerMode: true,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
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
