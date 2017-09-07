import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';

const HeaderImg = styled.img`
  width: 66%;
  max-width: 900px;
  height: auto;
  position: absolute;
  left: 0px;
  top: 0px;
`;

const Container = styled(Row)`
  height: 826px;
  width: 100%;
  left: 0px;
  right: 0px;
  position: relative;
`;

const Heading = styled.h1`
  margin-top: 70px;
  text-align: right;
  color: #f4a0a0;
  font-size: 250px;
  @media (max-width: 1000px) {
    font-size: 140px;
    margin-bottom: 200px;
  }
  @media (max-width: 700px) {
    font-size: 100px;
  }
  @media (max-width: 400px) {
    font-size: 50px;
  }
`;

const P = styled.p`font-size: 16px;`;

/**
 * Big page header
 * @param {string} content   short introduction of the page
 * @param {string} headerImg url for the header img
 * @param {string} title     title of the page
 */

const BigHeader = ({ content, headerImg, title }) => (
  <Container>
    <HeaderImg src={headerImg} />
    <Row>
      <Col md={11} mdOffset={1}>
        <Heading>{title}</Heading>
      </Col>
    </Row>
    <Row>
      <Col md={3} mdOffset={8} className={'pull-right'}>
        <P>{content}</P>
      </Col>
    </Row>
  </Container>
);

BigHeader.propTypes = {
  content: PropTypes.string.isRequired,
  headerImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default BigHeader;
