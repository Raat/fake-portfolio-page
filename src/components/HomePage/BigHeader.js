import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';

const HeaderImg = styled.div`
  width: 66%;
  max-width: 900px;
  min-height: 480px;
  height: auto;
  position: absolute;
  left: -15px;
  top: 0px;
  background-image: url(${({ desktop }) => desktop});
  @media (max-width: 700px) {
    background-image: url(${({ mobile }) => mobile});
    background-repeat: no-repeat;
    background-position: right;
    right: -15px;
    width: 100%;
    left: auto;
  }
`;

const Wrapper = styled.div`
  height: 750px;
  width: 100%;
  margin-bottom: 20px;
  left: 0px;
  right: 0px;
  position: relative;
`;

const Heading = styled.h1`
  margin-top: 150px;
  text-align: right;
  color: #f4a0a0;
  font-size: 250px;
  @media (max-width: 1000px) {
    font-size: 140px;
    margin-bottom: 200px;
  }
  @media (max-width: 700px) {
    font-size: 100px;
    margin-bottom: 250px;
  }
`;

const P = styled.p`font-size: 16px;`;

/**
 * Big page header
 * @param {string} content   short introduction of the page
 * @param {string} headerImg url for the header img
 * @param {string} title     title of the page
 */

const BigHeader = ({ content, headerImgDesktop, headerImgMobile, title }) => (
  <Wrapper>
    <HeaderImg desktop={headerImgDesktop} mobile={headerImgMobile} />
    <Row>
      <Col md={10} mdOffset={1}>
        <Heading>{title}</Heading>
      </Col>
    </Row>
    <Row>
      <Col md={3} mdOffset={8}>
        <P>{content}</P>
      </Col>
    </Row>
  </Wrapper>
);

BigHeader.propTypes = {
  content: PropTypes.string.isRequired,
  headerImgDesktop: PropTypes.string.isRequired,
  headerImgMobile: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default BigHeader;
