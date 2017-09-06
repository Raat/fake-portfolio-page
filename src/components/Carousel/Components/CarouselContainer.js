import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';

/**
  setting for the slider
 */

const settings = {
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1,
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
